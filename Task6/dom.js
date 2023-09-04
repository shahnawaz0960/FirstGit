        // QuerySelector //

// var item = document.querySelector('.list-group-item:nth-child(2)');
// item.style.backgroundColor = 'green';

// var item = document.querySelector('.list-group-item:nth-child(3)');
// item.style.display = 'none';

          //      QuerySelector All //

 var li = document.querySelectorAll('li');
 li[1].style.color = 'green';



var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i<odd.length; i++) {
        odd[i].style.backgroundColor ='green';
}
         
          