const a = parseFloat(prompt ("enter (a)"));
const b= parseFloat(prompt ("enter (b)"));
const c= parseFloat(prompt ("enter (c)"));

function x1(a, b, c){
    return(((-1)*b)+(Math.sqrt ((b*b)-(4*a*c))))/(2*a)
}
const result_x1= x1(a, b, c);
alert("x1=" + result_x1)

function x2(a, b, c){
    return(((-1)*b)-(Math.sqrt ((b*b)-(4*a*c))))/(2*a)
}
const result_x2= x2(a, b, c);
alert("x2=" + result_x2)