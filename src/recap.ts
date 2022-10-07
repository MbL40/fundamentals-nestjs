const myName = 'Iván';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(2, 2);

class Persona {

  constructor(private age: number, private name: string) { }

  getSummary() {
    return `my name is ${this.age}, ${this.name}`;
  }
}

const ivan = new Persona(24, "camilo");
ivan.getSummary()


