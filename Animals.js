class Sound {
    makeSound() { }
}
class Meow extends Sound {
    makeSound() {
        console.log("Meow")
    }
}
class Animal {
    sound = new Sound()
    constructor(name, age, childs = null) {
        this.name = name;
        this.age = age;
        this.childs = childs;
        this.getSummationAge = function () {
            let sum = 0
            sum += this.age
            if (childs != null) {
                for (let i in childs) {
                    sum += childs[i].getSummationAge()
                }
            }
            return sum
        }
    }
}
class Cat extends Animal {
    constructor(name, age, childs = null) {
        super(name, age, childs)
    }
    sound = new Meow()
}
class Dog extends Animal {
    constructor(name, age, childs = null) {
        super(name, age, childs)
    }
}
class Cow extends Animal {
    constructor(name, age, childs = null) {
        super(name, age, childs)
    }
}
function clone(object) {
    let new_object = new Animal(object.name, object.age, object.childs)
    return new_object
}
cats = [new Cat("Joe", 5, [new Cat("Child1", 3), new Cat("Child2", 5)]), new Cat("Silvia", 4)]
dogs_wtf = clone(cats[0])
dogs_wtf.name = 'Brian'
console.log(dogs_wtf.getSummationAge())
cats[0].sound.makeSound()