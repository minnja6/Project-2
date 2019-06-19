/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

   const studentList = document.querySelectorAll('body ul li');
   const numberOfItemsOnPage = 10;
   console.log(studentList);
  

/*** 
 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

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

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (studentList) => { 
   let div = document.createElement('div').className(pagination);
   let ul = document.createElement('ul');
   div.appendChild(ul);
   document.querySelector('div.page').appendChild(div); 
   
   let numberOfPages = getNumberOfPages(numberOfItemsOnPage, studentList);
   for (i=1; i <= numberOfPages; i++){ 
      let li = document.createElement('li');
      // create a list item with an anchor
      // append list item to the list
   } 
     console.log(listOfStudents);
} 




// Remember to delete the comments that came with this file, and replace them with your own code comments.