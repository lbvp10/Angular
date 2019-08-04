export class Producto {
  id: number;
  name : string;
  description : string
  price: number

  constructor(name:string, id:number){
    this.name=name
    this.description=name
    this.price = 0
    this.id=id
  }

}
