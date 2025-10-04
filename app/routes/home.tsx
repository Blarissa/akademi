import Students from '../components/students';

export function meta() {
  return [
    { title: "Akademi - Dashboard" },
    { name: "description", content: "Painel principal do Akademi!" },
  ];
}

export default function Home() {
  return <Students />;
}
