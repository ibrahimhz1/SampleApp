// app/NavigationTypes.ts
export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  category: string;
}

// Define the parameters for your navigation stack
export type RootStackParamList = {
  Home: undefined; // Home screen does not take any parameters
  AddToCart: { selectedProduct: Product }; // AddToCart screen expects selectedProduct as a parameter
};