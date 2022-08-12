




function squareNumber(){



//squaring number

var textbox = document.getElementById("sq-input");
var num = textbox.value;

textbox.value=num*num;

}
//method to replace with asterisks

function replaceAsterics(){

//getting first character if text not empty
var textboxx=document.getElementById("repeate-input");
var textt=textboxx.value;
var first=textt[0];



var restof=textt.substring(1,textboxx.length);


while(restof.indexOf(first)!=-1){

//replacing  with '*'

restof=restof.replace(first,"*");


}

//returning first and rest concatenated

textboxx.value=first+restof;

}

//method to replace bad

function bad(){

//finding indices of not and bad
var textboxxx=document.getElementById("bad-input");
var texttt=textboxxx.value;

var index1=texttt.indexOf("not");

var index2=texttt.indexOf("bad");

//checking for bad

if(index2>index1 && index1!=-1){



var before=texttt.substring(0,index1);



var after=texttt.substring(index2+3,texttt.length);



texttt=before+"good"+after;

}
textboxxx.value= texttt;
}
