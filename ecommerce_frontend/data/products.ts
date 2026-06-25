export interface Product {
  id: number;
  name: string;
  image: string;
  images: string[];
  price: string;
  category: string;
  description: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Spinach",
    image: "/images/spinach.png",
    images: [
      "/images/spinach.png",
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551893665-f843f600794e?w=600&auto=format&fit=crop&q=80"
    ],
    price: "KSh 50",
    category: "Vegetable",
    description: "Fresh green spinach leaves rich in vitamins and minerals.",
    featured: true,
  },
  {
    id: 2,
    name: "Cabbage",
    image: "/images/cabbage.png",
    images: [
      "/images/cabbage.png",
      "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611105637889-3dfa1936cf5e?w=600&auto=format&fit=crop&q=80"
    ],
    price: "KSh 80",
    category: "Vegetable",
    description: "Crunchy farm-fresh cabbage perfect for salads and stir-fries.",
    featured: true,
  },
  {
    id: 3,
    name: "Broccoli",
    image: "/images/broccoli.png",
    images: [
      "/images/broccoli.png",
      "https://images.unsplash.com/photo-1459411552884-851f49519d87?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80"
    ],
    price: "KSh 120",
    category: "Vegetable",
    description: "Nutrient-packed broccoli florets ideal for healthy family meals.",
    featured: true,
  },
  {
    id: 4,
    name: "Carrot",
    image: "/images/carrots.png",
    images: [
      "/images/carrots.png",
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582515073490-39981397c445?w=600&auto=format&fit=crop&q=80"
    ],
    price: "KSh 70",
    category: "Vegetable",
    description: "Sweet crunchy carrots packed with fiber and vitamin A.",
    featured: true,
  },
  {
    id: 5,
    name: "Potato",
    image: "/images/potato.png",
    images: [
      "/images/potato.png",
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508747703725-719ae25b3e41?w=600&auto=format&fit=crop&q=80"
    ],
    price: "KSh 100",
    category: "Vegetable",
    description: "Fresh premium potatoes suitable for frying, boiling, or baking.",
    featured: true,
  },
  {
    id: 6,
    name: "Tomato",
    image: "/images/tomatoes.png",
    images: [
      "/images/tomatoes.png",
      "https://images.unsplash.com/photo-1595855759920-86582396756a?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?w=600&auto=format&fit=crop&q=80"
    ],
    price: "KSh 60",
    category: "Vegetable",
    description: "Juicy red tomatoes perfect for sauces, salads, and cooking.",
    featured: true,
  },
  {
    id: 7,
    name: "Milk",
    image: "/images/milk.png",
    images: [
      "/images/milk.png",
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=600&auto=format&fit=crop&q=80"
    ],
    price: "KSh 150",
    category: "Dairy",
    description: "Pure fresh milk sourced daily from trusted local farms.",
    featured: true,
  },
  {
    id: 8,
    name: "Eggs",
    image: "/images/eggs.png",
    images: [
      "/images/eggs.png",
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?w=600&auto=format&fit=crop&q=80"
    ],
    price: "KSh 120",
    category: "Dairy",
    description: "Farm-fresh eggs rich in protein for healthy nutrition.",
  },
  {
    id: 9,
    name: "Bread",
    image: "/images/bread.png",
    images: [
      "/images/bread.png",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop&q=80"
    ],
    price: "KSh 90",
    category: "Bakery",
    description: "Soft freshly baked bread with a delicious homemade taste.",
    featured: true,
  },
  {
    id: 10,
    name: "Cheese",
    image: "/images/cheese.png",
    images: [
      "/images/cheese.png",
      "https://images.unsplash.com/photo-1486887396153-fa416526c132?w=600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=600&auto=format&fit=crop&q=80"
    ],
    price: "KSh 140",
    category: "Dairy",
    description: "Creamy premium cheese perfect for sandwiches, snacks, and meals.",
    featured: true,
  },
];

export const getNumericPrice = (priceStr: string): number => {
  const match = priceStr.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};