import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../../../services/categories";

import type { Category } from "../../../types/Category";

import {
  Actions,
  BackButton,
  CancelButton,
  CategoryCard,
  CategoryList,
  CategoryName,
  Container,
  Content,
  DeleteButton,
  EditButton,
  Empty,
  Field,
  FormCard,
  Header,
  HeaderActions,
  Input,
  Label,
  SaveButton,
  SmallField,
  Title,
} from "./styles";

export default function Categories() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);

  const [name, setName] = useState("");
  const [order, setOrder] = useState(1);

  const [editingCategory, setEditingCategory] =
    useState<Category | null>(null);

  const [loading, setLoading] = useState(false);

  async function loadCategories() {
    try {
      const data = await getCategories();

      setCategories(data);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  function resetForm() {
    setName("");
    setOrder(categories.length + 1);
    setEditingCategory(null);
  }

  function handleEdit(category: Category) {
    setEditingCategory(category);
    setName(category.name);
    setOrder(category.order);
  }

  async function handleSubmit() {
    if (!name.trim()) {
      return;
    }

    setLoading(true);

    try {
      if (editingCategory) {
        await updateCategory(
          editingCategory.id,
          name.trim(),
          order
        );
      } else {
        await createCategory(
          name.trim(),
          order
        );
      }

      resetForm();

      await loadCategories();
    } catch (error) {
      console.error("Erro ao salvar categoria:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(category: Category) {
    const confirmed = window.confirm(
      `Deseja realmente excluir "${category.name}"?`
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteCategory(category.id);

      await loadCategories();
    } catch (error) {
      console.error("Erro ao excluir categoria:", error);
    }
  }

  return (
    <Container>
      <Content>
        <Header>
          <div>
            <Title>Categorias</Title>
          </div>

          <HeaderActions>
            <BackButton
              onClick={() =>
                navigate("/admin/dashboard")
              }
            >
              Voltar
            </BackButton>
          </HeaderActions>
        </Header>

        <FormCard
          onSubmit={(event) => {
            event.preventDefault();

            handleSubmit();
          }}
        >
          <Field>
            <Label>Nome da categoria</Label>

            <Input
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Ex: Hambúrgueres"
            />
          </Field>

          <SmallField>
            <Label>Ordem</Label>

            <Input
              type="number"
              min={1}
              value={order}
              onChange={(event) =>
                setOrder(Number(event.target.value))
              }
            />
          </SmallField>

          {editingCategory && (
            <CancelButton
              type="button"
              onClick={resetForm}
            >
              Cancelar
            </CancelButton>
          )}

          <SaveButton
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Salvando..."
              : editingCategory
                ? "Salvar"
                : "Adicionar"}
          </SaveButton>
        </FormCard>

        <CategoryList>
          {categories.length === 0 ? (
            <Empty>
              Nenhuma categoria cadastrada.
            </Empty>
          ) : (
            categories.map((category) => (
              <CategoryCard key={category.id}>
                <CategoryName>
                  {category.name}
                </CategoryName>

                <Actions>
                  <EditButton
                    onClick={() =>
                      handleEdit(category)
                    }
                  >
                    Editar
                  </EditButton>

                  <DeleteButton
                    onClick={() =>
                      handleDelete(category)
                    }
                  >
                    Excluir
                  </DeleteButton>
                </Actions>
              </CategoryCard>
            ))
          )}
        </CategoryList>
      </Content>
    </Container>
  );
}