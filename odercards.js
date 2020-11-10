window.onload = function(){
  var oLeft = document.getElementById('left');
  var oRight = document.getElementById('right');
  var bBtnh = document.getElementById('btnh');

  var oMainContentR = document.getElementById('mainContent-r');
  var oMainContentL = document.getElementById('mainContent-l');
  var oUpperBox = document.getElementsByClassName('upperBox')[0];

  bBtnh.onclick = function(){
    bBtnh.style.display = 'none';
    for(var i=0; i<4; i++){
      oLeft.getElementsByClassName('btn')[i].style.display = 'block';
    }
    startMove(oLeft, 'left', 0);
    oLeft.style.width = '25%';
    window.setTimeout(function(){
      oRight.style.display = 'block';
      startMove(oRight, 'opacity', 100);
    }, 850)
  }

  oUpperBox.onclick = function(){
    oMainContentL.style.display = 'block';
    oMainContentR.style.display = 'block';
  }

}






    // oLeft.removeChild(bBtnh);
    // for(var i=0; i<4; i++){
    //   bBtn = document.createElement('div');
    //   bBtn.className = 'btn';
    //   oLeft.appendChild(bBtn);

    //   oChange = document.createElement('a');
    //   bBtn.appendChild(oChange);

    //   oH2 = document.createElement('h2');
    //   oH2.innerHTML = '1.天狗食日';
    //   oChange.appendChild(oH2);
    // }
    // oLeft.getElementsByTagName('a')[1].href = '#';
    // oLeft.getElementsByTagName('a')[2].href = '#';
    // oLeft.getElementsByTagName('a')[3].href = '#';
    // oLeft.getElementsByTagName('a')[4].href = '#';

    // oLeft.getElementsByTagName('h2')[0].innerHTML = '1.天狗食日';
    // oLeft.getElementsByTagName('h2')[1].innerHTML = '2.熒惑守心';
    // oLeft.getElementsByTagName('h2')[2].innerHTML = '3.五星連珠';
    // oLeft.getElementsByTagName('h2')[3].innerHTML = '4.彗星襲月';
    