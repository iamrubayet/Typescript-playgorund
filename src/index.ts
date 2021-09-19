//basic type


let id : number = 5
let company:string = 'rubayet inc'

let isPublished:boolean = true

let age: any

age = 30


console.log("ID:",id)



//Array


let id:number [] = [1,2,3]


//tuple


let person : [number,string,boolen] = [1,'brad',true]


//tuple array


let employee : [number,string][]

employee = [
   [1,'brad'],
   [2,'rub'],
]


//union

let pid: number | string = 22


//enum

enum direction1
{
	up=1,
	down,
	left,
	right,
}


console.log(direction1.up)


//objects

type User={
	id :number
	name: string

}

const user: User {
	id:1,
	name:'ruba',
}



//type assertion


let cid: any = 1

let customerId = cid as number

//functons


function addNumber(x:number,y:number):number{
	return x+y
}

//interface

interface UserInterface{
	readonly id :number
	name: string
	age? : 15

}

const user1: UserInterface {
	id:1,
	name:'ruba',
}

//interface with functions
interface MathFunc()
{
	(x:number,y:number):number
}



const add: MathFunc = (x:number,y:number):number=>x+y




//classes with interface


interface PersonInterface{
	id :number
	name: string
	register():string

}


//classes


class Person implements PersonInterface{
	id:number
	name:string

	constructor(id:number,name:string){
		this.id = id
		this.name = name

	}

	register(){
		return `{this.name} is registered`
	}
}


const brad = new Person(1,'brad')




//subclasses 



class Employee extends Person{
	position:string


	constructor(id:number,name:string,position:string)
	{
		super(id,name)
		this.position = position

	}
}

const emp = new Employee(3,"shawn",'developer')



//generics





