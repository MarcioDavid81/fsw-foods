import Image from "next/image";
import CategoryList from "@/components/category-list";
import Header from "@/components/header";
import Search from "@/components/search";

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
    
  </>
  );
};

export default Home;