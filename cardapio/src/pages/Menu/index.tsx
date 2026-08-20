import { useEffect, useState } from "react";

import {
  getCategories,
} from "../../services/categories";

import {
  getProducts,
} from "../../services/products";

import type {
  Category,
} from "../../types/Category";

import type {
  Product,
} from "../../types/Product";

import {
  Brand,
  CategorySection,
  CategoryTitle,
  Container,
  Content,
  Empty,
  Hero,
  Loading,
  Price,
  ProductBody,
  ProductCard,
  ProductDescription,
  ProductImage,
  ProductName,
  ProductsGrid,
  Subtitle,
  Title,
} from "./styles";

export default function Menu() {
  const [categories, setCategories] =
    useState<Category[]>([]);

  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState(true);

  async function loadMenu() {
    try {
      const [
        categoriesData,
        productsData,
      ] = await Promise.all([
        getCategories(),
        getProducts(),
      ]);

      setCategories(
        categoriesData.sort(
          (a, b) =>
            a.order - b.order
        )
      );

      setProducts(
        productsData
          .filter(
            (product) =>
              product.available
          )
          .sort(
            (a, b) =>
              a.order - b.order
          )
      );
    } catch (error) {
      console.error(
        "Erro ao carregar cardápio:",
        error
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMenu();
  }, []);

  if (loading) {
    return (
      <Loading>
        Carregando cardápio...
      </Loading>
    );
  }

  return (
    <Container>
      <Hero>
        <Brand>M</Brand>

        <Title>
          Nosso cardápio
        </Title>

        <Subtitle>
          Escolha entre nossos produtos e descubra
          seus favoritos.
        </Subtitle>
      </Hero>

      <Content>
        {categories.map(
          (category) => {
            const categoryProducts =
              products.filter(
                (product) =>
                  product.categoryId ===
                  category.id
              );

            if (
              categoryProducts.length === 0
            ) {
              return null;
            }

            return (
              <CategorySection
                key={category.id}
              >
                <CategoryTitle>
                  {category.name}
                </CategoryTitle>

                <ProductsGrid>
                  {categoryProducts.map(
                    (product) => (
                      <ProductCard
                        key={
                          product.id
                        }
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
                            {
                              product.name
                            }
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
                        </ProductBody>
                      </ProductCard>
                    )
                  )}
                </ProductsGrid>
              </CategorySection>
            );
          }
        )}

        {products.length === 0 && (
          <Empty>
            Nenhum produto disponível no momento.
          </Empty>
        )}
      </Content>
    </Container>
  );
}