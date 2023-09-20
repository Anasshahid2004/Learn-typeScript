var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Country = /** @class */ (function () {
    function Country(name, language, population, populationGrowRate) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowRate = populationGrowRate;
    }
    return Country;
}());
var OICCountry = /** @class */ (function (_super) {
    __extends(OICCountry, _super);
    function OICCountry(name, language, population, populationGrowRate) {
        return _super.call(this, name, language, population, populationGrowRate) || this;
    }
    OICCountry.prototype.populationGrow = function () {
        this.population = this.population = (1 + this.populationGrowRate / 100);
        return this.population;
    };
    return OICCountry;
}(Country));
var Pakistan = new OICCountry("Pakistan", "Urdu", 300000000, 2.5);
console.info(Pakistan);
// let UAE = new OICCountry("UAE","Arabic",5000000,2)
// console.info(UAE);
Pakistan.populationGrow();
console.info(Pakistan);
Pakistan.populationGrow();
console.info(Pakistan);
