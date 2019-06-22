//creating two global variables, one to store the student 
//list item elements in the student list and one to store the number of items to show on each page
   const studentList = document.getElementsByClassName('student-item');
   const itemsOnPage = 10;
   console.log(studentList);
//creating a function with two parameters, page and list to hide all students but 10 per page
   const showPage = (list, page) => {
      startIndex = (page * itemsOnPage) - itemsOnPage;
      endIndex = page * itemsOnPage;
      for(i = 0; i < studentList.length; i +=1){    //looping over the list parameter
         if (i >= startIndex && i < endIndex){      //if statement to show only 10 items 
            studentList[i].style.display = 'block'
         } else {                                   //else statement to hide all items other than what I want to show
            studentList[i].style.display = 'none'
         }
      }
   }
   showPage(studentList, 1);
//function to get the number of pages and round them up to a whole number
   const getNumberOfPages =(itemsPerPage, list)=>{
   return Math.ceil(list.length/itemsPerPage);
   };
//creating a function that creates and appends functioning pagination links 
   const appendPageLinks = (list) => {
      let div = document.createElement('div');
      div.setAttribute('class', 'pagination');
      page.appendChild(div);
      let ul = document.createElement('ul');
      div.appendChild(ul);
   }