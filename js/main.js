/*Part 1:
Create a data structure that describes a "hospital". 
It has a name and contains 3 "patient" records. 
Each "patient" has an id, fullName, dateOfBirth, and multiple "symptoms". 
Each symptom in a String. 
*/

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
                "shivers"
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
    console.log("<h1>" + hospital.name + "</h1>");

    for (let i = 0; i < hospital.patient.length; i++) {
        console.log("<h2>" + hospital.patient[i].fullName + ", " + hospital.patient[i].dateOfBirth + "</h2>");
        console.log("<ul>");
        for (let j = 0; j < hospital.patient.length; j++) {
            
            console.log("<li>" + hospital.patient[i].symptoms[j] + "</li>");
            
        }
        console.log("</ul>");

    }




}

showPatients(hospital);
