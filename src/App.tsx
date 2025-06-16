import { useState } from 'react';
import { Menu, X, Heart, Star, Clock, MapPin, Phone, Mail, Instagram, Facebook, ShoppingCart } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import OrderPage from './OrderPage';
import CheckoutPage from './CheckoutPage';
import { Brownie, Testimonial, brownies, testimonials } from './types';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/order" element={<OrderPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/" element={
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
                    <a href="#home" className="text-gray-600 hover:text-purple-600 font-light transition-colors">Home</a>
                    <a href="#about" className="text-gray-600 hover:text-purple-600 font-light transition-colors">About</a>
                    <a href="#menu" className="text-gray-600 hover:text-purple-600 font-light transition-colors">Menu</a>
                    <a href="#testimonials" className="text-gray-600 hover:text-purple-600 font-light transition-colors">Reviews</a>
                    <a href="#contact" className="text-gray-600 hover:text-purple-600 font-light transition-colors">Contact</a>
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
                    <a href="#home" className="block py-2 text-gray-600 hover:text-purple-600 font-light">Home</a>
                    <a href="#about" className="block py-2 text-gray-600 hover:text-purple-600 font-light">About</a>
                    <a href="#menu" className="block py-2 text-gray-600 hover:text-purple-600 font-light">Menu</a>
                    <a href="#testimonials" className="block py-2 text-gray-600 hover:text-purple-600 font-light">Reviews</a>
                    <a href="#contact" className="block py-2 text-gray-600 hover:text-purple-600 font-light">Contact</a>
                    <Link to="/order" className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-full font-light mt-4 text-center">
                      Order Now
                    </Link>
                  </div>
                </div>
              )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-20 pb-32">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="text-center lg:text-left">
                    <h1 className="text-6xl lg:text-7xl font-extralight text-gray-900 mb-8 leading-tight">
                      Handcrafted
                      <span className="block font-light text-purple-600">Brownies</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed max-w-lg">
                      Indulge in our rich, fudgy brownies made from the finest ingredients. 
                      Each batch is lovingly crafted to perfection.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Link to="/order" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-light transition-all hover:shadow-lg hover:shadow-purple-200 transform hover:-translate-y-0.5 text-center">
                        Order Your Brownies
                      </Link>
                      <a href="#menu" className="border border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600 px-8 py-4 rounded-full font-light transition-all text-center">
                        View Menu
                      </a>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src="https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800" 
                        alt="Delicious brownies" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 bg-gray-50">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Baking process" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-5xl font-extralight text-gray-900 mb-8">Ath's Story</h2>
                    <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                      What started as a passion for baking has blossomed into Ath's Brownies. 
                      Every brownie is made with love and attention to detail, using only the 
                      finest Belgian chocolate and premium ingredients.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Heart className="h-7 w-7 text-purple-600" />
                        </div>
                        <h3 className="font-light text-gray-900 text-lg mb-2">Made with Love</h3>
                        <p className="text-sm text-gray-500 font-light">Crafted with care</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Star className="h-7 w-7 text-purple-600" />
                        </div>
                        <h3 className="font-light text-gray-900 text-lg mb-2">Premium Quality</h3>
                        <p className="text-sm text-gray-500 font-light">Finest ingredients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="py-32">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                  <h2 className="text-5xl font-extralight text-gray-900 mb-6">Our Collection</h2>
                  <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                    Each brownie is carefully crafted with unique flavors and textures.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {brownies.map((brownie, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="aspect-square rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                        <img 
                          src={brownie.image} 
                          alt={brownie.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="text-center">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-light text-gray-900">{brownie.name}</h3>
                          <span className="text-lg font-light text-purple-600">{brownie.price}</span>
                        </div>
                        <p className="text-gray-500 font-light mb-6">{brownie.description}</p>
                        <button className="w-full border border-gray-300 hover:border-purple-600 hover:text-purple-600 text-gray-700 py-3 rounded-full font-light transition-all">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-32 bg-gray-50">
              <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                  <h2 className="text-5xl font-extralight text-gray-900 mb-6">What People Say</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-purple-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 font-light leading-relaxed">"{testimonial.text}"</p>
                      <p className="font-light text-gray-900">— {testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32">
              <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                    <h2 className="text-5xl font-extralight text-gray-900 mb-8">Get in Touch</h2>
                    <p className="text-xl text-gray-600 font-light mb-12 leading-relaxed">
                      Ready to place an order or have questions? We'd love to hear from you.
                    </p>
                    
                    <div className="space-y-8">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                          <Phone className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-light text-gray-900 text-lg">Phone</h3>
                          <p className="text-gray-600 font-light">(555) 123-BROWNIE</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                          <Mail className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-light text-gray-900 text-lg">Email</h3>
                          <p className="text-gray-600 font-light">orders@athsbrownies.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                          <MapPin className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-light text-gray-900 text-lg">Location</h3>
                          <p className="text-gray-600 font-light">Downtown Bakery District</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                          <Clock className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-light text-gray-900 text-lg">Hours</h3>
                          <p className="text-gray-600 font-light">Tue-Sat: 9AM-6PM</p>
                          <p className="text-gray-600 font-light">Sun-Mon: Closed</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-12">
                      <h3 className="font-light text-gray-900 text-lg mb-6">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a 
                          href="https://www.instagram.com/aths.brownies/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-purple-100 hover:bg-purple-200 rounded-xl flex items-center justify-center transition-colors"
                        >
                          <Instagram className="h-5 w-5 text-purple-600" />
                        </a>
                        <button className="w-12 h-12 bg-purple-100 hover:bg-purple-200 rounded-xl flex items-center justify-center transition-colors">
                          <Facebook className="h-5 w-5 text-purple-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-3xl p-8">
                    <h3 className="text-2xl font-light text-gray-900 mb-8">Send a Message</h3>
                    <form className="space-y-6">
                      <div>
                        <input 
                          type="text" 
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <textarea 
                          rows={4}
                          className="w-full px-0 py-4 bg-transparent border-0 border-b border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-600 font-light resize-none"
                          placeholder="Tell us about your brownie needs..."
                        ></textarea>
                      </div>
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-full font-light transition-all hover:shadow-lg hover:shadow-purple-200 mt-8">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-100 py-12">
              <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center space-x-3 mb-4 md:mb-0">
                    <img 
                      src="/1000347804.jpg" 
                      alt="Ath's Brownies Logo" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-xl font-light text-gray-900">Ath's Brownies</span>
                  </div>
                  <p className="text-gray-500 font-light text-center md:text-right">
                    © 2024 Ath's Brownies. Made with love.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;