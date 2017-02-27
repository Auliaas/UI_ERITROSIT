function getMyJson(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          myFunction(myArr);
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function getMyJson2(url) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var myArr = JSON.parse(xmlhttp.responseText);
          myFunction2(myArr);
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function mypopup(title,message) {
  document.write("<style>.box{width:20%;margin:0auto;background:rgba(255,255,255,0.2);padding:35px;border:2pxsolid#fff;border-radius:20px/50px;background-clip:padding-box;text-align:center;}.buttons{font-size:1em;padding:10px;color:#fff;border:2pxsolidorange;border-radius:20px/50px;text-decoration:none;cursor:pointer;transition:all0.3sease-out;}.buttons:hover{background:orange;}.overlay{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,0.7);transition:opacity500ms;visibility:hidden;opacity:0;}.overlay:target{visibility:visible;opacity:1;}.popup{margin:70pxauto;padding:20px;background:#fff;border-radius:5px;width:30%;position:relative;transition:all5sease-in-out;}.popuph2{margin-top:0;color:#333;font-family:Tahoma,Arial,sans-serif;}.popup.close{position:absolute;top:20px;right:30px;transition:all200ms;font-size:30px;font-weight:bold;text-decoration:none;color:#333;}.popup.close:hover{color:orange;}.popup.content{max-height:30%;overflow:auto;}</style>");

  document.write('<div class="box"><a class="buttons" href="#popup1"></a></div>');
  document.write('<div id="popup1" class="overlay"><div class="popup"><h2>'+title+'</h2><a class="close" href="#">X</a>');
  document.write('<div class="content">'+message+'</div></div></div>');
}