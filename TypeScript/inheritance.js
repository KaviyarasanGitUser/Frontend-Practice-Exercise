"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(firstName, lastName, studentId) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log('Taking Test');
    }
}
class Teacher extends Person {
    constructor(teacherId, firstName, lastName) {
        super(firstName, lastName);
        this.teacherId = teacherId;
    }
    get fullName() {
        return 'Prof ' + super.fullName;
    }
}
let student = new Student('Kaviyarsan', 'D', 1);
let teacher = new Teacher(1, 'Kaviyarasan', 'D');
console.log(teacher.fullName);
