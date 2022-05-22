export class Order{
  id: number;
  total: number;
  tax: number;
  status: string;
  orderItems: OrderItem [];
}
export class OrderItem{
  name: string;
  quantity: number;
  price: string;
  description: string;
  options: Options[];
}
export class Options{
  id: number;
  name: string;
  description: string;
  addtionalPrice: number;

}

