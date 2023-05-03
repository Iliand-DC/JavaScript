class Animal{
    constructor(name, age, childs=null){
        this.name = name;
        this.age = age;
        this.childs = childs;
    }
}
class Cat extends Animal{
    constructor(name,age,childs=null){
        super(name,age,childs)
    }
}
class Dog extends Animal{
    constructor(name,age,childs=null){
        super(name,age,childs)
    }
}
class Cow extends Animal{
    constructor(name,age,childs=null){
        super(name,age,childs)
    }
}
function getSummationAge(animals){
    let sum = 0
    for (let i in animals){
        sum += animals[i].age
        childSum = 0
        if (animals[i].childs!=null){
            childSum+=getSummationAge(animals[i].childs)
        }
        sum += childSum
    }
    return sum
}
function clone(object){
    let new_object = new Animal(object.name,object.age,object.childs)
    return new_object
}
cats = [new Cat("Joe",5,[new Cat("Child1",3) ,new Cat("Child2",5)]), new Cat("Silvia",4)]
dogs_wtf = clone(cats[0])
dogs_wtf.name = 'Brian'
console.log(dogs_wtf)
console.log(cats[0])
console.log(getSummationAge(cats))