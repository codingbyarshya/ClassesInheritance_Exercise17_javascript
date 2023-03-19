class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName);
    this.role = role;
  }
}

const developer1 = new Developer("Mario", "Rossi", "Front-end");
const developer2 = new Developer("Arshya", "Razavi", "Full stack");
console.log(developer1.firstName + " " + developer1.lastName + " " + developer1.role);
console.log(developer2.firstName + " " + developer2.lastName + " " + developer2.role);