export interface Product {
    [x: string]: any
}
export interface Products {
    total: number,
    skip: number
    limit: number
    products: Product[]
}