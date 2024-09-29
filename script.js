// Object: Properties


// what is a property?
    // real-world :
    //     data related to an Object like color , model , year ,owner etc of a car.
    // Programming:
    //     data(variables) inside an Object.

// Can we create empty Object like variables?        
    //   yes, we can.
      var car = {}
     console.log(car);

// HOw can we add a property to an object?

     //    dot notation 
     //    Object.propertyName = value 
           car.name = "Toyota";
           console.log(car.name);

     // bracket notatin 
    // ObjectName["propertyName"] = value
         car["color"] = "red";
         console.log(car["color"]);

// How can we access its value?

    //  dot notation 
        console.log(car.color);
    // bracket notatin    
        console.log(car["name"] );

// How can we change its value?        
      //   ObjectName.property = newVAlue
         car.color = "green";
         console.log(car.color);

//  How can we delete it?   
      //    delete ObjectName.propertyName
            delete  car.name;
            console.log(car.name);

//  Can we check the existance of a property in an object? 
    //     yes  using 
    //   property in Object
        var checkExistance = "color" in car;
        console.log(checkExistance);
