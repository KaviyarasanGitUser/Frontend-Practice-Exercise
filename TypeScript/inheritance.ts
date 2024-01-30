class Person{
    constructor(public firstName: string, public lastName: string){}

    get fullName(): string{
        return this.firstName+" "+this.lastName;
    }

    walk(): void{
        console.log('Walking');
    }
}

class Student extends Person{
    constructor(firstName: string, lastName: string,public studentId?: number){
        super(firstName, lastName);
    }

    takeTest(): void{
        console.log('Taking Test');
    }
}

class Teacher extends Person{
    constructor(public teacherId: number, firstName: string, lastName: string){
        super(firstName, lastName)
    }

    override get fullName(): string{
        return 'Prof '+ super.fullName
    }
}
let student = new Student('Kaviyarsan', 'D',1)

let teacher = new Teacher(1, 'Kaviyarasan', 'D')
console.log(teacher.fullName);


