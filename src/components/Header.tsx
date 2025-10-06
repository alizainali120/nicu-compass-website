import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavigationItem } from '../types'

interface HeaderProps {
  navigationItems: NavigationItem[]
}

const Header: React.FC<HeaderProps> = ({ navigationItems }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              NICU Compass
            </div>
            <div className="ml-3 px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
              For Parents
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map(item => (
              <a
                key={item.id}
                href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
            aria-label="Toggle menu"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4 space-y-1">
            {navigationItems.map(item => (
              <a
                key={item.id}
                href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header