import { useEffect, useState, ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Instagram, Mail, MessageCircle } from 'lucide-react';
import { useCart } from './cart';
import { business, instagramUrl } from './config';

const links = [
  { to: '/', label: 'Home' },
  { to: '/order', label: 'Menu & Order' },
  { to: '/enquiry', label: 'Custom & Bulk' },
];

export default function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setOpen(false);
    if (hash) {
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wide transition-colors ${isActive ? 'text-purple-700' : 'text-stone-600 hover:text-purple-700'}`;

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800 antialiased">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-stone-200/70">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/1000347804.jpg" alt="" className="w-11 h-11 rounded-full object-cover ring-1 ring-stone-200" />
            <span className="font-serif text-2xl text-stone-900">{business.name}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-9">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end className={linkCls}>{l.label}</NavLink>
            ))}
            <Link to="/#contact" className="text-sm tracking-wide text-stone-600 hover:text-purple-700 transition-colors">Contact</Link>
            <Link to="/order" className="relative flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white text-sm px-5 py-2.5 rounded-full transition-colors">
              <ShoppingBag className="h-4 w-4" /> Cart
              {count > 0 && <span className="bg-white text-purple-700 text-xs font-medium rounded-full h-5 min-w-5 px-1 flex items-center justify-center">{count}</span>}
            </Link>
          </nav>
          <button className="md:hidden p-2 text-stone-700" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-stone-200 bg-white px-6 py-4 space-y-1">
            {links.map(l => (
              <Link key={l.to} to={l.to} className="block py-3 text-stone-700">{l.label}</Link>
            ))}
            <Link to="/#contact" className="block py-3 text-stone-700">Contact</Link>
            <Link to="/order" className="block text-center bg-purple-700 text-white py-3 rounded-full mt-3">Cart{count > 0 ? ` (${count})` : ''}</Link>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-stone-900 text-stone-300">
        <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-white mb-3">{business.name}</p>
            <p className="text-sm leading-relaxed text-stone-400">Small-batch brownies, baked fresh to order. Single boxes, custom designs and bulk orders.</p>
          </div>
          <div>
            <p className="text-white text-sm tracking-widest uppercase mb-4">Explore</p>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-white" to="/order">Menu & Order</Link></li>
              <li><Link className="hover:text-white" to="/enquiry">Custom & Bulk Orders</Link></li>
              <li><Link className="hover:text-white" to="/#how">How ordering works</Link></li>
              <li><Link className="hover:text-white" to="/#faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white text-sm tracking-widest uppercase mb-4">Get in touch</p>
            <ul className="space-y-2 text-sm">
              <li><a className="flex items-center gap-2 hover:text-white" href={instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram className="h-4 w-4" /> @{business.instagram}</a></li>
              {business.email && <li><a className="flex items-center gap-2 hover:text-white" href={`mailto:${business.email}`}><Mail className="h-4 w-4" /> {business.email}</a></li>}
              {business.whatsapp && <li><a className="flex items-center gap-2 hover:text-white" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp us</a></li>}
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 py-6 text-center text-xs text-stone-500">© {new Date().getFullYear()} {business.name}. All rights reserved.</div>
      </footer>
    </div>
  );
}
