import { rootReducer } from "./store/reducers/rootReducer";

export type Filters = {
	isGlutenFree: boolean;
	isVegan: boolean;
	isVegetarian: boolean;
	isLactoseFree: boolean;
};

export type RootState = ReturnType<typeof rootReducer>;

export type navProps = {
	navigation?: any;
	route?: any;
}