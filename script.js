function refreshPage() {
    window.location.reload();
  }
  

  document.addEventListener('DOMContentLoaded',()=> {
    fetch('/random-name')
    .then(response => response.json())
    .then(data => {
        document.getElementById('random-name').textContent =data.name;
    })
    .catch(error=> console.error('erorr fetching name:',error));
  })