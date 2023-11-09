console.log("script running.....")
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
  if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
 {
     document.querySelector('.ham').style.display='inline'
  document.querySelector('.cross').style.display='none'
}
  else{
    document.querySelector('.ham').style.display='none'
    setTimeout(() => {
        document.querySelector('.cross').style.display='inline' 
    }, 350);
  
 }
})


const searchInput = document.getElementById('searchInput');
const departmentList = document.getElementById('departmentList');

searchInput.addEventListener('input', function(event) {
  const searchTerm = event.target.value.toLowerCase();

  const departments = departmentList.getElementsByClassName('department');

  Array.from(departments).forEach(function(department) {
    const departmentName = department.getElementsByTagName('h2')[0].innerText.toLowerCase();

    if (departmentName.indexOf(searchTerm) > -1) {
      department.style.display = '';
    } else {
      department.style.display = 'none';
    }
  });
}); 

