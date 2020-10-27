let todoItems = [];  // the purpose is to store todo items

function renderTodo(todo) {                                                 // funtion to create new todo items and render on the page
    localStorage.setItem("todoItems", JSON.stringify(todoItems));            // store todo items into browser storage

    const list = document.querySelector(".js-todo-list");                    // get reference of required elements
    const item = document.querySelector(`[data-key='${todo.id}]`);           // runs a check for deleted items and update the DOM

    if (todo.deleted) {
        todoItems.remove();
        if (todoItem.length === 0) list.innerHTML = "";
        return;
    }

    const isChecked = todo.checked ? "done" : "";                            // evaluate the done state of a todo entry
    const listItemElement = document.createElement("li");                   // create a list item that holds todo entry
    listItemElement.setAttribute("class", `todo-item ${isChecked}`);        // set class and data-key attribute to the todo entry
    listItemElement.setAttribute("data-key", todo.id);            // set class and data-key attribute to the todo entry and for line 19 // populate the todo entry with required values
    listItemElement.innerHTML = `                                          
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>                   
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    &times;
    </button>
    `;

    if (item) {                                                     //run condition to append the created item to the page
        list.replaceChild(listItElement.item);
    } else {
        list.append(listItemElement);
    }
}
function addTodo(text) {                //define function to create a new todo entry
    const todo = {                         // define todo entry object structure
        text,
        checked: false,
        id: Date.now(),
    };

    todoItems.push(todo);               // add new todo entry to the array collection
    renderTodo(todo);                   //trigger page update by invoking the render todo funtion
}

const form = document.querySelector(".js-form");                //get reference of the todo entry form element
form.addEventListener("submit", (event) => {                   //bind an event listener on form submission
    event.preventDefault();                                      //prevent default behaviour of form submission
    const input = document.querySelector(".js-todo-input");     //get reference of the input element

    const text = input.value.trim();        //remove whitespace on both end of a todo entry strings
    if (text !== "") {                      //check for empty value and create a todo item
        addTodo(text);                      //invoke (addTodo) function to commit change
        input.value = "";                   //Reset the value of the input Element
        input.focus();                      //Set focus to the input element
    }
});

function toggleDone(key) {                  //Define functio to toggle the Done state of a todo entry
    const index = todoItems.findIndex((item) => item.id === Number(key));       //Retrieve the index of the todo entry in the collection
    todoItems[index].checked = !todoItems[index].checked;       //toggle the check attribute value of the todo entry
    renderTodo(todoItems[index]);       //Trigger Page update by invokin the renderTodo function
}

function deleteTodo(key) {              //Define function to delete a todo entry
    const index = todoItems.findIndex((item) => item.id === Number(key));   // Retrieve the index of the todo entry in the collection
    const todo = {          //set delete attribute to true for the todo entry
        deleted: true,
        ...todoItems[index],
};                                                                                                                                                        
todoItems =todoItems.filter((item) => item.id !== Number(key));
    renderTodo(todo);               //trigger page update by invokin render funtion
}

const list = document.querySelector(".js-todo-list");           //get reference to the ul element
list.addEventListener("click", (event) => {          //bind click event listener to ul element
    if (event.target.classList.contains("js-tick")) {       //traverse the DOM to check for the classname "js-tick" and invoke the toggleDone function if check and return true
        const itemKey = event.target.parentElement.dataset.key;     // retrieve the dataKey attribute value
        toggleDone(itemKey);            //Invoke toggledone funtion to update todo entry state
    }
    if (event.target.classList.contains("js-delete-todo")) {
        const itemKey = event.target.parentElement.dataset.key;
        deleteTodo(itemKey);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const ref = localStorage.getItem("todoitems");      //get stored todo entry from browser local storage
    if (ref) {                  //check that we have entry on the local storage
        todoItems = JSON.parse(ref);        //convert todo entries to an array collection
        todoItems.forEach((t) => {          //iterate through the collection and update ur webpage
            renderTodo(t);
        });
    }

});


    // if (event.target.classList.contains("js-delete-todo")) {
        // const itemKey = event.target.parentElement.dataset,key;
        // deleteTodo(itemKey);
        //}




