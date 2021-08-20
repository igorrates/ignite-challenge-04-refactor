import { Food } from "./Food";

export interface FoodProps {
    food: Food;
    handleEditFood: (food: Food) => void;
    handleDelete: (foodId: number) => void;
    available: boolean;
}