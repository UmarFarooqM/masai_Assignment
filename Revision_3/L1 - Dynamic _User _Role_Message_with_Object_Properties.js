function dyna(obj){

  
  return (obj.role=="admin") ? (obj.active) ?  "Admin Access Granted!" : "Admin Access Revoked" : (obj.role=="user") ? (obj.active) ? "user Access Granted!" : "Access Revoked" : "Access Denied"

}


let user = { name: "Alice", role: "admin", active: false };
let user1 = { name: "Bob", role: "user", active: true };

console.log(dyna(user))
console.log(dyna(user1))