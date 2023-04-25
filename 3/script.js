
function maxElement(a,b, ...arg){
    let max = 0;
    a > b ? max = a : max = b;
    for (let i = 0; i < arg.length; i++){
        arg[i] > max ? max = arg[i] : max;
    }
    return (max);
}

console.log(maxElement(3,5,20,87,35));
