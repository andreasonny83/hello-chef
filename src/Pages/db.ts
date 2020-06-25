export const ingredients = [
  {
    id: 'i001',
    name: `Portobello Mushroom`,
    image:
      'https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/55683504f8b25e723e8b4569.png',
    unit: 'unit(s)',
  },
  {
    id: 'i002',
    name: `Goat's Cheese`,
    image:
      'https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/55686488f8b25e5a408b4569.png',
    unit: 'grams',
  },
  {
    id: 'i003',
    name: `Red Onion`,
    image:
      'https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/554a6fb4fd2cb95a598b456e.png',
    unit: 'unit(s)',
  },
  {
    id: 'i004',
    name: `Balsamic Vinegar`,
    image: '',
    unit: 'ml',
  },
  {
    id: 'i005',
    name: `Potato`,
    image: '',
    unit: 'unit(s)',
  },
  {
    id: 'i006',
    name: `Ciabatta Bread`,
    image: '',
    unit: 'unit(s)',
  },
  {
    id: 'i007',
    name: `Baby Leaves`,
    image: '',
    unit: 'grams',
  },
];

export const recipes = [
  {
    id: 'mushroom-and-goat-cheese-burger',
    title: `Mushroom and Goat's Cheese Burger`,
    description: 'With Balsamic Caramelised Onion, Baby Leaves and Wedges',
    image:
      'https://res.cloudinary.com/hellofresh/image/upload/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/v1/hellofresh_s3/image/5eb43c9afbcfda646c2eb012-cf0e9138.jpg',
    preparationTime: '35 minutes',
    difficulty: 2,
    ingredients: [
      {
        id: 'i001',
        name: `Portobello Mushroom`,
        image:
          'https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/55683504f8b25e723e8b4569.png',
        unit: 'unit(s)',
        quantity: 1,
      },
      {
        id: 'i002',
        name: `Goat's Cheese`,
        image:
          'https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/55686488f8b25e5a408b4569.png',
        unit: 'grams',
        quantity: 20,
      },
      {
        id: 'i003',
        name: `Red Onion`,
        image:
          'https://img.hellofresh.com/f_auto,fl_lossy,h_140,q_auto,w_140/hellofresh_s3/image/554a6fb4fd2cb95a598b456e.png',
        unit: 'unit(s)',
        quantity: 0.5,
      },
      {
        id: 'i004',
        name: `Balsamic Vinegar`,
        image: '',
        unit: 'ml',
        quantity: 5,
      },
      {
        id: 'i005',
        name: `Potato`,
        image: '',
        unit: 'unit(s)',
        quantity: 2,
      },
      {
        id: 'i006',
        name: `Ciabatta Bread`,
        image: '',
        unit: 'unit(s)',
        quantity: 1,
      },
      {
        id: 'i007',
        name: `Baby Leaves`,
        image: '',
        unit: 'grams',
        quantity: 70,
      },
    ],
  },
  {
    id: 'black-Bean-and-sweet-potato-stew',
    title: 'Black Bean & Sweet Potato Stew',
    description: 'With Kale & Harissa',
    image:
      'https://res.cloudinary.com/hellofresh/image/upload/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/v1/hellofresh_s3/image/black-bean-sweet-potato-stew-dc869289.jpg',
  },
  {
    id: 'tofu-and-courgettes-quinoa',
    title: 'Veggie Packed Chilli',
    description: 'with Brown Rice',
    image:
      'https://res.cloudinary.com/hellofresh/image/upload/c_fill,f_auto,fl_lossy,h_405,q_auto,w_720/v1/hellofresh_s3/image/veggie-chilli-411d88f4.jpg',
  },
  {
    id: 'tomato-and-olives-focaccia',
    title: 'Rosemary and Garlic Focaccia',
    description: 'With sea salt and extra virgin olive oil',
    image: '/images/covers/003-focaccia.jpg',
  },
  {
    id: 'tofu-and-courgettes-quinoa',
    title: 'Tofu and courgettes Quinoa',
    description: 'With carrots, onions, peppers and olives',
    image: '/images/covers/002-quinoa-cover.jpg',
  },
];

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  preparationTime: string;
  difficulty: number;
  ingredients: string[];
  ingredientsPerServing: any[];
}
