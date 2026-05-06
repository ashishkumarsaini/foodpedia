import { fetchData } from './api.js';

export const getDishes = async () => {
  const mealsRoutePath = `/public/meals`
  return await fetchData(mealsRoutePath, "GET");
}
