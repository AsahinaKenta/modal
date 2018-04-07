var clickImg = document.getElementById('click-img');
var modal = document.getElementById('modal');
var modalContent = document.getElementById('modal-content');
var modalImg = document.getElementById('modal-img');
var imgLists = document.getElementById('img-lists');
var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');

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
// for (var i = 0; i < imgLists.children.length; i++) {
//   imgLists.children[i].addEventListener('click', (function(index){
//     return function(){
//       // console.dir(imgLists);
//       // console.dir(imgLists.children[i]);
//       console.log(index);
//       var imgSrc = imgLists.children[index].children[0].src;
//       var imgSrcArray = imgSrc.split('/');
//       console.log(imgSrc);
//       console.log(imgSrcArray);
//       var imgName = imgSrcArray[imgSrcArray.length - 1];
//       console.log(imgName);
//       var imgPath = './img/' + imgName;
//       modalImg.setAttribute('src', imgSrc);
//       modal.classList.add('active');
//     }
//   })(i));
// }

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

prevBtn.addEventListener('click',function(e){
  console.log('prevボタンをクリック');
  e.preventDefault();
  // var currentImgSrc = modalImg.getAttribute('src');
  // var currentImgSrcNum = +currentImgSrc.split('/')[currentImgSrc.split('/').length - 1].substr(-5, 1);
  // currentImgSrcNum--;
  // if(currentImgSrcNum === 0){
  //   currentImgSrcNum = 3;
  // }
  // var prevImgSrc = './img/enemy-0' + currentImgSrcNum + '.png';
  // modalImg.setAttribute('src', prevImgSrc);
  changeImg(e);
});

nextBtn.addEventListener('click',function(e){
  console.log('nextボタンをクリック');
  e.preventDefault();
  // var currentImgSrc = modalImg.getAttribute('src');
  // var currentImgSrcNum = +currentImgSrc.split('/')[currentImgSrc.split('/').length - 1].substr(-5, 1);
  // currentImgSrcNum++;
  // if(currentImgSrcNum === 4){
  //   currentImgSrcNum = 1;
  // }
  // var nextImgSrc = './img/enemy-0' + currentImgSrcNum + '.png';
  // modalImg.setAttribute('src', nextImgSrc);
  changeImg(e);
  // console.log(currentImgSrc.split('/')[2].substr(-5, 1));
});

function changeImg(e){
  var currentImgSrc = modalImg.getAttribute('src');
  var currentImgSrcNum = +currentImgSrc.split('/')[currentImgSrc.split('/').length - 1].substr(-5, 1);
  if(e.target.classList.contains('fa-caret-right')){
    currentImgSrcNum++;
    if(currentImgSrcNum === 4){
      currentImgSrcNum = 1
    }
  }else{
    currentImgSrcNum--;
    if(currentImgSrcNum === 0){
      currentImgSrcNum = 3;
    }
  }

  var nextImgSrc = './img/enemy-0' + currentImgSrcNum + '.png';
  modalImg.setAttribute('src', nextImgSrc);
}
