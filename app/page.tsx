import Image from "next/image";
import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import Search from "@/components/search";
import ProductList from "@/components/product-list";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronsRightIcon, Ghost } from "lucide-react";

const Home = () => {
  return  (
  <> 
  <Header />

  <div className="px-5 pt-6">
  <Search />
  </div>

  <div className="px-5 pt-6">
  <CategoryList />
  </div>

  <div className="px-5 pt-6">
    <Image
    src="/promobanner01.png"
    alt="Até 30% de desconto em Pizzas Selecionadas"
    height={0}
    width={0}
    className="w-full h-auto object-contain"
    sizes="100vw"
    quality={100}
    />
  </div>
  <div className="pt-6 space-y-4">
    <div className="px-5 flex justify-between items-center">
    <h2 className="font-semibold">Pedidos Recomendados</h2>
    <Button variant="ghost" className="text-primary p-0 hover:bg-transparent h-fit">
      Ver Todos
      <ChevronRightIcon size={16} />    
    </Button>

    </div>
  <ProductList />
  </div>
    
  </>
  );
};

export default Home;