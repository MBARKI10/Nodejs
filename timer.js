// setInterval(function(){
//     console.log('mohamed mbarki')
// },1000);


// var count1 = 0;

// console.log(count1);

// setInterval(function(){
//     count1++;
//     console.log('mohamed mbarki' + " " + count1);
// },1000)

// setTimeout(function(){
//     console.log('mohamed mbarki')
// },3000)

// var recursive = function(){
//     console.log('mohamed mbarki');
//    setTimeout(recursive,1000) 
//    }

// recursive();

function myTest(){
    console.log('mohamed mbarki');
}
var container = setTimeout(myTest,1000) ;
var logo = setInterval(myTest,1000);

// clearTimeout(container);
clearInterval(logo);
