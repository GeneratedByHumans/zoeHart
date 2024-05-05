// import Home from "@/components/home/home";
// import { fetchProductsByCategory } from "@/db/queries/products";
//import db from "@/db";
// app/[categoryid]/page.tsx
// Assuming 'Home' is your default layout and 'fetchProductsByCategory' fetches data based on the category ID.
import Home from "@/components/home/home";
import { fetchProductsByCategory } from "@/db/queries/products";

interface CategoryProducts {
  params: {
    categoryId: string;
  };
}

export default function CategoryProducts({ params }: CategoryProducts) {
  const { categoryId } = params;

  return (
    <Home fetchData={() => fetchProductsByCategory(categoryId)} />
  );
}
