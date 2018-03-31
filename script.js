var modalBtn = document.getElementById('modal-btn');
var modal = document.getElementById('modal');
var modalContent = document.getElementById('modal-content');

modalBtn.addEventListener('click', function(){
  modal.classList.add('active');
});

modal.addEventListener('click', function(){
  modal.classList.remove('active');
});

modalContent.addEventListener('click',function(e){
  e.stopPropagation();
});
