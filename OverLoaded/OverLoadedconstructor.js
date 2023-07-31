var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.setName = function (name) {
        this.name = name;
    };
    Vehicle.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Vehicle.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Brand: ").concat(this.brand);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.getInfo = function () {
        return "".concat(_super.prototype.getInfo.call(this), ", Model: ").concat(this.model);
    };
    return Car;
}(Vehicle));
// Create instances of classes
var vehicle = new Vehicle();
var car = new Car();
vehicle.setName("Vehicle");
vehicle.setBrand("Any Brand");
car.setName("Car");
car.setBrand("Toyota");
car.setModel("Corolla");
console.log(vehicle.getInfo()); // Output: Name: Vehicle, Brand: Any Brand
console.log(car.getInfo()); // Output: Name: Car, Brand: Toyota, Model: Corolla
