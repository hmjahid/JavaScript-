class Students{
    constructor(name, roll){
        this.name = name;
        this.roll = roll;
    }
}

/*
const student1 = new Students("Shariful", 01);
const student2 = new Students("Jahid", 02);
const student3 = new Students("Alamin", 03);
const student4 = new Students("Sohag", 04);
const student5 = new Students("Rana", 05);
const student6 = new Students("Sobuj", 06);
const student7 = new Students("Iqbal", 07);
const student8 = new Students("Faruk", 08);

const students =[student1, student2, student3, student4, student5, student6, student7, student8];

console.log(student1.name + student1.roll);
console.log(student2.name + student2.roll);
console.log(student3.name + student3.roll);
console.log(student4.name + student4.roll);
console.log(student5.name + student5.roll);
console.log(student6.name + student6.roll);
console.log(student7.name + student7.roll);
console.log(student8.name + student8.roll);
*/

const students = [new Students("Shariful", 01),
                  new Students("Jahid", 02),
                  new Students("Alamin", 03),
                  new Students("Sohag", 04),
                  new Students("Rana", 05),
                  new Students("Sobuj", 06),
                  new Students("Iqbal", 07),
                  new Students("Faruk", 08)];

console.log(students[0].name + students[0].roll);
console.log(students[1].name + students[1].roll);
console.log(students[2].name + students[2].roll);
console.log(students[3].name + students[3].roll);
console.log(students[4].name + students[4].roll);
console.log(students[5].name + students[5].roll);
console.log(students[6].name + students[6].roll);
console.log(students[7].name + students[7].roll);

students.forEach(student => console.log(`${student.name} ${student.roll}`));

