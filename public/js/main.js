const deleteBtn = document.querySelectorAll('.fa-trash') //creating a variable and assigning it to a selection of all elements with a class '.fa-trash'
const item = document.querySelectorAll('.item span') //creating a variable and assigning it to a selection of span tags inside of a parent that has a class of "item"
const itemCompleted = document.querySelectorAll('.item span.completed') //creating a variable and assigning it to a selection of spans with a class of "completed" inside of a parent with a class of "item"

Array.from(deleteBtn).forEach((element)=>{ //creating an array from our selection and starting a loop
    element.addEventListener('click', deleteItem) //add an event listener to the current item and calls a function called "deleteItem"
}) //closes loop

Array.from(item).forEach((element)=>{ //creating an array from our selection and starting a loop
    element.addEventListener('click', markComplete) //add an event listener to the current item and calls a function called "markComplete"
}) //closes loop

Array.from(itemCompleted).forEach((element)=>{ //creating an array from our selection and starting a loop
    element.addEventListener('click', markUnComplete) //add an event listener to the current item and calls a function called
}) //closes loop

async function deleteItem(){ //declare an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText //look inside of the list item and grabs only the inner text within the list span
    try{ //starting a TRY block to do something
        const response = await fetch('deleteItem', { //creates a response variable that waits on a fetch to get data from the result of the "deleteItem" route
            method: 'delete', //sets the CRUD method for the route
            headers: {'Content-Type': 'application/json'}, //specifying the type of content expected, which is JSON
            body: JSON.stringify({ //declare the message content being passed and stringify that content
              'itemFromJS': itemText //setting the content of the body to the inner text of the list item, and naming it "itemFromJS"
            }) //closing the body
          }) // closing the object
        const data = await response.json() //waiting on JSON from the response to be converted
        console.log(data) //log the results to the console
        location.reload() //reloads the page to update what is displayed
 
    }catch(err){ //if an error occurs, pass the error into the catch block
        console.log(err) //log the error to the console
    } //closes the catch block
} //end the function

async function markComplete(){ //declare an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText //look inside of the list item and grabs only the inner text within the list span
    try{ //starting a TRY block to do something
        const response = await fetch('markComplete', { //creates a response variable that waits on a fetch to get data from the result of the markComplete route
            method: 'put', //setting the CRUD meth to "update" for the route
            headers: {'Content-Type': 'application/json'}, //specifying the type of content expected, which is JSON
            body: JSON.stringify({ //declare the message content being passed and stringify that content
                'itemFromJS': itemText //setting the content of the body to the inner text of the list item, and naming it "itemFromJS"
            }) //closes the body
          })  //closes the object
        const data = await response.json() //waiting on JSON from the response to be converted
        console.log(data) //log the results to the console
        location.reload() //reloads the page to update what is displayed

    }catch(err){ //if an error occurs, pass the error into the catch block
        console.log(err) //log the error to the console
    } //closes the catch block
} //end the function

async function markUnComplete(){ //declare an asynchronous function
    const itemText = this.parentNode.childNodes[1].innerText //look inside of the list item and grabs only the inner text within the list span
    try{ //starting a TRY block to do something
        const response = await fetch('markUnComplete', { //creates a response variable that waits on a fetch to get data from the result of the markComplete route
            method: 'put', //setting the CRUD meth to "update" for the route
            headers: {'Content-Type': 'application/json'}, //specifying the type of content expected, which is JSON
            body: JSON.stringify({  //declare the message content being passed and stringify that content
                'itemFromJS': itemText //setting the content of the body to the inner text of the list item, and naming it "itemFromJS"
            })//closes the body
          })//closes the object
        const data = await response.json() //waiting on JSON from the response to be converted
        console.log(data) //log the results to the console
        location.reload() //reloads the page to update what is displayed

    }catch(err){ //if an error occurs, pass the error into the catch block
        console.log(err) //log the error to the console
    }
}//end the function