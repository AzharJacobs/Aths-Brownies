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
    price: "R45",
    image: "/Classic-Brownie.jpeg"
  },
  {
    name: "Salted Caramel",
    description: "Gooey brownies with homemade caramel swirl",
    price: "R50",
    image: "/Caramel-Brownie.jpeg"
  },
  {
    name: "Walnut Chocolate",
    description: "Traditional brownies with premium walnuts",
    price: "R48",
    image: "/Walnut-Brownie.jpeg"
  },
  {
    name: "Triple Chocolate",
    description: "Dark, milk, and white chocolate perfection",
    price: "R55",
    image: "/Triple-choc.jpeg"
  },
  {
    name: "Raspberry Swirl",
    description: "Fresh raspberry puree marbled patterns",
    price: "R52",
    image: "/Swirl.jpeg"
  },
  {
    name: "Cream Cheese",
    description: "Decadent cream cheese swirled brownies",
    price: "R50",
    image: "/Cheese.webp"
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