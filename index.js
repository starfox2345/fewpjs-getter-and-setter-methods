// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }
    //Multiply the radius by 2 to get the diameter.
    get diameter(){
        return this.radius * 2
    }
    //Divide the circumference by π, or 3.14 for an estimation
    //Math.PI = 3.141592653589793
    get circumference(){
        return 2 * Math.PI * this.radius
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    set diameter(diameter){
        this.radius = diameter / 2
    }

    set circumference(circumference){
        this.radius = circumference / (Math.PI * 2)
    }

    set area(area){
        this.radius = Math.sqrt(area/Math.PI)
    }
}
