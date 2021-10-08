
var url_string = ""+ window.location.href; //window.location.href

var url = new URL(url_string);
var key = url.searchParams.get("id");
console.log(key);

//var key ="s";

var db = firebase.database();                   
var ref = db.ref(); 

//path is company/employee
 var survey=db.ref('users/');                    
 
if (key == ''){ 
	console.log('error'); 
	document.getElementById('del').innerHTML ="Something Wrong";
	}

 //key is employee id
 survey.child(key).remove(); 
 document.getElementById('del').innerHTML ="<span style='color:red'>ID <b>"+key+"</b> has been deleted successfully</span>";
 
 //reload after 3 sec
 setTimeout(function(){window.location.href = 'http://localhost/firebaseJavaScript/';}, 3000);

