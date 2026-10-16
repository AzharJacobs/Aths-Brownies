import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cake, Package } from 'lucide-react';
import { brownies } from './types';
import { business, bulkTiers, sendUrl, instagramUrl } from './config';
import Reveal from './Reveal';

export default function EnquiryPage() {
  const [type, setType] = useState<'Custom' | 'Bulk'>('Custom');
  const [f, setF] = useState({ name: '', phone: '', email: '', date: '', qty: '', flavours: '', details: '' });
  const [sent, setSent] = useState<string | null | false>(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Type: ${type} order\nName: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email || '-'}\nDate needed: ${f.date}\nQuantity: ${f.qty}\nFlavours: ${f.flavours || '-'}\n\nDetails:\n${f.details}`;
    const url = sendUrl(`${type} order enquiry from ${f.name}`, body);
    setSent(url);
    if (url) window.open(url, '_blank', 'noopener');
  };

  if (sent !== false) {
    return (
      <div className="max-w-xl mx-auto px-6 py-28 text-center">
        <h1 className="font-serif text-3xl text-stone-900 mb-4">Enquiry ready to send</h1>
        <p className="text-stone-600 font-light mb-8">
          {sent ? 'Send the pre-filled message to reach us. ' : `Message us on Instagram (@${business.instagram}) with your details. `}
          We will reply with a quote. There is no obligation and no payment is taken now.
        </p>
        <div className="flex gap-3 justify-center">
          {sent ? <a href={sent} target="_blank" rel="noopener noreferrer" className="btn-primary">Open message again</a> : <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Open Instagram</a>}
          <Link to="/" className="btn-ghost">Back home</Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { k: 'Custom' as const, icon: Cake, title: 'Custom order', text: 'Special occasions, gifts, personalised designs.' },
    { k: 'Bulk' as const, icon: Package, title: 'Bulk order', text: `${business.bulkMinimum}+ brownies for events, offices or resale.` },
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-4">Custom & bulk orders</h1>
        <p className="text-stone-600 font-light">Tell us what you need and we will send a personal quote. Free, with no obligation.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {tabs.map(t => (
          <button key={t.k} type="button" onClick={() => setType(t.k)}
            className={`text-left rounded-2xl border p-5 transition-all duration-300 ${type === t.k ? 'border-purple-600 bg-purple-50 shadow-[0_0_30px_-6px_rgba(168,85,247,0.5)]' : 'border-stone-200 bg-white hover:border-purple-300'}`}>
            <t.icon className="h-6 w-6 text-purple-700 mb-3" />
            <p className="text-stone-900">{t.title}</p>
            <p className="text-sm text-stone-500 font-light">{t.text}</p>
          </button>
        ))}
      </div>

      {type === 'Bulk' && (
        <Reveal>
          <div className="mb-10">
            <p className="text-xs tracking-[0.25em] uppercase text-stone-500 text-center mb-4">Volume pricing</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {bulkTiers.map(t => (
                <button key={t.qty} type="button" onClick={() => setF({ ...f, qty: String(t.qty) })}
                  className={`relative text-center rounded-2xl border bg-white p-5 glow-card ${f.qty === String(t.qty) ? 'border-purple-600 shadow-[0_0_30px_-4px_rgba(168,85,247,0.5)]' : 'border-stone-200'}`}>
                  {t.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-[10px] tracking-widest uppercase px-3 py-1 rounded-full">Popular</span>}
                  <p className="font-serif text-3xl text-stone-900">{t.qty}+</p>
                  <p className="text-sm text-purple-700 mt-1">{t.discount}% off</p>
                  <p className="text-xs text-stone-500 font-light mt-2">{t.label}: {t.note}</p>
                </button>
              ))}
            </div>
            <p className="text-xs text-stone-500 text-center mt-3">Indicative discounts on menu prices. Your final quote is confirmed by us.</p>
          </div>
        </Reveal>
      )}

      <form onSubmit={submit} className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <input required className="field" placeholder="Full name" value={f.name} onChange={set('name')} />
          <input required type="tel" className="field" placeholder="Phone / WhatsApp" value={f.phone} onChange={set('phone')} />
        </div>
        <input type="email" className="field" placeholder="Email (optional)" value={f.email} onChange={set('email')} />
        <div className="grid sm:grid-cols-2 gap-5">
          <input required type="number" min={type === 'Bulk' ? business.bulkMinimum : 1} className="field" placeholder={type === 'Bulk' ? `Quantity (min ${business.bulkMinimum})` : 'Approx. quantity'} value={f.qty} onChange={set('qty')} />
          <input required type="date" className="field" value={f.date} onChange={set('date')} />
        </div>
        <input list="flavours" className="field" placeholder="Preferred flavours" value={f.flavours} onChange={set('flavours')} />
        <datalist id="flavours">{brownies.map(b => <option key={b.name} value={b.name} />)}</datalist>
        <textarea required rows={5} className="field resize-none" placeholder={type === 'Custom' ? 'Occasion, colours, message, packaging, allergies…' : 'Event or business, delivery area, packaging needs, allergies…'} value={f.details} onChange={set('details')} />
        <button className="btn-primary w-full">Send enquiry</button>
        <p className="text-xs text-stone-500 text-center">We never ask for card details here. Payment is arranged only after you accept our quote.</p>
      </form>
    </div>
  );
}
