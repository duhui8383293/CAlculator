let inupt = document.querySelector(".input");
let clos = document.querySelector(".clos");
let qavs = document.querySelector(".qavs");
let modul = document.querySelector(".modul");
let taqsim = document.querySelector(".taqsim");
let oo=document.querySelector(".oo")
let a7a = document.querySelector(".a7a");
let a8a = document.querySelector(".a8a");
let a9a = document.querySelector(".a9a");
let zarb = document.querySelector(".zarb");
let a4a = document.querySelector(".a4a");
let a5a = document.querySelector(".a5a");
let a6a = document.querySelector(".a6a");
let tarh = document.querySelector(".tarh");
let a1a = document.querySelector(".a1a");
let a2a = document.querySelector(".a2a");
let a3a = document.querySelector(".a3a");
let jam = document.querySelector(".jam");
let pm = document.querySelector(".pm");
let a0a = document.querySelector(".a0a");
let vergl = document.querySelector(".vergl");
let barobar = document.querySelector(".barobar");

a7a.onclick = () => {
  inupt.value += 7;

};
a8a.onclick = () => {
  inupt.value += 8;

};
a9a.onclick = () => {
  inupt.value += 9;

};
a4a.onclick = () => {
  inupt.value += 4;

};
a5a.onclick = () => {
  inupt.value += 5;

};
a6a.onclick = () => {
  inupt.value += 6;

};
a5a.onclick = () => {
  inupt.value += 5;

};
a4a.onclick = () => {
  inupt.value += 4;

};
a3a.onclick = () => {
  inupt.value += 3;

};
a2a.onclick = () => {
  inupt.value += 2;

};
a1a.onclick = () => {
  inupt.value += 1;

};
a0a.onclick = () => {
  inupt.value += 0;

};

clos.onclick = () => {
  inupt.value = "";
  oo.innerHTML=""
};

zarb.onclick = () => {
  inupt.value += "*";
 
};
taqsim.onclick = () => {
  inupt.value += "/";
 
};
jam.onclick = () => {
  inupt.value += "+";
  
};
tarh.onclick = () => {
  inupt.value += "-";
 
};
modul.onclick = () => {
  inupt.value += "%";
 
};
vergl.onclick = () => {
  inupt.value += ".";
 
};


barobar.onclick = () => {

    inupt.value=inupt.value
  oo.innerHTML = eval(inupt.value);
};

