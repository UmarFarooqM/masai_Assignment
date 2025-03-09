function managesystem(person){

    return (person.role =="admin") ? (person.active) ? (person.experience>=5) ? (person.department=="IT") ?  "Full IT Admin Access" : "Full General Admin Access" : "limit Admin Access" :  "Admin Access Revokeed" :
     (person.role=="manager") ? (person.active) ? (person.experience >=5) ? (person.department=="Sales") ? "Full Sales manager Access" : "Full manager Access" : "limited  manager Acces " : "manager Acces revoked" :
      (person.role=="user") ? (person.active) ? (person.department=="Support") ? "Priority Support Access" : "User Access" : "User Access Revoked": "Invalid role"

}




let person = { role: "admin", experience: 7, active: true, department: "IT" };
console.log(managesystem(person))
let person3 = { role: "manager", experience: 4, active: true, department: "Marketing" };
console.log(managesystem(person3))
let person2 = { role: "user", experience: 2, active: true, department: "Support" };
console.log(managesystem(person2))
let person1 = { role: "admin", experience: 3, active: false, department: "Finance" };
console.log(managesystem(person1))