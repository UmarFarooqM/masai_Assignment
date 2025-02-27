let person = {
    role : "admin" ,
    experiance : 3,
    department : "Sales",
    status : "Active",
    access : function getAccess(){
      return this.role == "admin"?
              this.status == "Active"?
                this.experiance >= 5 ?
                  this.department == "IT" ?
                    "Full Admin Access" :
                    "Full Generanl Admin Access"
                : "Limited Admin Access"
              : "Admin Access revoked"
            : this.role == "manager"?
              this.status == "Active" ?
                this.experiance >= 5 ?
                  this.department == "Sales" ?
                    "Full Sales manager Access given" 
                    : "Generanl Sales manager Access given"
                  : "Limited Sales manager Access given"
                : "Sales manager Access revoked"
              : this.role == "user" ?
                  this.status == "Active" ?
                    this.department == "Support" ?
                      "Support Access given" 
                      : "User Access given"
                    : "User Access revoked"
                : "Wrong role"
                  
    }
  }
  
  console.log(person.access())