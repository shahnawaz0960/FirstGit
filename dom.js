// Examine the document object //

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent = 'Hi';
// console.log(document.forms);
// console.log(document.images);

// Get ElementByID
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent='Hello';
headerTitle.innerText='GoodBye';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000000';

var mainTitle = document.querySelector('#main h2.title');

// Apply the desired styles
mainTitle.style.fontWeight = 'bold';
mainTitle.style.color = 'green';



        // Get Element By Class Name //
// var item = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(item[1]);
// item[1].textContent = 'Hello 2';
// item[1].style.fontWeight = 'bold';
// item[1].style.backgroundColor = 'yellow';

// // items.style.backgroundColor = '#f4f4f4';

// for(var i=0; i < item.length; i++) {
//     item[i].style.backgroundColor = '#f4f4f4';
// }


        // Get Element By Tag Name  //

        // var li = document.getElementsByTagName('li');
        // console.log(li);
        // console.log(li[1]);
        // li[1].textContent = 'Hello 2';
        // li[1].style.fontWeight = 'bold';
        // li[1].style.backgroundColor = 'yellow';
        
        // // items.style.backgroundColor = '#f4f4f4';
        
        // for(var i=0; i < li.length; i++) {
        //     li[i].style.backgroundColor = '#f4f4f4';
        // }


    // Query Selector  //
// var header = document.querySelector('#main-header');
// header.computedStyleMap.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value ='Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value='SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector
// ('.list-group-item:last-child');
// lastItem.style.color = 'blue';