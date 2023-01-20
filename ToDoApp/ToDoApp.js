
        var todos = [];

        // function to create a new to-do
        function createTodo(event) {
            event.preventDefault();
            var title = document.getElementById("title").value;
            var description = document.getElementById("description").value;
            var date = document.getElementById("date").value;
            var todo = {title: title, description: description, date: date};
            todos.push(todo);
            displayTodos();
        }

        // function to display all to-dos
        function displayTodos() {
            var todoList = document.getElementById("todos");
            todoList.innerHTML = "";
            for (var i = 0; i < todos.length; i++) {
                var todo = todos[i];
                var listItem = document.createElement("li");
                listItem.innerHTML = todo.title + " - " + todo.description + " - " + todo.date;
                var deleteButton = document.createElement("button");
                deleteButton.innerHTML = "Delete";
                deleteButton.onclick = function() {
                    deleteTodo(i);
                };
                listItem.appendChild(deleteButton);
                todoList.appendChild(listItem);
            }
        }

        // function to delete a to-do
        function deleteTodo(index) {
            todos.splice(index, 1);
            displayTodos();
        }

        // function to delete all to-dos
        function deleteAllTodos() {
            todos = [];
            displayTodos();
        }

        // Event listener to create a new to-do when the form is submitted
        var createForm = document.getElementById("create-form");
        createForm.addEventListener("submit", createTodo);