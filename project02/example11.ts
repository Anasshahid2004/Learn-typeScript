export {} ;

type AnasInPakistan = { name: string; age: number; type: "Pakistan" };
type AnasOverseas = {
     name: string; 
    age: number; 
    type: "Overseas"; 
    nickName: string;
}

type Anas = AnasInPakistan | AnasOverseas;

const anas: Anas = 
  Math.random() > 0.5 
   ? { name: "Anas", age: 30,  type: "Pakistan" }
   : {
      name: "Anas",
      age: 18,
      type: "Overseas",
      nickName: "Alexander",
    };

if (anas.type === "Pakistan") {
    console.log(`He's in Pakistan so we'll call him Anas${anas.name}.`);
} else {
    console.log(`He's not in Pakistan so we'll call him${anas.nickName}`);
    
}