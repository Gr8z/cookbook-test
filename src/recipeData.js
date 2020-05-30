import baconBombs from './images/bacon-bombs.jpg'
import chickenCurry from './images/chicken-curry.jpg'
import hamburger from './images/hamburger.jpg'
import lasagna from './images/lasagna.jpg'
import pancakes from './images/pancakes.jpg'

const recipes = [
  {
    handle: 'chicken-curry',
    author: 'Amanda Fetters',
    name: 'Chicken Curry',
    img: chickenCurry,
    description: `This is an adaptation of yellow chicken curry from India. 
      The aromas and flavors are a delight to the senses! It is best served with 
      fresh Naan bread and Jasmine or Basmati rice.`,
    times: {
      prep: 20,
      cook: 25
    },
    ingredients: [
      '3 tablespoons olive oil',
      '1 small onion, chopped',
      '2 cloves garlic, minced',
      '3 tablespoons curry powder',
      '1 teaspoon ground cinnamon',
      '1 teaspoon paprika',
      '1 bay leaf',
      '.5 teaspoon grated fresh ginger root',
      '.5 teaspoon white sugar',
      '.25 teaspoon salt to taste',
      '2 skinless, boneless chicken breast halves - cut into bite-size pieces',
      '1 tablespoon tomato paste',
      '1 cup plain yogurt',
      '.75 cup coconut milk',
      '.5 lemon, juiced',
      '.5 teaspoon cayenne pepper'
    ],
    instructions: [
      'Heat olive oil in a skillet over medium heat. Saute onion until lightly browned. Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar and salt. Continue stirring for 2 minutes. Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes.',
      'Remove bay leaf, and stir in lemon juice and cayenne pepper. Simmer 5 more minutes.'
    ]
  },
  {
    handle: 'hamburger',
    author: 'Aravind Akash',
    name: 'Hamburger',
    img: hamburger,
    description: `These burgers are the best on the grill in the summertime. Jam-packed with all kinds of 
      stuff, and no tasteless bread crumbs!`,
    times: {
      prep: 10,
      cook: 20
    },
    ingredients: [
      '1.5 pounds lean ground beef',
      '.5 onion, finely chopped',
      '.5 cup shredded Colby Jack or Cheddar cheese',
      '1 teaspoon soy sauce',
      '1 teaspoon Worcestershire sauce',
      '1 egg',
      '1 (1 ounce) envelope dry onion soup mix',
      '1 clove garlic, minced',
      '1 tablespoon garlic powder',
      '1 teaspoon dried parsley',
      '1 teaspoon dried basil',
      '1 teaspoon dried oregano',
      '.5 teaspoon crushed dried rosemary',
      'salt and pepper to taste'
    ],
    instructions: [
      'Preheat a grill for high heat.',
      'In a large bowl, mix together the ground beef, onion, cheese, soy sauce, Worcestershire sauce, egg, onion soup mix, garlic, garlic powder, parsley, basil, oregano, rosemary, salt, and pepper. Form into 4 patties.',
      'Grill patties for 5 minutes per side on the hot grill, or until well done. Serve on buns with your favorite condiments.'
    ]
  },
  {
    handle: 'pancakes',
    author: 'Kris Now',
    name: 'Fluffy Pancakes',
    img: pancakes,
    description: `Tall and fluffy. These pancakes are just right. Topped with strawberries and whipped cream, they are impossible to resist.`,
    times: {
      prep: 10,
      cook: 10
    },
    ingredients: [
      '.75 cup milk',
      '2 tablespoons white vinegar',
      '1 cup all-purpose flour',
      '2 tablespoons white sugar',
      '1 teaspoon baking powder',
      '.5 teaspoon baking soda',
      '.5 teaspoon salt',
      '1 egg',
      '2 tablespoons butter, melted',
      'cooking spray'
    ],
    instructions: [
      'Combine milk with vinegar in a medium bowl and set aside for 5 minutes to "sour".',
      'Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into "soured" milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone.',
      'Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side.'
    ]
  },
  {
    handle: 'bacon-bombs',
    author: 'Yoly Now',
    name: 'Bacon Bombs',
    img: baconBombs,
    description: `These bombs are great for a grab 'n go breakfast or for a side to eggs, hash browns, pancakes, french toast, or waffles. They can easily be air fried instead of pan fried.`,
    times: {
      prep: 10,
      cook: 20
    },
    ingredients: [
      '1/2 tablespoon butter',
      '2 tablespoons chopped onion',
      '3 slices stale bread, cut into cubes',
      '1/4 cup shredded sharp Cheddar cheese',
      '1 egg, beaten',
      '1/4 teaspoon salt',
      '1/4 teaspoon garlic powder',
      '1/4 teaspoon ground black pepper',
      '8 slices bacon',
      'toothpicks',
      '1 tablespoon bacon drippings'
    ],
    instructions: [
      'Melt butter in a skillet over medium-low heat and cook onion until soft and translucent, about 5 minutes.',
      'Transfer to a bowl and add bread cubes, Cheddar cheese, egg, salt, garlic powder, and black pepper. Roll mixture into 8 equal-sized balls and wrap each ball in a slice of bacon. Use toothpicks to hold bacon in place.',
      'Wipe the skillet clean. Melt bacon drippings over medium heat. Fry bacon balls in the skillet, rolling constantly until crisp, 15 to 18 minutes.'
    ]
  },
  {
    handle: 'lasagna',
    author: 'John Chandler',
    name: 'Lasagna',
    img: lasagna,
    description: `The world's best Lasagna`,
    times: {
      prep: 30,
      cook: 150
    },
    ingredients: [
      '1 pound sweet Italian sausage',
      '3/4 pound lean ground beef',
      '1/2 cup minced onion',
      '2 cloves garlic, crushed',
      '1 (28 ounce) can crushed tomatoes',
      '2 (6 ounce) cans tomato paste',
      '2 (6.5 ounce) cans canned tomato sauce',
      '1/2 cup water',
      '2 tablespoons white sugar',
      '1 1/2 teaspoons dried basil leaves',
      '1/2 teaspoon fennel seeds',
      '1 teaspoon Italian seasoning',
      '1 1/2 teaspoons salt, divided, or to taste',
      '1/4 teaspoon ground black pepper',
      '4 tablespoons chopped fresh parsley',
      '12 lasagna noodles',
      '16 ounces ricotta cheese',
      '1 egg',
      '3/4 pound mozzarella cheese, sliced',
      '3/4 cup grated Parmesan cheese'
    ],
    instructions: [
      'In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 teaspoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.',
      'Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.',
      'Preheat oven to 375 degrees F (190 degrees C).',
      'To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.',
      'Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving.'
    ]
  }
  /* {
    handle: '',
    author: '',
    name: '',
    img: '',
    description: ``,
    times: {
      prep: 0,
      cook: 0
    },
    ingredients: [],
    instructions: []
  } */
]

export default recipes
