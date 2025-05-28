export const categories = [
  {
    id: "electronics",
    name: "Electronics",
    subcategories: [
      { id: "audio", name: "Audio" },
      { id: "computers", name: "Computers" },
      { id: "wearables", name: "Wearables" },
      { id: "accessories", name: "Accessories" },
    ],
  },
  {
    id: "furniture",
    name: "Furniture",
    subcategories: [
      { id: "office", name: "Office" },
      { id: "home", name: "Home" },
    ],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    subcategories: [
      { id: "appliances", name: "Appliances" },
      { id: "utensils", name: "Utensils" },
    ],
  },
  {
    id: "accessories",
    name: "Accessories",
    subcategories: [
      { id: "bags", name: "Bags" },
      { id: "wearables", name: "Wearables" },
    ],
  },
  {
    id: "sports",
    name: "Sports",
    subcategories: [
      { id: "yoga", name: "Yoga" },
      { id: "fitness", name: "Fitness" },
    ],
  },
];

// Map products to subcategories
export const productCategoryMap = {
  1: { category: "Electronics", subcategory: "Audio" },
  2: { category: "Electronics", subcategory: "Wearables" },
  3: { category: "Electronics", subcategory: "Audio" },
  4: { category: "Furniture", subcategory: "Office" },
  5: { category: "Kitchen", subcategory: "Utensils" },
  6: { category: "Accessories", subcategory: "Bags" },
  7: { category: "Electronics", subcategory: "Accessories" },
  8: { category: "Electronics", subcategory: "Accessories" },
  9: { category: "Electronics", subcategory: "Accessories" },
  10: { category: "Furniture", subcategory: "Office" },
  11: { category: "Electronics", subcategory: "Accessories" },
  12: { category: "Kitchen", subcategory: "Appliances" },
  13: { category: "Sports", subcategory: "Yoga" },
  14: { category: "Electronics", subcategory: "Accessories" },
};
