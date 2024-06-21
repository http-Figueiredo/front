// +(adição), -(subtração), *(multiplicação), /(divisão), %()resto;
// == (igual), x= (igual com a x)


const firstName ="Cesar";
var age = 27;

document.write("O aluno "+firstName+", tem a idade de "+age+".");

function altText(){
    document.getElementById("hello").innerHTML = "Exemplo massa";
}

function ayuda(){
    alert("socorro!!!");
}

function valid(){
    alert("Username or password incorrect");
}

function sum(a,b){
    var total = a + b;
    alert("valor da soma é "+total);
}

function discount(a, b){
    var totalDesc = a - b;
    return totalDesc;
    //document.write("Valor do desconto é " + totalDesc);
}
//discount(7, 2);
var resultDesc = discount(7, 3);
document.write("<br> Valor do desconto: "+resultDesc);

var nota = 8;
var falta = 27;

if((nota < 4) || (falta > 25)){
    document.write("<br> REPROVADO: "+nota+ ". <br>Falta: "+falta);
}

var nota = 3;
var falta = 27;

if((nota < 4) && (falta > 25)){
    document.write("<br> REPROVADO: "+nota+ ". <br>Falta: "+falta);
}else{
    document.write("<br> verificar");
}

var situacao = !true;
document.write("<br>Situação: " +situacao);

var qntPeople = 0;
qntPeople++;
document.write("<br> Quantidade de pessoas que passaram na escada: "+qntPeople);

var tickets = 5000;
tickets--;
document.write("<br> Ticket ammount: "+tickets);