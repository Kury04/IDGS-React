export default class ProductModel {
    id : string
    name : string
    price : number
    description: string
    catergory: string
    createdAt: string
    updatedAt: string 

    constructor(
            id: string, 
            name: string, 
            price: number,
            description: string, 
            catergory: string, 
            createdAt: string, 
            updatedAt: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.catergory = catergory;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}