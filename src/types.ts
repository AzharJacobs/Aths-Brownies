export interface Brownie {
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export const brownies: Brownie[] = [
  {
    name: "Classic Fudge",
    description: "Rich chocolate brownies with premium cocoa",
    price: "$24",
    image: "https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Salted Caramel",
    description: "Gooey brownies with homemade caramel swirl",
    price: "$28",
    image: "https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Walnut Chocolate",
    description: "Traditional brownies with premium walnuts",
    price: "$26",
    image: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Triple Chocolate",
    description: "Dark, milk, and white chocolate perfection",
    price: "$30",
    image: "https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Raspberry Swirl",
    description: "Fresh raspberry puree marbled patterns",
    price: "$28",
    image: "https://images.pexels.com/photos/4110255/pexels-photo-4110255.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Espresso",
    description: "Coffee-infused for chocolate lovers",
    price: "$26",
    image: "https://images.pexels.com/photos/4110004/pexels-photo-4110004.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    text: "Absolutely divine! Perfect texture and incredible flavor.",
    rating: 5
  },
  {
    name: "Michael R.",
    text: "Ordered for my office party - everyone loved them!",
    rating: 5
  },
  {
    name: "Emma L.",
    text: "The salted caramel brownies are perfection.",
    rating: 5
  }
]; 