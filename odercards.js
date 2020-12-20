window.onload = function(){
  var oTheme = document.getElementsByClassName('theme');
  var oCm = document.getElementById('CM');
  var bCm = oCm.getElementsByClassName('cmBtn')[0];
  var Height = window.innerHeight;
  isClick = false;

  //動畫點擊滑入頁
  bCm.onclick = function(){
    if(isClick == false){
      startMove(oCm, {
        marginTop: 0
      });
      isClick = !isClick;
    }else if(isClick == true){
      startMove(oCm, {
        marginTop: parseInt(-1 * Height)
      });
      isClick = !isClick;
    }
  }


  //四大主題滑入效果
  for(var i=0; i<4; i++){
    oTheme[i].onmouseover = function(){
      startMove(this, {
        height: parseInt(0.4 * Height),
        marginTop: parseInt(0.2 * Height)
      });
      this.children[1].style.display = 'block';
      startMove(this.children[1], {
        marginTop: parseInt(0.35 * Height)
      });
    }
    oTheme[i].onmouseout = function(){
      startMove(this, {
        height: parseInt(0.2 * Height),
        marginTop: parseInt(0.4 * Height)
      });
      this.children[1].style.display = 'none';
      startMove(this.children[1], {
        marginTop: parseInt(0.15 * Height)
      });
    }
  }


}