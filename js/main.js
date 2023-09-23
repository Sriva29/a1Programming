/*Part 1:
Create a data structure that describes a "hospital". 
It has a name and contains 3 "patient" records. 
Each "patient" has an id, fullName, dateOfBirth, and multiple "symptoms". 
Each symptom in a String. 
*/

//Coded by Sri | GitHub URL: https://github.com/Sriva29/a1Programming/tree/main

let hospital = {
    name: "CloudCare Express Hospital",
    patient: [
        {
            id: "001",
            fullName: "James Watson",
            dateOfBirth: "Apr, 18, 1982",
            symptoms: [
                "icthy nose",
                "tired finger",
                "pointy hair" // real symptoms make me gloomy, hence using fake symptoms :)
            ]
        },
        {
            id: "002",
            fullName: "April Holmes",
            dateOfBirth: "Junetember, 32nd, 1989",
            symptoms: [
                "addiction to gloom",
                "paranoid android",
                "ludgatism"
            ]
        },
        {
            id: "007",
            fullName: "Sherlock Bond",
            dateOfBirth: "January, 1, 2001",
            symptoms: [
                "sniffles",
                "headache",
                "shivers",
                "pessimism"
            ]
        }
    ]

}

/*Part 2:
Create a function named "showPatients" that receives a hospital data structure and returns the following as a string:
<h1>Hospital Name</h1>
<h2>Patient full name, date of birth </h2>
<ul>
  <li>symptom</li>
  <li>symptom</li>
  <li>symptom</li>
</ul>
Repeat the h2, ul, and li for each patient.

Execute that function with the data structure created in Part 1 then console.log the return value to the document.
*/

function showPatients(hospital) {
    let returnValue = "<h1>" + hospital.name + "</h1>" + "\n";

    for (let i = 0; i < hospital.patient.length; i++) {
        returnValue += "<h2>" + hospital.patient[i].fullName + ", " + hospital.patient[i].dateOfBirth + "</h2>" + "\n";
        returnValue += "<ul>" + "\n";
        for (let j = 0; j < hospital.patient[i].symptoms.length; j++) {

            returnValue += "\t" + "<li>" + hospital.patient[i].symptoms[j] + "</li>" + "\n";

        }
        returnValue += "</ul>" + "\n";

    }
    return returnValue;
}

console.log(showPatients(hospital));

/*
Part 3:
Create another function named "getPatient" that accepts an array of patient records and returns a random patient id.

Execute that function then console.log() the return value.

*/


let getPatient = function (hospital) {
    let randomPatientArrayIndex = Math.floor(Math.random()*hospital.patient.length);
    let randomPatientID = hospital.patient[randomPatientArrayIndex].id;
    return randomPatientID;
}

let randomPatientID = "random patient id: " + getPatient(hospital);

console.log(randomPatientID);