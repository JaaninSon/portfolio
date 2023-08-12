const projectNav = document.querySelector('.pj-nav ul');
const projectList = document.querySelector('.pj-list-container');
const projectItem = document.querySelector('.pj-list-item');

projectNav.addEventListener('click', (e)=>{
   const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
   if(filter == null) {
      return;
   }
   projectItem.forEach((projectItem) => {
      if(filter === '*' || filter === projectItem.dataset.type) {
         projectItem.style.display = 'block'
      } else {
         projectItem.style.display = 'none'
      }
   });
});