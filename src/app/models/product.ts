//* json2ts extension: CTRL + ALT + V
//* export {}, default
//* var olan objeleri anlamlandırmak için interface.
export interface Product{
  id: number;
supplierId: number;
categoryId: number;
quantityPerUnit: string;
unitPrice: number;
unitsInStock: number;
unitsOnOrder: number;
reorderLevel: number;
discontinued: boolean;
name: string;

}

//* yeni bir obje üretmek için belirli bir şemaya uymak için class'lar kullanılabilir.
//* yine aynı şekilde class oluşturmak için interface'lar de kullanılabilir.
// export class ProductClass implements Product {
//   id!: number;
//   supplierId!: number;
//   categoryId!: number;
//   quantityPerUnit!: string;
//   unitPrice!: number;
//   unitsInStock!: number;
//   unitsOnOrder!: number;
//   reorderLevel!: number;
//   discontinued!: boolean;
//   name!: string;
// }
