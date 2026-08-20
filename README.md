# 🍽️ Cardápio Digital

Cardápio digital responsivo com painel administrativo para gerenciamento de produtos, categorias, preços, disponibilidade e imagens.

O projeto foi desenvolvido para atender restaurantes, lanchonetes, cafeterias e outros estabelecimentos que precisam manter seu cardápio online atualizado sem depender de alterações manuais no código.

O estabelecimento possui uma área administrativa protegida, enquanto seus clientes acessam apenas o cardápio público.

---

## ✨ Sobre o projeto

A proposta do Cardápio Digital é oferecer uma solução simples para um problema comum de pequenos e médios estabelecimentos:

> **permitir que o próprio estabelecimento atualize seu cardápio sempre que necessário.**

Através do painel administrativo é possível cadastrar produtos, alterar preços, organizar categorias, trocar imagens e controlar a disponibilidade dos itens.

As alterações realizadas no painel são persistidas no Firebase e refletidas no cardápio digital.

---

## 📱 Cardápio público

O cliente não precisa criar conta ou instalar aplicativo.

Basta acessar o cardápio pelo navegador para visualizar:

- Categorias do cardápio
- Produtos disponíveis
- Imagens dos produtos
- Descrições
- Preços atualizados
- Organização dos produtos por categoria

A interface foi desenvolvida com foco em responsividade, oferecendo uma boa experiência principalmente em smartphones.

---

## 🔐 Painel administrativo

O sistema possui uma área administrativa protegida por autenticação.

Através dela, o estabelecimento pode gerenciar o cardápio sem precisar modificar o código da aplicação.

### Gerenciamento de produtos

O administrador pode:

- Cadastrar produtos
- Editar produtos existentes
- Excluir produtos
- Alterar preços
- Alterar descrições
- Definir a categoria
- Definir a ordem de exibição
- Marcar produtos como disponíveis ou indisponíveis
- Fazer upload de imagens
- Substituir imagens existentes

Ao substituir ou excluir um produto, as imagens antigas também podem ser removidas automaticamente do armazenamento.

### Gerenciamento de categorias

O administrador também pode:

- Criar categorias
- Editar categorias
- Excluir categorias
- Definir a ordem de exibição

Exemplos:

```text
Pratos Executivos
Pratos Especiais
Acompanhamentos
Bebidas
Sobremesas
```

---

## 🛠️ Tecnologias utilizadas

### Frontend

- React
- TypeScript
- Vite
- React Router
- Styled Components

### Firebase

- Firebase Authentication
- Cloud Firestore
- Firebase Hosting

### Imagens

- Cloudinary

### API Serverless

- Cloudflare Workers
- TypeScript

### Desenvolvimento

- Git
- GitHub
- npm

---

## 🏗️ Arquitetura

O projeto foi dividido em dois módulos principais:

```text
cardapio-digital/
│
├── cardapio/
│   └── Aplicação React
│
└── cloudinary-api/
    └── Cloudflare Worker
```

A arquitetura da aplicação funciona da seguinte forma:

```text
                    CLIENTE
                       │
                       ▼
              Firebase Hosting
                       │
                       ▼
                  React / Vite
                       │
              ┌────────┴────────┐
              │                 │
              ▼                 ▼
           Firebase          Cloudinary
       Auth + Firestore       Imagens
                                ▲
                                │
                       Cloudflare Worker
```

### React

Responsável pela interface pública do cardápio e pelo painel administrativo.

### Firebase Authentication

Responsável pela autenticação e proteção da área administrativa.

### Cloud Firestore

Armazena informações como:

```text
Categorias
Produtos
Preços
Descrições
Disponibilidade
Ordem de exibição
URLs das imagens
```

### Cloudinary

Responsável pelo armazenamento e entrega das imagens dos produtos.

### Cloudflare Worker

Executa operações que não devem acontecer diretamente no navegador.

Por exemplo, a exclusão de imagens no Cloudinary exige credenciais privadas.

Por segurança:

```text
React
  ↓
Cloudflare Worker
  ↓
Cloudinary
```

Dessa forma, o `API_SECRET` do Cloudinary nunca é exposto no frontend.

---

## 📂 Estrutura do frontend

```text
cardapio/
│
├── src/
│   │
│   ├── components/
│   │   ├── Header/
│   │   ├── ProductCard/
│   │   └── ProtectedRoute/
│   │
│   ├── pages/
│   │   ├── Menu/
│   │   │
│   │   └── Admin/
│   │       ├── Login/
│   │       ├── Dashboard/
│   │       ├── Products/
│   │       └── Categories/
│   │
│   ├── routes/
│   │
│   ├── services/
│   │   ├── firebase.ts
│   │   ├── products.ts
│   │   ├── categories.ts
│   │   └── cloudinary.ts
│   │
│   ├── types/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── firebase.json
├── package.json
└── vite.config.ts
```

---

## 🔄 Fluxo de gerenciamento de imagens

Ao cadastrar um produto:

```text
Administrador
      │
      ▼
Seleciona imagem
      │
      ▼
React
      │
      ▼
Cloudinary
      │
      ▼
imageUrl + publicId
      │
      ▼
Firestore
```

Ao excluir uma imagem:

```text
Administrador
      │
      ▼
React
      │
      ▼
Cloudflare Worker
      │
      ▼
Cloudinary API
      │
      ▼
Imagem removida
```

Isso permite manter o armazenamento sincronizado com os produtos cadastrados.

---

## 🔒 Segurança

Algumas decisões foram tomadas para evitar exposição de credenciais sensíveis.

O frontend **não possui acesso ao `CLOUDINARY_API_SECRET`**.

As operações que precisam dessa credencial são executadas através do Cloudflare Worker.

Arquivos contendo variáveis de ambiente também não devem ser versionados:

```text
.env
.dev.vars
```

---

## ⚙️ Configuração do projeto

### 1. Clone o repositório

```bash
git clone https://github.com/LucasMaciel404/cardapio-digital.git
```

Entre no projeto:

```bash
cd cardapio-digital
```

---

## 💻 Executando o frontend

Entre na pasta:

```bash
cd cardapio
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo:

```text
.env
```

Configure:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

VITE_CLOUDINARY_CLOUD_NAME=
VITE_CLOUDINARY_UPLOAD_PRESET=

VITE_IMAGE_API_URL=
```

Execute:

```bash
npm run dev
```

---

## ☁️ Executando o Cloudflare Worker

Entre em:

```bash
cd cloudinary-api
```

Instale as dependências:

```bash
npm install
```

Para desenvolvimento local, crie:

```text
.dev.vars
```

Com:

```env
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Execute:

```bash
npm run dev
```

---

## 🚀 Build

Para gerar o build do frontend:

```bash
npm run build
```

O Vite gera os arquivos de produção em:

```text
dist/
```

---

## 🌐 Deploy

A aplicação foi projetada para utilizar:

```text
Frontend          → Firebase Hosting
Banco de dados    → Cloud Firestore
Autenticação      → Firebase Authentication
Imagens           → Cloudinary
API serverless    → Cloudflare Workers
```

Isso permite manter uma arquitetura simples e adequada para cardápios digitais.

---

## 🏪 Aplicação comercial

O projeto pode ser personalizado para diferentes tipos de estabelecimentos:

- Restaurantes
- Lanchonetes
- Hamburguerias
- Pizzarias
- Cafeterias
- Padarias
- Docerias
- Bares
- Food trucks
- Outros estabelecimentos

Cada implementação pode receber identidade visual própria, incluindo:

- Logo
- Nome do estabelecimento
- Paleta de cores
- Categorias
- Produtos
- Imagens
- Informações comerciais

---

## 💡 Possíveis evoluções

Algumas funcionalidades que podem ser adicionadas futuramente:

- Pesquisa de produtos
- Filtro rápido por categorias
- Integração com WhatsApp
- QR Code para acesso ao cardápio
- Horários de funcionamento
- Produtos em destaque
- Promoções
- Combos
- Informações do estabelecimento
- Personalização de tema
- Dashboard com métricas
- Pedidos online

---

## 👨‍💻 Autor

Desenvolvido por **Lucas Maciel**.

GitHub: [LucasMaciel404](https://github.com/LucasMaciel404)

---

## 📄 Licença

Projeto desenvolvido como solução de cardápio digital e base para implementações comerciais.
