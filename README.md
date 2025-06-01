# Identificador de Bandeira de Cartão

Este projeto identifica a bandeira de cartões de crédito a partir do número informado, com backend em Node.js/TypeScript e frontend em React.

## Funcionalidades

- Identificação automática das principais bandeiras de cartão (Visa, MasterCard, American Express, Discover).
- Interface web simples para digitar o número do cartão e ver a bandeira em tempo real.

## Estrutura do Projeto

```
credit-card-flag-identifier/
├── backend/
│   ├── src/
│   │   ├── app.ts
│   │   ├── cardIdentifier.ts
│   │   └── types/
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── CardFlagIdentifier.tsx
│   │   ├── App.tsx
│   │   └── App.css
│   ├── package.json
│   └── ...
└── README.md
```

## Como rodar o projeto

### Backend

1. Instale as dependências:
   ```bash
   cd backend
   npm install
   ```

2. Compile o TypeScript:
   ```bash
   npx tsc
   ```

3. Execute o backend:
   ```bash
   node dist/app.js
   ```

### Frontend

1. Instale as dependências:
   ```bash
   cd frontend
   npm install
   ```

2. Rode o frontend:
   ```bash
   npm start
   ```

3. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Tecnologias

- Node.js
- TypeScript
- React
- CSS

---

Desenvolvido por Lidiane.
