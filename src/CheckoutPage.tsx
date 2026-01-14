import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard, Lock } from 'lucide-react';

interface CartItem {
  name: string;
  price: string;
  image: string;
  quantity: number;
}

function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  // Mock cart items - in a real app, this would come from your cart state management
  const cartItems: CartItem[] = [
    {
      name: "Classic Fudge",
      price: "R45.00",
      image: "/Classic-Brownie.jpeg",
      quantity: 2
    },
    {
      name: "Walnut Chocolate",
      price: "R48.00",
      image: "/Walnut-Brownie.jpeg",
      quantity: 1
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('R', ''));
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
            
            <Link to="/order" className="text-gray-600 hover:text-purple-600 font-light transition-colors">
              Back to Order
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <h1 className="text-4xl font-extralight text-gray-900 mb-8">Checkout</h1>
            
            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-light text-gray-900 mb-6">Contact Information</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light"
                  />
                </div>
                <div className="col-span-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="mb-12">
              <h2 className="text-2xl font-light text-gray-900 mb-6">Delivery Address</h2>
              <div className="space-y-6">
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light"
                />
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light"
                  />
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light"
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Payment Information</h2>
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light pl-12"
                  />
                  <CreditCard className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gray-50 rounded-3xl p-8 sticky top-6">
              <h2 className="text-2xl font-light text-gray-900 mb-8">Order Summary</h2>
              
              <div className="space-y-6 mb-8">
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
                        <p className="text-purple-600 font-light">R{parseFloat(item.price.replace('R', '')) * item.quantity}</p>
                      </div>
                    </div>
                    <span className="text-gray-500 font-light">x{item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-light">Subtotal</span>
                  <span className="text-gray-900 font-light">R{calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-light">Delivery</span>
                  <span className="text-gray-900 font-light">R30.00</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-xl font-light text-gray-900">Total</span>
                  <span className="text-xl font-light text-purple-600">R{(calculateTotal() + 30).toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-full font-light transition-all hover:shadow-lg hover:shadow-purple-200 mt-8 flex items-center justify-center space-x-2">
                <Lock className="h-5 w-5" />
                <span>Complete Purchase</span>
              </button>

              <p className="text-center text-sm text-gray-500 font-light mt-4">
                Your payment is secured with SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage; 