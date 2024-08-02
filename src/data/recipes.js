import ChickenCurry from "../assets/img/chicken-curry.jpg";
import Burger from "../assets/img/burger.jpg";
import Biriyani from "../assets/img/biriyani.jpg";
import Shawarma from "../assets/img/shawarma.jpg";
import Omlet from "../assets/img/omlet.jpg";
import ClubSandwich from "../assets/img/club-sandwich.jpg";
import ChickenMandi from "../assets/img/mandi.jpg";
import GrillChicken from "../assets/img/grill-chicken.jpg";
import FriedChicken from "../assets/img/fried-chicken.jpg";
import BurgerFirst from "../assets/img/burger-one.jpg";
import Club1 from "../assets/img/club-sandwich-1.jpg";
import Club2 from "../assets/img/club-sandwich-2.jpg";
import Biriyani1 from "../assets/img/biriyani-1.jpg";
import Grill1 from "../assets/img/grilled-checken-1.jpg";
import Grill2 from "../assets/img/grilled-chicken-2.jpg";

export const recipes = [
  {
    id: 1,
    name: "Club Sandwich",
    short_description:
      "A club sandwich features layers of turkey, bacon, lettuce, tomato, and mayo between toasted bread slices.",
    img: ClubSandwich,
    incrediants: [
      "Turkey or chicken breast",
      "Bacon",
      "Lettuce",
      "Tomato",
      "Mayonnaise",
      "Cheddar cheese",
      "Whole wheat or white bread",
      "Avocado (optional)",
    ],
    recipe: [
      "Toast three slices of bread until golden brown.",
      "Spread mayonnaise on one side of each slice of bread.",
      "On the first slice, layer lettuce, tomato slices, and cooked bacon.",
      "Place a second slice of bread on top, mayonnaise side up.",
      "Spread more mayonnaise on the top of the second slice.",
      "Layer turkey or chicken slices over the mayonnaise.",
      "Add additional lettuce, tomato, and bacon on top of the turkey/chicken.",
      "Place the final slice of bread on top, mayonnaise side down.",
      "Cut the sandwich into quarters diagonally and secure each quarter with toothpicks.",
      "Serve with your choice of side dishes like fries or a salad.",
    ],
    media: [Club1, Club2, ClubSandwich],
    description:
      "A classic club sandwich is a hearty and satisfying meal featuring layers of crispy bacon, tender turkey or chicken, and fresh lettuce and tomato, all sandwiched between three slices of toasted bread. This savory delight is typically served with mayonnaise and often accompanied by a side of crispy fries or a pickle. Perfect for a quick lunch or a satisfying dinner, the club sandwich combines crispy, creamy, and savory elements for a timeless, delicious experience.",
  },
  {
    id: 8,
    name: "Grilled chicken",
    short_description:
      "Grilled chicken is marinated, then cooked on a grill. It's juicy, flavorful, and perfect for a healthy meal.",
    img: GrillChicken,
    incrediants: [
      "Chicken breasts or thighs",
      "Olive oil",
      "Garlic (minced)",
      "Lemon juice",
      "Paprika",
      "Cumin",
      "Salt",
      "Black pepper",
    ],
    recipe: [
      "Marinate chicken breasts with olive oil, lemon juice, garlic, salt, pepper, and your choice of herbs or spices. Let it sit for at least 30 minutes.",
      "Preheat your grill to medium-high heat.",
      "Remove the chicken from the marinade and pat it dry with paper towels.",
      "Oil the grill grates to prevent sticking.",
      "Place the chicken on the grill and cook for about 6-8 minutes per side, depending on thickness.",
      "Use a meat thermometer to ensure the internal temperature reaches 165°F (74°C).",
      "Once cooked, remove the chicken from the grill and let it rest for 5 minutes.",
      "Slice the chicken and check for seasoning. Adjust if needed.",
      "Serve with your choice of sides and garnish as desired.",
      "Enjoy your perfectly grilled chicken!",
    ],
    media: [Grill2, Grill1, GrillChicken],
    description:
      "Grilled chicken is a flavorful and healthy dish, cooked to perfection over an open flame or grill. The chicken is marinated in a blend of herbs, spices, and a touch of oil to enhance its natural juiciness and tenderness. As it grills, the exterior develops a deliciously crispy char, while the inside remains succulent and moist. This cooking method brings out the best in chicken, offering a smoky aroma and savory taste that pairs well with a variety of sides. Perfect for a balanced meal or a summer barbecue, grilled chicken is both satisfying and versatile.",
  },
  {
    id: 2,
    name: "Fried Chicken",
    short_description:
      "Fried chicken is crispy, juicy, and flavorful. It’s seasoned, breaded, and fried to golden perfection.",
    img: FriedChicken,
    incrediants: [
      "Chicken pieces (drumsticks, thighs, wings, or breasts)",
      "Flour",
      "Salt",
      "Black pepper",
      "Paprika",
      "Garlic powder",
      "Onion powder",
      "Buttermilk",
    ],
    recipe: [
      "Marinate chicken pieces in buttermilk, garlic, paprika, salt, and pepper for at least 2 hours or overnight.",
      "Prepare the breading mixture by combining flour, paprika, garlic powder, onion powder, salt, and pepper in a bowl.",
      "Heat oil in a deep skillet or fryer to 350°F (175°C).",
      "Remove chicken from the marinade and coat each piece thoroughly with the breading mixture.",
      "Carefully place the coated chicken pieces into the hot oil, making sure not to overcrowd the pan.",
      "Fry the chicken until golden brown and cooked through, about 8-12 minutes, depending on the size of the pieces.",
      "Use a meat thermometer to ensure the internal temperature of the chicken reaches 165°F (74°C).",
      "Remove chicken from the oil and drain on a wire rack or paper towels.",
      "Let the chicken rest for a few minutes before serving.",
      "Serve hot with your favorite sides and dipping sauces.",
    ],
    media: [FriedChicken],
    description:
      "Crispy, golden-brown, and irresistibly juicy, our fried chicken is seasoned to perfection with a blend of spices and herbs. Each piece is coated in a light, crunchy batter, fried to a perfect crisp, and served hot for a mouthwatering, savory experience.",
  },
  {
    id: 3,
    name: "Biriyani",
    short_description:
      "Biriyani is a flavorful dish of spiced rice cooked with meat, vegetables, and aromatic spices. Delicious!",
    img: Biriyani,
    incrediants: [
      "Basmati Rice",
      "Meat",
      "Onions",
      "Yogurt",
      "Tomatoes",
      "Spices",
      "Fresh Herbs",
      "Ginger-Garlic Paste",
    ],
    recipe: [
      "Marinate chicken or meat with yogurt, spices, and herbs for at least 1 hour.",
      "Cook basmati rice until 70% done and set aside.",
      "In a large pot, heat oil and sauté onions until golden brown.",
      "Add ginger-garlic paste and cook until fragrant.",
      "Add marinated chicken or meat and cook until almost done.",
      "Add tomatoes and cook until they soften.",
      "Layer the partially cooked rice over the meat mixture.",
      "Sprinkle biryani spices and fresh herbs over the rice.",
      "Cover the pot tightly and cook on low heat for 20-30 minutes to allow flavors to meld.",
      "Garnish with fried onions and fresh coriander before serving.",
    ],
    media: [Biriyani1, Biriyani],
    description:
      "Biryani is a vibrant, aromatic rice dish bursting with flavors. Layers of fragrant basmati rice are cooked with tender marinated meat or vegetables, infused with spices like saffron, cardamom, and cloves. Garnished with fried onions and fresh herbs, it’s a delicious feast!",
  },
  {
    id: 4,
    name: "Hamburger",
    short_description:
      "A burger is a sandwich with a cooked patty, often beef, placed in a sliced bun, typically with various toppings.",
    img: Burger,
    incrediants: [
      "Beef patty",
      "Lettuce",
      "Tomato",
      "Onion",
      "Cheese",
      "Pickles",
      "Ketchup",
      "Mustard",
    ],
    recipe: [
      "Preheat the grill or skillet to medium-high heat.",
      "Season the ground beef with salt and pepper, then form it into patties.",
      "Cook the patties on the grill or skillet for 3-4 minutes per side for medium doneness.",
      "While the patties are cooking, toast the burger buns on the grill or in a toaster.",
      "Spread condiments like ketchup, mustard, or mayo on the bottom half of each bun.",
      "Add a slice of cheese to each patty during the last minute of cooking, if desired.",
      "Place the cooked patties on the bottom buns.",
      "Layer with lettuce, tomato slices, and pickles.",
      "Top with the other half of the bun.",
      "Serve immediately with your favorite side dishes.",
    ],
    media: [Burger, BurgerFirst],
    description:
      "Indulge in our juicy, flame-grilled burger, featuring a perfectly seasoned patty topped with crisp lettuce, ripe tomatoes, and pickles, all nestled between a freshly baked brioche bun. Enhanced with melted cheese and our signature sauce, it's a flavor-packed delight!",
  },
  {
    id: 5,
    name: "Chicken Curry",
    short_description:
      "Chicken curry is a flavorful dish made with chicken, spices, and a rich sauce. It's savory, spicy, and delicious!",
    img: ChickenCurry,
    incrediants: [
      "Chicken pieces",
      "Onions",
      "Tomatoes",
      "Garlic",
      "Ginger",
      "Yogurt or coconut milk",
      "Curry powder or paste",
      "Oil or ghee",
    ],
    recipe: [
      "Heat oil in a large pan over medium heat.",
      "Add chopped onions and sauté until golden brown.",
      "Stir in minced garlic and grated ginger, cooking for another minute.",
      "Add chopped tomatoes and cook until they break down and form a paste.",
      "Mix in spices such as cumin, coriander, turmeric, and garam masala.",
      "Add chicken pieces and cook until they are no longer pink.",
      "Pour in coconut milk or water and bring to a simmer.",
      "Cover the pan and cook until the chicken is tender and cooked through.",
      "Season with salt and pepper to taste.",
      "Garnish with fresh cilantro and serve with rice or naan bread.",
    ],
    media: [ChickenCurry],
    description:
      "Chicken curry is a flavorful dish featuring tender chicken pieces simmered in a rich, aromatic sauce. The sauce combines spices like turmeric, cumin, coriander, and garam masala with tomatoes, onions, and garlic, creating a savory and satisfying meal. Perfect with rice or naan.",
  },
  {
    id: 6,
    name: "Shawarma",
    short_description:
      "Shawarma is spiced meat cooked on a spit, served in pita with veggies, tahini, and sauces. Delicious and quick!",
    img: Shawarma,
    incrediants: [
      "Marinated chicken or beef",
      "Yogurt",
      "Garlic",
      "Lemon juice",
      "Cumin",
      "Paprika",
      "Coriander",
      "Turmeric",
    ],
    recipe: [
      "Marinate the chicken with yogurt, garlic, lemon juice, and shawarma spices for at least 2 hours.",
      "Preheat your grill or oven to medium-high heat.",
      "Thread the marinated chicken onto skewers (if using a grill) or place in a baking dish.",
      "Grill or bake the chicken for about 15-20 minutes, turning occasionally, until fully cooked.",
      "While the chicken is cooking, prepare the pita bread or flatbreads.",
      "Chop the cooked chicken into thin strips.",
      "Warm the pita bread or flatbreads on a skillet or in the oven.",
      "Spread tahini sauce or garlic sauce on the pita bread.",
      "Add the chopped chicken and top with vegetables like lettuce, tomatoes, and cucumbers.",
      "Roll up the pita bread or flatbread around the fillings and serve immediately.",
    ],
    media: [Shawarma],
    description:
      "Shawarma is a vibrant dining spot offering a delicious array of Middle Eastern flavors. Specializing in authentic shawarma, this popular eatery serves up juicy, marinated meats wrapped in warm, fluffy pita bread or plated with fresh veggies and savory sauces. With a commitment to quality ingredients and excellent service, Club Shawarma provides a satisfying and flavorful experience for shawarma enthusiasts and newcomers alike. Enjoy a taste of tradition with every bite!",
  },
  {
    id: 7,
    name: "Omelette",
    short_description:
      "An omelettte is made from beaten eggs, cooked and filled with cheese, vegetables, or meat. Quick and tasty!",
    img: Omlet,
    incrediants: [
      "Eggs",
      "Milk",
      "Salt",
      "Pepper",
      "Butter",
      "Cheese",
      "Onions",
      "Bell Peppers",
    ],
    recipe: [
      "Crack eggs into a bowl and beat them with a fork or whisk.",
      "Add a pinch of salt and pepper to the beaten eggs.",
      "Heat a non-stick skillet over medium heat and add a small amount of butter or oil.",
      "Pour the beaten eggs into the skillet, tilting the pan to spread them evenly.",
      "Cook until the edges start to set and the center is slightly runny.",
      "Add desired fillings (such as cheese, vegetables, or cooked meats) to one half of the omelet.",
      "Gently fold the other half of the omelet over the fillings.",
      "Cook for another 1-2 minutes until the cheese melts and the omelet is fully cooked.",
      "Slide the omelet onto a plate.",
      "Serve immediately and enjoy your delicious omelet!",
    ],
    media: [Omlet],
    description:
      "An omelette is a versatile and delicious dish made from beaten eggs cooked until set. It's often filled with a variety of ingredients like cheese, vegetables, and meats. Perfect for breakfast or brunch, it’s quick to prepare and customizable to your taste.",
  },
  {
    id: 9,
    name: "Chicken Mandi",
    short_description:
      "A traditional Yemeni dish of spiced chicken and rice, cooked to perfection for a flavorful meal.",
    img: ChickenMandi,
    incrediants: [
      "Chicken",
      "Basmati rice",
      "Onions",
      "Tomatoes",
      "Garlic",
      "Spices (such as cumin, coriander, and turmeric)",
      "Yogurt",
      "Saffron (optional)",
    ],
    recipe: [
      "Marinate chicken with yogurt, garlic, ginger, and spices. Let it sit for at least 1 hour.",
      "Heat oil in a large pot and sauté onions until golden brown.",
      "Add tomatoes and cook until they are soft.",
      "Stir in spices and cook for a few minutes.",
      "Add the marinated chicken and cook until it’s browned on all sides.",
      "Add water or chicken broth and bring to a boil.",
      "Reduce heat, cover, and simmer until the chicken is cooked through.",
      "Remove chicken and set aside. Strain the broth to remove any solids.",
      "Add basmati rice to the broth and cook according to package instructions.",
      "Shred the chicken and mix it back into the rice. Garnish with fresh herbs and serve.",
    ],
    media: [ChickenMandi],
    description:
      "Chicken Mandi is a flavorful and aromatic Middle Eastern dish that features tender chicken slow-cooked with a blend of spices, rice, and vegetables. Originating from Yemen, this dish combines the rich flavors of saffron, cardamom, and cloves, resulting in a deliciously spiced and fragrant meal. The chicken is typically marinated and cooked with rice in a single pot, allowing the flavors to meld perfectly. Often garnished with nuts and fresh herbs, Chicken Mandi is a hearty and satisfying dish that's perfect for any occasion.",
  },
];
