export interface Product {
    title: string;
    brand: string;
    category: string;
    id: number;
    price: number
    availabilityStatus: string;
    [x: string]: any
}
export interface Products {
    total: number,
    skip: number
    limit: number
    products: Product[]
}

export interface Filters {
    name: string;
    brand: string;
    category: string;
    status: string;
}