# Akademi - Sistema de Gerenciamento de Alunos

Plataforma web para gerenciamento de alunos em ambiente escolar, com funcionalidades para visualização e cadastro de estudantes.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/blarissa/akademi)

## 🚀 Funcionalidades

- � Listagem de alunos com paginação e filtros
- ➕ Cadastro de novos alunos
- 🔍 Filtros por data (mais novos/mais antigos)
- � Design responsivo
- 💾 Persistência de dados via localStorage

## 🛠️ Tecnologias

- ⚛️ React com TypeScript
- 🧭 React Router v7
- � TailwindCSS
- 📦 Vite como bundler
- 🦸‍♂️ Heroicons para ícones

## 🏁 Iniciando o Projeto

### Para executar no StackBlitz

1. Clique no botão "Open in StackBlitz" acima
2. O ambiente será configurado automaticamente
3. O projeto será executado no navegador, pronto para teste

### Para executar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`.

## 🔧 Construindo para produção

```bash
npm run build
```

## ⚙️ Configuração no StackBlitz

Para garantir que o projeto funcione corretamente no StackBlitz:

- Aguarde a inicialização completa do ambiente
- Se necessário, use o terminal do StackBlitz para executar:

```bash
npm install
npm run dev
```

- Se encontrar problemas com dependências, tente atualizar com:

```bash
npm update
```

## 📝 Notas

- Este projeto utiliza localStorage para persistência de dados
- O sistema inclui validação completa de formulários
- A interface segue o design fornecido no Figma

## 🚢 Deploy

### Estrutura de build

Após executar `npm run build`, você terá a seguinte estrutura:

```text
├── package.json
├── package-lock.json
├── build/
│   ├── client/    # Recursos estáticos
│   └── server/    # Código do lado do servidor
```

### Docker (opcional)

Para construir e executar usando Docker:

```bash
docker build -t akademi .

# Executar o container
docker run -p 3000:3000 akademi
```

---

Desenvolvido com ❤️ usando React e TailwindCSS.