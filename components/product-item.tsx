import { calculateProductTotalPrice } from "@/app/_helpers/price";
import { Product } from "@prisma/client";
import Image from "next/image";

interface ProductItemProps {
    product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <div className="w-[150px] min-w-[150px] space-y-2">
            <div className="h-[150px] w-full relative">
                <Image 
                src={product.imageUrl} 
                alt={product.name} 
                fill 
                className="object-cover rounded-lg shadow-md" />
            </div>
            <div>
                <h2>{product.name}</h2>
                <div className="flex gap-4">
                    <h3>
                        R$
                        {Intl.NumberFormat("pt-BR", {
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        }).format(calculateProductTotalPrice(product))}
                    </h3>
                        {product.discountPercentage > 0 && (
                        <span className="text-muted-foreground line-through">
                            R$
                            {Intl.NumberFormat("pt-BR", {
                            currency: "BRL",
                            minimumFractionDigits: 2,
                            }).format(Number(product.price))}
                        </span>
                    )}
                </div>
            </div>
        </div>
        
    );
   
}

export default ProductItem;