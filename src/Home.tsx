import { Link } from 'react-router-dom';
import { Cake, Package, ShoppingBag, ChefHat, Leaf, Truck, Instagram, Mail, MessageCircle, MapPin, Clock, ChevronDown } from 'lucide-react';
import { brownies } from './types';
import { business, instagramUrl } from './config';
import Reveal from './Reveal';

const services = [
  { icon: ShoppingBag, title: 'Regular Orders', text: 'Boxes of your favourite flavours, baked fresh and ready for collection or delivery.', to: '/order', cta: 'Order a box' },
  { icon: Cake, title: 'Custom Orders', text: 'Birthdays, weddings and gifts. Choose flavours, toppings, messages and packaging.', to: '/enquiry', cta: 'Request a custom order' },
  { icon: Package, title: 'Bulk Orders', text: `Events, offices and retail. Orders of ${business.bulkMinimum}+ with simple volume pricing.`, to: '/enquiry', cta: 'Get a bulk quote' },
];

const steps = [
  { n: '1', title: 'Choose or enquire', text: 'Pick from the menu, or tell us about a custom or bulk order.' },
  { n: '2', title: 'We confirm with you', text: 'We reply personally with availability, final price and delivery details.' },
  { n: '3', title: 'Pay once confirmed', text: 'Payment is only requested after we have confirmed your order. Never on this site.' },
  { n: '4', title: 'Baked fresh for you', text: 'Your order is baked to order and delivered or collected on your date.' },
];

const faqs = [
  ['How far ahead should I order?', business.leadTime + ' Custom and bulk orders may need more notice, so message us early.'],
  ['How do I pay?', 'We never take card details on this website. Once your order is confirmed we will send payment details directly (e.g. EFT), and you pay then.'],
  ['Do you do custom designs and messages?', 'Yes. Tell us the occasion, flavours and any message or colours and we will quote you.'],
  ['What is the minimum for a bulk order?', `Bulk pricing starts from ${business.bulkMinimum} brownies. Smaller orders can still be placed from the menu.`],
  ['Do you deliver?', `Yes, delivery is R${business.deliveryFee} for regular orders. Bulk and custom delivery is quoted when we confirm your order.`],
  ['Do you cater for allergies?', 'Our brownies contain gluten, eggs, dairy and may contain nuts. Tell us about any allergy and we will advise honestly.'],
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-stone-50 to-stone-50">
        <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
          <div className="text-center lg:text-left">
            <p className="text-xs tracking-[0.3em] uppercase text-purple-700 mb-6">Small-batch &middot; Baked to order</p>
            <h1 className="font-serif text-5xl lg:text-6xl text-stone-900 leading-[1.1] mb-6">Handcrafted brownies, made fresh for you.</h1>
            <p className="text-lg text-stone-600 font-light leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
              Rich, fudgy and baked in small batches. Order a box, design something custom, or place a bulk order for your next event.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link to="/order" className="btn-primary">Order now</Link>
              <Link to="/enquiry" className="btn-ghost">Custom & bulk orders</Link>
            </div>
          </div>
          <div className="relative">
            <div className="glow-pulse absolute -inset-6 bg-gradient-to-tr from-purple-400/40 to-fuchsia-300/30 rounded-[3rem] blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_0_60px_-10px_rgba(168,85,247,0.5)]">
              <img src="/Classic-Brownie.jpeg" alt="Freshly baked chocolate brownies" className="slow-zoom w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 grid sm:grid-cols-3 gap-6 text-sm text-stone-600">
          {[[ChefHat, 'Baked fresh to order'], [Leaf, 'Quality ingredients'], [Truck, 'Delivery or collection']].map(([Icon, t]) => {
            const I = Icon as typeof ChefHat;
            return (
              <div key={t as string} className="flex items-center justify-center gap-3"><I className="h-5 w-5 text-purple-700" />{t as string}</div>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl text-stone-900 mb-4">However you like your brownies</h2>
            <p className="text-stone-600 font-light max-w-xl mx-auto">Three simple ways to order, all baked by the same hands.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 120}>
              <div className="bg-white rounded-3xl border border-stone-200 p-8 flex flex-col h-full glow-card">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-6"><s.icon className="h-6 w-6" /></div>
                <h3 className="font-serif text-2xl text-stone-900 mb-3">{s.title}</h3>
                <p className="text-stone-600 font-light leading-relaxed mb-8 flex-1">{s.text}</p>
                <Link to={s.to} className="text-sm text-purple-700 hover:text-purple-900 transition-colors">{s.cta} &rarr;</Link>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl text-stone-900 mb-4">The collection</h2>
            <p className="text-stone-600 font-light">Six flavours, each baked in small batches.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {brownies.map((b, i) => (
              <Reveal key={b.name} delay={(i % 3) * 120}>
              <Link to="/order" className="group block">
                <div className="aspect-square overflow-hidden rounded-3xl bg-stone-100 transition duration-500 group-hover:shadow-[0_10px_40px_-8px_rgba(168,85,247,0.45)]">
                  <img src={b.image} alt={b.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex justify-between items-baseline mt-5 mb-1">
                  <h3 className="font-serif text-xl text-stone-900">{b.name}</h3>
                  <span className="text-purple-700">{b.price}</span>
                </div>
                <p className="text-sm text-stone-500 font-light">{b.description}</p>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl text-stone-900 mb-4">How ordering works</h2>
            <p className="text-stone-600 font-light">Simple, personal and no payment taken online.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120} className="text-center px-2">
              <div>
                <div className="w-12 h-12 mx-auto rounded-full border border-purple-300 text-purple-700 font-serif text-lg flex items-center justify-center mb-5 shadow-[0_0_18px_rgba(168,85,247,0.3)]">{s.n}</div>
                <h3 className="text-stone-900 mb-2">{s.title}</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">{s.text}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-purple-50/60">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <img src="/Walnut-Brownie.jpg" alt="Walnut brownies" loading="lazy" className="aspect-[4/3] w-full object-cover rounded-3xl shadow-xl shadow-stone-300/50" />
          <div>
            <h2 className="font-serif text-4xl text-stone-900 mb-6">A new local bakery, made with care</h2>
            <p className="text-stone-600 font-light leading-relaxed mb-5">
              Ath's Brownies is a brand-new, owner-run bakery. Every batch is baked by hand in small quantities, so each brownie is fresh when it reaches you.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              We are just getting started, which means you deal directly with the baker, from your first message to your final box.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-stone-900 text-center mb-12">Questions, answered</h2>
          <div className="divide-y divide-stone-200 border-y border-stone-200">
            {faqs.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="flex justify-between items-center cursor-pointer list-none text-stone-900">
                  {q}
                  <ChevronDown className="h-5 w-5 text-stone-400 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-stone-600 font-light leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-stone-900 mb-4">Get in touch</h2>
          <p className="text-stone-600 font-light mb-10">Questions about an order? Message us and we will reply personally.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Instagram className="h-4 w-4" /> @{business.instagram}</a>
            {business.whatsapp && <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-ghost"><MessageCircle className="h-4 w-4" /> WhatsApp</a>}
            {business.email && <a href={`mailto:${business.email}`} className="btn-ghost"><Mail className="h-4 w-4" /> {business.email}</a>}
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-stone-500">
            {business.area && <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />{business.area}</span>}
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{business.hours}</span>
          </div>
        </div>
      </section>
    </>
  );
}
