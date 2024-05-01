import { calculateProductTotalPrice } from "@/app/_helpers/price";
import { Prisma } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";

interface ProductItemProps {
    product: Prisma.ProductGetPayload<{
        include: {
            restaurant: {
                select:{
                    name: true
                }
            }
        }
    }>;
}

const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <div className="w-[150px] min-w-[150px] space-y-2">
            <div className="h-[150px] w-full relative">
                <Image 
                src={product.imageUrl} 
                alt={product.name} 
                fill 
                className="object-cover rounded-lg shadow-md" 
                />

                {product.discountPercentage && (
                <div className="top-2 left-2 gap-[2px] bg-primary py-[2px] px-2 rounded-full text-white flex items-center">
                    <ArrowDownIcon size={12} />
                    <span className="font-semibold text-xs">{product.discountPercentage}%</span>
                </div>
                )}
            </div>
            <div>
                <h2 className="truncate text-sm">{product.name}</h2>
                <div className="flex gap-1">
                    <h3 className=" font-semibold">
                        R$
                        {Intl.NumberFormat("pt-BR", {
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        }).format(calculateProductTotalPrice(product))}
                    </h3>
                    {product.discountPercentage > 0 && (
                    <span className="text-muted-foreground line-through text-xs">
                        R$
                        {Intl.NumberFormat("pt-BR", {
                        currency: "BRL",
                        minimumFractionDigits: 2,
                        }).format(Number(product.price))}
                    </span>
                    )}
                </div>
                <span className="block text-muted-foreground text-xs">{product.restaurant.name}</span>
            </div>
        </div>
        
    );
   
};

export default ProductItem;