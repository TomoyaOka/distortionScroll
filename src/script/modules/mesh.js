import { ShaderMaterial,PlaneGeometry,Mesh ,TextureLoader,Vector2} from "three";
import vertexShader from "../shader/vertex.glsl?raw";
import fragmentShader from "../shader/fragment.glsl?raw";

import { gsap,Power4 } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger)


export default class Model {
  constructor(stage) {
    this.stage = stage;
    this.geometry;
    this.material;
    this.mesh;
    this.loader = new TextureLoader();

    this.mouse = new Vector2(0.0,0.0);

    this.width = window.innerWidth;
    this.height = window.innerHeight;

  }

  _init() {
    this.createMesh();
    this.scrollAnimated();
  }

  createMesh() {
    const size = {
      x:2,
      y:2,
    }

    const texture = this.loader.load("./img01.jpg");
    const texture02 = this.loader.load("./img02.jpg");
    const texture03 = this.loader.load("./img03.jpg");

    this.disp = this.loader.load("./noise.jpeg");
    const uniforms = {
      uResolution: {
        value: new Vector2(this.width,this.height),
      },
      uImageResolution: {
        value: new Vector2(2048, 1356),
      },
      uTexture: {
        value: texture,
      },
      uNextTexture: {
        value:texture02
      },
      uFinalTexture: {
        value:texture03
      },
      disp: { 
        value: this.disp //noise-map
      },
      uChangeTransition:{
        value:0.0
      },
      uChangeTransition02:{
        value:0.0
      },
      uTime:{
        value:0.0
      },
      uAmplitude:{
        value:1.0
      },
      uBounce:{
        value:new Vector2(0.0,0.0)
      }
    }
    
    this.geometry = new PlaneGeometry(size.x,size.y,100,100);
    this.material = new ShaderMaterial({
      uniforms:uniforms,
      vertexShader: vertexShader,
      fragmentShader:fragmentShader
    });
    this.mesh = new Mesh(this.geometry,this.material);
    this.stage.scene.add(this.mesh);


  }

  createAnimation(target,trigger,value,duration) {
    gsap.to(target,{
      value:value,
      scrollTrigger:{
        trigger:trigger,
        start:"top top",
        end:()=> `+=${window.innerHeight}px`,
        scrub:true,
        invalidateOnRefresh:true
      }
    })
  }

  scrollAnimated() {
    const param = {
      duration:3.0
    }

    this.createAnimation(this.mesh.material.uniforms.uChangeTransition,"#sec01",1.0,param.duration);
    this.createAnimation(this.mesh.material.uniforms.uChangeTransition,"#sec02",1.5,param.duration);
    this.createAnimation(this.mesh.material.uniforms.uChangeTransition02,"#sec02",1.0,param.duration);
    
  }

  onLoop() {
    this.mesh.material.uniforms.uTime.value += 0.001;
  }

  onResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.mesh.material.uniforms.uResolution.value.set(this.width,this.height);
  }
}