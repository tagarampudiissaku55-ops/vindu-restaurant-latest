import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/menuData';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-charcoal/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-saffron/40 bg-ember/20 font-display text-lg font-black text-saffron">
            VR
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold">Vindu Restaurant</span>
            <span className="block text-xs text-white/58">{restaurantInfo.shortAddress}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-saffron text-charcoal' : 'text-white/72 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="hidden items-center gap-2 rounded-full bg-ember px-4 py-2 text-sm font-bold text-white shadow-glow sm:flex"
          >
            <Phone size={16} />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full border border-white/15 p-2 text-white md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-charcoal/95 px-4 py-4">
          <div className="space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive ? 'bg-saffron text-charcoal' : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <a
            href={`tel:${restaurantInfo.phone}`}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ember px-4 py-3 text-sm font-black text-white shadow-glow"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
