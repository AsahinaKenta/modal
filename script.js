var clickImg = document.getElementById('click-img');
var modal = document.getElementById('modal');
var modalContent = document.getElementById('modal-content');
var modalImg = document.getElementById('modal-img');
var imgLists = document.getElementById('img-lists');
console.dir(imgLists);
console.dir(imgLists.children[0]);

for (var i = 0; i < imgLists.children.length; i++) {
  imgLists.children[i].addEventListener('click', (function(index){
      return function(){
      // console.dir(imgLists);
      // console.dir(imgLists.children[i]);
      console.log(index);
      var imgSrc = imgLists.children[index].children[0].getAttribute('src');
      modalImg.setAttribute('src', imgSrc);
      modal.classList.add('active');
    }
  })(i));
}

// clickImg.addEventListener('click', function(){
//   console.log(clickImg.src);
//   console.log(clickImg.getAttribute('src'));
//   modalImg.src = imgSrc;
// });


modal.addEventListener('click', function(){
  modal.classList.remove('active');
});

modalContent.addEventListener('click',function(e){
  e.stopPropagation();
});
