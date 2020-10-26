let req = ""
let query = ""
let results = ""
let userName = 'jmr65936'
let pw = "Lucy2011!"

customerSelect.onshow=function(){
  drpSelect.clear()
  query = "SELECT name from customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jmr65936&pass=" + pw + "&database=jmr65936&query=" + query)

  if (req.status == 200) { 
    customerSelection = JSON.parse(req.responseText)
    console.log(customerSelection)
  }
  if (customerSelection.length == 0) {
    console.log("There are no customers found.")
  } else {
    for (i = 0; i <= customerSelection.length - 1; i++)
      drpSelect.addItem(customerSelection[i])
  }
}
drpSelect.onclick=function(s){
  if (typeof(s) == "object")
    return
  else { 
    console.log(s)
    drpSelect.value = s 
    query = `SELECT state from customer WHERE name = '${s}'`
    //Grab the state of the customer chosen
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jmr65936&pass=" + pw + "&database=jmr65936&query=" + query)

    if (req.status == 200) {
      //save the sate of the customer 
      customerState = JSON.parse(req.responseText)
      console.log(customerState)
    }
    query = `SELECT name from customer WHERE state = '${customerState[0]}'`
    // get the other customers who have the same state
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jmr65936&pass=" + pw + "&database=jmr65936&query=" + query)
    
    if (req.status == 200) {
      //save the sate of the customer 
      customerSameState = JSON.parse(req.responseText)
      console.log(customerSameState)
    }
    let customerMessage = ""
    for (i = 0; i <= customerSameState.length - 1; i++)
      customerMessage = customerMessage + customerState[i] + "\n"
    txtSelect.value = customerMessage
  }  
}

btnToDelete.onclick=function(){
  ChangeForm(customerDelete)
}
