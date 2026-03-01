const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+1,
s:Math.random()*0.4+0.2
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="rgba(170,0,255,0.7)";
particles.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();
p.y -= p.s;
if(p.y<0){p.y=canvas.height;}
});
requestAnimationFrame(animate);
}
animate();

// Luz
const light = document.getElementById("light");

document.addEventListener("touchmove", e=>{
light.style.left=e.touches[0].clientX+"px";
light.style.top=e.touches[0].clientY+"px";
});

document.addEventListener("mousemove", e=>{
light.style.left=e.clientX+"px";
light.style.top=e.clientY+"px";
});

// Parallax + Giroscópio
function parallax(x,y){
document.querySelectorAll(".card,.logo").forEach(el=>{
el.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;
});
}

if(window.DeviceOrientationEvent){
window.addEventListener("deviceorientation",e=>{
parallax(e.gamma/4,e.beta/4);
});
}

// Splash
setTimeout(()=>{
document.getElementById("progress").style.width="100%";
},100);

setTimeout(()=>{
document.getElementById("splash").classList.remove("active");
document.getElementById("home").classList.add("active");
},2200);
