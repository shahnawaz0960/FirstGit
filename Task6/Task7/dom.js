// Traversing the DOM  //

var itemList = document.querySelector('#items');
    // ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);


        // ParentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

        //  ChildNode

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

//         // FirstChild
// console.log(itemList.firstChild);

//         //FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

        // lastChild
// console.log(itemList.lastChild);

        //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

        //nextSibling
// console.log(itemList.nextSibling);
//         nextElementSibling
// console.log(itemList.nextElementSibling);

//        // previousSibling
// console.log(itemList.previousSibling);
//         PreviousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

        // Create a Div
var newDiv = document.createElement('div');

        // Add Class
newDiv.className = 'hello';

    // Add id
newDiv.id= 'hello 1';

        // Add attr
newDiv.setAttribute('title', 'Hello Div');

        // Create text Node
var newDivText = document.createTextNode('Hello World');

    // Add Text to DIv
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv,h1);



  // Add "Hello World" before "Item 1"
  var item1 = document.querySelector("#items li:first-child");
  var newItem1 = document.createElement("li");
  newItem1.className = "list-group-item";
  newItem1.textContent = "Hello" ;
  item1.parentNode.insertBefore(newItem1, item1);
