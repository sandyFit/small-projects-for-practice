// Select key DOM elements
const todoForm = document.querySelector('#todoForm');
const todosList = document.querySelector('#todosList');
const todosCounter = document.querySelector('#todosCounter');
const completedCounter = document.querySelector('#completedCounter');

// Data storage for todos
const myTodos = JSON.parse(localStorage.getItem('todos')) || [];
let todosCount = myTodos.length;
let completedCount = myTodos.filter(t => t.completed).length;

// Handle form submission to add a new todo
todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    const todoInput = document.querySelector('#todoInput');
    const todoText = todoInput.value.trim(); // Remove whitespace

    if (todoText) {
        // Add the new todo object to the array
        myTodos.push({
            id: Date.now(), // unique ID based on timestamp
            text: todoText,
            completed: false
        });
        
        // Update total count and UI
        todosCount++;
        renderTodos(myTodos);

        // Save todo to localstorage
        localStorage.setItem('todos', JSON.stringify(myTodos));

        todosCounter.textContent = `Todos: ${todosCount}`;

        // Clear the input field
        todoInput.value = '';
    };
});

// Function to render all todos
function renderTodos(todos) {
    // Clear the existing todo list in the UI
    todosList.innerHTML = '';

    // Loop through each todo and render it
    todos.forEach((todoObj, index) => {
        const li = document.createElement('li');
        li.classList.add('todo');

        // Set background color based on completed state
        li.style.backgroundColor = todoObj.completed ? 'rgb(178, 241, 209)' : 'rgb(240, 241, 240)';

        // Add HTML for the todo item, with checkbox and delete button
        li.innerHTML = `
            <input type="checkbox" class="completed" data-id="${todoObj.id}"
                ${todoObj.completed ? 'checked' : ''}
            >
            <span>${todoObj.text}</span>
            <button class="deleteBtn" data-id="${todoObj.id}">✖️</button>
        `;
        todosList.appendChild(li); // Add the item to the list
    });

    // Handle checkbox logic for marking todos as completed
    const checkboxes = document.querySelectorAll('.completed');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const id = Number(e.target.getAttribute('data-id')); // Get which todo was toggled
            const todo = myTodos.find(t => t.id === id);
            console.log(`Todo ID: ${todo.id}`);
            todo.completed = e.target.checked;

            // Recalculate and update the completed count
            completedCount = myTodos.filter(t => t.completed).length;
            completedCounter.textContent = `Completed: ${completedCount}`;

            // Save changes
            localStorage.setItem('todos', JSON.stringify(myTodos));

            // Re-render to update background color
            renderTodos(myTodos);
        });
    });

    // Handle delete button logic
    const deleteButtons = document.querySelectorAll('.deleteBtn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const id = Number(e.target.getAttribute('data-id')); // Get which todo to delete
            const index = myTodos.findIndex(t => t.id === id);

            if (index !== -1) {
                myTodos.splice(index, 1); // Remove the todo from the array

                // Update counters
                todosCount--;
                completedCount = myTodos.filter(t => t.completed).length;
    
                // Update UI
                todosCounter.textContent = `Todos: ${todosCount}`;
                completedCounter.textContent = `Completed: ${completedCount}`;

                localStorage.setItem('todos', JSON.stringify(myTodos));
                renderTodos(myTodos); // Re-render to reflect deletion
            }

        });
    });
}
