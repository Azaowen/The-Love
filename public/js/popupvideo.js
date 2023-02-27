// video1

let playVid = document.querySelector('.playVid');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let iframe = document.querySelector('.custom-video');

playVid.onclick = function() {
  playVid.classList.add('active');
  clip.classList.add('active');
  iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
};

close.onclick = function() {
  playVid.classList.remove('active');
  clip.classList.remove('active'); iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
};


// video2
 

// let playVid2 = document.querySelector('.playVid2'); 
// let clip2 = document.querySelector('.clip2');
// let close2 = document.querySelector('.close2');
// let iframe2 = document.querySelector('.custom-video2');

// playVid2.onclick = function() {
//   playVid2.classList.add('active');
//   clip2.classList.add('active');
//   iframe2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
// };

// close2.onclick = function() {
//   playVid2.classList.remove('active');
//   clip2.classList.remove('active'); iframe2.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
// };