let obj={
    name:"Rohit",
    age: 23,
    hasTalent:function (talent) { // get "cooking" value as parameter in talent 

        return(`${this.name} can do ${talent}`) // "this " used because it refer its own object name. 
        
    }
}


console.log(obj.hasTalent("cooking")) //pass cooking as argument //aslo called the object function 


console.log(obj)


// EXTRA--------☑️

// can create function/ metode in object this way. 

obj.canRun =function(){
    console.log(`${this.name} can run Quickly`)
}
console.log(obj.canRun()) 

// console.log(obj)
