//creating my two global variables that will be 

const list = document.getElementsByClassName("student-item");
const itemsPerPage = 10;
console.log(list);


//creating a function with the variable name "showPage" with 2 parameters that hides all of the students except for 10
const showPage = (list, page) => {
const startIndex = page * itemsPerPage - itemsPerPage;
const endIndex = page * itemsPerPage -1;

for ( i=0; i < list.length; i ++) {
   if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block'
   } else {
      list[i].style.display = 'none'
   }  
} 
};

showPage(list, 1);

const numPages =(itemsPerPage, list)=>{
return Math.ceil(list.length/itemsPerPage);
};


// Creating the "appendPageLinks function" to generate, append, and add 
// functionality to the pagination buttons.

const appendPageLinks = (list) => { 

let paginationDiv = document.createElement('div');
let paginationLinks = document.createElement('ul');
let pageDiv = document.querySelector('.page');
paginationDiv.setAttribute('class', 'pagination');

pageDiv.appendChild(paginationDiv); 
paginationDiv.appendChild(paginationLinks); 

// creating a list item with an anchor
// appending the list item to the list
for (i=1; i < numPages + 1; i++){ 
let li = document.createElement('li');
let a = document.createElement('a');
paginationLinks.appendChild(li);
li.appendChild(a);
a.setAttribute('href', '#');
a.textContent = i;

paginationLinks.firstElementChild.firstElementChild.className = "active";
//creating the event listener to listen for a "click" to change the page/removing the active class in my for loop, adding the active class back outside of the for loop
a.addEventListener('click', (event) => {
page = parseInt(e.target.textContent);
showPage(list, page);
let a = document.querySelectorAll('a');
for(let i = 0; i < a.length; i++) {
   a[i].className = "";
}
event.target.className = "active";
});
