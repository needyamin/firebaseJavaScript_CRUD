
// Generate Random ID
var userId = "id" + Math.random().toString(16).slice(2);  // current use
var uniq = 'id' + (new Date()).getTime();

// Variable for Each Input Fields
function submit(){
	
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;


if(name === '' || email ==='' || phone ===''){ 
	alert('Please fill up all information');
	 document.getElementById("posted").innerHTML ="<span style='color:red;'>"+'Please fill Name, Email, Phone Number collectly'+"</span>";
	}

else{
function writeUserData(userId, name, email, phone) {
 firebase.database().ref('users/' + userId).set({
	id: userId, 
    name: name,
    email: email,
    phone : phone
  });
  
  console.log('POSTED');
  document.getElementById("posted").innerHTML = "DATA HAS BEEN POSTED. ID NO: " + userId;
  
  //reload after 3 sec
  setTimeout(function(){window.location.href = '';}, 3000);
    
    //reset function
     function reset(){
		 document.getElementById("name").value = '';
		 document.getElementById("email").value = '';
		 document.getElementById("phone").value = '';
		 }
	    //print 
		 reset();
 
}
//print
writeUserData(userId, name, email, phone);

}
}
