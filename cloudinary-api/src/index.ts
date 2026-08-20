interface Env {
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
}

export default {
  async fetch(
    request: Request,
    env: Env
  ): Promise<Response> {
    const url = new URL(request.url);

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers,
      });
    }

    if (
      url.pathname === "/cloudinary/delete" &&
      request.method === "POST"
    ) {
      try {
        const body = await request.json<{
          publicId: string;
        }>();

        if (!body.publicId) {
          return Response.json(
            {
              error: "publicId é obrigatório",
            },
            {
              status: 400,
              headers,
            }
          );
        }

        const timestamp = Math.floor(
          Date.now() / 1000
        );

        const invalidate = "true";

        const stringToSign =
          `invalidate=${invalidate}` +
          `&public_id=${body.publicId}` +
          `&timestamp=${timestamp}` +
          env.CLOUDINARY_API_SECRET;

        const signature =
          await generateSha1(
            stringToSign
          );

        const formData =
          new FormData();

        formData.append(
          "public_id",
          body.publicId
        );

        formData.append(
          "timestamp",
          timestamp.toString()
        );

        formData.append(
          "api_key",
          env.CLOUDINARY_API_KEY
        );

        formData.append(
          "signature",
          signature
        );

        formData.append(
          "invalidate",
          invalidate
        );

        const response =
          await fetch(
            `https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUD_NAME}/image/destroy`,
            {
              method: "POST",
              body: formData,
            }
          );

        const data =
          await response.json();

        return Response.json(
          data,
          {
            status:
              response.status,
            headers,
          }
        );
      } catch (error) {
        console.error(error);

        return Response.json(
          {
            error:
              "Erro ao excluir imagem",
          },
          {
            status: 500,
            headers,
          }
        );
      }
    }

    return Response.json(
      {
        status: "ok",
      },
      {
        headers,
      }
    );
  },
};

async function generateSha1(
  value: string
) {
  const data =
    new TextEncoder().encode(
      value
    );

  const hash =
    await crypto.subtle.digest(
      "SHA-1",
      data
    );

  return Array.from(
    new Uint8Array(hash)
  )
    .map((byte) =>
      byte
        .toString(16)
        .padStart(2, "0")
    )
    .join("");
}