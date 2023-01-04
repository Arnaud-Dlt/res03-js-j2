//////////    EXO1    ////////////

function add(nb1=32,nb2=343)
{
    let result=nb1+nb2;
    return result;
}
console.log(add());


function sub(nb1,nb2)
{
    let result=nb1-nb2;
    return result;
}
console.log(sub());


function mult(nb1,nb2)
{
    let result=nb1*nb2;
    return result;
}
console.log(mult());

function div(nb1,nb2)
{
    let result=nb1/nb2;
    return result;
}
console.log(div());


function mod(nb1,nb2)
{
    let result=nb1%nb2;
    return result;
}
console.log(mod());


//////////    EXO2    ////////////


function askUserOperation()
{
    let calcul=window.prompt("Saisir calcul (+,-,/,%");
    return calcul;
}


function askUserFirstNumber()
{
    let firstNb=window.prompt("Saisir 1er nombre");
    return firstNb;
}


function askUserSecondNumber()
{
    let secondNb=window.prompt("Saisir 2ème nombre");
    return secondNb;
}



//////////    EXO3    ////////////

function calculator(askUserOperation, askUserFirstNumber, askUserSecondNumber) 
{
    let firstNb = parseInt(askUserFirstNumber);
    let secondNb = parseInt(askUserSecondNumber);
    if (askUserOperation === "+")
    {
        let add = add(firstNb, secondNb);
        return add;
    }
    if (askUserOperation === "-") 
    {
        sub(firstNb, secondNb);
    }
    if (askUserOperation === "*") 
    {
        mult(firstNb, secondNb);
    }
    if (askUserOperation === "/"){
        div(firstNb, secondNb);
    }
    if (askUserOperation === "%") {
        mod(firstNb, secondNb);
    }
    else {
        return alert("Utilise une autre opération");
    }
}
calculator()
