var urduMarks = 80;
var englishMarks = 90;
var sstMarks = 70;
var chemistryMarks = 85;
var biologyMarks = 75;
var physicsMarks = 80;
var mathsMarks = 95;
var totalMarks = 600; // Total marks for all subjects
var obtainMarks = urduMarks + englishMarks + sstMarks + chemistryMarks + biologyMarks + physicsMarks + mathsMarks;
var percentage = (obtainMarks / totalMarks) * 100;
console.log("MarkSheet:");
console.log("Urdu Marks:", urduMarks);
console.log("English Marks:", englishMarks);
console.log("SST Marks:", sstMarks);
console.log("Chemistry Marks:", chemistryMarks);
console.log("Biology Marks:", biologyMarks);
console.log("Physics Marks:", physicsMarks);
console.log("Maths Marks:", mathsMarks);
console.log("Total Marks:", totalMarks);
console.log("Obtained Marks:", obtainMarks);
console.log("Percentage:", percentage.toFixed(2) + "%");
var gradeMessage = "";
if (percentage >= 80) {
    console.log("Grade: A+");
    gradeMessage = "You are great!";
}
else if (percentage >= 70) {
    console.log("Grade: A");
    gradeMessage = "You are great!";
}
else if (percentage >= 60) {
    console.log("Grade: B");
    gradeMessage = "You are great!";
}
else if (percentage >= 50) {
    console.log("Grade: C");
    gradeMessage = "You are great!";
}
else if (percentage >= 40) {
    console.log("Grade: D");
    gradeMessage = "You can do better! Keep it up!";
}
else {
    console.log("Grade: Fail");
    gradeMessage = "Improve yourself, try again!";
}
console.log(gradeMessage);
