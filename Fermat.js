//getting primes by inputted numbers
var primes1 = [];

//First button: prime numbers before inputted number.

function Fermats()
{
var b = prompt("import number");
var a = parseInt(b);
var numbers = [];
var p = [];

for(var  i = 0; i<a; i++){
				
				numbers[i] = i;
		}


for(var  i = 0; i<numbers.length; i++){	
	if (Math.pow(2, (numbers[i]-1)) % numbers[i] == 1 && a%numbers[i] != 0)
	{
		p.push(numbers[i]);
		primes1.push(numbers[i]);
	}	
}

var td = document.createElement('td' );
var primes = document.createTextNode("For given Number " + a + " were found "+ p.length + " numbers which are " + p + ".");
var noPrimes = document.createTextNode("Null");
if (p.length == 0){
	td.appendChild(noPrimes);
				  }
else { 
		td.appendChild(primes);
	 }
var tr1 = document.getElementById("tr1");
tr1.appendChild(td);
td.style.padding = '5px';
td.style.backgroundColor = "#7ee9f7";
td.style.fontSize = '10px';


}

//Probability counter
function Prob1()
{	
	var trues = [];
	var prime = true;
	for(var i=0; i < primes1.length; i++)
	{
		for(var z = 2; z < primes1[i]; z++)
		{
  			if(primes1[i]%z != 0)
  			{
    			prime = true;
 			}
			else
  			{
  				prime = false;
    			break;
 	 		}
		}
		if(prime)
		{
			trues.push(primes1[i]);
		}
	}
	var probability = Math.round((trues.length/primes1.length)* 100);
	var real = (trues.length/primes1.length)* 100;
	var accuracy = document.createTextNode( probability+"%"+" or "+ real + "%");
	var td = document.createElement('td');
	
	td.appendChild(accuracy);
	
	var tr1 = document.getElementById("tr1");
	
	tr1.appendChild(td);
	
	td.style.padding = '2px';
	td.style.backgroundColor = "#7ee9f7";
	td.style.fontSize = '10px';
	
	console.log(trues);
	console.log(primes1);
	
}

//Second button checking for prime
function Fermats2(){
var b = prompt("import number");
var a = parseInt(b);
var number = 2;
var td = document.createElement('td');
var yes = document.createTextNode("Yes, it is prime.");
var no = document.createTextNode("No, it is not prime.");
var tr2 = document.getElementById("tr2");
tr2.appendChild(td);
td.style.padding = '5px';
td.style.backgroundColor = "#7ee9f7";
td.style.fontSize = '10px';
	if(number%a==0){
		number++;
	}
	if(Math.pow(number,(a-1))%a == 1) 
		{
		td.appendChild(yes);
		
		}
	else{
		td.appendChild(no);
		}
		console.log(number,a,Math.pow(number,(a-1))%a);
		console.log(number%a);
	}


















/*

//Didnt work
//integer - 6
// prime" " 4 	
//getting primes by inputted numbers
function Fermats()
{
var b = prompt("import number");
var a = parseInt(b);
var numbers = [];
var p = [];
if( a >= 10){
		for(var  i = 0; i<a; i++){
				numbers[i] = i;
			}
}
else{

		for(var  i = 0; i<1000; i++){
				numbers[i] = i;
			}
}
for(var  i = 0; i<numbers.length; i++){	
	if (Math.pow(a, (numbers[i]-1)) % numbers[i] == 1 && a%numbers[i] != 0)
	{
		p.push(numbers[i]);
		console.log(i);
	}	
}

var td = document.createElement('td' );
var primes = document.createTextNode("For given Number " + a + " were found "+ p.length + " numbers which are " + p + ".");
var noPrimes = document.createTextNode("Null");
if (p.length == 0){
	td.appendChild(noPrimes);
				  }
else {
		td.appendChild(primes);
	 }
var tr1 = document.getElementById("tr1");
tr1.appendChild(td);
td.style.padding = '5px';
td.style.backgroundColor = "#eb6234";
td.style.fontSize = '10px';
console.log(numbers);

}

//Second button checking for prime
function Fermats2(){
var b = prompt("import number");
var a = parseInt(b);
var number = Math.round(Random(10, 1000));
var td = document.createElement('td');
var yes = document.createTextNode("Yes it is prime.");
var no = document.createTextNode("it is not prime.");
var tr2 = document.getElementById("tr2");
tr2.appendChild(td);
td.style.padding = '5px';
td.style.backgroundColor = "#eb6234";
td.style.fontSize = '10px';
	if(number%a==0){
		number++;
	}
	if((Math.pow(number,(a-1))%a == 1) 
		{
		td.appendChild(yes);
		
		}
	else{
		td.appendChild(no);
		}
		console.log(number,a,Math.pow(number,(a-1))%a);
		console.log(number%a);
	}

function Random(min, max) {
    return Math.random() * (max - min) + min;
}
//integer - 6
// prime" " 4 	 
*/