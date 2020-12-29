function changeContent(){
  var oSS = document.getElementById('SideSolar');
  var oBA = document.getElementById('BannerA');
  var oBB = document.getElementById('BannerB');
  var oSP = document.getElementById('Sidepoint');
  var oMain = document.getElementById('Main');
  var oFooter = document.getElementById('Footer');

  var Banner = document.getElementById('Banner');
  var bTheme = Banner.getElementsByClassName('theme');
  var Side = document.getElementById('Sidepoint');
  var sTheme = Side.getElementsByClassName('theme');

  

  for(var i=0; i<4; i++){
    //上方按鈕
    var oBox = document.getElementById('box');
    var bTop = oBox.getElementsByClassName("theme")[i];
    var oAsd = bTop.getElementsByClassName('asd')[0];
    //側邊按鈕
    var oBox2 = document.getElementById('Sidepoint');
    var bSide = oBox2.getElementsByClassName("theme")[i];
    bTop.index = i;
    bSide.index = i;

    sTheme.onmouseover = function(){
      startMove(this, {
        opacity: 0.8
      }, 3);
    }
    sTheme.onmouseout = function(){
      startMove(this, {
        opacity: 1
      }, 3);
    }

    bTop.onclick = function(){
      oContent = oMain.getElementsByClassName('content');
      //公用打開or關閉
      oSS.style.display = 'block';
      oBA.style.display = 'none';
      oBB.style.display = 'block';
      oSP.style.display = 'block';
      for(var j=0; j<4; j++){
        startMove(oContent[j], {
          opacity: 0
        }, 20);
        oContent[j].style.display = 'none';
        sTheme[j].style.background = '#cbe3fa';
      }
      oContent[this.index].style.display = 'inline';
      sTheme[this.index].style.background = '#40a9ff';
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
        sTheme[j].style.background = '#cbe3fa';
      }
      oContent[this.index].style.display = 'inline';
      sTheme[this.index].style.background = '#40a9ff';
      startMove(oContent[this.index], {
        opacity: 100
      }, 20);
      oFooter.style.display = 'block'
    }
  }
}