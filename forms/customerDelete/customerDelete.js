let customerList = ""

customerDelete.onshow=function(){
   txtList.style.height = "100px"
}
btnShowCustomers.onclick=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jmr65936&pass=" + pw + "&database=jmr65936&query=" + query)
if (req.status == 200){ 
        results = JSON.parse(req.responseText)
        console.log(results)
    if (results.length == 0){  
        lblDelete.textContent = "There are no customers in the database."
    }else {   
        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)
        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
        txtList.value = message
     } 
}else{  
        lblDelete.textContent = "Error code: " + req.status
}
}
customerDelete.onshow=function(){
    query = "Select * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jmr65936&pass=" + pw + "&database=jmr65936&query=" + query)
    if (req.status == 200){
        customerList = JSON.parse(req.responseText)
        console.log(results)
    }else{
        lblDelete = `Error: ${req.status}`
    }  
}
btnDelete.onclick=function(){
    let customerDelete = inptDelete.value
    // make sure the pet name is in the database before you try to delete it
    let found = ""
    for (i = 0; i <= customerList.length - 1; i++) {
        if (customerDelete === customerList[i][1]){
            found = true
            break 
        }else{
            found = false
    }
  }
    if (found == false) 
       lblDelete.textContent = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = " + '"' + customerDelete + '"'
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jmr65936&pass=" + pw + "&database=jmr65936&query=" + query)
      if (req.status == 200) 
            if (req.responseText == 500)  
                lblDelete.textContent = `You have successfully deleted the customer named ${customerDelete}`
            else
                lblDelete.textContent = `There was a problem deleting ${customerDelete} from the database.`
      else
        // transit error
        lblDelete.textContent = `Error: ${req.status}`
      } 
}

btnRemaining.onclick=function(){
  query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jmr65936&pass=" + pw + "&database=jmr65936&query=" + query)
if (req.status == 200){ 
        postDelete = JSON.parse(req.responseText)
        console.log(postDelete)
    if (postDelete.length == 0){  
        lblDelete.textContent = "There are no customers in the database."
    }else {   
        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)
        let message1 = ""
        for (i = 0; i < postDelete.length; i++)
            message1 = message1 + postDelete[i][1] + "\n"
        txtUpdatedCustomers.value = message1
     } 

}else {  
        lblDelete.textContent = "Error code: " + req.status
  }
}
btnToAdd.onclick=function(){
  ChangeForm(customerUpdate)
}
