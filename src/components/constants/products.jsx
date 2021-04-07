import cranberryBurger from '../../images/cranberry-burger.jpg';
import italianTaste from '../../images/italian-taste.jpg';
import mushroomBurger from '../../images/mushroom-burger.jpg';
import seasonalBurger from '../../images/seasonal-burger.jpg';
import vegeBurger from '../../images/vege-burger.jpg';
import baconCrepe from '../../images/bacon-crepe.jpg';
import fourCheeseCrepe from '../../images/four-cheese-crepe.jpg';
import nutellaCrepe from '../../images/nutella-crepe.jpg';
import salmonCrepe from '../../images/salmon-crepe.jpg';
import vegeSalad from '../../images/vege-salad.jpg';
import coleslowSalad from '../../images/coleslow.jpg';

const products = [
  {
    id: '1',
    category: 'burger',
    image: cranberryBurger,
    title: 'Cranberry',
    description:
      '100% Beef, Camembert, cranberry sauce, red onion, arugula, lamb`s lettuce',
    price: 5,
  },
  {
    id: '2',
    category: 'burger',
    image: italianTaste,
    title: 'Italian taste',
    description:
      '100% Beef, mascarpone, black olives, dried tomatoes, red onion, arugula, iceberg lettuce',
    price: 4,
  },
  {
    id: '3',
    category: 'burger',
    image: mushroomBurger,
    title: 'Mushroom',
    description:
      '100% beef, mushrooms in sour cream, red onion, arugula, cheddar, iceberg lettuce',
    price: 4,
  },
  {
    id: '4',
    category: 'burger',
    image: seasonalBurger,
    title: 'Seasonal',
    description:
      '100% beef, tomato sauce, asparagus, red onion, iceberg lettuce, lamb`s lettuce',
    price: 5,
  },
  {
    id: '5',
    category: 'burger',
    image: vegeBurger,
    title: 'Vege',
    description:
      'Halloumi cheese, red onion, beetroot marinated in honey, homemade sauce, sunflower sprouts, lamb`s lettuce',
    price: 5,
  },
  {
    id: '6',
    category: 'crepe',
    image: baconCrepe,
    title: 'Bacon',
    description:
      'Mozzarella, grilled chicken, fried bacon, fresh tomatoes, BBQ sauce, spinach, arugula',
    price: 5,
  },
  {
    id: '7',
    category: 'crepe',
    image: fourCheeseCrepe,
    title: '4 cheese',
    description:
      'Mozzarella, gorgonzola, camembert, parmesan, white sauce, arugula',
    price: 5,
  },
  {
    id: '8',
    category: 'crepe',
    image: nutellaCrepe,
    title: 'Nutella',
    description: 'Nutella, Oreo bisquits, strawberries',
    price: 5,
  },
  {
    id: '9',
    category: 'crepe',
    image: salmonCrepe,
    title: 'Salmon',
    description: 'Philadelphia cheese, fresh salmon, avocado, fresh cucumber',
    price: 5,
  },
  {
    id: '10',
    category: 'crepe',
    image: vegeSalad,
    title: 'Vege salad',
    description:
      'Beetroot marinated in honey, Halloumi cheese, pomegranate seeds, lamb`s lettuce, cashew nuts',
    price: 5,
  },
  {
    id: '11',
    category: 'crepe',
    image: coleslowSalad,
    title: 'Coleslow salad',
    description: 'Cabbage, lime juice, mayonnaise, lemongrass, coriander',
    price: 5,
  },
];

export default products;
