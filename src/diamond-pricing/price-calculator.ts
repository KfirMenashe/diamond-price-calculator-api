export class PriceCalculator {

    // super complicated diamond price calculation :)
    calculate(carat: number, shapeId: number, colorId: number, clarityId: number): number {
        if (carat <= 0 || shapeId <= 0 || colorId <= 0 || clarityId <= 0)
            return 0;
        
        if (carat > 5)
            carat = 5;

        const caratMultiplier = Math.pow(2, Math.ceil(carat));
        const shapePriceComponent = shapeId * 100;
        const colorPriceComponent = colorId * 100;
        const clarityPriceComponent = clarityId * 100;
        const randomPriceComponent = Math.random() * 1000;
        const price = Math.floor(caratMultiplier * (shapePriceComponent + colorPriceComponent + clarityPriceComponent + randomPriceComponent));
        return price;
    }
}
