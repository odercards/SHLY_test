window.onload = function(){
  var oNone = document.getElementById('None');
  var oBanner = document.getElementById('Banner');
  var oTheme = oBanner.getElementsByClassName('theme');
  var oCm = document.getElementById('CM');
  var bCm = oCm.getElementsByClassName('cmBtn')[0];
  var oSidepoint = document.getElementById('Sidepoint');
  var oSTheme = oSidepoint.getElementsByClassName('theme');
  var Width = document.documentElement.clientWidth;
  var Height = window.innerHeight;
  isClick = false;

  //外連區
  changeContent();


  //螢幕過小，限制觀看
  if(Width < 1200){
    document.documentElement.style.overflowY = 'hidden'; 
    oNone.style.display = 'block';
  }else{
    document.documentElement.style.overflowY = 'scroll'; 
    oNone.style.display = 'none';
  }
  window.onresize = function(){
    Width = document.documentElement.clientWidth;
    if(Width < 1200){
      document.documentElement.style.overflowY = 'hidden'; 
      oNone.style.display = 'block';
    }else{
      document.documentElement.style.overflowY = 'scroll'; 
      oNone.style.display = 'none';
    }
  }


  //教學動畫頁面點擊滑入
  bCm.onclick = function(){
    if(isClick == false){
      startMove(oCm, {
        marginTop: 0
      }, 20);
      document.documentElement.style.overflowY = 'hidden'; 
      isClick = !isClick;
    }else if(isClick == true){
      startMove(oCm, {
        marginTop: parseInt(-1 * Height)
      }, 20);
      document.documentElement.style.overflowY = 'scroll'; 
      isClick = !isClick;
    }
  }


  //四大主題滑入效果
  for(var i=0; i<4; i++){
    oTheme[i].onmouseover = function(){
      startMove(this, {
        height: parseInt(0.4 * Height),
        marginTop: parseInt(0.2 * Height)
      }, 20);
      this.children[1].style.display = 'block';
      startMove(this.children[1], {
        marginTop: parseInt(0.30 * Height)
      }, 20);
    }
    oTheme[i].onmouseout = function(){
      startMove(this, {
        height: parseInt(0.2 * Height),
        marginTop: parseInt(0.4 * Height)
      }, 20);
      this.children[1].style.display = 'none';
      startMove(this.children[1], {
        marginTop: parseInt(0.10 * Height)
      }, 20);
    }
  }


  //滑動效果
  window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    //側邊切換主題 + 隱藏頂部
    if(t >= 750) {
      startMove(oSidepoint, {
        marginTop: t - 650
      }, 20);
      startMove(oCm, {
        marginTop: parseInt(-1.1 * Height)
      }, 20);
    }else {
      startMove(oSidepoint, {
        marginTop: 100
      }, 20);
      startMove(oCm, {
        marginTop: parseInt(-1 * Height)
      }, 20);
    }
  }
}