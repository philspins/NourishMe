// src/data/queries/Meal.js
/* eslint */

import {resolver} from "graphql-sequelize";

import {Meal as mealModel} from "../models";
import MealType from "../types/MealType";

const Meal = {
	type: MealType,
	resolve: resolver(mealModel)
};

export default Meal;
