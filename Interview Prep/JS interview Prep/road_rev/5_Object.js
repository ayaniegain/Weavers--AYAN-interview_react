const sampleObject = {
    name: "John Doe",
    age: 30,
    isEmployed: true,
    skills: ["JavaScript", "HTML", "CSS"],
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    },
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

sampleObject.greet();