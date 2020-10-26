btnAdd.onclick = function() {
  query = "INSERT INTO customer VALUES ('17','Jesse Antiques','1113 F St','Omaha','NE','68178')"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jmr65936&pass=" + pw + "&database=jmr65936&query=" + query)
  if (req.status == 200) {
    if (req.responseText == 500) {
       lblAdd.value = "Customer successfully added!"
    } else
      lblAdd.value = "There was a problem with adding the customer to the database."
  } else {
    console.log("Error: " + req.status);
  }
  
  query = `SELECT name from customer`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jmr65936&pass=" + pw + "&database=jmr65936&query=" + query)
    if (req.status == 200) { 
    results = JSON.parse(req.responseText)
  } else {
    console.log(`Error: ${req.status}`);
  }
  let customersAdd = ""
  for (i = 0; i <= results.length - 1; i++)
    customersAdd = customersAdd + results[i] + "\n"
  txtAdd.value = customersAdd
}
btnToUpdate.onclick=function(){
  ChangeForm(customerUpdate)
}
