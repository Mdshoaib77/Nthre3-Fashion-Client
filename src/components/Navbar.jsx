import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
    { path: '/', title: 'Home' },
    { path: '/collection', title: 'Collection' },
    { path: '/testimonials', title: 'Testimonials' },
    { path: '/contact', title: 'Contact' },
]

/**
 * variant="desktop" -> refined uppercase links with an animated underline
 * variant="drawer"  -> large serif links used inside the mobile menu
 */
const Navbar = ({ containerStyles = '', variant = 'desktop', onNavigate }) => {
    return (
        <nav className={containerStyles} aria-label="Main navigation">
            {navLinks.map((link, i) => (
                <NavLink
                    key={link.title}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                        `${variant === 'drawer' ? 'drawer-link' : 'nav-item'} ${isActive ? 'is-active' : ''}`
                    }
                >
                    {variant === 'drawer' && <small>0{i + 1}</small>}
                    {link.title}
                </NavLink>
            ))}
        </nav>
    )
}

export default Navbar
