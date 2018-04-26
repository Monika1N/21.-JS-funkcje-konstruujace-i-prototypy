function Phone(brand, price, color, age) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.age = age;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.ageOfPhone = function() {
	console.log("The phone is " + this.age + "!")
}

var SamsungGalaxyS6 = new Phone("Samsung", 900, "black", "secondhand");
var iPhone6S = new Phone("Apple", 2250, "silver", "new");
var OnePlusOne = new Phone("OnePlus", 2300, "red", "secondhand");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();

SamsungGalaxyS6.ageOfPhone();
iPhone6S.ageOfPhone();
OnePlusOne.ageOfPhone();



