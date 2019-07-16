export class ProductModel {
   public id: string;
   public brand: string;
   public name: string;
   public price: number;
   public compValue?: number;
   public rating?: number;
   public activeColor?: number;
   public colors = [];
   public imageUrl: string;
    constructor(data) {
        this.id  = data.id;
        this.brand  = data.brand;
        this.name  = data.name;
        this.price  = data.price;
        this.compValue  = data.compValue || 0;
        this.rating  = data.rating || 0;
        this.activeColor = data.activeColor || 0;
        this.assignColorsInfo(data.colors);
        this.imageUrl = "assets/products/" + data.id + '.jpg';
    }

    private assignColorsInfo(dataColors) {
        dataColors.forEach(eachColor => {
            const colorsObj = {
                id : eachColor.id,
                displayName : eachColor.displayName
            };
            this.colors.push(colorsObj);
          });
    }
}
