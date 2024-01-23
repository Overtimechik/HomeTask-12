import products from "./../data/products.json";
import { Storages } from "./Storage";

export type TProducts = {
  product_name: string;
  seller_company: string;
  quantity: number;
  unit_price: number;
  supply_id: number;
  warehouse_id: number;
};
export class Products extends Storages {
  constructor() {
    super();
    products.forEach((item) => {
      this.setProducts(item.warehouse_id, item);
    });
  }
}
