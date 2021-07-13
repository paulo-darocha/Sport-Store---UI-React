export default class IProduct {
  constructor (
    public name: string,
    public categoryId: string,
    public description: string,
    public price: number,
    public detail: string,
    public image?: string,
    public _id?: string,
  ) {}
}