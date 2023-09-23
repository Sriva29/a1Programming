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
*/
