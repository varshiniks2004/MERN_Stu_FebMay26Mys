//array map
let numbers=[1,2,3,4];
let squared=numbers.map(num=>num*num);
console.log(squared);
//with and without
let price=[100,200,300,400];
let pricewithgst=price.map(price=>price + price*0.81);
console.log("price w/o tax:",price);
console.log("price with tax:",pricewithgst);
//how to extract values using maps
let users=[
    {name:"arjun",age:24},
    {name:"krishna",age:28}
];
let names=users.map(user=>user.name);//we can use any other user name like monkey
console.log("",names);

