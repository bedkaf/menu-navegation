const list = document.querySelectorAll('.list');

    function acttiveLink(){
      list.forEach((item) => item.classList.remove('activate'));
      this.classList.add('activate')
    }
    
    list.forEach((item)=>item.addEventListener('click',acttiveLink));