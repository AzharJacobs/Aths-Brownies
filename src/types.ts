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
    image: "/Salted-Caramel-Brownie.jpg"
  },
  {
    name: "Walnut Chocolate",
    description: "Traditional brownies with premium walnuts",
    price: "R48",
    image: "/Walnut-Brownie.jpg"
  },
  {
    name: "Triple Chocolate",
    description: "Dark, milk, and white chocolate perfection",
    price: "R55",
    image: "/Triple-Chocolate-Brownie.jpg"
  },
  {
    name: "White Chocolate",
    description: "Fudgy brownies studded with creamy white chocolate",
    price: "R52",
    image: "/White-Chocolate-Brownie.jpg"
  },
  {
    name: "Biscoff Crunch",
    description: "Brownies swirled with Biscoff spread and biscuit crumbs",
    price: "R50",
    image: "/Biscoff-Brownie.jpg"
  }
];

export const priceOf = (b: { price: string }) => parseFloat(b.price.replace('R', ''));
