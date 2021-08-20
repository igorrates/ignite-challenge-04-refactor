import { FoodModel } from "./FoodModel";

export interface FoodProps {
    food: FoodModel;
    handleEditFood: (food: FoodModel) => void;
    handleDelete: (foodId: number) => void;
    available?: boolean;
}