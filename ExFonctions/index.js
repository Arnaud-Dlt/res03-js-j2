//////////    EXO1    ////////////

function add(nb1, nb2)
{
    return nb1 + nb2;
}

function sub(nb1, nb2)
{
    return nb1 - nb2;
}

function mult(nb1, nb2)
{
    return nb1 ** nb2;
}

function div(nb1, nb2)
{
    return nb1 / nb2;
}

function mod(nb1, nb2)
{
    return nb1 % nb2;
}


//////////    EXO2    ////////////


function askUserOperation()
{
    let operation=window.prompt("Saisir calcul (+,-,/,%");
    return operation;
}


function askUserFirstNumber()
{
    let firstNb=window.prompt("Saisir 1er nombre");
    return parseInt(firstNb);
}


function askUserSecondNumber()
{
    let secondNb=window.prompt("Saisir 2ème nombre");
    return parseInt(secondNb);
}



//////////    EXO3    ////////////

function calculator() 
{
    let firstNb = askUserFirstNumber();
    let operation = askUserOperation();
    let secondNb = askUserSecondNumber();
    
    if(operation === "+")
    {
        return add(firstNb, secondNb);
    }
    else if(operation === "-")
    {
        return sub(firstNb, secondNb);
    }
    else if(operation === "*")
    {
        return mult(firstNb, secondNb);
    }
    else if(operation === "/")
    {
        return div(firstNb, secondNb);
    }
    else if(operation === "%"){
        
        return mod(firstNb, secondNb);
    }
    else
    {
        return "Entrez un opérateur valide"
    }
    
}

let result=calculator();

alert(result);