// console.log("chaliye suru kartai hai")

                // FUNCTION CREATION

// sum = function(){
//     console.log("hello");
// }
// sum();




                // Object create



    // let rectangle = {
    //  length:1,
    //      breadth : 2,

    //      draw: function(){
    //          console.log('dorw');
    //      }

    //  };


// rectangle.draw();
// console.log(rectangle.length);



                //create object using fectory  function

// function createRectangle(len,bre){

//      return rectangle = {
//      length:len,
//      breadth : bre,

//     //  draw: function(){
//     //     console.log('dorw rectangle');
//     //  }
       
//         // OR same

//         drow(){
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
//         console.log("drowing");
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

calSum = function(){
    let arr = [3,6,2,1,7,10];
    let sum = 0;
    for(let i =0;i<6;i++){
        sum += arr[i];
    }
    return sum;
}

console.log("the sum is "+calSum());