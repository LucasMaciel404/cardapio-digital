interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
}

export async function uploadProductImage(file: File) {
  const cloudName =
    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const uploadPreset =
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error(
      "Configurações do Cloudinary não encontradas."
    );
  }

  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const error = await response.text();

    throw new Error(
      `Erro ao enviar imagem: ${error}`
    );
  }

  const data =
    (await response.json()) as CloudinaryUploadResponse;

  return {
    imageUrl: data.secure_url,
    imagePublicId: data.public_id,
  };
}
export async function deleteProductImage(
  publicId: string
) {
  if (!publicId) {
    return;
  }

  const response = await fetch(
    `${
      import.meta.env.VITE_IMAGE_API_URL
    }/cloudinary/delete`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        publicId,
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();

    throw new Error(
      `Erro ao excluir imagem: ${error}`
    );
  }

  return response.json();
}