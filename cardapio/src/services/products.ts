import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";

import { db } from "./firebase";

import type { Product } from "../types/Product";

const productsCollection = collection(
  db,
  "products"
);

export async function getProducts(): Promise<Product[]> {
  const productsQuery = query(
    productsCollection,
    orderBy("order", "asc")
  );

  const snapshot = await getDocs(productsQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as Product[];
}

export async function createProduct(
  product: Omit<Product, "id">
) {
  await addDoc(productsCollection, product);
}

export async function updateProduct(
  id: string,
  product: Partial<Omit<Product, "id">>
) {
  const productRef = doc(
    db,
    "products",
    id
  );

  await updateDoc(productRef, product);
}

export async function deleteProduct(
  id: string
) {
  const productRef = doc(
    db,
    "products",
    id
  );

  await deleteDoc(productRef);
}