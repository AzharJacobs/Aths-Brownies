import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Brownie, priceOf } from './types';

export interface CartItem extends Brownie {
  quantity: number;
}

interface CartCtx {
  items: CartItem[];
  add: (b: Brownie) => void;
  setQty: (name: string, qty: number) => void;
  remove: (name: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
}

const Ctx = createContext<CartCtx | null>(null);
const KEY = 'aths-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY) || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable */
    }
  }, [items]);

  const add = (b: Brownie) =>
    setItems(prev =>
      prev.some(i => i.name === b.name)
        ? prev.map(i => (i.name === b.name ? { ...i, quantity: i.quantity + 1 } : i))
        : [...prev, { ...b, quantity: 1 }]
    );
  const setQty = (name: string, qty: number) =>
    setItems(prev => (qty < 1 ? prev.filter(i => i.name !== name) : prev.map(i => (i.name === name ? { ...i, quantity: qty } : i))));
  const remove = (name: string) => setItems(prev => prev.filter(i => i.name !== name));
  const clear = () => setItems([]);

  const count = items.reduce((n, i) => n + i.quantity, 0);
  const subtotal = items.reduce((n, i) => n + priceOf(i) * i.quantity, 0);

  return <Ctx.Provider value={{ items, add, setQty, remove, clear, count, subtotal }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error('useCart outside CartProvider');
  return c;
}
