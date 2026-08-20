import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

import { storage } from "./firebase";

export async function uploadProductImage(file: File) {
  const extension =
    file.name.split(".").pop() ?? "jpg";

  const fileName = `${crypto.randomUUID()}.${extension}`;

  const imagePath = `products/${fileName}`;

  const imageRef = ref(storage, imagePath);

  await uploadBytes(imageRef, file);

  const imageUrl = await getDownloadURL(imageRef);

  return {
    imageUrl,
    imagePath,
  };
}

export async function deleteProductImage(
  imagePath: string
) {
  if (!imagePath) {
    return;
  }

  const imageRef = ref(storage, imagePath);

  await deleteObject(imageRef);
}