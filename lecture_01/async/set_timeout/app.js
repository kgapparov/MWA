console.log("1: Start app");
const laterWork = setTimeout(function(){
    console.log("2: in setTimeout");
}, 3000);
//this line appeared before setTimeout because it is async
console.log("3: End app");