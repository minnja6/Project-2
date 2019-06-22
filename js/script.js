//creating my two global variables that will be 

const studentList = document.querySelectorAll('body ul li');
const numberOfItemsOnPage = 10;
console.log(studentList);


//creating a function with the variable name "showPage" with 2 parameters that hides all of the students except for 10
const showPage = (studentList, page) => {
const startIndex = (page * numberOfItemsOnPage) - numberOfItemsOnPage;
const endIndex = page * numberOfItemsOnPage;

for ( i=0; i < studentList.length; i +=1) {
   if (i >= startIndex && i < endIndex) {
      studentList[i].style.display = 'block'
   } else {
      studentList[i].style.display = 'none'
   }  
} 
}

showPage(studentList, 1);

const getNumberOfPages =(itemsPerPage, list)=>{
return Math.ceil(list.length/itemsPerPage);
};


// Creating the "appendPageLinks function" to generate, append, and add 
// functionality to the pagination buttons.

const appendPageLinks = (studentList) => { 

let div = document.createElement('div');
let ul = document.createElement('ul');
let page = document.querySelector('.page');
div.setAttribute('class', 'pagination');

page.appendChild(div); 
div.appendChild(ul); 

let numberOfPages = getNumberOfPages(numberOfItemsOnPage, studentList);

// creating a list item with an anchor
// appending the list item to the list
for (i=1; i <= numberOfPages; i++){ 
let li = document.createElement('li');
let a = document.createElement('a');
ul.appendChild(li);
li.appendChild(a);
a.setAttribute('href', '#');
a.innerHTML = i;

//creating the event listener to listen for a "click" to change the page/removing the active class in my for loop, adding the active class back outside of the for loop
a.addEventListener('click', (e) => {
   const aTag = document.querySelectorAll('a');
   const page = event.target.textContent;
   for (let j=0; j < aTag.length; j += 1) { 
      const pageLink = aTag[j];
      const link = (pageLink.textContent);
      if (linkNumber === page){
         pageLink.setAttribute('class' , 'active');
      } else {
      pageLink.removeAttribute('class');
);}
} 
showPage(studentList, 1);
appendPageLinks(studentList);