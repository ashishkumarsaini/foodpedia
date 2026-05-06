export const bgColors = [
  'bg-[#f15a38]',
  'bg-[#f39a25]',
  'bg-[#5cac79]',
  'bg-[#202020]',
  'bg-[#e85c72]'
];

export const formatDishData = (dish) => {
  const dishesIngKeys = Object.entries(dish).filter(([key, value]) => value && key.startsWith('strIngredient'));

  const ingredientsWithMeasure = dishesIngKeys.map(([, ingredient], index) => {
    const measure = dish[`strMeasure${index + 1}`];

    return {
      ingredient,
      measure
    }
  });

  const accentColor = bgColors[Math.floor(Math.random() * bgColors.length)]

  return {
    id: dish.idMeal,
    name: dish.strMeal,
    thumbnail: dish.strMealThumb,
    category: dish.strCategory,
    cusine: dish.strArea,
    ingredientsWithMeasure,
    instructions: dish.strInstructions.split('\r\n'),
    tags: dish.strTags,
    source: dish.strSource,
    youtube: dish.strYoutube,
    accentColor
  }
}
