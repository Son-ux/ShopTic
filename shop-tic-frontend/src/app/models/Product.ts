import { productCategory } from './productCategory';
export class Product {
    productId: number;
    productName: string;
    productImg: string;
    shortDescription: string;
    productPrice: number;
    createDate: Date;
    modifyDate: Date;
    delFlag: boolean;
    status: boolean;
    rated: number;
    totalReview: number;
    ProductCategory: productCategory;
}