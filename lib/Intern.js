// importing Employee constructor 
const Employee = require ("./Employee")


// Intern constructor extends employee constructor 
class Intern extends Employee {
    constructor (name, id, email, school) {
        //calling employee constructor
        super (name, id, email);
        
        this.school = school;
    }
    // returning github from input 
    getSchool() {
        return this.school;
    }
// override employee role to Intern
    getRole () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern; 