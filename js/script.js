//creating my global variable that will be used to store the student list item elements in the student list
   const studentList = document.querySelectorAll("body ul li");
//creating a global variable to store the number of items per page i want to show
   const itemsPerPage = 10;
console.log(studentList);
//creating a "showPage" function containing two parameters 
   const showPage = (studentList, page) => {
//two variables that hold the start index and end index of the list items to be displayed
      const startIndex = page * itemsPerPage - itemsPerPage;
      const endIndex = page * itemsPerPage;
//looping over the list parameter 
   for (let i = 0; i < studentList.length; i ++) {
      if ( i >= startIndex && i < endIndex) {
          studentList[i].style.display = 'block'; //showing 10 students on each page
      } else {
         studentList[i].style.display = 'none'; //hiding all other students 
   }  
  } 
 };
// Creating the "appendPageLinks function" to generate, append, and add 
// functionality to the pagination buttons.
   const appendPageLinks = (studentList) => { 
//determining how many pages are needed      
      let getNumberOfPages = Math.ceil(studentList.length / itemsPerPage);
//creating a div element and giving it the class name of pagination
      let div = document.createElement('div');
      div.className = "pagination";
//creating the ul element and append the page to .page   
      let page = document.querySelector('.page');
      page.appendChild(div);
//creating and adding a ul to the "pagination" div to store the pagination links 
      let ul = document.createElement('ul');
      div.appendChild(ul); 

// creating a list item with an anchor
// appending the list item to the list
      for (let j = 1; j <= getNumberOfPages; j++){ 
         let li = document.createElement('li');
         let a = document.createElement('a');
         ul.appendChild(li);
         li.appendChild(a);
         a.setAttribute('href', '#');
         a.textContent = j;
     
         if (j === 1) {
            a.className = 'active'; //making the first page button that is selected active
         }
//creating the event listener to listen for a "click" to change the page
         a.addEventListener('click', (e) => {
            let active = e.target.textContent;
            let a = document.querySelectorAll('a');
            showPage(studentList, active);
               for(let k = 0; k < a.length; k++) {
                  a[k].classList.remove("active"); //removing the active class from all other page number buttons
            }
         event.target.className = 'active'; //adding the active class back to only the buttons that are clicked 
     
      
      });
      }
      };
      showPage(studentList, 1);
      appendPageLinks(studentList);