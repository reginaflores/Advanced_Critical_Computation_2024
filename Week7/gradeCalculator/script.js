
let btn = document.getElementById("submit")

btn.addEventListener("click", () => {
   let form = document.getElementById("form");

   let grades = [];
    for (let i = 0; i < form.length-1; i++){ 
        grades.push(parseInt(form.elements[i].value));
    }
    let gpa = calculateGPA(grades)

    let result = document.getElementById("result"); 
    console.log(result)
    let gpaElement = document.createElement("h3");
    gpaElement.innerHTML = "Your GPA is "+ gpa; 
    result.appendChild(gpaElement);

})


function calculateGPA(grades) {
    let sum = 0; 
    // add up grade points
    for(let i = 0; i < grades.length; i++){
        //Grade (Numerical Equivalent) x Credits = Grade Points
        sum += grades[i]*3; 
    }
    let credits = grades.length*3;
    //Total Grade Points / Total Credits = Cumulative Grade Point Average
    let gpa = Math.floor(sum/credits); 
    return gpa.toFixed(2);
}