import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { useCart } from './cart';
import { business, sendUrl, instagramUrl } from './config';
import { priceOf } from './types';

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [f, setF] = useState({ name: '', phone: '', email: '', method: 'collect', address: '', date: '', notes: '' });
  const [sent, setSent] = useState<string | null | false>(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  const delivery = f.method === 'deliver' ? business.deliveryFee : 0;
  const total = subtotal + delivery;

  if (items.length === 0 && sent === false) {
    return (
      <div className="max-w-xl mx-auto px-6 py-28 text-center">
        <h1 className="font-serif text-3xl text-stone-900 mb-4">Your order is empty</h1>
        <Link to="/order" className="btn-primary">Browse the menu</Link>
      </div>
    );
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = items.map(i => `- ${i.quantity} x ${i.name} (R${(priceOf(i) * i.quantity).toFixed(2)})`).join('\n');
    const body = `Name: ${f.name}\nPhone: ${f.phone}\nEmail: ${f.email}\n${f.method === 'deliver' ? `Delivery to: ${f.address}` : 'Collection'}\nDate wanted: ${f.date}\n\n${lines}\n\nTotal: R${total.toFixed(2)}\nNotes: ${f.notes || '-'}`;
    const url = sendUrl(`Order request from ${f.name}`, body);
    setSent(url);
    if (url) window.open(url, '_blank', 'noopener');
    clear();
  };

  if (sent !== false) {
    return (
      <div className="max-w-xl mx-auto px-6 py-28 text-center">
        <h1 className="font-serif text-3xl text-stone-900 mb-4">Thank you, order request ready</h1>
        <p className="text-stone-600 font-light mb-8">
          {sent ? 'Send the pre-filled message to complete your request. ' : `Message us on Instagram (@${business.instagram}) with your order details. `}
          We will reply to confirm availability, price and payment details. Nothing has been charged.
        </p>
        <div className="flex gap-3 justify-center">
          {sent ? <a href={sent} target="_blank" rel="noopener noreferrer" className="btn-primary">Open message again</a> : <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Open Instagram</a>}
          <Link to="/" className="btn-ghost">Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl text-stone-900 mb-2">Request your order</h1>
      <p className="text-stone-600 font-light mb-10">We confirm every order personally before any payment is requested.</p>
      <form onSubmit={submit} className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input required className="field" placeholder="Full name" value={f.name} onChange={set('name')} />
            <input required type="tel" className="field" placeholder="Phone / WhatsApp" value={f.phone} onChange={set('phone')} />
          </div>
          <input type="email" className="field" placeholder="Email (optional)" value={f.email} onChange={set('email')} />
          <div className="grid sm:grid-cols-2 gap-5">
            <select className="field" value={f.method} onChange={set('method')}>
              <option value="collect">Collection</option>
              <option value="deliver">Delivery (R{business.deliveryFee})</option>
            </select>
            <input required type="date" className="field" value={f.date} onChange={set('date')} min={new Date(Date.now() + 2 * 864e5).toISOString().slice(0, 10)} />
          </div>
          {f.method === 'deliver' && <input required className="field" placeholder="Delivery address" value={f.address} onChange={set('address')} />}
          <textarea rows={4} className="field resize-none" placeholder="Notes, allergies or special requests" value={f.notes} onChange={set('notes')} />
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl border border-stone-200 p-6 lg:sticky lg:top-28">
            <h2 className="font-serif text-2xl text-stone-900 mb-5">Summary</h2>
            <ul className="space-y-3 mb-5 text-sm">
              {items.map(i => (
                <li key={i.name} className="flex justify-between text-stone-700"><span>{i.quantity} × {i.name}</span><span>R{(priceOf(i) * i.quantity).toFixed(2)}</span></li>
              ))}
            </ul>
            <div className="border-t border-stone-200 pt-4 space-y-2 text-sm text-stone-600">
              <div className="flex justify-between"><span>Subtotal</span><span>R{subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Delivery</span><span>R{delivery.toFixed(2)}</span></div>
              <div className="flex justify-between text-base text-stone-900 pt-2"><span>Estimated total</span><span className="text-purple-700">R{total.toFixed(2)}</span></div>
            </div>
            <button className="btn-primary w-full mt-6">Send order request</button>
            <p className="flex items-start gap-2 text-xs text-stone-500 mt-4"><ShieldCheck className="h-4 w-4 shrink-0 text-purple-700" /> No card details are collected on this site. Payment details are shared only after we confirm your order.</p>
          </div>
        </div>
      </form>
    </div>
  );
}
