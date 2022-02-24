let person = {
    fname: 'Anil',
    lname: 'Singh'
}

function pesronDetails(country, state, mname='') {
    console.log(`My name is ${this.fname} ${mname} ${this.lname} and live in ${country} and state is ${state}`)
}

// call -> call(this: Function, thisArg: any, ...argArray: any[]): any
pesronDetails.call(person, 'India', 'Banglore')

// custom call implementation

Function.prototype.mycall = function (context, ...args) {
    context = context || window;
    context._fun = this;
    return context._fun(...args);
}

pesronDetails.mycall(person, 'India', 'Delhi')

// apply -> apply(this: Function, thisArg: any, argArray?: any): any
pesronDetails.apply(person, ['India', 'UP']);

// custom implementation of apply

Function.prototype.myapply = function (context, args) {
    context = context || window;
    context._func = this;
    return context._func(...args);
}

pesronDetails.myapply(person, ['India', 'Karnatak']);

// bind

let p1 = pesronDetails.bind(person)
p1('India', 'Haryana')

// custom implementation of bind

Function.prototype.mybind = function (context, ...args) {
    context = context || window;
    context._func = this;
    return function (...agr) {
        context._func.apply(context, [...args, ...agr])
    }
}

let p2 = pesronDetails.mybind(person, 'India')
let p3 = pesronDetails.mybind(person)
p2('Bihar', 'kumar')
p3('India', 'MP')