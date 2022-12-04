// // javascript console API
// console.log("hello world");
// console.warn("this is a warning");
// document.write("this is written on both web page and console");
// console.error(" this is an error");
// // Vvarible in js
// container ti store value
// var number1=55;
// var n=56;
// console.log(number1+n);
// // data type js
// var str1="this is an str";
// var str1="this is an str";
// var n1=343;
// var n2=456;
// var marks ={
//     rachika:343,
//     ruchika:656,
//     rachik:767,

// }
// console.log(marks);


// var und=undefined;
// console.log(und)
// var uad;
// console.log(uad);
// var a=null;
// console.log(a);

// var arr =[1,2,3,66,33];
// console.log(arr);
// for(var i= 0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }


// arr.forEach(function(element){
    // console.log(element);
// })


// let j=4
// while(j<arr.length){
//     console.log(arr[j]);
//     j ++;
// }


// do{
//     console.log(arr[j]);
//     j++;

// }while (j < arr.length);


// let myArr = ["fan","shivam","shivani","shivami","saloni","shivloni"];
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// // myArr.push("ankit"); add an element in the last of the array
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// const newlen = myArr.unshift("ankit")
// console.log(newlen)
// console.log(myArr)

// // str
function clicked(){
    console.log('the buttom is clicked')
}

firstContainer.addEventlistner('click',function(){
    document.querySelectorAll('.container')[1].innerHTML= "<b>we have clicked<b>"
    console.log("clicked on container")
}
)


// event in JS
// window.onload= function(){
//     console.log('the document is open ')
// 
