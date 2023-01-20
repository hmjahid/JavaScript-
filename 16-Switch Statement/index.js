let grade = "A";

switch (grade) {
    case "A":
        console.log("You did great");
        break;
    case "B":
        console.log("You did good");
        break;
    case "C":
        console.log("You did okay");
        break;
    case "D":
        console.log("You passed");
        break;
    case "F":
        console.log("You failed");
        break;
    default:
        console.log("grade, is not a letter grade");

}


grade = 85;

switch (true) {
    case grade>= 90:
        console.log("Your grade is 'Golden A+'");
        break;
    case grade>= 80:
        console.log("Your grade is 'A+'");
        break;
    case grade>= 70:
        console.log("Your grade is 'A'");
        break;
    case grade>= 60:
        console.log("Your grade is 'A-'");
        break;
    case grade>= 50:
        console.log("Your grade is B");
        break;
    case grade>= 40:
        console.log("Your grade is 'C'");
        break;
    case grade>= 33:
        console.log("Your grade is 'D'");
        break;    
    case grade< 33:
        console.log("Your grade is 'F'");
        break; 
    default:
        console.log(grade, "is not eligible for a grade mark");

}