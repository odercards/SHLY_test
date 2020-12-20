function changeContent(){
  var oMain = document.getElementById('Main');
  var oFooter = document.getElementById('Footer');

  for(var i=0; i<4; i++){
    //上方按鈕
    var oBox = document.getElementById('box');
    var bTop = oBox.getElementsByClassName("theme")[i];
    //側邊按鈕
    var oBox2 = document.getElementById('Sidepoint');
    var bSide = oBox2.getElementsByClassName("theme")[i];
    bTop.index = i;
    bSide.index = i;

    bTop.onclick = function(){
      oContent = oMain.getElementsByClassName('content');
      for(var j=0; j<4; j++){
        startMove(oContent[j], {
          opacity: 0
        }, 20);
        oContent[j].style.display = 'none';
      }
      oContent[this.index].style.display = 'block';
      startMove(oContent[this.index], {
        opacity: 100
      }, 20);
      oFooter.style.display = 'block'
    }

    bSide.onclick = function(){
      oContent = oMain.getElementsByClassName('content');
      for(var j=0; j<4; j++){
        startMove(oContent[j], {
          opacity: 0
        }, 20);
        oContent[j].style.display = 'none';
      }
      oContent[this.index].style.display = 'block';
      startMove(oContent[this.index], {
        opacity: 100
      }, 20);
      oFooter.style.display = 'block'
    }
  }
}