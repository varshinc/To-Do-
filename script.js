const inputField=document.getElementById(input-box);
const button=document.getElementById("add");
const listContainer=document.getElementById("list-container");

function addlist() {
    var inputBox = document.getElementById('input-box');
    var inputValue = inputBox.value;
    if (inputValue.trim() !== "") {
        var li = document.createElement('li');
        li.textContent = inputValue;
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = "10px"; 
        deleteButton.onclick = function() {
            listContainer.removeChild(li);
        };
        li.appendChild(deleteButton);
        var listContainer = document.getElementById('list-container');
        listContainer.appendChild(li);
        inputBox.value = "";
    } else {
        alert('Please enter some text!');
    }
}