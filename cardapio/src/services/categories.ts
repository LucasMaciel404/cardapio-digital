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

import type { Category } from "../types/Category";

const categoriesCollection = collection(db, "categories");

export async function getCategories(): Promise<Category[]> {
  const categoriesQuery = query(
    categoriesCollection,
    orderBy("order", "asc")
  );

  const snapshot = await getDocs(categoriesQuery);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as Category[];
}

export async function createCategory(
  name: string,
  order: number
) {
  await addDoc(categoriesCollection, {
    name,
    order,
  });
}

export async function updateCategory(
  id: string,
  name: string,
  order: number
) {
  const categoryRef = doc(db, "categories", id);

  await updateDoc(categoryRef, {
    name,
    order,
  });
}

export async function deleteCategory(id: string) {
  const categoryRef = doc(db, "categories", id);

  await deleteDoc(categoryRef);
}