abstract class Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrowRate: number;
    private _statePrivacy: string;
    private _leader: string;

    constructor(
         name: string,
         language: string,
         population: number,
         populationGrowRate: number,
         _statePrivacy: string,
         _leader: string,
    ) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowRate = populationGrowRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader
    }

    public abstract populationGrow(): number;
    public get PrivateData(): string {
        return this._statePrivacy
    } 
    public set leader(newLeader: string){
        this._leader = newLeader
    }
}

class OICCountry extends Country {
    constructor(
        name: string,
        language: string,
        population: number,
        populationGrowRate: number,
        statePrivacy: string,
        leader: string,
    ) {
        super(name, language, population, populationGrowRate, statePrivacy, leader);
    }

    public populationGrow(): number {
     this.population = this.population = (1 + this.populationGrowRate / 100); 
     return this.population 
    }
}

let Pakistan = new OICCountry(
    "Pakistan",
    "Urdu",
    300000000,
    2.5, 
    "Pakistan's Private Data",
    "Pakistan's Leader"
);

console.info(Pakistan);

// Pakistan.name = "Islamic Republic of Pakistan"
// console.info(Pakistan);

// Error because this is a private property
// Pakistan._statePrivacy

// Sucess
// console.info(Pakistan.PrivateData);

// Error because _leader is privates
// Pakistan._leader = "New Leader"

// Suscess because leader is a acessor and allow as to assign a new leader
Pakistan.leader= "New Leader"
console.info(Pakistan);

export{};
