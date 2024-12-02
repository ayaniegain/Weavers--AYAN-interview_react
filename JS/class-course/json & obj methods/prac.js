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




let obj={
    id: "663a0a05bfe65e5778eedf58",
    title: "The Avengers",
    content: "I am an Avenger fan... Big fan",
    rating: 4,
    by: "Peter D",
    on: 1718508747000,
  }
  
  let obj1={}
//   -----------
  
  for (const [key,value] of Object.entries(obj)) {
  
   obj1[key]= obj[key]
   obj1[key] = value.toString();
    
  }
  
  console.log(obj1)
// -------------
  for (const key in obj) {
    obj1[key]= obj[key]
   
    }
  