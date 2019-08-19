// 기본 선언
var name = "global var"

function home(){
	var homevar = "homevar";
	for(var i=0; i<100;i++){
	}
	console.log(i)
}
home();

// let 사용

var name = "global var"

function home(){
	var homevar = "homevar";
	for(let i=0; i<100;i++){
		console.log(i)
	}
	
}
home();

// let을 if 문 안에서 사용

    
var name = "global var"

function home(){
	var homevar = "homevar";
	for(let i=0; i<100;i++){
//       console.log(i)
    }
   if(true){
     let myif = "myif";
   }
  console.log(myif);
//  	console.log(i)
}
home();
