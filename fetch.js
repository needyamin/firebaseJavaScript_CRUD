var leadsRef = database.ref('users');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData);
      
      document.getElementById("issuesList").innerHTML += `
         <table id="tableIDX">
         
         <tr>
         <td width="800px">${childData.name}</td>
         <td width="200px">${childData.email}</td>
         <td width="200px">${childData.phone}</td>
         <td width="200px"><a href="http://localhost/firebaseJavaScript/?id=${childData.id}"> Delete</a> </td>
         </tr>
         
         </table>`
      
      
    });
});


      
