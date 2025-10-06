# Akademi - Sistema de Gerenciamento de Alunos

Plataforma web para gerenciamento de alunos em ambiente escolar, com funcionalidades para visualização e cadastro de estudantes.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/blarissa/akademi)

## 🚀 Funcionalidades

- 📊 Listagem de alunos com paginação e filtros
- ➕ Cadastro de novos alunos
- 🔍 Filtros por data (mais novos/mais antigos)
- 📱 Design responsivo
- 💾 Persistência de dados via localStorage

## 🛠️ Tecnologias

- ⚛️ React com TypeScript
- 🧭 React Router v7
- 🎨 TailwindCSS
- 📦 Vite como bundler
- 🦸‍♂️ Heroicons para ícones

## 🏁 Iniciando o Projeto

### Para executar no StackBlitz

1. Clique no botão "Open in StackBlitz" acima
2. O ambiente será configurado automaticamente
3. O projeto será executado no navegador, pronto para teste

### Para executar localmente

```bash
# Instalar dependências (recomendamos usar npm, não yarn)
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

⚠️ **Importante:** Use npm em vez de yarn para evitar problemas de compatibilidade com o módulo `@tailwindcss/oxide`.

O aplicativo estará disponível em `http://localhost:5173`.

## 🔧 Construindo para produção

```bash
npm run build
```

## ⚙️ Configuração no StackBlitz

Para garantir que o projeto funcione corretamente no StackBlitz:

- Aguarde a inicialização completa do ambiente
- Se ocorrer erro de dependências, tente os seguintes passos:

```bash
# Limpe o cache do npm
npm cache clean --force

# Instale as dependências com flag para ignorar erros opcionais
npm install --no-optional --force

# Se ainda houver problemas, tente esta versão específica do React Router
npm install react-router@7.0.0 react-router-dom@7.0.0 --force

# Inicie o servidor de desenvolvimento
npm run dev
```

- Se persistirem erros, você também pode clicar em "Fork" para criar uma cópia do projeto e tentar em um novo ambiente

## 📝 Notas

- Este projeto utiliza localStorage para persistência de dados
- O sistema inclui validação completa de formulários
- A interface segue o design fornecido no Figma

## ⚠️ Resolução de Problemas

Se você estiver enfrentando problemas ao executar no StackBlitz, aqui estão algumas soluções:

- **Incompatibilidade de versões**: Este projeto usa React 19 e React Router 7, que podem não ser totalmente compatíveis com o ambiente StackBlitz. Você pode tentar:

```bash
# Ajustar para versões mais estáveis
npm install react@18.2.0 react-dom@18.2.0 --save --force
npm install react-router@6.16.0 react-router-dom@6.16.0 --save --force
```

- **Problemas com @react-router/node e @react-router/serve**: Estas dependências podem causar erros. Use uma versão simplificada:

```bash
# Instale react-router básico sem as extensões de servidor
npm uninstall @react-router/node @react-router/serve @react-router/dev
npm install react-router react-router-dom --save --force
```

- **Ajuste os scripts no package.json**: Se o comando `react-router dev` falhar, edite para usar o vite diretamente:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build"
}
```

- **Erro de arquitetura com @tailwindcss/oxide**: Se encontrar o erro `The CPU architecture "x64" is incompatible with this module`, você tem algumas opções:

```bash
# Opção 1: Use npm em vez de yarn
rm yarn.lock  # ou del yarn.lock no Windows
npm cache clean --force
npm install

# Opção 2: Instale uma versão anterior do TailwindCSS
npm uninstall tailwindcss @tailwindcss/vite
npm install tailwindcss@3.3.5 postcss autoprefixer --save-dev

# Atualize a configuração para TailwindCSS v3 se necessário
```

  > Este projeto usa TailwindCSS v4.1.13, que pode ter problemas de compatibilidade em algumas arquiteturas.

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

