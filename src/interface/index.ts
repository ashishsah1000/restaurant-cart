export interface FoodItem {
  id?: number;
  name?: string;
  description?: string;
  specialTag?: string;
  category?: string;
  price?: number;
  image?: string;
}

export interface menu {
  items?: FoodItem[];
}
