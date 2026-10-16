import { Link } from 'react-router-dom';
import { ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';
import { brownies, priceOf } from './types';
import { useCart } from './cart';
import { business } from './config';

export default function OrderPage() {
  const { items, add, setQty, remove, subtotal } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="font-serif text-4xl lg:text-5xl text-stone-900 mb-4">Menu & Order</h1>
        <p className="text-stone-600 font-light">{business.leadTime} Need 20+ or something custom? <Link to="/enquiry" className="text-purple-700 underline underline-offset-4">Request a quote</Link>.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {brownies.map(b => (
            <div key={b.name} className="bg-white rounded-3xl border border-stone-200 overflow-hidden transition duration-300 hover:shadow-xl hover:shadow-stone-200/70">
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <img src={b.image} alt={b.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl text-stone-900">{b.name}</h3>
                  <span className="text-purple-700">{b.price}</span>
                </div>
                <p className="text-sm text-stone-500 font-light mb-5">{b.description}</p>
                <button onClick={() => add(b)} className="btn-primary w-full">Add to order</button>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:col-span-1">
          <div className="bg-white rounded-3xl border border-stone-200 p-6 lg:sticky lg:top-28">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl text-stone-900">Your order</h2>
              <ShoppingBag className="h-5 w-5 text-purple-700" />
            </div>
            {items.length === 0 ? (
              <p className="text-stone-500 font-light text-center py-8">Nothing added yet.</p>
            ) : (
              <>
                <ul className="space-y-4 mb-6">
                  {items.map(i => (
                    <li key={i.name} className="flex items-center gap-3">
                      <img src={i.image} alt="" className="w-14 h-14 rounded-xl object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-stone-900 truncate">{i.name}</p>
                        <p className="text-sm text-purple-700">R{(priceOf(i) * i.quantity).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2 text-stone-500">
                        <button aria-label="Decrease" onClick={() => setQty(i.name, i.quantity - 1)} className="p-1 hover:text-purple-700"><Minus className="h-4 w-4" /></button>
                        <span className="w-5 text-center text-sm text-stone-900">{i.quantity}</span>
                        <button aria-label="Increase" onClick={() => setQty(i.name, i.quantity + 1)} className="p-1 hover:text-purple-700"><Plus className="h-4 w-4" /></button>
                        <button aria-label="Remove" onClick={() => remove(i.name)} className="p-1 hover:text-red-600"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-stone-200 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between text-stone-600"><span>Subtotal</span><span>R{subtotal.toFixed(2)}</span></div>
                  <div className="flex justify-between text-stone-600"><span>Delivery (if chosen)</span><span>R{business.deliveryFee.toFixed(2)}</span></div>
                </div>
                <Link to="/checkout" className="btn-primary w-full mt-6">Continue</Link>
                <p className="text-xs text-stone-500 text-center mt-3">No payment is taken now. We confirm your order first.</p>
              </>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
