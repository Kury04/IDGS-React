import { Api } from "./Api";

export const fetchProducts = async () => {
    try {
        const response = await Api.get('/products');
        return response.data.map((product: any) => ({
            id: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            createAt: product.createAt,
            updateAt: product.updateAt,
        }));
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new Error(`Fetch Product failed: ${errorMessage}`);
    }
};
