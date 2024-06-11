// var name="hello"
// var a;
// a=10;

//data types:
// String: chaine de caractere =>"hello"
// number:numero int, float=>10/1.5/NaN
//undefind
//boolean: truthy falsy =>   true/false
// null=>null
// var a;
// console.log(a);//undifind
// a=null;
// console.log(a);//null

// inputs:
// prompt()=>string/confirm()=>true false
// outputs: document.write()/console.log/error/dir// alert()



// comparison:
// var a=10
// var b=20

// var d=a<b
// console.log(d);//true 
// <
// >
// <=
// >=
// ==
// !=
// comp=a!=b

// var a=5
// a=a+1
// a*=2//a=a*2
// a++//a=a+1
// ++a//a=a+1
// a=5
// console.log(a++);//5
// console.log(++a);//7
// console.log(a);//7
// a=12
// b=5

// var c=a%b
// console.log(c);


// var a=true
// console.log(!!a)//true
// var a=null
// console.log(Boolean(a));//true


// string op:
// var a="salah"
// var b =20
// // var d= "hello my name is "+a+"and my age :"+b
// // console.log(d)
// var c=`hello my name is ${a} and my age :${b}`
// console.log(typeof c);

// function add(s,h){

//      return s+h
// }

// var a=false//11
// console.log(a);

// default params:
/*

*/

// function add (a=0,b=0){
//     return a+b
// }

// var x=add()//0
// var x=add(5)//5
// var x=add(5,6)//11


// var a=10
// var b=10
// if(a<b){
//     console.log('a is greater than b');

// }
// else if(a>b){
//     console.log('b is greater than a');

// }
// else{
//     console.log("equal");
// }


// for /while /do while



// var d=10
// if (d==10){
//     console.log("hello");
// }
// console.log("end of program");


// console.log(calcul(5,8,"- or * or / or +"))
// console.log(calcul(10,5,"+"));//15

//1
// function calcul(num1 ,num2 ,op){
//     var res=0;
//     if (op=='+'){
//         res=num1+num2
//     }
//     else if(op=="-"){
//         res=num1-num2
//     }
//     else if(op=='*'){
//         res=num1*num2
//     }
//     else if(op=='/'){
//         res=num1/num2
//     }
//     else{
//         alert("invalid oprator")
//     }
// return res
// }

// console.log(calcul(15,6,'='));


//2
// function add(a,b){
//     return a+b
// }
// function mul(a,b){
//     return a*b
// }
// function sou(a,b){
//     return a-b
// }
// function div(a,b){
//     return a/b
// }
// function calcul(num1 ,num2,op){
//     if(op=="+"){
//         return add(num1,num2)
//     }
//     else if(op=="-"){
//         return sou(num1,num2)
//     }
//     else if(op=="*"){
//         return mul(num1,num2)
//     }
//     else if(op=="/"){
//         return div(num1,num2)
//     }
//     else{
//         alert('invalid')
//         return 0
//     }
// }l




// function add(a,b){
//     return a+b
// }
// function mul(a,b){
//     return a*b
// }
// function sou(a,b){
//     return a-b
// }
// function div(a,b){
//     return a/b
// }


// function calcul(num1 ,num2,op){
//     var res=0
// switch(op){
//     case '+':res=add(num1,num2);break;
//     case '-':res=sou(num1,num2);break;
//     case '*':res=mul(num1,num2);break;
//     case '/':res=div(num1,num2);break;
//     default:res=0;

// }
// return res
// }
// console.log(calcul(10,5,"="));


// function calcul(num1 ,num2,op){

// switch(op){
//     case '+':return add(num1,num2);
//     case '-':return sou(num1,num2)
//     case '*':return mul(num1,num2)
//     case '/':return div(num1,num2)
//     default:return 0;

// }

// }
// console.log(calcul(10,5,"-"));

// 5!=1*2*3*4*5
// for(var i=0;i<=50;i=i+1){
//     console.log(i*2);
// }
// fact(n)


// function factoriel(number){
//     var f=1
//     for(var i=1;i<=number;i++){
//         f=f*i
//         console.log(f);

//     }
//     return f
// }


// console.log(factoriel(5));//120


// etudient notes: notemath/2,notephy/1,notealgo/3,notefrancais/1
// =>calcul moy/admis ou non/10-12 passable 12-14 assez bien 14-16 bien >16 montion 

// true&&true=>true
// true&&false=>false

// true||true=>true
// // true||false=>true
// var nMath = prompt('entre le note du math')
// var nPhy = prompt('entre le note du physique')
// var nAlgo = prompt('entre le note du algorithme')
// var nfrancais = prompt('entre le note du francais')
// //prompt returns string


// // var moyenne = (Number(nMath) * 2 + parseFloat(nPhy) + +nAlgo * 3 + +nfrancais) / 7//12
// // if (+nMath < 0 || +nMath > 20 || +nPhy < 0 || +nPhy > 20 || +nAlgo<0 || +nAlgo>20 || +nfrancais < 0 || +nfrancais > 20){
// //     console.log("error");
// // }
// // else{
// //     if (moyenne < 10) {
// //         console.log("refuse");


// //     }
// //     else {
// //         console.log("admis"); //11
// //         if (moyenne < 12 && moyenne >= 10) {
// //             console.log("passable");
// //         }
// //         else if (moyenne >= 12 && moyenne < 14) {
// //             console.log("assez bien");
// //         }
// //         else if (moyenne >= 14 && moyenne < 16) {
// //             console.log("bien");
// //         }
// //         else {
// //             console.log("motion");
// //         }

// //     }

// // }
//-----------------------------------------------------------------------------------------------
// var moyenne = (Number(nMath) * 2 + parseFloat(nPhy) + +nAlgo * 3 + +nfrancais) / 7//12
// if (+nMath >= 0 && +nMath <= 20 && +nPhy >= 0 && +nPhy <= 20 && +nAlgo>=0 && +nAlgo<=20 && +nfrancais >= 0 && +nfrancais <= 20){
//     if (moyenne < 10) {
//         console.log("refuse");


//     }
//     else {
//         console.log("admis"); //11
//         if (moyenne < 12 && moyenne >= 10) {
//             console.log("passable");
//         }
//         else if (moyenne >= 12 && moyenne < 14) {
//             console.log("assez bien");
//         }
//         else if (moyenne >= 14 && moyenne < 16) {
//             console.log("bien");
//         }
//         else {
//             console.log("motion");
//         }

//     }

// }
// else{
//     console.log("error");

// }



// small chat bot=> hi/salut /bonjour=> hi
// how are you /cava=>fine and you





// var userInput=prompt()

// if(userInput=="hi"|| userInput=="salut"||userInput=="bonjour"){

//     console.log("hey");
// }
// else if(userInput=="how are you"||userInput=="cava"){
//     console.log("fine and you");
// }
// else{
//     console.log("invalid input");
// }

// switch(userInput){
//     case 'hi' :
//     case "salut":
//     case "bonjour":console.log("hey");break
//     case "how are you":
//     case "cava":   console.log("fine and you");break
//     default:console.log("invalid input");


// }

// console.log("hi");
// break;
// console.log("hello");


// for (var i=0;i<=5;i=i+1){//i=5+1
//     console.log(i);//0 //1 //2 //3 //4 //5
// }
// console.log(i,"outside of for loop");

// 7=>7%6!=0 7/5 7/4 7/3 7/2 

// function prime(7)=>true false


// function prime(number){ //9
//    var is_prime=true
//     for (var i= 2 ;i<number;i=i+1){//3
//         console.log('for'); 

//         if(number%i==0){

//           is_prime=false

//         }
//     }
//     return is_prime
// }

// console.log(prime(100));



// function add(a,b){
//     console.log(a+b)
//     return;
// }; 

// a=add(1,2)
// console.log(a);



// loops:

// for(var i=0;i<10;i++){
// console.log(i,"for");
// }

// while(i<10){
//     console.log(i ,"while");
//     i=i+1
// }

//     i=10

// do{
//     console.log(i,"do while");//10
//     i++ //11
// }while(i<10)
//     console.log(i); //11

// console.log("out of while loop");

// function find(tableau,num){
//    var rep=0
//    for (var i=0;i<tableau.length;i++){
//        for(var j=0;j<tableau[i].length;j++){
//            if(tableau[i][j]==num){
//                rep+=1
//            }
//        }
//    }
//    return rep
// }

// var tab=[
//     [1, 2, 3, 4],
//     [5, 6, -7, 3],
//     [8, 3, 10, 4]
//    ]
// // console.log(find(tab,7));

// var i=j=0
// var test=true

// while(i<tab.length&&test==true){
// j=0
//     while(j<tab[i].length&&test==true){
//         if(tab[i][j]>=0){
//             console.log(tab[i][j]);
//         }
//         else{
//            test=false
//         }
//         j++
//     }
// i++
// }


//2 types of variabels : premitive : number bool  char /non premitive :string array  struct/object 
// var nom="   go my code my   "//string 
// var age=15//number
// console.log( nom.trim());//3



// var arr=[0,1,25,true,"hello"]
// arr.unshift('hi')
// // arr.pop()

// console.log(arr)


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(3, 0,"hendi");

// console.log(fruits);
// >8 char /  name/@/domain/./fr
//email@email.com
// var email=prompt('entre votre email')
// var verifMail=email
// verifMail=verifMail.trim()
// if(verifMail.includes('@')){
//     verifMail=verifMail.split('@')//[verifMail,verifMail.com]
//     if(verifMail[0].length>2){
//         if(verifMail[1].includes('.')){
//             verifMail=verifMail[1].split('.')//[verifMail,com]
//             // console.log(verifMail);

//             if(verifMail[0].length>2 && verifMail[1].length>1){
//                 console.log("votre email est valid");
//             }
//             else{
//                 console.log('error1');
//             }
//         }
//         else{
//             console.log('error2');

//         }

//     }
//     else{
//         console.log('errror3');

//     }

// }
// else{
//     console.log("error4");
// }
// var a=true
// do {
//     var email = prompt('entre votre email')
//     var verifMail = email
//     verifMail = verifMail.trim()
//     if (!verifMail.includes('@')) {
//         console.log("error1");
//     }
//     else {
//         verifMail = verifMail.split('@')

//         if (!verifMail[0].length > 2) {
//             console.log("error");
//         }
//         else {
//             if (!verifMail[1].includes('.')) {
//                 console.log("error2");
//             }
//             else {
//                 verifMail = verifMail[1].split('.')

//                 if (!verifMail[0].length > 2 || !verifMail[1].length > 1) {
//                     console.log("error3");
//                 }
//                 else {
//                     console.log("votre email est valid");
//                     a=false
//                 }


//             }

//         }
//     }



// }

// // while (a)
// function verif(email, param) {
//     return email.includes(param)

// }

// function verif2(email) {
//     return email[0].length > 2 && verif(email[1], ".")
// }
// function verif3(email) {
//     return email[0].length > 2 && email[1].length > 1
// }
// function isEmail(email) {
//     if (!verif(email, '@')) {
//         return false
//     }
//     email = email.split('@')

//     if (!verif2(email)) {
//         return false
//     }
//     email = email[1].split('.')

//     if (!verif3(email)) {
//         return false
//     }
//     return true

// }

// var email = prompt('entre votre email')

// email = email.trim()
// cosole.log(isEmail(email));
// note = [15, 10, 17]
// note=new Array(15,12,52)
// a=new String('45454')
// a="hello"

// elev = { noteMath: 15, notePhy: 10, noteInfo: 17,sayHello:function(){console.log('hello');
// } }
// console.log(note[2]);
// console.log(elev['noteInfo']);
// console.log(elev.noteInfo);

// elev['name'] = "saif"
// elev.lastName="abc"
// console.log(elev.sayHello());

// var school=[{id:1,name:"salah",moy:12.5},{id:2,name:"ali",moy:12}]
// var a=new Object()
// console.log(a);

// console.log(school[0].name);

// delete school[0]['name']
// console.log(school);






// //------------------------------------------------------
// var school=[
//     { "name": "jhon", "id": 1, "noteMath": 10, "notePhy": 15, "noteInfo": 20 },
//     { "name": "alice", "id": 2, "noteMath": 14, "notePhy": 18, "noteInfo": 17 },
//     { "name": "bob", "id": 3, "noteMath": 12, "notePhy": 14, "noteInfo": 19 },
//     { "name": "carol", "id": 4, "noteMath": 15, "notePhy": 16, "noteInfo": 18 },
//     { "name": "dave", "id": 5, "noteMath": 11, "notePhy": 12, "noteInfo": 14 }
//   ]


//   for(var i=0;i<school.length;i++){

//     school[i].moy=(school[i].noteMath*3+school[i].notePhy*2+school[i].noteInfo*4)/9
//   }


//   console.log(school);

// var Smoy=0
//   for(var i=0;i<school.length;i++){
//    Smoy=Smoy+school[i].moy

//   }

//   const a="helo"
//   b=0
//     for(let i=0;i<a.length;i++){

//         b=b+1

//   }
//   console.log(b);

// let a=[45,4,"hello",true,[54,45]]

// console.log(a[2]);


// var obj={
//   name:"hello",
//   age:15,
//   isman:true,
//   sayHello:function(){
//     console.log("hello");
//   }
// }

// obj.name="ahmed"
// obj.sayHello()


//DOM*_______________________________________________________

// document.body.innerHTML="hello"


// var div=document.getElementById('root')
// // div.setAttribute('class',"div1")
// div.className='div1'

// var div=document.getElementsByName('root')[0]
// div.innerHTML='<h1>hello</h1>'
// console.log(div);
// // div.style.backgroundColor="red"


// var div =document.querySelector('div')
// // console.log(div.getAttribute('class'));

// // div.innerHTML='<ul><li>1</li><li>2</li><li>3</li></ul>'
// var ul=document.createElement('ul')
// var li1=document.createElement('li')
// var li2=document.createElement('li')

// li1.innerText="1"
// li2.innerText="2"

// ul.appendChild(li1)
// ul.appendChild(li2)

// div.appendChild(ul)
// // console.log(ul);



// var divContainer=document.createElement('div')
// var image=document.createElement('img')
// // image.setAttribute('src',"https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg")
// image.src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
// image.alt='alt'
// divContainer.appendChild(image)
// var ul=document.createElement('ul')
// var listItem1=document.createElement('li')
// var listItem2=document.createElement('li')
// var textListItem1=document.createTextNode('li1')
// listItem1.appendChild(textListItem1)
// var textListItem2=document.createTextNode('li2')
// listItem2.appendChild(textListItem2)
// ul.appendChild(listItem1)
// ul.appendChild(listItem2)
// divContainer.appendChild(ul)

// console.log(divContainer);
// document.body.appendChild(divContainer)



// var div = document.getElementById('root')
// var h1=document.createElement('h1')
// h1.textContent='hello'
// div.parentElement.insertBefore(h1,div)


//********************************* */
// //form creation
// var form=document.createElement('from')

// //labels 
// var nameLabel=document.createElement('label')
// var lastNameLabel=document.createElement('label')
// var emailLabel=document.createElement('label')
// nameLabel.textContent="name:"
// lastNameLabel.innerText="last name :"
// emailLabel.textContent="email :"

// //inputs

// var nameInput=document.createElement('input')
// var lastNameInput=document.createElement('input')
// var emailInput=document.createElement('input')
// var submitInput=document.createElement('input')

// nameInput.setAttribute('type','text')
// nameInput.placeholder="name"
// nameInput.style.borderRadius="20px"
// lastNameInput.type='text'
// lastNameInput.placeholder="last name"
// emailInput.type="email"
// emailInput.setAttribute('placeholder',"email")
// emailInput.required=true
// submitInput.type='submit'
// submitInput.value='click'

// var nameDiv=document.createElement('div')
// nameDiv.appendChild(nameLabel)
// nameDiv.appendChild(nameInput)

// var lastNameDiv=document.createElement('div')
// lastNameDiv.appendChild(lastNameLabel)
// lastNameDiv.appendChild(lastNameInput)


// var emailDiv=document.createElement('div')
// emailDiv.appendChild(emailLabel)
// emailDiv.appendChild(emailInput)




// form.appendChild(nameDiv)
// form.appendChild(lastNameDiv)
// form.appendChild(emailDiv)
// form.appendChild(submitInput)

// document.body.appendChild(form)
// // console.dir();

// // form.style.padding="40px"
// form.style.backgroundColor='blue'
// var divs=document.getElementsByTagName('div')

// for(var i =0 ;i<divs.length;i++){
//   divs[i].style.backgroundColor="red"
//   divs[i].style.width="400px"
//   divs[i].style.display="flex"
//   divs[i].style.justifyContent="space-between"
//   divs[i].style.padding="20px"
// }
//  var a=submitInput.style
// a.backgroundColor="blue"
// a.padding="10px 20px"


// document.getElementsByTagName('button')[0].onclick=hello

// function hello(){
//   console.log("jjj");
//   // var h1= document.createElement('h1')
//   h1.textContent='hello'
//   document.body.appendChild(h1)


// }


var div = document.getElementById("root")


// var ul=document.createElement('ul')
// console.log(ul);
// var li =document.createElement('li')
// ul.appendChild(li)
// var text=document.createTextNode('hello')
// li.appendChild(text)
// div.appendChild(ul)

// console.dir(div);
// div.style.cursor="pointer"

// div.onclick=function(){
// document.body.style.backgroundColor="red"

// }

// div.addEventListener("change",function(event){
//   console.log(event);

//   document.body.style.backgroundColor="red"

// })


// var userNameInput=document.getElementsByTagName('input')[0]
// var userEmailInput=document.getElementsByTagName('input')[1]



// var button=document.getElementsByTagName('button')[0]
// var userName
// var userEmail
// button.addEventListener('click',function(event){

//   userName=userNameInput.value
//   userEmail=userEmailInput.value

//   if(userName.length<3){
//     console.log("user name should be longer then 3");
//   }


// })

// var form=document.getElementsByTagName('form')[0]

// form.addEventListener('submit',function(e){
//   e.preventDefault()

//  var userName=e.target.gender.value
//  document.write(userName)

// })





/**------------------------------ */

var form = document.querySelector('form')
var error = document.createElement('h1')
error.id = 'message'
error.innerText = "error"
error.style.color = "red"
var success = document.createElement('h1')
success.id = "message"
success.innerText = "success"
success.style.color = "green"


form.addEventListener('submit', function (event) {
  event.preventDefault()
  var msg = document.getElementById("message")
  if (msg) {
    msg.remove()
  }
  var user = {}

  user.name = event.target.userName.value
  user.email = event.target.userEmail.value
  user.service = event.target.service.value

  var validName = true
  for (let i = 0; i < user.name.length; i++) {
    if (isValidName(user, i)) {
      continue
    }
    else {
      validName = false
    }
  }

  if (!validName) {
    form.appendChild(error)
    return;
  }

  if (!(user.name.length > 3)) {
    form.appendChild(error)
    return;
  }

  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  console.log(regex.test(user.email));
  if (!regex.test(user.email)) {
    form.appendChild(error)
    return;
  }

  form.appendChild(success)

})


function isValidName(user, i) {
  return (user.name[i].charCodeAt(0) > 64 && user.name[i].charCodeAt(0) < 91) || (user.name[i].charCodeAt(0) > 96 && user.name[i].charCodeAt(0) < 123)
}








