abstract class Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrowRate: number;

    constructor(
         name: string,
         language: string,
         population: number,
         populationGrowRate: number,
    ) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowRate = populationGrowRate;
    }

    public abstract populationGrow(): number;
}

class OICCountry extends Country {
    constructor(
        name: string,
        language: string,
        population: number,
        populationGrowRate: number,
    ) {
        super(name, language, population, populationGrowRate);
    }

    public populationGrow(): number {
     this.population = this.population = (1 + this.populationGrowRate / 100); 
     return this.population 
    }
}

let Pakistan = new OICCountry("Pakistan","Urdu",300000000,2.5)
console.info(Pakistan);

// let UAE = new OICCountry("UAE","Arabic",5000000,2)
// console.info(UAE);

Pakistan.populationGrow();

console.info(Pakistan);

Pakistan.populationGrow();

console.info(Pakistan);
