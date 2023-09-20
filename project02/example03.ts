type AnasType = {
    name: {firstName: string, lastName: string},
    age: number,
    teaching: boolean,
    dob:Date,
    certifications: string[],
}

let Anas: AnasType;

Anas = {
  name: {firstName: "Anas", lastName: "Shahid"},
  age: 20,
  teaching: true,
  dob: new Date(),
  certifications: ["AWS", "Docker" , "Rust"],
};

Anas = "Alexander"

export {}
