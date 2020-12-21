function changeManga1(){
  var oBox = document.getElementsByClassName('changeBox')[1];
  var oBigView = oBox.getElementsByClassName('bigView')[0];
  // var oBack = oBox.getElementsByClassName('back')[0];
  var oBack = oBox.getElementsByClassName('back')[0];
  var oNext = oBox.getElementsByClassName('next')[0];
  var oBigViewUl = oBigView.getElementsByTagName('ul')[0];
  var aBigViewLi = oBigViewUl.getElementsByTagName('li');

  // var oSmallView = oBox.getElementsByClassName('smallView')[0];
  // var oSmallViewUl = oSmallView.getElementsByTagName('ul')[0];
  // var aSmallViewLi = oSmallView.getElementsByTagName('li');

  // 控制下標
  var index = 0;
  // 小圖標下標
  var nClick = 0;

  // oBigViewUl.style.marginLeft = (window.innerWidth / 2) - 334 + 'px';
  // window.onresize = function(){
  //   console.log(window.innerWidth);
  //   oBigViewUl.style.marginLeft = (window.innerWidth / 2) - 334 + 'px';
  // }

  // 上一張
  oBack.onclick = function(){
    index--;
    if(index < 0){
      // index = aBigViewLi.length - 1;
      index = 0;
    }
    changeView();
  }
  // 下一張
  oNext.onclick = function(){
    index++;
    if(index > aBigViewLi.length - 1){
      // index = 0;
      index = aBigViewLi.length - 1;
    }
    changeView();
  }

  // 小圖
  // for(var i=0; i<aSmallViewLi.length; i++){
  //   aSmallViewLi[i].index = i;

  //   if(index == i){
  //     aSmallViewLi[i].style.opacity = 1;
  //     aSmallViewLi[i].style.filter = 'alpha(opacity=100)';
  //   }

  //   aSmallViewLi[i].onmouseover = function(){
  //     startMove(this, {opacity: 100});
  //   }
  //   aSmallViewLi[i].onmouseout = function(){
  //     // 沒點擊才執行
  //     if(this.index != nClick){
  //       startMove(this, {opacity: 30});
  //     }
  //   }
  //   aSmallViewLi[i].onclick = function(){
  //     index = this.index;
  //     changeView();
  //   }
  // }

  function changeView(){
    // startMove(aSmallViewLi[nClick], {opacity: 30}); // 取消上個
    startMove(aBigViewLi[nClick], {
      opacity: 50
    }, 7);
    nClick = index; // 指定下個
    // startMove(aSmallViewLi[nClick], {opacity: 100}); // 動作下個
    startMove(aBigViewLi[nClick], {
      opacity: 100
    }, 7);

    // 大圖
    var tempW = aBigViewLi[0].offsetWidth + 30;
    window.onresize = function(){
      tempW = aBigViewLi[0].offsetWidth;
      console.log(tempW);
    }
    
    startMove(oBigViewUl, {left: -index * tempW}, 7);

    

    // 小圖(無作用)
    // tempW = aSmallViewLi[0].offsetWidth;
    // if(index < 3){
    //   startMove(oSmallViewUl, 'left', 0);
    // }else if(index == aSmallViewLi.length - 1){
    //   startMove(oSmallViewUl, 'left', -(aSmallViewLi.length-4) * tempW + 38);
    // }else{
    //   startMove(oSmallViewUl, 'left', -(index-2)*tempW + 38);
    // }
  }
}