function random(max,min ) {
    var max = 20;
    var min = 1;
    return Math.floor(Math.random() * (max + min)-1 );
    }
console.log(random(1,20));