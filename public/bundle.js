(() => {
  "use strict";
  const e = JSON.parse(
      '[{"product_name":"Ноутбук","seller_company":"ЭлектроМагазин","quantity":100,"unit_price":50000,"supply_id":201,"warehouse_id":101},{"product_name":"Холодильник","seller_company":"ТехноДом","quantity":50,"unit_price":30000,"supply_id":202,"warehouse_id":101},{"product_name":"Футбольный мяч","seller_company":"СпортМаг","quantity":200,"unit_price":1000,"supply_id":203,"warehouse_id":102},{"product_name":"Книга","seller_company":"Книжный Рай","quantity":300,"unit_price":500,"supply_id":204,"warehouse_id":102},{"product_name":"Наушники","seller_company":"ЗвукоМания","quantity":150,"unit_price":2000,"supply_id":205,"warehouse_id":101},{"product_name":"Смартфон","seller_company":"ТехноГигант","quantity":80,"unit_price":15000,"supply_id":206,"warehouse_id":102},{"product_name":"Кофеварка","seller_company":"КофеДом","quantity":40,"unit_price":8000,"supply_id":207,"warehouse_id":101},{"product_name":"Теннисная ракетка","seller_company":"СпортМаг","quantity":120,"unit_price":2500,"supply_id":208,"warehouse_id":102},{"product_name":"Чайник","seller_company":"ТехноДом","quantity":60,"unit_price":1500,"supply_id":209,"warehouse_id":101},{"product_name":"Фотокамера","seller_company":"ФотоМир","quantity":25,"unit_price":35000,"supply_id":210,"warehouse_id":102}]'
    ),
    t = JSON.parse(
      '[{"city":"Москва","name":"Склад 1","address":"ул. Примерная, 123","warehouse_id":101,"products":[]},{"city":"Санкт-Петербург","name":"Склад 2","address":"пр. Улица Примеров, 456","warehouse_id":102,"products":[]}]'
    );
  class a {
    _data;
    constructor() {
      this._data = t;
    }
    get allStorages() {
      return this._data;
    }
    getStorage(e) {
      return this._data.find((e) => {
        e.warehouse_id;
      });
    }
    set updateStorage(e) {
      this._data = this._data.map((t) =>
        t.warehouse_id !== e.warehouse_id ? t : e
      );
    }
    setProducts(e, t) {
      const a = this.getStorage(e);
      a.products.push(t), (this.updateStorage = a);
    }
  }
  const s = new (class extends a {
    constructor() {
      super(),
        e.forEach((e) => {
          this.setProducts(e.warehouse_id, e);
        });
    }
  })();
  console.log(s.allStorages);
})();
