import Stage from "./modules/stage.js";
import Model from "./modules/mesh.js";

import Lenis from '@studio-freight/lenis';


let stage,mesh,lenis;

function rendering() {
  lenis = new Lenis({
    duration:2,
    smoothWheel:true,
    smoothTouch:true,
    wheelMultiplier:0.5,//スクロール量
    touchMultiplier:0.5,
    infinite:false,
  });
  stage = new Stage();
  mesh = new Model(stage);

  stage._init();
  mesh._init();

  window.addEventListener("resize", ()=>{
    stage.onResize();
    mesh.onResize();
  });

  const loop = (time) => {
    requestAnimationFrame(loop);
    lenis.raf(time);
    stage.onLoop();
    mesh.onLoop();
  };
  loop();
}

window.addEventListener("DOMContentLoaded",rendering);

export {};


