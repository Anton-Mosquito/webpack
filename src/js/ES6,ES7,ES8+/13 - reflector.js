class Student {
  constructor(name) {
    this.name = name;
  }

  great() {
    console.log(`Hello my name is ${this.name}`);
  }
}

class ProtoStudent {
  university = "Oxford";
}

const student = Reflect.construct(Student, ["Igor"]);

console.log(student.__proto__ === Student.prototype);
console.log(student.__proto__ === ProtoStudent.prototype);

// Reflect.apply(student.great, { name: "Tester" }, []);
console.log(Reflect.ownKeys(student));

Reflect.preventExtensions(student);
student.age = 25;

console.log(Reflect.isExtensible(student));
console.log(student);
