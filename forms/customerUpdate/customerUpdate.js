customerUpdate.onshow=function(){
   query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jmr65936&pass=" + pw + "&database=jmr65936&query=" + query)
    if (req.status == 200) {
            results = JSON.parse(req.responseText)
            console.log(results)
            let message = ""
            for (i = 0; i < results.length; i++)
            message = message + results[i] + "\n"
            lblUpdate.value = message
            selUpdate.clear()
            for (i = 0; i <= results.length - 1; i++)
                selUpdate.addItem(results[i])
    } else {
        NSB.MsgBox(`Error: ${req.status}`);
    }  
}
btnUpdate.onclick=function(){
    let newCustomerName = inptUpdate.value
    let oldCustomerName = selUpdate.value
    query = "UPDATE customer SET name =" + '"' + newCustomerName + '"' + " WHERE name = " + '"' + oldCustomerName + '"'
    alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jmr65936&pass=" + pw + "&database=jmr65936&query=" + query)
        if (req.status == 200) { 
            if (req.responseText == 500) {  
                NSB.MsgBox(`You have successfully changed the customer name!`)
                inptUpdate.value = ""
                selUpdate.value = ""
              } else
                NSB.MsgBox(`There was a problem changing the pet name.`)
        } else 
            NSB.MsgBox(`Error: ${req.status}`);
    } 
    
    