export interface Brownie {
  name: string;
  description: string;
  price: string;
  image: string;
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

export const priceOf = (b: { price: string }) => parseFloat(b.price.replace('R', ''));
