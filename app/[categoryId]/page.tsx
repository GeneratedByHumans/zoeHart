// import Home from "@/components/home/home";
// import { fetchProductsByCategory } from "@/db/queries/products";
//import db from "@/db";

interface CategoryProducts {
  params: {
    categoryId: string;
  };
}

export default function CategoryProducts({ params }: CategoryProducts) {
  const { categoryId } = params;

  return <Home fetchData={() => fetchProductsByCategory(categoryId)} />;
}