function changeContent(){
  var oMainContentR = document.getElementById('mainContent-r');

  for(var i=0; i<4; i++){
    var oBtnBox = document.getElementsByClassName('btnBox')[0];
    var bBtn = oBtnBox.getElementsByClassName("btn")[i];
    bBtn.index = i;

    bBtn.onclick = function(){
      oContent = oMainContentR.getElementsByClassName('content');
      for(var j=0; j<4; j++){
        startMove(oContent[j], 'opacity', 0);
        oContent[j].style.display = 'none';
      }
      oContent[this.index].style.display = 'block';
      startMove(oContent[this.index], 'opacity', 100);
    }
  }
}