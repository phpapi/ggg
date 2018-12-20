 let Text = document.getElementById('text'),
     Tup = document.getElementById("tup"),
     Pl = document.getElementById("wad");

 Tup.onclick = function () {
     if (Text.innerText == "") {
         alert("亲内容不能为空呢");
         return;
     }
     var date = new Date();
     var year = date.getFullYear(); //获取当前年份   
     var mon = date.getMonth() + 1; //获取当前月份   
     var da = date.getDate(); //获取当前日   
     var day = date.getDay(); //获取当前星期几   
     var h = date.getHours(); //获取小时   
     var m = date.getMinutes(); //获取分钟   
     // var s = date.getSeconds();//获取秒   
     // var d = document.getElementById('Date');    
     var now = year + '年' + mon + '月' + da + '日 ' + h + ':' + m;
     console.log(now);
     // Li = "<p>" + Text.innerHTML + "</p><p>" + Text.innerHTML + "</p>";
     UL = '<li class="list">' + '<div class="head-face">' + '<img src="./images/tw.gif" / >' + '</div>' + '<div class="reply-cont">' +
         '<p class="username">棋游之家网友</p>' + '<p class="content-body">' + Text.innerHTML + '</p>' +
         '<div class="goodNum" style="margin-left:480px;display:inline-block;color:gray;font-size:14px;"><span id="Date" >' + now + '</span>' + '&nbsp;&nbsp;&nbsp;' +
         '<i class="fa fa-thumbs-o-up">点赞</i>' + '<span class="z-num">666</span>' + '</div>' + '</div>' + '</li>';
     Text.innerHTML = "";
     Pl.innerHTML += UL;

     var lister = document.getElementsByClassName('list')[0];
     //  for(var i=0;i<lister.length;i++){

     //  var goodNum = document.getElementById("good");
     var Num = document.getElementsByClassName("z-num")[0];
     document.getElementById('wad').addEventListener('click', function (e) {
        var ev = ev || window.event;
        var a=ev.target.parentNode;
        var b=a.childNodes[3];
        if (b.innerHTML == "666") {
        b.innerHTML = parseInt(666) + 1;
        return
        } else{
        b.innerHTML = 666;
        return
        }
        })



    //  var Num = document.getElementsByClassName("z-num")[0]; //这个不要用了
    //  var liList = document.getElementsByTagName('li');

     
    //  for (var i = 0; i < liList.length; i++) {
    //      (function (Index) {
    //          liList[i].addEventListener('click', function (ev) {
    //             //  alert('I am link #' + Index);
    //              var ev = ev || window.event;
    //              var target = ev.target ||ev.srcElement;
    //             //  var pinglun=liList[i] 用这个声明一个变量
    //             //  获取这个pinglun 子节点 代替下面得num num num
    //             //  我获取节点学得不好/....
    //             var Num=this.getElementsByClassName("z-num")[0];
    //              if (target.nodeName.toLowerCase() == 'i') {
    //                  if (Num.innerText == "666") {
    //                      Num.innerText = parseInt(666) + 1;
    //                     //  alert(111)
    //                      console.log(Num.innerText);
    //                  } else {
    //                      Num.innerText = 666;
    //                  }
    //              }
    //              console.log(ev);
                 
    //          }, true);
    //      })(i)
    //  }


     //兼容IE
     // document.getElementById('btn').attachEvent('click',function(){
     //     alert(1)
     // })

     // goodNum.onclick =function(){
     //     console.log("111111");
     //     // if(goodNum.data-index==1){
     //     //     Num.innerText = parseInt(666) + 1;
     //     // }else{
     //     //     Num.innerText=666;
     //     // }
     //   if(Num.innerText=="666"){
     //     Num.innerText = parseInt(666) + 1;
     //   }else{
     //     Num.innerText=666;
     //   }
     // }

 }
 //   }