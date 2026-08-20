import { useState } from "react";
import type { SubmitEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

import { auth } from "../../../services/firebase";

import {
  Button,
  Card,
  Container,
  ErrorMessage,
  Field,
  Form,
  Input,
  Label,
  Logo,
  Subtitle,
  Title,
} from "./styles";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/admin/dashboard", {
          replace: true,
        });
      }
    });

    return unsubscribe;
  }, [navigate]);
  
  async function handleSubmit(
    event: SubmitEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        "maciellucas487@gmail.com",
        password
      );

      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);
      setError("Senha incorreta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <Card>
        <Logo>M</Logo>

        <Title>Gerenciar cardápio</Title>

        <Subtitle>
          Entre para atualizar produtos, categorias, preços e imagens.
        </Subtitle>

        <Form onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="password">Senha de acesso</Label>

            <Input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Digite sua senha"
            />
          </Field>

          <Button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </Button>

          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
      </Card>
    </Container>
  );
}