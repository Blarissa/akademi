import { type RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    file: "welcome/welcome.tsx",
    children: [
      { 
        index: true,
        file: "routes/home.tsx"
      },
      { 
        path: "students", 
        file: "components/students.tsx"
      },
      { 
        path: "add-student", 
        file: "components/add-student.tsx"
      },
      {
        path: "page-not-found",
        file: "components/page-not-found.tsx"
      },
    ]
  }
] satisfies RouteConfig;
