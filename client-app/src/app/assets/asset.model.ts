
class Asset {
  _id:string;
  assetId: string;
  category: string;
  make: string;
  primary: string;
  secondary: string

  constructor() {
      this.assetId = ""
      this.category = ""
      this.make = ""
      this.primary = ""
      this.secondary = ""
    }
}

export default Asset;
