import { useState, useEffect } from "react";
import ProductModel from "../models/ProductModel";
import { fetchProducts } from "../data/ApiService";

const useProductListViewModel = () => {
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const loadProducts = async() => {
            try{
                const productData = await fetchProducts();
                const productList = productData.map(
                    (product : any) => new ProductModel(
                        product.id,
                        product.name,
                        product.price,
                        product.description,
                        product.category,
                        product.createAt,
                        product.updateAt
                    )
                );

                setProducts(productList);
            } catch(error){
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        loadProducts();
    }, []);

    
    return { products, loading, error };
}

export default useProductListViewModel;