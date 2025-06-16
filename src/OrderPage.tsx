import { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Brownie, brownies } from './types';

interface CartItem extends Brownie {
  quantity: number;
}

function OrderPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const addToCart = (brownie: Brownie) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.name === brownie.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.name === brownie.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...brownie, quantity: 1 }];
    });
  };

  const removeFromCart = (brownieName: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== brownieName));
  };

  const updateQuantity = (brownieName: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === brownieName
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img 
                src="/1000347804.jpg" 
                alt="Ath's Brownies Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-2xl font-light text-gray-900">Ath's Brownies</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/#home" className="text-gray-600 hover:text-purple-600 font-light transition-colors">Home</Link>
              <Link to="/#about" className="text-gray-600 hover:text-purple-600 font-light transition-colors">About</Link>
              <Link to="/#menu" className="text-gray-600 hover:text-purple-600 font-light transition-colors">Menu</Link>
              <Link to="/#testimonials" className="text-gray-600 hover:text-purple-600 font-light transition-colors">Reviews</Link>
              <Link to="/#contact" className="text-gray-600 hover:text-purple-600 font-light transition-colors">Contact</Link>
              <Link to="/order" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full font-light transition-all hover:shadow-lg hover:shadow-purple-200">
                Order Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-purple-600 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-6 py-4 space-y-3">
              <Link to="/#home" className="block py-2 text-gray-600 hover:text-purple-600 font-light">Home</Link>
              <Link to="/#about" className="block py-2 text-gray-600 hover:text-purple-600 font-light">About</Link>
              <Link to="/#menu" className="block py-2 text-gray-600 hover:text-purple-600 font-light">Menu</Link>
              <Link to="/#testimonials" className="block py-2 text-gray-600 hover:text-purple-600 font-light">Reviews</Link>
              <Link to="/#contact" className="block py-2 text-gray-600 hover:text-purple-600 font-light">Contact</Link>
              <Link to="/order" className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-full font-light mt-4 text-center">
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-extralight text-gray-900 mb-12 text-center">Order Your Brownies</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Section */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {brownies.map((brownie, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <img 
                      src={brownie.image} 
                      alt={brownie.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-light text-gray-900">{brownie.name}</h3>
                    <span className="text-lg font-light text-purple-600">{brownie.price}</span>
                  </div>
                  <p className="text-gray-500 font-light mb-4">{brownie.description}</p>
                  <button 
                    onClick={() => addToCart(brownie)}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-light transition-all hover:shadow-lg hover:shadow-purple-200"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-3xl p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-light text-gray-900">Your Cart</h2>
                <ShoppingCart className="h-6 w-6 text-purple-600" />
              </div>

              {cartItems.length === 0 ? (
                <p className="text-gray-500 font-light text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.name} className="flex items-center justify-between bg-white p-4 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="font-light text-gray-900">{item.name}</h3>
                            <p className="text-purple-600 font-light">{item.price}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="text-gray-400 hover:text-purple-600"
                          >
                            <Minus className="h-5 w-5" />
                          </button>
                          <span className="text-gray-900 font-light">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="text-gray-400 hover:text-purple-600"
                          >
                            <Plus className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-6 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-light">Subtotal</span>
                      <span className="text-gray-900 font-light">${calculateTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-light">Delivery</span>
                      <span className="text-gray-900 font-light">R30.00</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                      <span className="text-xl font-light text-gray-900">Total</span>
                      <span className="text-xl font-light text-purple-600">${(calculateTotal() + 30).toFixed(2)}</span>
                    </div>
                  </div>

                  <Link 
                    to="/checkout"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-full font-light transition-all hover:shadow-lg hover:shadow-purple-200 mt-8 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Proceed to Checkout</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPage; 