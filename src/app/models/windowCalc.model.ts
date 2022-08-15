import { Window } from "./window.model";

export interface WindowCalc extends Window {
    regularPriceQuantity?: number;
    chemicalPriceQuantity?: number;
    postConstructionPriceQuantity?: number;
}