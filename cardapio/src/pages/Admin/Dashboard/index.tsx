import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../../../services/firebase";

import {
  Brand,
  BrandIcon,
  BrandName,
  CardDescription,
  CardIcon,
  CardTitle,
  Container,
  Content,
  DashboardCard,
  Grid,
  Header,
  LogoutButton,
  Subtitle,
  Title,
  Welcome,
} from "./styles";

export default function AdminDashboard() {
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut(auth);

    navigate("/admin");
  }

  return (
    <Container>
      <Header>
        <Brand>
          <BrandIcon>M</BrandIcon>
          <BrandName>Menu Admin</BrandName>
        </Brand>

        <LogoutButton onClick={handleLogout}>
          Sair
        </LogoutButton>
      </Header>

      <Content>
        <Welcome>
          <Title>Painel administrativo</Title>

          <Subtitle>
            Gerencie seu cardápio de forma rápida e simples.
          </Subtitle>
        </Welcome>

        <Grid>
          <DashboardCard
            onClick={() => navigate("/admin/products")}
          >
            <CardIcon>🍔</CardIcon>

            <CardTitle>Produtos</CardTitle>

            <CardDescription>
              Adicione, edite, remova produtos, preços e imagens.
            </CardDescription>
          </DashboardCard>

          <DashboardCard
            onClick={() => navigate("/admin/categories")}
          >
            <CardIcon>📂</CardIcon>

            <CardTitle>Categorias</CardTitle>

            <CardDescription>
              Organize os produtos em categorias como pratos, bebidas e sobremesas.
            </CardDescription>
          </DashboardCard>
        </Grid>
      </Content>
    </Container>
  );
}