const socket=io();
const localVideo=document.getElementById('localVideo');
const remoteVideo=document.getElementById('remoteVideo');

let peerConnection;
const config = {
  iceServers: [
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
};


// getting access to webcam + mic 
navigator.mediaDevices
.getUserMedia({video:true,audio:true})
.then((stream)=>{
  localVideo.srcObject=stream;
  window.localStream=stream ;    // it will save 
})
.catch((err)=>{
  console.log("error accessing media devices ",err)
})