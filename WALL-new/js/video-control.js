var ele = document.getElementById("videobox");

var video = document.getElementById("video");

var dispalyAttr = ele.style.display;

var cur = 0;

var wait = 60;  //页面停留的时间，超过该时间则出现屏保 5 * 60  就是 5分钟

document.addEventListener("mousemove", function() {
  cur = 0;
  if(dispalyAttr === "block") {
    ele.style.display = "none";
    video.pause();
  }
}, false)

setInterval(function() {
  cur++;
  if(cur > wait && ele.style.display === "none") {
    cur = 0;
    ele.style.display = "block";
    video.load();
  }
},1000)