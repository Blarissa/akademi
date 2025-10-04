import { type RouteConfig } from "@react-router/dev/routes";

// Definindo rotas de forma mais simplificada
export default [
  // Layout principal com welcome.tsx
  {
    path: "/",
    file: "welcome/welcome.tsx",
    children: [
      // Rota index (padrão quando acessar "/")
      { 
        index: true,
        file: "routes/home.tsx"
      },
      // Rota para students
      { 
        path: "students", 
        file: "components/students.tsx"
      },
      // Rota para adicionar estudante
      { 
        path: "add-student", 
        file: "components/add-student.tsx"
      }
    ]
  }
] satisfies RouteConfig;
