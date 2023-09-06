var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

        // Form Submit event
form.addEventListener('submit', addItem);
        // Delete event
itemList.addEventListener('click', removeItem);
        // Filter event
filter.addEventListener('keyup', filterItems);

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

        // Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var description = item.childNodes[1].textContent;
    if(itemName.toLocaleLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) !=-1) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
});
}
