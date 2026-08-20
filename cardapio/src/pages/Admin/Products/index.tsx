import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../../services/products";

import {
  deleteProductImage,
  uploadProductImage,
} from "../../../services/cloudinary";

import {
  getCategories,
} from "../../../services/categories";

import type { Category } from "../../../types/Category";
import type { Product } from "../../../types/Product";

import {
  Actions,
  BackButton,
  CancelButton,
  CheckboxArea,
  Container,
  Content,
  DeleteButton,
  EditButton,
  Empty,
  Field,
  FormActions,
  FormCard,
  FullField,
  Header,
  HeaderText,
  ImagePreview,
  Input,
  Label,
  Price,
  ProductBody,
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductName,
  ProductsGrid,
  SaveButton,
  Select,
  Status,
  Subtitle,
  TextArea,
  Title,
} from "./styles";

export default function Products() {
  const navigate = useNavigate();

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [editingProduct, setEditingProduct] =
    useState<Product | null>(null);

  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");

  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] =
    useState("");

  const [available, setAvailable] =
    useState(true);

  const [order, setOrder] = useState(1);

  const [imageFile, setImageFile] =
    useState<File | null>(null);

  const [imagePreview, setImagePreview] =
    useState("");

  const [showForm, setShowForm] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  async function loadData() {
    try {
      const [
        productsData,
        categoriesData,
      ] = await Promise.all([
        getProducts(),
        getCategories(),
      ]);

      setProducts(productsData);
      setCategories(categoriesData);
    } catch (error) {
      console.error(
        "Erro ao carregar dados:",
        error
      );
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  function resetForm() {
    setName("");
    setDescription("");
    setPrice("");
    setCategoryId("");
    setAvailable(true);
    setOrder(products.length + 1);

    setImageFile(null);
    setImagePreview("");

    setEditingProduct(null);

    setShowForm(false);
  }

  function handleImageChange(
    file: File | undefined
  ) {
    if (!file) {
      return;
    }

    setImageFile(file);

    const preview = URL.createObjectURL(file);

    setImagePreview(preview);
  }

  function handleEdit(product: Product) {
    setEditingProduct(product);

    setName(product.name);
    setDescription(product.description);

    setPrice(
      product.price.toString()
    );

    setCategoryId(
      product.categoryId
    );

    setAvailable(
      product.available
    );

    setOrder(product.order);

    setImagePreview(
      product.imageUrl
    );

    setImageFile(null);

    setShowForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleSubmit() {
    if (
      !name.trim() ||
      !price ||
      !categoryId
    ) {
      alert(
        "Preencha nome, preço e categoria."
      );

      return;
    }

    setLoading(true);

    try {
      let imageUrl =
        editingProduct?.imageUrl ?? "";

      let imagePublicId =
        editingProduct?.imagePublicId ?? "";

      if (imageFile) {
        const uploadedImage =
          await uploadProductImage(imageFile);

        imageUrl =
          uploadedImage.imageUrl;

        imagePublicId =
          uploadedImage.imagePublicId;
      }

      const productData = {
        name: name.trim(),

        description:
          description.trim(),

        price: Number(
          price.replace(",", ".")
        ),

        categoryId,

        imageUrl,
        imagePublicId,

        available,
        order,
      };

      if (editingProduct) {
        await updateProduct(
          editingProduct.id,
          productData
        );

        if (
          imageFile &&
          editingProduct.imagePublicId &&
          editingProduct.imagePublicId !== imagePublicId
        ) {
          await deleteProductImage(
            editingProduct.imagePublicId
          );
        }
      } else {
        await createProduct(
          productData
        );
      }

      resetForm();

      await loadData();
    } catch (error) {
      console.error(
        "Erro ao salvar produto:",
        error
      );

      alert(
        "Erro ao salvar produto. Veja o console."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(
    product: Product
  ) {
    const confirmed = window.confirm(
      `Deseja excluir "${product.name}"?`
    );

    if (!confirmed) {
      return;
    }

    try {
      if (product.imagePublicId) {
        await deleteProductImage(
          product.imagePublicId
        );
      }

      await deleteProduct(
        product.id
      );

      await loadData();
    } catch (error) {
      console.error(
        "Erro ao excluir produto:",
        error
      );

      alert(
        "Não foi possível excluir o produto."
      );
    }
  }

  return (
    <Container>
      <Content>
        <Header>
          <HeaderText>
            <Title>Produtos</Title>

            <Subtitle>
              Gerencie os itens do seu cardápio.
            </Subtitle>
          </HeaderText>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <BackButton
              onClick={() =>
                navigate(
                  "/admin/dashboard"
                )
              }
            >
              Voltar
            </BackButton>

            <SaveButton
              onClick={() =>
                setShowForm(true)
              }
            >
              + Novo produto
            </SaveButton>
          </div>
        </Header>

        {showForm && (
          <FormCard
            onSubmit={(event) => {
              event.preventDefault();

              handleSubmit();
            }}
          >
            <Field>
              <Label>
                Nome do produto
              </Label>

              <Input
                value={name}
                onChange={(event) =>
                  setName(
                    event.target.value
                  )
                }
                placeholder="Ex: X-Bacon"
              />
            </Field>

            <Field>
              <Label>Preço</Label>

              <Input
                value={price}
                onChange={(event) =>
                  setPrice(
                    event.target.value
                  )
                }
                placeholder="Ex: 25,90"
              />
            </Field>

            <FullField>
              <Label>Descrição</Label>

              <TextArea
                value={description}
                onChange={(event) =>
                  setDescription(
                    event.target.value
                  )
                }
                placeholder="Descrição do produto"
              />
            </FullField>

            <Field>
              <Label>Categoria</Label>

              <Select
                value={categoryId}
                onChange={(event) =>
                  setCategoryId(
                    event.target.value
                  )
                }
              >
                <option value="">
                  Selecione
                </option>

                {categories.map(
                  (category) => (
                    <option
                      key={
                        category.id
                      }
                      value={
                        category.id
                      }
                    >
                      {category.name}
                    </option>
                  )
                )}
              </Select>
            </Field>

            <Field>
              <Label>Ordem</Label>

              <Input
                type="number"
                min={1}
                value={order}
                onChange={(event) =>
                  setOrder(
                    Number(
                      event.target
                        .value
                    )
                  )
                }
              />
            </Field>

            <FullField>
              <Label>
                Imagem do produto
              </Label>

              <Input
                type="file"
                accept="image/*"
                onChange={(event) =>
                  handleImageChange(
                    event.target
                      .files?.[0]
                  )
                }
              />

              {imagePreview && (
                <ImagePreview
                  src={imagePreview}
                  alt="Preview"
                />
              )}
            </FullField>

            <FullField>
              <CheckboxArea>
                <input
                  type="checkbox"
                  checked={available}
                  onChange={(event) =>
                    setAvailable(
                      event.target
                        .checked
                    )
                  }
                />

                Produto disponível
              </CheckboxArea>
            </FullField>

            <FormActions>
              <CancelButton
                type="button"
                onClick={resetForm}
              >
                Cancelar
              </CancelButton>

              <SaveButton
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Salvando..."
                  : editingProduct
                    ? "Salvar alterações"
                    : "Adicionar produto"}
              </SaveButton>
            </FormActions>
          </FormCard>
        )}

        <ProductsGrid>
          {products.length === 0 ? (
            <Empty>
              Nenhum produto cadastrado.
            </Empty>
          ) : (
            products.map(
              (product) => (
                <ProductCard
                  key={product.id}
                >
                  {product.imageUrl ? (
                    <ProductImage
                      src={
                        product.imageUrl
                      }
                      alt={
                        product.name
                      }
                    />
                  ) : (
                    <ProductImage
                      as="div"
                    />
                  )}

                  <ProductBody>
                    <ProductName>
                      {product.name}
                    </ProductName>

                    <ProductDescription>
                      {
                        product.description
                      }
                    </ProductDescription>

                    <Price>
                      {product.price.toLocaleString(
                        "pt-BR",
                        {
                          style:
                            "currency",
                          currency:
                            "BRL",
                        }
                      )}
                    </Price>

                    <Status
                      $available={
                        product.available
                      }
                    >
                      {product.available
                        ? "Disponível"
                        : "Indisponível"}
                    </Status>

                    <Actions>
                      <EditButton
                        onClick={() =>
                          handleEdit(
                            product
                          )
                        }
                      >
                        Editar
                      </EditButton>

                      <DeleteButton
                        onClick={() =>
                          handleDelete(
                            product
                          )
                        }
                      >
                        Excluir
                      </DeleteButton>
                    </Actions>
                  </ProductBody>
                </ProductCard>
              )
            )
          )}
        </ProductsGrid>
      </Content>
    </Container>
  );
}