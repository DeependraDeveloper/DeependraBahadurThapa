console.log(2+"22")  // 22
console.log(2-"2")   //  0  [implicit conversion]
//////////////////////////////////////////////////////////////////

let arr=[1,2,2,3]  //remove duplicates
console.log([...new Set(arr)])
///////////////////////////////////////////////////////////////////

let func = function(){
    {
        let l="let";
        var v="var"   
    }
    console.log(v)   //var
     console.log(l)   // error l is not defined
}
//func()
/////////////////////////////////////////////////////////////////////


{
    {
        (
            function a1(){
                var a="100"
                console.log("executed")  //making var functionality to be inside a block
            }
        )()
        
    }
}

// console.log(a)

//////////////////////////////////////////////////////////////////////////////////

console.log(5<6<7)  // true

console.log(7>6>5)  // false

// 5<6-->true (1) < 7 === true
// 7>6-->true (1) > 5 === false

//////////////////////////////////////////////////////////////////////////////////////

let a=()=>arguments;
 //console.log(a("hi"))   // agruments works as this ,so doesnot work in arraow functions

 // so u can used
 let a1=(...agrs)=>agrs
 //console.log(a1("ju",12))

 //works great in normal function
function b(){
    return arguments
}
// console.log(b("hasi",12,22))

/////////////////////////////////////////////////////////////////////////////////////////
let x=function(){
    return  {msg:"hi"}  // if line break is done takes ;
}
// console.log(x())

/////////////////////////////////////////////////////////////////////////////////////////
let profile={
    name:"deepalk"
}
Object.freeze(profile) //prevents adding new properties and also from updating current propertis
profile.age=3

Object.seal(profile) //prevents from adding new properties but you can update current propeties
profile.name="dhanush"

// console.log(profile)

/////////////////////////////////////////////////////////////////////////////////////////////

let obj={
    name:"pkkk"
}

// not allowing specify property to be updated
Object.defineProperty(obj,'age',{value:20,writable:false})
obj.age=30
// console.log(obj.age)

///////////////////////////////////////////////////////////////////////////////////////////////

console.log(Math.max())       // -infinity
console.log(Math.min())       // Infinity

///////////////////////////////////////////////////////////////////////////////////////////////

let m=[10,20,30,40];

[m[0],m[m.length-1]]=[m[m.length-1],m[0]]

console.log(m) // swapping through destructing

//////////////////////////////////////////////////////////////////////////////////////////////

const object={name:"dk",age:22}

const {name:A,age:B}=object
console.log(A,B)

//////////////////////////////////////////////////////////////////////////////////////////////////////


let val=10
console.log(val.toString(2))  // convert into binary numbers as bits numbers
console.log(parseInt("1010",2))  // convert into noraml decimal nums from binary
console.log((0b1010).toString(10)) //another way  for dec=10.|hexa=16.|octal=8