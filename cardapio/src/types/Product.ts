export interface Product {
  id: string;

  name: string;
  description: string;
  price: number;

  categoryId: string;

  imageUrl: string;
  imagePublicId: string;

  available: boolean;
  order: number;
}