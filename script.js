const taskInput = document.getElementById('taskInput');
const submitButton = document.getElementById('submitButton');
const dateInput = document.getElementById('date');
const categorySelect = document.getElementById('category');
const taskLists = {
    'academics': document.getElementById('academicsList'),
    'sports': document.getElementById('sportsList'),
    'health': document.getElementById('healthList'),
    'shopping': document.getElementById('shoppingList'),
    'personal': document.getElementById('personalList'),
    'work': document.getElementById('workList'),
    'others': document.getElementById('othersList')
};

// Function to create a new task item
function createTaskElement(taskText, date, category) {
    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create task text
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    // Create date text
    const dateTextSpan = document.createElement('span');
    dateTextSpan.textContent = date.value;

    checkbox.addEventListener("change", function(){
        if(this.checked){
            taskTextSpan.style.textDecoration = "line-through";
            dateTextSpan.style.textDecoration = "line-through";
        } else {
            taskTextSpan.style.textDecoration = "none";
            dateTextSpan.style.textDecoration = "none";
        }
    });

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskLists[category].removeChild(taskItem);
    });

    // Create list item
    const taskItem = document.createElement('li');
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(dateTextSpan);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    const category = categorySelect.value;
    if (taskText !== '') {
        const taskItem = createTaskElement(taskText, dateInput, category);
        taskLists[category].appendChild(taskItem);
        taskInput.value = '';
    }
}

// Event listener for submit button
submitButton.addEventListener('click', addTask);

// Event listener for pressing Enter key in the input field
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
