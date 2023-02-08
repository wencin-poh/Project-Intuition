//Records User Responses to SQL database
function sql_record(module_number) {
  numstring="numstring="+module_number+", "+the_time.toString()+", "
  
  for (var i=0; i<grades.length; i++){
  numstring+=grades[i][0].toString()+", "+grades[i][1].toString()
  if (i<grades.length-1){
  numstring+=", "}}
  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var e = this.responseText;
      }
    };
    xhttp.open("POST", "/records.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(numstring);
  }




//Retrieves User Responses from SQL database
  function sql_retrieve(module_number){

    modq=module_number+(page+1)
  
    fetch("retrieve.php?modq="+modq)
    .then(function(response){
      return response.json()})
      .then(function(data){
  
  var q=document.getElementById("selected")
  var a=document.getElementById("users")
  var e=document.getElementById("eventual")
  var c=document.getElementById("attempts")
  var o=document.getElementById("overall")
  
  q.innerHTML="Statistics for Question " + (page+1) 
  a.innerHTML=data[0]
  e.innerHTML=Math.round(100*parseFloat(data[3])/(parseFloat(data[0])+0.0001))
  c.innerHTML=Math.round((100*parseFloat(data[1])+100*parseFloat(data[2]))/(parseFloat(data[0])+0.0001))/100
  o.innerHTML=Math.round(100*parseFloat(data[1])/(parseFloat(data[1])+parseFloat(data[2])+0.0001))
      })
  

  }
//Shows Question Statistics
