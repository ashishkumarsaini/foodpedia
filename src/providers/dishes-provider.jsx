import { useContext, useEffect } from "react";
import { createContext, useState } from "react"
import { getDishes } from "../services/dishes";
import { formatDishData } from "../utils/dishes";

const DishesContext = createContext({ dishes: null, getDish: () => null, getRecommendations: () => [] });

// eslint-disable-next-line react-refresh/only-export-components
export const useDishes = () => {
  return useContext(DishesContext);
}

export const DishesProvider = ({ children }) => {
  const [dishes, setDishes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDishesData = async () => {
      try {
        const response = await getDishes();
        if (response.success && response.data?.data?.length) {
          const dishes = response.data.data;
          const formattedDishes = dishes.map((dish) => formatDishData(dish));
          setDishes(formattedDishes);
        } else {
          setDishes(null);
        }

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getDishesData();
  }, []);

  const getDish = (dishId) => {
    if (!dishes?.length) {
      return undefined;
    }

    return dishes.find((dish) => dish.id === dishId);
  }

  const getRecommendations = () => {
    if (!dishes?.length) {
      return []
    }

    return dishes.slice(0, 4);
  }

  if (loading) {
    return <div className="h-screen w-full flex items-center justify-center">Loading...</div>
  }

  if (!dishes || !dishes.length) {
    return <div className="h-screen w-full flex items-center justify-center">No Dishes found!</div>
  }

  return (
    <DishesContext value={{ dishes, getDish, getRecommendations }}>{children}</DishesContext>
  )
}