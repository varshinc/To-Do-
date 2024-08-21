const inputField = document.getElementById("input-box");
const button = document.getElementById("add");
const listContainer = document.getElementById("list-container");
function addList() {
    var inputValue = inputField.value.trim();
    if (inputValue !== "") {
        addToList(inputValue);
        inputField.value = ""; 
    } else {
        var promptValue = prompt('Please enter some text:');
         if (promptValue !== null && promptValue.trim() !== "") {
            addToList(promptValue);
        } else {
              alert('No valid text entered. Please try again.');
        }
    }
}
function addToList(value) {
    var li = document.createElement('li');
    li.textContent = value;
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = "10px"; 
    deleteButton.onclick = function() {
        listContainer.removeChild(li);
    };
    li.appendChild(deleteButton);
    listContainer.appendChild(li);
}
button.addEventListener('click', addList);
