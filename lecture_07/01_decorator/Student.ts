 
export class Student {
    id: Number; 
    private name: string; 
    private gpa: number; 

    setGpa(gpa: number) {
        this.gpa = gpa;
    }
    getGpa() { return this.gpa};

    getName():string {return this.name;}
    setName(name:string) {this.name = name;}

    constructor(id: number, name: string, gpa: number) {
        this.id = id;
        this.name = name; 
        this.gpa = gpa
    }
}

let jack: Student = new Student(1, "Jack", 3.0);

console.log(jack);