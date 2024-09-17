// console.log("chaliye suru kartai hai")

                // FUNCTION CREATION

// sum = function(){
//     console.log("hello");
// }
// sum();




                // Object create



    // let rectangle = {
    //  length:1,
    //  breadth : 2,

    //  draw: function(){

    //     console.log('dorw');
    //  }

    //  };

//     rectangle.draw();
//     console.log(rectangle.length);



            //create object using fectory  function

// function createRectangle(len,bre){

//      return rectangle = {
//      length:len,
//      breadth : bre,

//  draw: function(){
//     console.log('dorw rectangle');
//  }
       
//         // OR same

//         drow() {
//             console.log('drow rectangle');
//         }

//  };

// }
// let rectangle1 = createRectangle(4,5);
// let rectangle2 = createRectangle(2,3);

// console.log(rectangle1) ;
// console.log(rectangle2);





                // CREATE OBJECT USING CONSTRUCTOR FUNCTION
                // follow Pascal Notatioln to -> first letter of every word in capital -> NumberOfState

// function Rectangle(len,bre){
//     this.length = len;
//     this.breadth = bre;
//     this.drow = function(){
//         console.log("drowing something");
//     }

// }

// let rectangleObj1 = new Rectangle(6,7);
// let rectangleObj2 = new Rectangle(8,9);


// console.log(rectangleObj1)
// console.log(rectangleObj2)


// rectangleObj1.color = "yellow";  // add property
// console.log(rectangleObj1);

// delete rectangleObj1.color;   // delete property
// console.log(rectangleObj1);  

// console.log(rectangleObj2);  


// Note:- primitive are copied by their value
// References are copied by their address/reference

// let a = {value:10};
// let b= a;
// a.value++;

// console.log(a.value);
// console.log(b.value);

let rectangle = {
    length:2,
    breadth:4

};

// for-in loop (apply only on object in some case we can apply)
// for(let key in rectangle){
//     // keys are reflected through key variable
//     // values are reflected throught rectangle[key]
//     console.log(key,rectangle[key]);
// }

     // check property
// if('color' in rectangle){
//     console.log("present");
// }
// else{
//     console.log("absent");
// }


