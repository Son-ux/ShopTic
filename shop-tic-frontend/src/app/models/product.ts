import { productCategory } from './productCategory';
export class product {
    productId: number;
    productName: string;
    productImg: string;
    shortDescription: string;
    createDate: Date;
    modifyDate: Date;
    delFlag: boolean;
    status: boolean;
    rated: number;
    ProductCategory: productCategory;
}