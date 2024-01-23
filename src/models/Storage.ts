import storage from "./../data/storage.json";
import { Products, TProducts } from "./Products";
export type TStorage = {
  city: string;
  name: string;
  address: string;
  warehouse_id: number;
  products: TProducts[];
};
let test:TProducts = {
  product_name: "Телевизор",
  seller_company: "ТехноГигант",
  quantity: 80,
  unit_price: 150000,
  supply_id: 108,
  warehouse_id: 101,
};
export class Storages {
  private _data: TStorage[];
  constructor() {
    this._data = storage;
  }
  get allStorages() {
    return this._data;
  }
  getStorage(id: number): TStorage {
    return this._data.find((item) => {
      item.warehouse_id === id;
    });
  }
  private set updateStorage(storage: TStorage) {
    this._data = this._data.map((item) => {
      if (item.warehouse_id !== storage.warehouse_id) return item;
      return storage;
    });
  }
  setProducts(warehouse_id: number, product: TProducts) {
    let storage = this.getStorage(warehouse_id);
    storage.products.push(product);
    storage.products.push(test);
    //1
    storage.products.sort((a, b) => {
      return b.unit_price - a.unit_price;
    });
    //2
    /*storage.products.sort((a,b)=>{
      return a.unit_price - b.unit_price
      })*/
    this.updateStorage = storage;
  }
}
