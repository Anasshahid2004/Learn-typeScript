class Country {
    public name: string;
    public language: string;
    public population: number;
    public populationGrowRate: number;
    private _statePrivacy: string;
    private _leader: string;
    public planet = "Earth";
    public religion: string;

    constructor(
         name: string,
         language: string,
         population: number,
         populationGrowRate: number,
         _statePrivacy: string,
         _leader: string,
         religion: string,
    ) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowRate = populationGrowRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader
        this.religion = religion
    }

    public populationGrow(): number {return 1};
    public get PrivateData(): string {
        return this._statePrivacy
    } 
    public set leader(newLeader: string){
        this._leader = newLeader
    }
    public greeting(): string {
        return "Hello"
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
        religion = "Islam",
    ) {
    super(
      name,
      language,
      population, 
      populationGrowRate,
      statePrivacy, 
      leader,
      religion
    );
 }

    public populationGrow(): number {
     this.population = this.population = (1 + this.populationGrowRate / 100); 
     return this.population 
    }
    public greeting(): string {
        return "Assalamu Alaikum";
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
console.info(Pakistan.greeting());

let China = new Country(
    "China",
    "Mardarin",
    150000000,
    0,
    "China is Private Data",
    "China is Leader",
    "Athelist",
    "Buddism",

)

console.info(China);
console.info(China.greeting());


export{};