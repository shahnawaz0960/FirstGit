var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

        // Form Submit event
form.addEventListener('submit', addItem);
        // Delete event
itemList.addEventListener('click', removeItem);

        // Add Item
function addItem(e) {
    e.preventDefault();

        // Get Input Value
var newItem = document.getElementById('item').value;

        // Create new li element
var li = document.createElement('li');
        // Add Class
li.className= 'list-group-item';
        // Add Text node with input value
li.appendChild(document.createTextNode(newItem));


        // Create Delete button element
var deleteBtn= document.createElement('button');

        // Add classes to delete button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        // Append Text Node
deleteBtn.appendChild(document.createTextNode('x'));

        // Create edit button
var editBtn = document.createElement('button');

        // Add classes to edit button
editBtn.className = 'btn btn-primary btn-sm float-right edit';

        // Append button to li
li.appendChild(deleteBtn);

        // Append text node
editBtn.appendChild(document.createTextNode('Edit')) ;

itemList.appendChild(li);
li.appendChild(editBtn);
}

    // Remove Item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
       if(confirm('Are you sure?')) {
        var li = e.target.parentElement;
        itemList.removeChild(li);
       }
    }
}