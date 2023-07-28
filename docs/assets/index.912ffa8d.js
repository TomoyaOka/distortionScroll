(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="145",Od=0,Ic=1,zd=2,Ih=1,Nd=2,As=3,as=0,kn=1,Fi=2,Bi=0,Qr=1,Fc=2,Oc=3,zc=4,Ud=5,Xr=100,kd=101,Bd=102,Nc=103,Uc=104,Gd=200,Vd=201,Hd=202,Wd=203,Fh=204,Oh=205,Xd=206,qd=207,Yd=208,$d=209,jd=210,Zd=0,Kd=1,Jd=2,wl=3,Qd=4,ep=5,tp=6,np=7,zh=0,ip=1,rp=2,Si=0,sp=1,op=2,ap=3,lp=4,cp=5,Nh=300,ls=301,cs=302,Tl=303,El=304,va=306,Al=1e3,Zn=1001,Cl=1002,sn=1003,kc=1004,Bc=1005,Rn=1006,up=1007,xa=1008,yr=1009,hp=1010,fp=1011,Uh=1012,dp=1013,or=1014,ar=1015,qs=1016,pp=1017,mp=1018,es=1020,gp=1021,_p=1022,ti=1023,vp=1024,xp=1025,hr=1026,us=1027,yp=1028,Mp=1029,Sp=1030,bp=1031,wp=1033,La=33776,Pa=33777,Ra=33778,Da=33779,Gc=35840,Vc=35841,Hc=35842,Wc=35843,Tp=36196,Xc=37492,qc=37496,Yc=37808,$c=37809,jc=37810,Zc=37811,Kc=37812,Jc=37813,Qc=37814,eu=37815,tu=37816,nu=37817,iu=37818,ru=37819,su=37820,ou=37821,au=36492,Mr=3e3,mt=3001,Ep=3200,Ap=3201,Cp=0,Lp=1,pi="srgb",lr="srgb-linear",Ia=7680,Pp=519,lu=35044,cu="300 es",Ll=1035;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fa=Math.PI/180,uu=180/Math.PI;function no(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[a&255]+Bt[a>>8&255]+Bt[a>>16&255]+Bt[a>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Sn(a,e,t){return Math.max(e,Math.min(t,a))}function Rp(a,e){return(a%e+e)%e}function Oa(a,e,t){return(1-t)*a+t*e}function hu(a){return(a&a-1)===0&&a!==0}function Pl(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function co(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function pn(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class On{constructor(){On.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=s,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],x=i[1],S=i[4],y=i[7],M=i[2],A=i[5],C=i[8];return r[0]=o*d+s*x+l*M,r[3]=o*p+s*S+l*A,r[6]=o*_+s*y+l*C,r[1]=c*d+u*x+h*M,r[4]=c*p+u*S+h*A,r[7]=c*_+u*y+h*C,r[2]=f*d+m*x+g*M,r[5]=f*p+m*S+g*A,r[8]=f*_+m*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*s*c-n*r*u+n*s*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=u*o-s*c,f=s*l-u*r,m=c*r-o*l,g=t*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(s*n-i*o)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*r-s*t)*d,e[6]=m*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*r)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,s){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*s)+o+e,-i*c,i*l,-i*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],s=i[6],l=i[1],c=i[4],u=i[7];return i[0]=t*r+n*l,i[3]=t*o+n*c,i[6]=t*s+n*u,i[1]=-n*r+t*l,i[4]=-n*o+t*c,i[7]=-n*s+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function kh(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ys(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function fr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Yo(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const za={[pi]:{[lr]:fr},[lr]:{[pi]:Yo}},Wn={legacyMode:!0,get workingColorSpace(){return lr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(za[e]&&za[e][t]!==void 0){const n=za[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wt={r:0,g:0,b:0},Xn={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Na(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function ho(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=lr){return this.r=e,this.g=t,this.b=n,Wn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=lr){if(e=Rp(e,1),t=Sn(t,0,1),n=Sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Na(o,r,e+1/3),this.g=Na(o,r,e),this.b=Na(o,r,e-1/3)}return Wn.toWorkingColorSpace(this,i),this}setStyle(e,t=pi){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],s=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Wn.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Wn.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Wn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Wn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=pi){const n=Bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Wn.fromWorkingColorSpace(ho(this,wt),e),Sn(wt.r*255,0,255)<<16^Sn(wt.g*255,0,255)<<8^Sn(wt.b*255,0,255)<<0}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lr){Wn.fromWorkingColorSpace(ho(this,wt),t);const n=wt.r,i=wt.g,r=wt.b,o=Math.max(n,i,r),s=Math.min(n,i,r);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const h=o-s;switch(c=u<=.5?h/(o+s):h/(2-o-s),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lr){return Wn.fromWorkingColorSpace(ho(this,wt),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=pi){return Wn.fromWorkingColorSpace(ho(this,wt),e),e!==pi?`color(${e} ${wt.r} ${wt.g} ${wt.b})`:`rgb(${wt.r*255|0},${wt.g*255|0},${wt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Xn),Xn.h+=e,Xn.s+=t,Xn.l+=n,this.setHSL(Xn.h,Xn.s,Xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(uo);const n=Oa(Xn.h,uo.h,t),i=Oa(Xn.s,uo.s,t),r=Oa(Xn.l,uo.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}rt.NAMES=Bh;let Cr;class Gh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cr===void 0&&(Cr=Ys("canvas")),Cr.width=e.width,Cr.height=e.height;const n=Cr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=fr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Vh{constructor(e=null){this.isSource=!0,this.uuid=no(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,s=i.length;o<s;o++)i[o].isDataTexture?r.push(Ua(i[o].image)):r.push(Ua(i[o]))}else r=Ua(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ua(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Gh.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dp=0;class Gn extends vs{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,n=Zn,i=Zn,r=Rn,o=xa,s=ti,l=yr,c=1,u=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=no(),this.name="",this.source=new Vh(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new On,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Al:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Al:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Nh;class Nt{constructor(e=0,t=0,n=0,i=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,y=(m+1)/2,M=(_+1)/2,A=(u+f)/4,C=(h+d)/4,v=(g+p)/4;return S>y&&S>M?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=C/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=v/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=C/r,i=v/r),this.set(n,i,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-d)/x,this.z=(f-u)/x,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sr extends vs{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Gn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hh extends Gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ip extends Gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class io{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,s){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],d=r[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(s===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==m||u!==g){let p=1-s;const _=l*f+c*m+u*g+h*d,x=_>=0?1:-1,S=1-_*_;if(S>Number.EPSILON){const M=Math.sqrt(S),A=Math.atan2(M,_*x);p=Math.sin(p*A)/M,s=Math.sin(s*A)/M}const y=s*x;if(l=l*p+f*y,c=c*p+m*y,u=u*p+g*y,h=h*p+d*y,p===1-s){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const s=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=s*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-s*m,e[t+2]=c*g+u*m+s*f-l*h,e[t+3]=u*g-s*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(n/2),u=s(i/2),h=s(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],s=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,s=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*s+i*c-r*l,this._y=i*u+o*l+r*s-n*c,this._z=r*u+o*c+n*l-i*s,this._w=o*u-n*s-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let s=o*e._w+n*e._x+i*e._y+r*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,s=e.z,l=e.w,c=l*t+o*i-s*n,u=l*n+s*t-r*i,h=l*i+r*n-o*t,f=-r*t-o*n-s*i;return this.x=c*l+f*-r+u*-s-h*-o,this.y=u*l+f*-o+h*-r-c*-s,this.z=h*l+f*-s+c*-o-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,s=t.y,l=t.z;return this.x=i*l-r*s,this.y=r*o-n*l,this.z=n*s-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new N,fu=new io;class ro{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,s=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>o&&(o=h),f>s&&(s=f)}return this.min.set(t,n,i),this.max.set(r,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,s=r.count;o<s;o++)ji.fromBufferAttribute(r,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ji)}else n.boundingBox===null&&n.computeBoundingBox(),Ba.copy(n.boundingBox),Ba.applyMatrix4(e.matrixWorld),this.union(Ba);const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),fo.subVectors(this.max,ys),Lr.subVectors(e.a,ys),Pr.subVectors(e.b,ys),Rr.subVectors(e.c,ys),Ei.subVectors(Pr,Lr),Ai.subVectors(Rr,Pr),Zi.subVectors(Lr,Rr);let t=[0,-Ei.z,Ei.y,0,-Ai.z,Ai.y,0,-Zi.z,Zi.y,Ei.z,0,-Ei.x,Ai.z,0,-Ai.x,Zi.z,0,-Zi.x,-Ei.y,Ei.x,0,-Ai.y,Ai.x,0,-Zi.y,Zi.x,0];return!Ga(t,Lr,Pr,Rr,fo)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,Lr,Pr,Rr,fo))?!1:(po.crossVectors(Ei,Ai),t=[po.x,po.y,po.z],Ga(t,Lr,Pr,Rr,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ji.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new N,new N,new N,new N,new N,new N,new N,new N],ji=new N,Ba=new ro,Lr=new N,Pr=new N,Rr=new N,Ei=new N,Ai=new N,Zi=new N,ys=new N,fo=new N,po=new N,Ki=new N;function Ga(a,e,t,n,i){for(let r=0,o=a.length-3;r<=o;r+=3){Ki.fromArray(a,r);const s=i.x*Math.abs(Ki.x)+i.y*Math.abs(Ki.y)+i.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=n.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const Fp=new ro,du=new N,mo=new N,Va=new N;class ya{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Va.subVectors(e,this.center);const t=Va.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Va.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?mo.set(0,0,1).multiplyScalar(e.radius):mo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(du.copy(e.center).add(mo)),this.expandByPoint(du.copy(e.center).sub(mo)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new N,Ha=new N,go=new N,Ci=new N,Wa=new N,_o=new N,Xa=new N;class Wh{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.direction).multiplyScalar(t).add(this.origin),ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ha.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Ha);const r=e.distanceTo(t)*.5,o=-this.direction.dot(go),s=Ci.dot(this.direction),l=-Ci.dot(go),c=Ci.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-s,f=o*s-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+o*f+2*s)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+s)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+s)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+s)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(go).multiplyScalar(f).add(Ha),m}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const n=ui.dot(this.direction),i=ui.dot(ui)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),s=n-o,l=n+o;return s<0&&l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),h>=0?(s=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(s=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||s>i)||((s>n||n!==n)&&(n=s),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,n,i,r){Wa.subVectors(t,e),_o.subVectors(n,e),Xa.crossVectors(Wa,_o);let o=this.direction.dot(Xa),s;if(o>0){if(i)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=s*this.direction.dot(_o.crossVectors(Ci,_o));if(l<0)return null;const c=s*this.direction.dot(Wa.cross(Ci));if(c<0||l+c>o)return null;const u=-s*Ci.dot(Xa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,s,l,c,u,h,f,m,g,d,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=s,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Dr.setFromMatrixColumn(e,0).length(),r=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,g=s*u,d=s*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-d*c,t[9]=-s*l,t[2]=d-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f+d*s,t[4]=g*s-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-s,t[2]=m*s-g,t[6]=d+f*s,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,d=c*h;t[0]=f-d*s,t[4]=-o*h,t[8]=g+m*s,t[1]=m+g*s,t[5]=o*u,t[9]=d-f*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=s*u,d=s*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=m*c-g,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=s*l,d=s*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-s*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=s*l,d=s*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=s*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Op,e,zp)}lookAt(e,t,n){const i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Li.crossVectors(n,mn),Li.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Li.crossVectors(n,mn)),Li.normalize(),vo.crossVectors(mn,Li),i[0]=Li.x,i[4]=vo.x,i[8]=mn.x,i[1]=Li.y,i[5]=vo.y,i[9]=mn.y,i[2]=Li.z,i[6]=vo.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],x=n[3],S=n[7],y=n[11],M=n[15],A=i[0],C=i[4],v=i[8],w=i[12],P=i[1],G=i[5],H=i[9],z=i[13],R=i[2],B=i[6],Y=i[10],W=i[14],U=i[3],F=i[7],b=i[11],J=i[15];return r[0]=o*A+s*P+l*R+c*U,r[4]=o*C+s*G+l*B+c*F,r[8]=o*v+s*H+l*Y+c*b,r[12]=o*w+s*z+l*W+c*J,r[1]=u*A+h*P+f*R+m*U,r[5]=u*C+h*G+f*B+m*F,r[9]=u*v+h*H+f*Y+m*b,r[13]=u*w+h*z+f*W+m*J,r[2]=g*A+d*P+p*R+_*U,r[6]=g*C+d*G+p*B+_*F,r[10]=g*v+d*H+p*Y+_*b,r[14]=g*w+d*z+p*W+_*J,r[3]=x*A+S*P+y*R+M*U,r[7]=x*C+S*G+y*B+M*F,r[11]=x*v+S*H+y*Y+M*b,r[15]=x*w+S*z+y*W+M*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],d=e[7],p=e[11],_=e[15];return g*(+r*l*h-i*c*h-r*s*f+n*c*f+i*s*m-n*l*m)+d*(+t*l*m-t*c*f+r*o*f-i*o*m+i*c*u-r*l*u)+p*(+t*c*h-t*s*m-r*o*h+n*o*m+r*s*u-n*c*u)+_*(-i*s*u-t*l*h+t*s*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],d=e[13],p=e[14],_=e[15],x=h*p*c-d*f*c+d*l*m-s*p*m-h*l*_+s*f*_,S=g*f*c-u*p*c-g*l*m+o*p*m+u*l*_-o*f*_,y=u*d*c-g*h*c+g*s*m-o*d*m-u*s*_+o*h*_,M=g*h*l-u*d*l-g*s*f+o*d*f+u*s*p-o*h*p,A=t*x+n*S+i*y+r*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=x*C,e[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*_-n*f*_)*C,e[2]=(s*p*r-d*l*r+d*i*c-n*p*c-s*i*_+n*l*_)*C,e[3]=(h*l*r-s*f*r-h*i*c+n*f*c+s*i*m-n*l*m)*C,e[4]=S*C,e[5]=(u*p*r-g*f*r+g*i*m-t*p*m-u*i*_+t*f*_)*C,e[6]=(g*l*r-o*p*r-g*i*c+t*p*c+o*i*_-t*l*_)*C,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*m+t*l*m)*C,e[8]=y*C,e[9]=(g*h*r-u*d*r-g*n*m+t*d*m+u*n*_-t*h*_)*C,e[10]=(o*d*r-g*s*r+g*n*c-t*d*c-o*n*_+t*s*_)*C,e[11]=(u*s*r-o*h*r-u*n*c+t*h*c+o*n*m-t*s*m)*C,e[12]=M*C,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*p+t*h*p)*C,e[14]=(g*s*i-o*d*i-g*n*l+t*d*l+o*n*p-t*s*p)*C,e[15]=(o*h*i-u*s*i+u*n*l-t*h*l-o*n*f+t*s*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,s=e.y,l=e.z,c=r*o,u=r*s;return this.set(c*o+n,c*s-i*l,c*l+i*s,0,c*s+i*l,u*s+n,u*l-i*o,0,c*l-i*s,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,s=t._z,l=t._w,c=r+r,u=o+o,h=s+s,f=r*c,m=r*u,g=r*h,d=o*u,p=o*h,_=s*h,x=l*c,S=l*u,y=l*h,M=n.x,A=n.y,C=n.z;return i[0]=(1-(d+_))*M,i[1]=(m+y)*M,i[2]=(g-S)*M,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(f+_))*A,i[6]=(p+x)*A,i[7]=0,i[8]=(g+S)*C,i[9]=(p-x)*C,i[10]=(1-(f+d))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Dr.set(i[0],i[1],i[2]).length();const o=Dr.set(i[4],i[5],i[6]).length(),s=Dr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qn.copy(this);const c=1/r,u=1/o,h=1/s;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=h,qn.elements[9]*=h,qn.elements[10]*=h,t.setFromRotationMatrix(qn),n.x=r,n.y=o,n.z=s,this}makePerspective(e,t,n,i,r,o){const s=this.elements,l=2*r/(t-e),c=2*r/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(o+r)/(o-r),m=-2*o*r/(o-r);return s[0]=l,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=c,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,i,r,o){const s=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-r),h=(t+e)*l,f=(n+i)*c,m=(o+r)*u;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*c,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Dr=new N,qn=new Rt,Op=new N(0,0,0),zp=new N(1,1,1),Li=new N,vo=new N,mn=new N,pu=new Rt,mu=new io;class so{constructor(e=0,t=0,n=0,i=so.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],s=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Sn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Sn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}so.DefaultOrder="XYZ";so.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Xh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Np=0;const gu=new N,Ir=new io,hi=new Rt,xo=new N,Ms=new N,Up=new N,kp=new io,_u=new N(1,0,0),vu=new N(0,1,0),xu=new N(0,0,1),Bp={type:"added"},yu={type:"removed"};class an extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DefaultUp.clone();const e=new N,t=new so,n=new io,i=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Rt},normalMatrix:{value:new On}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=an.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=an.DefaultMatrixWorldAutoUpdate,this.layers=new Xh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(_u,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(xu,e)}translateOnAxis(e,t){return gu.copy(e).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_u,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(xu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Ms,xo,this.up):hi.lookAt(xo,Ms,this.up),this.quaternion.setFromRotationMatrix(hi),i&&(hi.extractRotation(i.matrixWorld),Ir.setFromRotationMatrix(hi),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,Up),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,kp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(r(e.materials,this.material[l]));i.material=s}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];i.animations.push(r(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}an.DefaultUp=new N(0,1,0);an.DefaultMatrixAutoUpdate=!0;an.DefaultMatrixWorldAutoUpdate=!0;const Yn=new N,fi=new N,qa=new N,di=new N,Fr=new N,Or=new N,Mu=new N,Ya=new N,$a=new N,ja=new N;class _i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Yn.subVectors(e,t),i.cross(Yn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Yn.subVectors(i,t),fi.subVectors(n,t),qa.subVectors(e,t);const o=Yn.dot(Yn),s=Yn.dot(fi),l=Yn.dot(qa),c=fi.dot(fi),u=fi.dot(qa),h=o*c-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-s*u)*f,g=(o*u-s*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,di),di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(e,t,n,i,r,o,s,l){return this.getBarycoord(e,t,n,i,di),l.set(0,0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(s,di.z),l}static isFrontFacing(e,t,n,i){return Yn.subVectors(n,t),fi.subVectors(e,t),Yn.cross(fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Yn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return _i.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,s;Fr.subVectors(i,n),Or.subVectors(r,n),Ya.subVectors(e,n);const l=Fr.dot(Ya),c=Or.dot(Ya);if(l<=0&&c<=0)return t.copy(n);$a.subVectors(e,i);const u=Fr.dot($a),h=Or.dot($a);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Fr,o);ja.subVectors(e,r);const m=Fr.dot(ja),g=Or.dot(ja);if(g>=0&&m<=g)return t.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return s=c/(c-g),t.copy(n).addScaledVector(Or,s);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Mu.subVectors(r,i),s=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Mu,s);const _=1/(p+d+f);return o=d*_,s=f*_,t.copy(n).addScaledVector(Fr,o).addScaledVector(Or,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Gp=0;class oo extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=no(),this.name="",this.type="Material",this.blending=Qr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fh,this.blendDst=Oh,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ia,this.stencilZFail=Ia,this.stencilZPass=Ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(n.blending=this.blending),this.side!==as&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const s in r){const l=r[s];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qh extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new N,yo=new nt;class ii{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=lu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=co(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=co(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=co(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=co(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Yh extends ii{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $h extends ii{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tn extends ii{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vp=0;const Cn=new Rt,Za=new an,zr=new N,gn=new ro,Ss=new ro,Ct=new N;class ai extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kh(e)?$h:Yh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new On().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const s=t[r];Ss.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(gn.min,Ss.min),gn.expandByPoint(Ct),Ct.addVectors(gn.max,Ss.max),gn.expandByPoint(Ct)):(gn.expandByPoint(Ss.min),gn.expandByPoint(Ss.max))}gn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Ct.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ct));if(t)for(let r=0,o=t.length;r<o;r++){const s=t[r],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Ct.fromBufferAttribute(s,c),l&&(zr.fromBufferAttribute(e,c),Ct.add(zr)),i=Math.max(i,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<s;P++)c[P]=new N,u[P]=new N;const h=new N,f=new N,m=new N,g=new nt,d=new nt,p=new nt,_=new N,x=new N;function S(P,G,H){h.fromArray(i,P*3),f.fromArray(i,G*3),m.fromArray(i,H*3),g.fromArray(o,P*2),d.fromArray(o,G*2),p.fromArray(o,H*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const z=1/(d.x*p.y-p.x*d.y);!isFinite(z)||(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(z),x.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(z),c[P].add(_),c[G].add(_),c[H].add(_),u[P].add(x),u[G].add(x),u[H].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,G=y.length;P<G;++P){const H=y[P],z=H.start,R=H.count;for(let B=z,Y=z+R;B<Y;B+=3)S(n[B+0],n[B+1],n[B+2])}const M=new N,A=new N,C=new N,v=new N;function w(P){C.fromArray(r,P*3),v.copy(C);const G=c[P];M.copy(G),M.sub(C.multiplyScalar(C.dot(G))).normalize(),A.crossVectors(v,G);const z=A.dot(u[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=z}for(let P=0,G=y.length;P<G;++P){const H=y[P],z=H.start,R=H.count;for(let B=z,Y=z+R;B<Y;B+=3)w(n[B+0]),w(n[B+1]),w(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new N,r=new N,o=new N,s=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),d=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,d),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),s.add(u),l.add(u),c.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,h=s.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){s.isInterleavedBufferAttribute?m=l[d]*s.data.stride+s.offset:m=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new ii(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ai,n=this.index.array,i=this.attributes;for(const s in i){const l=i[s],c=e(l,n);t.setAttribute(s,c)}const r=this.morphAttributes;for(const s in r){const l=[],c=r[s];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Su=new Rt,Nr=new Wh,Ka=new ya,Pi=new N,Ri=new N,Di=new N,Ja=new N,Qa=new N,el=new N,Mo=new N,So=new N,bo=new N,wo=new nt,To=new nt,Eo=new nt,tl=new N,Ao=new N;class xi extends an{constructor(e=new ai,t=new qh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(r),e.ray.intersectsSphere(Ka)===!1)||(Su.copy(r).invert(),Nr.copy(e.ray).applyMatrix4(Su),n.boundingBox!==null&&Nr.intersectsBox(n.boundingBox)===!1))return;let o;const s=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(s!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],x=i[_.materialIndex],S=Math.max(_.start,g.start),y=Math.min(s.count,Math.min(_.start+_.count,g.start+g.count));for(let M=S,A=y;M<A;M+=3){const C=s.getX(M),v=s.getX(M+1),w=s.getX(M+2);o=Co(this,x,e,Nr,l,c,u,h,f,C,v,w),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(s.count,g.start+g.count);for(let _=d,x=p;_<x;_+=3){const S=s.getX(_),y=s.getX(_+1),M=s.getX(_+2);o=Co(this,i,e,Nr,l,c,u,h,f,S,y,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],x=i[_.materialIndex],S=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=S,A=y;M<A;M+=3){const C=M,v=M+1,w=M+2;o=Co(this,x,e,Nr,l,c,u,h,f,C,v,w),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=d,x=p;_<x;_+=3){const S=_,y=_+1,M=_+2;o=Co(this,i,e,Nr,l,c,u,h,f,S,y,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Hp(a,e,t,n,i,r,o,s){let l;if(e.side===kn?l=n.intersectTriangle(o,r,i,!0,s):l=n.intersectTriangle(i,r,o,e.side!==Fi,s),l===null)return null;Ao.copy(s),Ao.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(Ao);return c<t.near||c>t.far?null:{distance:c,point:Ao.clone(),object:a}}function Co(a,e,t,n,i,r,o,s,l,c,u,h){Pi.fromBufferAttribute(i,c),Ri.fromBufferAttribute(i,u),Di.fromBufferAttribute(i,h);const f=a.morphTargetInfluences;if(r&&f){Mo.set(0,0,0),So.set(0,0,0),bo.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const p=f[g],_=r[g];p!==0&&(Ja.fromBufferAttribute(_,c),Qa.fromBufferAttribute(_,u),el.fromBufferAttribute(_,h),o?(Mo.addScaledVector(Ja,p),So.addScaledVector(Qa,p),bo.addScaledVector(el,p)):(Mo.addScaledVector(Ja.sub(Pi),p),So.addScaledVector(Qa.sub(Ri),p),bo.addScaledVector(el.sub(Di),p)))}Pi.add(Mo),Ri.add(So),Di.add(bo)}a.isSkinnedMesh&&(a.boneTransform(c,Pi),a.boneTransform(u,Ri),a.boneTransform(h,Di));const m=Hp(a,e,t,n,Pi,Ri,Di,tl);if(m){s&&(wo.fromBufferAttribute(s,c),To.fromBufferAttribute(s,u),Eo.fromBufferAttribute(s,h),m.uv=_i.getUV(tl,Pi,Ri,Di,wo,To,Eo,new nt)),l&&(wo.fromBufferAttribute(l,c),To.fromBufferAttribute(l,u),Eo.fromBufferAttribute(l,h),m.uv2=_i.getUV(tl,Pi,Ri,Di,wo,To,Eo,new nt));const g={a:c,b:u,c:h,normal:new N,materialIndex:0};_i.getNormal(Pi,Ri,Di,g.normal),m.face=g}return m}class ao extends ai{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const s=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(u,3)),this.setAttribute("uv",new Tn(h,2));function g(d,p,_,x,S,y,M,A,C,v,w){const P=y/C,G=M/v,H=y/2,z=M/2,R=A/2,B=C+1,Y=v+1;let W=0,U=0;const F=new N;for(let b=0;b<Y;b++){const J=b*G-z;for(let Q=0;Q<B;Q++){const te=Q*P-H;F[d]=te*x,F[p]=J*S,F[_]=R,c.push(F.x,F.y,F.z),F[d]=0,F[p]=0,F[_]=A>0?1:-1,u.push(F.x,F.y,F.z),h.push(Q/C),h.push(1-b/v),W+=1}}for(let b=0;b<v;b++)for(let J=0;J<C;J++){const Q=f+J+B*b,te=f+J+B*(b+1),re=f+(J+1)+B*(b+1),_e=f+(J+1)+B*b;l.push(Q,te,_e),l.push(te,re,_e),U+=6}s.addGroup(m,U,w),m+=U,f+=W}}static fromJSON(e){return new ao(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(a){const e={};for(let t=0;t<a.length;t++){const n=hs(a[t]);for(const i in n)e[i]=n[i]}return e}function Wp(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}const Xp={clone:hs,merge:Gt};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=Wp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jh extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dn extends jh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=uu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uu*2*Math.atan(Math.tan(Fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(r+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ur=90,kr=1;class $p extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Dn(Ur,kr,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new N(1,0,0)),this.add(i);const r=new Dn(Ur,kr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new N(-1,0,0)),this.add(r);const o=new Dn(Ur,kr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new N(0,1,0)),this.add(o);const s=new Dn(Ur,kr,e,t);s.layers=this.layers,s.up.set(0,0,-1),s.lookAt(new N(0,-1,0)),this.add(s);const l=new Dn(Ur,kr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,1)),this.add(l);const c=new Dn(Ur,kr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new N(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,s,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Si,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,s),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Zh extends Gn{constructor(e,t,n,i,r,o,s,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,n,i,r,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jp extends Sr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ao(5,5,5),r=new Wi({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Bi});r.uniforms.tEquirect.value=t;const o=new xi(i,r),s=t.minFilter;return t.minFilter===xa&&(t.minFilter=Rn),new $p(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const nl=new N,Zp=new N,Kp=new On;class er{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=nl.subVectors(n,t).cross(Zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(nl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kp.getNormalMatrix(e),i=this.coplanarPoint(nl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new ya,Lo=new N;class Kh{constructor(e=new er,t=new er,n=new er,i=new er,r=new er,o=new er){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],s=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],x=n[14],S=n[15];return t[0].setComponents(s-i,h-l,d-f,S-p).normalize(),t[1].setComponents(s+i,h+l,d+f,S+p).normalize(),t[2].setComponents(s+r,h+c,d+m,S+_).normalize(),t[3].setComponents(s-r,h-c,d-m,S-_).normalize(),t[4].setComponents(s-o,h-u,d-g,S-x).normalize(),t[5].setComponents(s+o,h+u,d+g,S+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Lo.x=i.normal.x>0?e.max.x:e.min.x,Lo.y=i.normal.y>0?e.max.y:e.min.y,Lo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jh(){let a=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){a=r}}}function Jp(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=a.createBuffer();a.bindBuffer(u,m),a.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;a.bindBuffer(h,c),m.count===-1?a.bufferSubData(h,0,f):(t?a.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):a.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:o,remove:s,update:l}}class Ma extends ai{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,s=Math.floor(n),l=Math.floor(i),c=s+1,u=l+1,h=e/s,f=t/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const x=_*f-o;for(let S=0;S<c;S++){const y=S*h-r;g.push(y,-x,0),d.push(0,0,1),p.push(S/s),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<s;x++){const S=x+c*_,y=x+c*(_+1),M=x+1+c*(_+1),A=x+1+c*_;m.push(S,y,A),m.push(y,M,A)}this.setIndex(m),this.setAttribute("position",new Tn(g,3)),this.setAttribute("normal",new Tn(d,3)),this.setAttribute("uv",new Tn(p,2))}static fromJSON(e){return new Ma(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,im=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm="vec3 transformed = vec3( position );",om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,lm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ym=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Gm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,$m=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ng=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ug=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,dg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,wg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dg=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ig=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Og=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Hg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Wg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Xg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,qg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,$g=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,jg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e_=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,t_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,i_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,a_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,__=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,y_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,A_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,He={alphamap_fragment:Qp,alphamap_pars_fragment:em,alphatest_fragment:tm,alphatest_pars_fragment:nm,aomap_fragment:im,aomap_pars_fragment:rm,begin_vertex:sm,beginnormal_vertex:om,bsdfs:am,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:um,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:dm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:_m,common:vm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Mm,displacementmap_vertex:Sm,emissivemap_fragment:bm,emissivemap_pars_fragment:wm,encodings_fragment:Tm,encodings_pars_fragment:Em,envmap_fragment:Am,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Lm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Vm,envmap_vertex:Rm,fog_vertex:Dm,fog_pars_vertex:Im,fog_fragment:Fm,fog_pars_fragment:Om,gradientmap_pars_fragment:zm,lightmap_fragment:Nm,lightmap_pars_fragment:Um,lights_lambert_fragment:km,lights_lambert_pars_fragment:Bm,lights_pars_begin:Gm,lights_toon_fragment:Hm,lights_toon_pars_fragment:Wm,lights_phong_fragment:Xm,lights_phong_pars_fragment:qm,lights_physical_fragment:Ym,lights_physical_pars_fragment:$m,lights_fragment_begin:jm,lights_fragment_maps:Zm,lights_fragment_end:Km,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:eg,logdepthbuf_vertex:tg,map_fragment:ng,map_pars_fragment:ig,map_particle_fragment:rg,map_particle_pars_fragment:sg,metalnessmap_fragment:og,metalnessmap_pars_fragment:ag,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:ug,morphtarget_vertex:hg,normal_fragment_begin:fg,normal_fragment_maps:dg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:vg,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:Mg,output_fragment:Sg,packing:bg,premultiplied_alpha_fragment:wg,project_vertex:Tg,dithering_fragment:Eg,dithering_pars_fragment:Ag,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Pg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ig,skinbase_vertex:Fg,skinning_pars_vertex:Og,skinning_vertex:zg,skinnormal_vertex:Ng,specularmap_fragment:Ug,specularmap_pars_fragment:kg,tonemapping_fragment:Bg,tonemapping_pars_fragment:Gg,transmission_fragment:Vg,transmission_pars_fragment:Hg,uv_pars_fragment:Wg,uv_pars_vertex:Xg,uv_vertex:qg,uv2_pars_fragment:Yg,uv2_pars_vertex:$g,uv2_vertex:jg,worldpos_vertex:Zg,background_vert:Kg,background_frag:Jg,cube_vert:Qg,cube_frag:e_,depth_vert:t_,depth_frag:n_,distanceRGBA_vert:i_,distanceRGBA_frag:r_,equirect_vert:s_,equirect_frag:o_,linedashed_vert:a_,linedashed_frag:l_,meshbasic_vert:c_,meshbasic_frag:u_,meshlambert_vert:h_,meshlambert_frag:f_,meshmatcap_vert:d_,meshmatcap_frag:p_,meshnormal_vert:m_,meshnormal_frag:g_,meshphong_vert:__,meshphong_frag:v_,meshphysical_vert:x_,meshphysical_frag:y_,meshtoon_vert:M_,meshtoon_frag:S_,points_vert:b_,points_frag:w_,shadow_vert:T_,shadow_frag:E_,sprite_vert:A_,sprite_frag:C_},ae={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new On},uv2Transform:{value:new On},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new On}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new On}}},Qn={basic:{uniforms:Gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new rt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Gt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Gt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Gt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new rt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Gt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Gt([ae.points,ae.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Gt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Gt([ae.common,ae.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Gt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Gt([ae.sprite,ae.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new On},t2D:{value:null}},vertexShader:He.background_vert,fragmentShader:He.background_frag},cube:{uniforms:Gt([ae.envmap,{opacity:{value:1}}]),vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Gt([ae.common,ae.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Gt([ae.lights,ae.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Qn.physical={uniforms:Gt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new nt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};function L_(a,e,t,n,i,r){const o=new rt(0);let s=i===!0?0:1,l,c,u=null,h=0,f=null;function m(d,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=e.get(x));const S=a.xr,y=S.getSession&&S.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?g(o,s):x&&x.isColor&&(g(x,1),_=!0),(a.autoClear||_)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),x&&(x.isCubeTexture||x.mapping===va)?(c===void 0&&(c=new xi(new ao(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:hs(Qn.cube.uniforms),vertexShader:Qn.cube.vertexShader,fragmentShader:Qn.cube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||h!==x.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=a.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new xi(new Ma(2,2),new Wi({name:"BackgroundMaterial",uniforms:hs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=a.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,p){t.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return o},setClearColor:function(d,p=1){o.set(d),s=p,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(d){s=d,g(o,s)},render:m}}function P_(a,e,t,n){const i=a.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,s={},l=p(null);let c=l,u=!1;function h(R,B,Y,W,U){let F=!1;if(o){const b=d(W,Y,B);c!==b&&(c=b,m(c.object)),F=_(R,W,Y,U),F&&x(R,W,Y,U)}else{const b=B.wireframe===!0;(c.geometry!==W.id||c.program!==Y.id||c.wireframe!==b)&&(c.geometry=W.id,c.program=Y.id,c.wireframe=b,F=!0)}U!==null&&t.update(U,34963),(F||u)&&(u=!1,v(R,B,Y,W),U!==null&&a.bindBuffer(34963,t.get(U).buffer))}function f(){return n.isWebGL2?a.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?a.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?a.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function d(R,B,Y){const W=Y.wireframe===!0;let U=s[R.id];U===void 0&&(U={},s[R.id]=U);let F=U[B.id];F===void 0&&(F={},U[B.id]=F);let b=F[W];return b===void 0&&(b=p(f()),F[W]=b),b}function p(R){const B=[],Y=[],W=[];for(let U=0;U<i;U++)B[U]=0,Y[U]=0,W[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:W,object:R,attributes:{},index:null}}function _(R,B,Y,W){const U=c.attributes,F=B.attributes;let b=0;const J=Y.getAttributes();for(const Q in J)if(J[Q].location>=0){const re=U[Q];let _e=F[Q];if(_e===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor)),re===void 0||re.attribute!==_e||_e&&re.data!==_e.data)return!0;b++}return c.attributesNum!==b||c.index!==W}function x(R,B,Y,W){const U={},F=B.attributes;let b=0;const J=Y.getAttributes();for(const Q in J)if(J[Q].location>=0){let re=F[Q];re===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const _e={};_e.attribute=re,re&&re.data&&(_e.data=re.data),U[Q]=_e,b++}c.attributes=U,c.attributesNum=b,c.index=W}function S(){const R=c.newAttributes;for(let B=0,Y=R.length;B<Y;B++)R[B]=0}function y(R){M(R,0)}function M(R,B){const Y=c.newAttributes,W=c.enabledAttributes,U=c.attributeDivisors;Y[R]=1,W[R]===0&&(a.enableVertexAttribArray(R),W[R]=1),U[R]!==B&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),U[R]=B)}function A(){const R=c.newAttributes,B=c.enabledAttributes;for(let Y=0,W=B.length;Y<W;Y++)B[Y]!==R[Y]&&(a.disableVertexAttribArray(Y),B[Y]=0)}function C(R,B,Y,W,U,F){n.isWebGL2===!0&&(Y===5124||Y===5125)?a.vertexAttribIPointer(R,B,Y,U,F):a.vertexAttribPointer(R,B,Y,W,U,F)}function v(R,B,Y,W){if(n.isWebGL2===!1&&(R.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const U=W.attributes,F=Y.getAttributes(),b=B.defaultAttributeValues;for(const J in F){const Q=F[J];if(Q.location>=0){let te=U[J];if(te===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),te!==void 0){const re=te.normalized,_e=te.itemSize,X=t.get(te);if(X===void 0)continue;const Ae=X.buffer,ye=X.type,ge=X.bytesPerElement;if(te.isInterleavedBufferAttribute){const le=te.data,Ie=le.stride,Te=te.offset;if(le.isInstancedInterleavedBuffer){for(let se=0;se<Q.locationSize;se++)M(Q.location+se,le.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let se=0;se<Q.locationSize;se++)y(Q.location+se);a.bindBuffer(34962,Ae);for(let se=0;se<Q.locationSize;se++)C(Q.location+se,_e/Q.locationSize,ye,re,Ie*ge,(Te+_e/Q.locationSize*se)*ge)}else{if(te.isInstancedBufferAttribute){for(let le=0;le<Q.locationSize;le++)M(Q.location+le,te.meshPerAttribute);R.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let le=0;le<Q.locationSize;le++)y(Q.location+le);a.bindBuffer(34962,Ae);for(let le=0;le<Q.locationSize;le++)C(Q.location+le,_e/Q.locationSize,ye,re,_e*ge,_e/Q.locationSize*le*ge)}}else if(b!==void 0){const re=b[J];if(re!==void 0)switch(re.length){case 2:a.vertexAttrib2fv(Q.location,re);break;case 3:a.vertexAttrib3fv(Q.location,re);break;case 4:a.vertexAttrib4fv(Q.location,re);break;default:a.vertexAttrib1fv(Q.location,re)}}}}A()}function w(){H();for(const R in s){const B=s[R];for(const Y in B){const W=B[Y];for(const U in W)g(W[U].object),delete W[U];delete B[Y]}delete s[R]}}function P(R){if(s[R.id]===void 0)return;const B=s[R.id];for(const Y in B){const W=B[Y];for(const U in W)g(W[U].object),delete W[U];delete B[Y]}delete s[R.id]}function G(R){for(const B in s){const Y=s[B];if(Y[R.id]===void 0)continue;const W=Y[R.id];for(const U in W)g(W[U].object),delete W[U];delete Y[R.id]}}function H(){z(),u=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:H,resetDefaultState:z,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:G,initAttributes:S,enableAttribute:y,disableUnusedAttributes:A}}function R_(a,e,t,n){const i=n.isWebGL2;let r;function o(c){r=c}function s(c,u){a.drawArrays(r,c,u),t.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=a,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),t.update(u,r,h)}this.setMode=o,this.render=s,this.renderInstances=l}function D_(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const l=r(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=a.getParameter(34930),f=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),d=a.getParameter(34921),p=a.getParameter(36347),_=a.getParameter(36348),x=a.getParameter(36349),S=f>0,y=o||e.has("OES_texture_float"),M=S&&y,A=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:S,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:A}}function I_(a){const e=this;let t=null,n=0,i=!1,r=!1;const o=new er,s=new On,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=a.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const x=r?0:n,S=x*4;let y=_.clippingState||null;l.value=y,y=u(g,f,S,m);for(let M=0;M!==S;++M)y[M]=t[M];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,x=f.matrixWorldInverse;s.getNormalMatrix(x),(p===null||p.length<_)&&(p=new Float32Array(_));for(let S=0,y=m;S!==d;++S,y+=4)o.copy(h[S]).applyMatrix4(x,s),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function F_(a){let e=new WeakMap;function t(o,s){return s===Tl?o.mapping=ls:s===El&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Tl||s===El)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jp(l.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class O_ extends jh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,s=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $r=4,bu=[.125,.215,.35,.446,.526,.582],sr=20,il=new O_,wu=new rt;let rl=null;const tr=(1+Math.sqrt(5))/2,Gr=1/tr,Tu=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,tr,Gr),new N(0,tr,-Gr),new N(Gr,0,tr),new N(-Gr,0,tr),new N(tr,Gr,0),new N(-tr,Gr,0)];class Eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){rl=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rl),e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rl=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:qs,format:ti,encoding:Mr,depthBuffer:!1},i=Au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z_(r)),this._blurMaterial=N_(r,e,t)}return i}_compileMaterial(e){const t=new xi(this._lodPlanes[0],e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,n,i){const s=new Dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wu),u.toneMapping=Si,u.autoClear=!1;const m=new qh({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),g=new xi(new ao,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(wu),d=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):x===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const S=this._cubeSize;Po(i,x*S,_>2?S:0,S,S),u.setRenderTarget(i),d&&u.render(g,s),u.render(e,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ls||e.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new xi(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=e;const l=this._cubeSize;Po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,il)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Tu[(i-1)%Tu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xi(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*sr-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):sr;p>sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${sr}`);const _=[];let x=0;for(let C=0;C<sr;++C){const v=C/d,w=Math.exp(-v*v/2);_.push(w),C===0?x+=w:C<p&&(x+=2*w)}for(let C=0;C<_.length;C++)_[C]=_[C]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const y=this._sizeLods[i],M=3*y*(i>S-$r?i-S+$r:0),A=4*(this._cubeSize-y);Po(t,M,A,3*y,2*y),l.setRenderTarget(t),l.render(h,il)}}function z_(a){const e=[],t=[],n=[];let i=a;const r=a-$r+1+bu.length;for(let o=0;o<r;o++){const s=Math.pow(2,i);t.push(s);let l=1/s;o>a-$r?l=bu[o-a+$r-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,x=new Float32Array(d*g*m),S=new Float32Array(p*g*m),y=new Float32Array(_*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,v=A>2?0:-1,w=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];x.set(w,d*g*A),S.set(f,p*g*A);const P=[A,A,A,A,A,A];y.set(P,_*g*A)}const M=new ai;M.setAttribute("position",new ii(x,d)),M.setAttribute("uv",new ii(S,p)),M.setAttribute("faceIndex",new ii(y,_)),e.push(M),i>$r&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Au(a,e,t){const n=new Sr(a,e,t);return n.texture.mapping=va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function N_(a,e,t){const n=new Float32Array(sr),i=new N(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Cu(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Lu(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function U_(a){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===Tl||l===El,u=l===ls||l===cs;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=e.get(s);return t===null&&(t=new Eu(a)),h=c?t.fromEquirectangular(s,h):t.fromCubemap(s,h),e.set(s,h),h.texture}else{if(e.has(s))return e.get(s).texture;{const h=s.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Eu(a));const f=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function r(s){const l=s.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function k_(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function B_(a,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)e.update(d[p],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const x=m.array;d=m.version;for(let S=0,y=x.length;S<y;S+=3){const M=x[S+0],A=x[S+1],C=x[S+2];f.push(M,A,A,C,C,M)}}else{const x=g.array;d=g.version;for(let S=0,y=x.length/3-1;S<y;S+=3){const M=S+0,A=S+1,C=S+2;f.push(M,A,A,C,C,M)}}const p=new(kh(f)?$h:Yh)(f,1);p.version=d;const _=r.get(h);_&&e.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:s,update:l,getWireframeAttribute:u}}function G_(a,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let s,l;function c(f){s=f.type,l=f.bytesPerElement}function u(f,m){a.drawElements(r,m,s,f*l),t.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=a,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,f*l,g),t.update(m,r,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function V_(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(r/3);break;case 1:t.lines+=s*(r/2);break;case 3:t.lines+=s*(r-1);break;case 2:t.lines+=s*r;break;case 0:t.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function H_(a,e){return a[0]-e[0]}function W_(a,e){return Math.abs(e[1])-Math.abs(a[1])}function X_(a,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Nt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let Y=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};var g=Y;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let P=0;y===!0&&(P=1),M===!0&&(P=2),A===!0&&(P=3);let G=u.attributes.position.count*P,H=1;G>e.maxTextureSize&&(H=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const z=new Float32Array(G*H*4*p),R=new Hh(z,G,H,p);R.type=ar,R.needsUpdate=!0;const B=P*4;for(let W=0;W<p;W++){const U=C[W],F=v[W],b=w[W],J=G*H*4*W;for(let Q=0;Q<U.count;Q++){const te=Q*B;y===!0&&(o.fromBufferAttribute(U,Q),z[J+te+0]=o.x,z[J+te+1]=o.y,z[J+te+2]=o.z,z[J+te+3]=0),M===!0&&(o.fromBufferAttribute(F,Q),z[J+te+4]=o.x,z[J+te+5]=o.y,z[J+te+6]=o.z,z[J+te+7]=0),A===!0&&(o.fromBufferAttribute(b,Q),z[J+te+8]=o.x,z[J+te+9]=o.y,z[J+te+10]=o.z,z[J+te+11]=b.itemSize===4?o.w:1)}}_={count:p,texture:R,size:new nt(G,H)},r.set(u,_),u.addEventListener("dispose",Y)}let x=0;for(let y=0;y<m.length;y++)x+=m[y];const S=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(a,"morphTargetBaseInfluence",S),f.getUniforms().setValue(a,"morphTargetInfluences",m),f.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let M=0;M<d;M++)p[M]=[M,0];n[u.id]=p}for(let M=0;M<d;M++){const A=p[M];A[0]=M,A[1]=m[M]}p.sort(W_);for(let M=0;M<8;M++)M<d&&p[M][1]?(s[M][0]=p[M][0],s[M][1]=p[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(H_);const _=u.morphAttributes.position,x=u.morphAttributes.normal;let S=0;for(let M=0;M<8;M++){const A=s[M],C=A[0],v=A[1];C!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+M)!==_[C]&&u.setAttribute("morphTarget"+M,_[C]),x&&u.getAttribute("morphNormal"+M)!==x[C]&&u.setAttribute("morphNormal"+M,x[C]),i[M]=v,S+=v):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),x&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),i[M]=0)}const y=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(a,"morphTargetBaseInfluence",y),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function q_(a,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Qh=new Gn,ef=new Hh,tf=new Ip,nf=new Zh,Pu=[],Ru=[],Du=new Float32Array(16),Iu=new Float32Array(9),Fu=new Float32Array(4);function xs(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let r=Pu[i];if(r===void 0&&(r=new Float32Array(i),Pu[i]=r),e!==0){n.toArray(r,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(r,s)}return r}function Et(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function At(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Sa(a,e){let t=Ru[e];t===void 0&&(t=new Int32Array(e),Ru[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Y_(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function $_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;a.uniform2fv(this.addr,e),At(t,e)}}function j_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;a.uniform3fv(this.addr,e),At(t,e)}}function Z_(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;a.uniform4fv(this.addr,e),At(t,e)}}function K_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Fu.set(n),a.uniformMatrix2fv(this.addr,!1,Fu),At(t,n)}}function J_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Iu.set(n),a.uniformMatrix3fv(this.addr,!1,Iu),At(t,n)}}function Q_(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,n))return;Du.set(n),a.uniformMatrix4fv(this.addr,!1,Du),At(t,n)}}function e0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function t0(a,e){const t=this.cache;Et(t,e)||(a.uniform2iv(this.addr,e),At(t,e))}function n0(a,e){const t=this.cache;Et(t,e)||(a.uniform3iv(this.addr,e),At(t,e))}function i0(a,e){const t=this.cache;Et(t,e)||(a.uniform4iv(this.addr,e),At(t,e))}function r0(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function s0(a,e){const t=this.cache;Et(t,e)||(a.uniform2uiv(this.addr,e),At(t,e))}function o0(a,e){const t=this.cache;Et(t,e)||(a.uniform3uiv(this.addr,e),At(t,e))}function a0(a,e){const t=this.cache;Et(t,e)||(a.uniform4uiv(this.addr,e),At(t,e))}function l0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Qh,i)}function c0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||tf,i)}function u0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||nf,i)}function h0(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ef,i)}function f0(a){switch(a){case 5126:return Y_;case 35664:return $_;case 35665:return j_;case 35666:return Z_;case 35674:return K_;case 35675:return J_;case 35676:return Q_;case 5124:case 35670:return e0;case 35667:case 35671:return t0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return r0;case 36294:return s0;case 36295:return o0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return h0}}function d0(a,e){a.uniform1fv(this.addr,e)}function p0(a,e){const t=xs(e,this.size,2);a.uniform2fv(this.addr,t)}function m0(a,e){const t=xs(e,this.size,3);a.uniform3fv(this.addr,t)}function g0(a,e){const t=xs(e,this.size,4);a.uniform4fv(this.addr,t)}function _0(a,e){const t=xs(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function v0(a,e){const t=xs(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function x0(a,e){const t=xs(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function y0(a,e){a.uniform1iv(this.addr,e)}function M0(a,e){a.uniform2iv(this.addr,e)}function S0(a,e){a.uniform3iv(this.addr,e)}function b0(a,e){a.uniform4iv(this.addr,e)}function w0(a,e){a.uniform1uiv(this.addr,e)}function T0(a,e){a.uniform2uiv(this.addr,e)}function E0(a,e){a.uniform3uiv(this.addr,e)}function A0(a,e){a.uniform4uiv(this.addr,e)}function C0(a,e,t){const n=this.cache,i=e.length,r=Sa(t,i);Et(n,r)||(a.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Qh,r[o])}function L0(a,e,t){const n=this.cache,i=e.length,r=Sa(t,i);Et(n,r)||(a.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||tf,r[o])}function P0(a,e,t){const n=this.cache,i=e.length,r=Sa(t,i);Et(n,r)||(a.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||nf,r[o])}function R0(a,e,t){const n=this.cache,i=e.length,r=Sa(t,i);Et(n,r)||(a.uniform1iv(this.addr,r),At(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ef,r[o])}function D0(a){switch(a){case 5126:return d0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return v0;case 35676:return x0;case 5124:case 35670:return y0;case 35667:case 35671:return M0;case 35668:case 35672:return S0;case 35669:case 35673:return b0;case 5125:return w0;case 36294:return T0;case 36295:return E0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return R0}}class I0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=f0(t.type)}}class F0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=D0(t.type)}}class O0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const s=i[r];s.setValue(e,t[s.id],n)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function Ou(a,e){a.seq.push(e),a.map[e.id]=e}function z0(a,e,t){const n=a.name,i=n.length;for(sl.lastIndex=0;;){const r=sl.exec(n),o=sl.lastIndex;let s=r[1];const l=r[2]==="]",c=r[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===i){Ou(t,c===void 0?new I0(s,a,e):new F0(s,a,e));break}else{let h=t.map[s];h===void 0&&(h=new O0(s),Ou(t,h)),t=h}}}class $o{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);z0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const s=t[r],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function zu(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let N0=0;function U0(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function k0(a){switch(a){case Mr:return["Linear","( value )"];case mt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Nu(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+U0(a.getShaderSource(e),o)}else return i}function B0(a,e){const t=k0(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function G0(a,e){let t;switch(e){case sp:t="Linear";break;case op:t="Reinhard";break;case ap:t="OptimizedCineon";break;case lp:t="ACESFilmic";break;case cp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function V0(a){return[a.extensionDerivatives||!!a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function H0(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function W0(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=a.getActiveAttrib(e,i),o=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),t[o]={type:r.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function Cs(a){return a!==""}function Uu(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ku(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(a){return a.replace(X0,q0)}function q0(a,e){const t=He[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Rl(t)}const Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(a){return a.replace(Y0,$0)}function $0(a,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gu(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function j0(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Ih?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===As&&(e="SHADOWMAP_TYPE_VSM"),e}function Z0(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K0(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function J0(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case ip:e="ENVMAP_BLENDING_MIX";break;case rp:e="ENVMAP_BLENDING_ADD";break}return e}function Q0(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ev(a,e,t,n){const i=a.getContext(),r=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=j0(t),c=Z0(t),u=K0(t),h=J0(t),f=Q0(t),m=t.isWebGL2?"":V0(t),g=H0(r),d=i.createProgram();let p,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Cs).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Cs).join(`
`),_.length>0&&(_+=`
`)):(p=[Gu(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),_=[m,Gu(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?He.tonemapping_pars_fragment:"",t.toneMapping!==Si?G0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.encodings_pars_fragment,B0("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),o=Rl(o),o=Uu(o,t),o=ku(o,t),s=Rl(s),s=Uu(s,t),s=ku(s,t),o=Bu(o),s=Bu(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=x+p+o,y=x+_+s,M=zu(i,35633,S),A=zu(i,35632,y);if(i.attachShader(d,M),i.attachShader(d,A),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),a.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),P=i.getShaderInfoLog(M).trim(),G=i.getShaderInfoLog(A).trim();let H=!0,z=!0;if(i.getProgramParameter(d,35714)===!1){H=!1;const R=Nu(i,M,"vertex"),B=Nu(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+R+`
`+B)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(P===""||G==="")&&(z=!1);z&&(this.diagnostics={runnable:H,programLog:w,vertexShader:{log:P,prefix:p},fragmentShader:{log:G,prefix:_}})}i.deleteShader(M),i.deleteShader(A);let C;this.getUniforms=function(){return C===void 0&&(C=new $o(i,d)),C};let v;return this.getAttributes=function(){return v===void 0&&(v=W0(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=N0++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=A,this}let tv=0;class nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new iv(e),t.set(e,n)),n}}class iv{constructor(e){this.id=tv++,this.code=e,this.usedTimes=0}}function rv(a,e,t,n,i,r,o){const s=new Xh,l=new nv,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,w,P,G,H){const z=G.fog,R=H.geometry,B=v.isMeshStandardMaterial?G.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),W=!!Y&&Y.mapping===va?Y.image.height:null,U=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const F=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,b=F!==void 0?F.length:0;let J=0;R.morphAttributes.position!==void 0&&(J=1),R.morphAttributes.normal!==void 0&&(J=2),R.morphAttributes.color!==void 0&&(J=3);let Q,te,re,_e;if(U){const Ie=Qn[U];Q=Ie.vertexShader,te=Ie.fragmentShader}else Q=v.vertexShader,te=v.fragmentShader,l.update(v),re=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);const X=a.getRenderTarget(),Ae=v.alphaTest>0,ye=v.clearcoat>0,ge=v.iridescence>0;return{isWebGL2:u,shaderID:U,shaderName:v.type,vertexShader:Q,fragmentShader:te,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:H.isInstancedMesh===!0,instancingColor:H.isInstancedMesh===!0&&H.instanceColor!==null,supportsVertexTextures:f,outputEncoding:X===null?a.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:Mr,map:!!v.map,matcap:!!v.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:W,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Lp,tangentSpaceNormalMap:v.normalMapType===Cp,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===mt,clearcoat:ye,clearcoatMap:ye&&!!v.clearcoatMap,clearcoatRoughnessMap:ye&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!v.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!v.iridescenceMap,iridescenceThicknessMap:ge&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Qr,alphaMap:!!v.alphaMap,alphaTest:Ae,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!R.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:H.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:a.shadowMap.enabled&&P.length>0,shadowMapType:a.shadowMap.type,toneMapping:v.toneMapped?a.toneMapping:Si,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fi,flipSided:v.side===kn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)w.push(P),w.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(_(w,v),x(w,v),w.push(a.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),v.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),v.push(s.mask)}function S(v){const w=g[v.type];let P;if(w){const G=Qn[w];P=Xp.clone(G.uniforms)}else P=v.uniforms;return P}function y(v,w){let P;for(let G=0,H=c.length;G<H;G++){const z=c[G];if(z.cacheKey===w){P=z,++P.usedTimes;break}}return P===void 0&&(P=new ev(a,w,v,r),c.push(P)),P}function M(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:S,acquireProgram:y,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:C}}function sv(){let a=new WeakMap;function e(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function t(r){a.delete(r)}function n(r,o,s){a.get(r)[o]=s}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function ov(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Vu(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Hu(){const a=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,m,g,d,p){let _=a[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},a[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),e++,_}function s(h,f,m,g,d,p){const _=o(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(h,f,m,g,d,p){const _=o(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||ov),n.length>1&&n.sort(f||Vu),i.length>1&&i.sort(f||Vu)}function u(){for(let h=e,f=a.length;h<f;h++){const m=a[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:s,unshift:l,finish:u,sort:c}}function av(){let a=new WeakMap;function e(n,i){const r=a.get(n);let o;return r===void 0?(o=new Hu,a.set(n,[o])):i>=r.length?(o=new Hu,r.push(o)):o=r[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function lv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new rt};break;case"SpotLight":t={position:new N,direction:new N,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new N,halfWidth:new N,halfHeight:new N};break}return a[e.id]=t,t}}}function cv(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let uv=0;function hv(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function fv(a,e){const t=new lv,n=cv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,o=new Rt,s=new Rt;function l(u,h){let f=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let d=0,p=0,_=0,x=0,S=0,y=0,M=0,A=0,C=0,v=0;u.sort(hv);const w=h!==!0?Math.PI:1;for(let G=0,H=u.length;G<H;G++){const z=u[G],R=z.color,B=z.intensity,Y=z.distance,W=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=R.r*B*w,m+=R.g*B*w,g+=R.b*B*w;else if(z.isLightProbe)for(let U=0;U<9;U++)i.probe[U].addScaledVector(z.sh.coefficients[U],B);else if(z.isDirectionalLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity*w),z.castShadow){const F=z.shadow,b=n.get(z);b.shadowBias=F.bias,b.shadowNormalBias=F.normalBias,b.shadowRadius=F.radius,b.shadowMapSize=F.mapSize,i.directionalShadow[d]=b,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=z.shadow.matrix,y++}i.directional[d]=U,d++}else if(z.isSpotLight){const U=t.get(z);U.position.setFromMatrixPosition(z.matrixWorld),U.color.copy(R).multiplyScalar(B*w),U.distance=Y,U.coneCos=Math.cos(z.angle),U.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),U.decay=z.decay,i.spot[_]=U;const F=z.shadow;if(z.map&&(i.spotLightMap[C]=z.map,C++,F.updateMatrices(z),z.castShadow&&v++),i.spotLightMatrix[_]=F.matrix,z.castShadow){const b=n.get(z);b.shadowBias=F.bias,b.shadowNormalBias=F.normalBias,b.shadowRadius=F.radius,b.shadowMapSize=F.mapSize,i.spotShadow[_]=b,i.spotShadowMap[_]=W,A++}_++}else if(z.isRectAreaLight){const U=t.get(z);U.color.copy(R).multiplyScalar(B),U.halfWidth.set(z.width*.5,0,0),U.halfHeight.set(0,z.height*.5,0),i.rectArea[x]=U,x++}else if(z.isPointLight){const U=t.get(z);if(U.color.copy(z.color).multiplyScalar(z.intensity*w),U.distance=z.distance,U.decay=z.decay,z.castShadow){const F=z.shadow,b=n.get(z);b.shadowBias=F.bias,b.shadowNormalBias=F.normalBias,b.shadowRadius=F.radius,b.shadowMapSize=F.mapSize,b.shadowCameraNear=F.camera.near,b.shadowCameraFar=F.camera.far,i.pointShadow[p]=b,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=z.shadow.matrix,M++}i.point[p]=U,p++}else if(z.isHemisphereLight){const U=t.get(z);U.skyColor.copy(z.color).multiplyScalar(B*w),U.groundColor.copy(z.groundColor).multiplyScalar(B*w),i.hemi[S]=U,S++}}x>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==d||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==x||P.hemiLength!==S||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==A||P.numSpotMaps!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=x,i.point.length=p,i.hemi.length=S,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=A+C-v,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=v,P.directionalLength=d,P.pointLength=p,P.spotLength=_,P.rectAreaLength=x,P.hemiLength=S,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=A,P.numSpotMaps=C,i.version=uv++)}function c(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let x=0,S=u.length;x<S;x++){const y=u[x];if(y.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),f++}else if(y.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const M=i.rectArea[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),s.identity(),o.copy(y.matrixWorld),o.premultiply(_),s.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(s),M.halfHeight.applyMatrix4(s),d++}else if(y.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const M=i.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Wu(a,e){const t=new fv(a,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function s(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function dv(a,e){let t=new WeakMap;function n(r,o=0){const s=t.get(r);let l;return s===void 0?(l=new Wu(a,e),t.set(r,[l])):o>=s.length?(l=new Wu(a,e),s.push(l)):l=s[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class pv extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mv extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vv(a,e,t){let n=new Kh;const i=new nt,r=new nt,o=new Nt,s=new pv({depthPacking:Ap}),l=new mv,c={},u=t.maxTextureSize,h={0:kn,1:as,2:Fi},f=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:gv,fragmentShader:_v}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ai;g.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new xi(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ih,this.render=function(y,M,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const C=a.getRenderTarget(),v=a.getActiveCubeFace(),w=a.getActiveMipmapLevel(),P=a.state;P.setBlending(Bi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let G=0,H=y.length;G<H;G++){const z=y[G],R=z.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const B=R.getFrameExtents();if(i.multiply(B),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/B.x),i.x=r.x*B.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/B.y),i.y=r.y*B.y,R.mapSize.y=r.y)),R.map===null){const W=this.type!==As?{minFilter:sn,magFilter:sn}:{};R.map=new Sr(i.x,i.y,W),R.map.texture.name=z.name+".shadowMap",R.camera.updateProjectionMatrix()}a.setRenderTarget(R.map),a.clear();const Y=R.getViewportCount();for(let W=0;W<Y;W++){const U=R.getViewport(W);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),P.viewport(o),R.updateMatrices(z,W),n=R.getFrustum(),S(M,A,R.camera,z,this.type)}R.isPointLightShadow!==!0&&this.type===As&&_(R,A),R.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(C,v,w)};function _(y,M){const A=e.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Sr(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(M,null,A,f,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(M,null,A,m,d,null)}function x(y,M,A,C,v,w){let P=null;const G=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(G!==void 0?P=G:P=A.isPointLight===!0?l:s,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const H=P.uuid,z=M.uuid;let R=c[H];R===void 0&&(R={},c[H]=R);let B=R[z];B===void 0&&(B=P.clone(),R[z]=B),P=B}return P.visible=M.visible,P.wireframe=M.wireframe,w===As?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:h[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=C,P.farDistance=v),P}function S(y,M,A,C,v){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===As)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const G=e.update(y),H=y.material;if(Array.isArray(H)){const z=G.groups;for(let R=0,B=z.length;R<B;R++){const Y=z[R],W=H[Y.materialIndex];if(W&&W.visible){const U=x(y,W,C,A.near,A.far,v);a.renderBufferDirect(A,null,G,U,y,Y)}}}else if(H.visible){const z=x(y,H,C,A.near,A.far,v);a.renderBufferDirect(A,null,G,z,y,null)}}const P=y.children;for(let G=0,H=P.length;G<H;G++)S(P[G],M,A,C,v)}}function xv(a,e,t){const n=t.isWebGL2;function i(){let D=!1;const fe=new Nt;let K=null;const j=new Nt(0,0,0,0);return{setMask:function(ie){K!==ie&&!D&&(a.colorMask(ie,ie,ie,ie),K=ie)},setLocked:function(ie){D=ie},setClear:function(ie,be,Ve,it,qt){qt===!0&&(ie*=it,be*=it,Ve*=it),fe.set(ie,be,Ve,it),j.equals(fe)===!1&&(a.clearColor(ie,be,Ve,it),j.copy(fe))},reset:function(){D=!1,K=null,j.set(-1,0,0,0)}}}function r(){let D=!1,fe=null,K=null,j=null;return{setTest:function(ie){ie?Ae(2929):ye(2929)},setMask:function(ie){fe!==ie&&!D&&(a.depthMask(ie),fe=ie)},setFunc:function(ie){if(K!==ie){switch(ie){case Zd:a.depthFunc(512);break;case Kd:a.depthFunc(519);break;case Jd:a.depthFunc(513);break;case wl:a.depthFunc(515);break;case Qd:a.depthFunc(514);break;case ep:a.depthFunc(518);break;case tp:a.depthFunc(516);break;case np:a.depthFunc(517);break;default:a.depthFunc(515)}K=ie}},setLocked:function(ie){D=ie},setClear:function(ie){j!==ie&&(a.clearDepth(ie),j=ie)},reset:function(){D=!1,fe=null,K=null,j=null}}}function o(){let D=!1,fe=null,K=null,j=null,ie=null,be=null,Ve=null,it=null,qt=null;return{setTest:function(Je){D||(Je?Ae(2960):ye(2960))},setMask:function(Je){fe!==Je&&!D&&(a.stencilMask(Je),fe=Je)},setFunc:function(Je,Ce,xe){(K!==Je||j!==Ce||ie!==xe)&&(a.stencilFunc(Je,Ce,xe),K=Je,j=Ce,ie=xe)},setOp:function(Je,Ce,xe){(be!==Je||Ve!==Ce||it!==xe)&&(a.stencilOp(Je,Ce,xe),be=Je,Ve=Ce,it=xe)},setLocked:function(Je){D=Je},setClear:function(Je){qt!==Je&&(a.clearStencil(Je),qt=Je)},reset:function(){D=!1,fe=null,K=null,j=null,ie=null,be=null,Ve=null,it=null,qt=null}}}const s=new i,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,x=null,S=null,y=null,M=null,A=null,C=null,v=null,w=!1,P=null,G=null,H=null,z=null,R=null;const B=a.getParameter(35661);let Y=!1,W=0;const U=a.getParameter(7938);U.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(U)[1]),Y=W>=1):U.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),Y=W>=2);let F=null,b={};const J=a.getParameter(3088),Q=a.getParameter(2978),te=new Nt().fromArray(J),re=new Nt().fromArray(Q);function _e(D,fe,K){const j=new Uint8Array(4),ie=a.createTexture();a.bindTexture(D,ie),a.texParameteri(D,10241,9728),a.texParameteri(D,10240,9728);for(let be=0;be<K;be++)a.texImage2D(fe+be,0,6408,1,1,0,6408,5121,j);return ie}const X={};X[3553]=_e(3553,3553,1),X[34067]=_e(34067,34069,6),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(2929),l.setFunc(wl),Ke(!1),k(Ic),Ae(2884),Oe(Bi);function Ae(D){f[D]!==!0&&(a.enable(D),f[D]=!0)}function ye(D){f[D]!==!1&&(a.disable(D),f[D]=!1)}function ge(D,fe){return m[D]!==fe?(a.bindFramebuffer(D,fe),m[D]=fe,n&&(D===36009&&(m[36160]=fe),D===36160&&(m[36009]=fe)),!0):!1}function le(D,fe){let K=d,j=!1;if(D)if(K=g.get(fe),K===void 0&&(K=[],g.set(fe,K)),D.isWebGLMultipleRenderTargets){const ie=D.texture;if(K.length!==ie.length||K[0]!==36064){for(let be=0,Ve=ie.length;be<Ve;be++)K[be]=36064+be;K.length=ie.length,j=!0}}else K[0]!==36064&&(K[0]=36064,j=!0);else K[0]!==1029&&(K[0]=1029,j=!0);j&&(t.isWebGL2?a.drawBuffers(K):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function Ie(D){return p!==D?(a.useProgram(D),p=D,!0):!1}const Te={[Xr]:32774,[kd]:32778,[Bd]:32779};if(n)Te[Nc]=32775,Te[Uc]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Te[Nc]=D.MIN_EXT,Te[Uc]=D.MAX_EXT)}const se={[Gd]:0,[Vd]:1,[Hd]:768,[Fh]:770,[jd]:776,[Yd]:774,[Xd]:772,[Wd]:769,[Oh]:771,[$d]:775,[qd]:773};function Oe(D,fe,K,j,ie,be,Ve,it){if(D===Bi){_===!0&&(ye(3042),_=!1);return}if(_===!1&&(Ae(3042),_=!0),D!==Ud){if(D!==x||it!==w){if((S!==Xr||A!==Xr)&&(a.blendEquation(32774),S=Xr,A=Xr),it)switch(D){case Qr:a.blendFuncSeparate(1,771,1,771);break;case Fc:a.blendFunc(1,1);break;case Oc:a.blendFuncSeparate(0,769,0,1);break;case zc:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Qr:a.blendFuncSeparate(770,771,1,771);break;case Fc:a.blendFunc(770,1);break;case Oc:a.blendFuncSeparate(0,769,0,1);break;case zc:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,M=null,C=null,v=null,x=D,w=it}return}ie=ie||fe,be=be||K,Ve=Ve||j,(fe!==S||ie!==A)&&(a.blendEquationSeparate(Te[fe],Te[ie]),S=fe,A=ie),(K!==y||j!==M||be!==C||Ve!==v)&&(a.blendFuncSeparate(se[K],se[j],se[be],se[Ve]),y=K,M=j,C=be,v=Ve),x=D,w=null}function et(D,fe){D.side===Fi?ye(2884):Ae(2884);let K=D.side===kn;fe&&(K=!K),Ke(K),D.blending===Qr&&D.transparent===!1?Oe(Bi):Oe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const j=D.stencilWrite;c.setTest(j),j&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ae(32926):ye(32926)}function Ke(D){P!==D&&(D?a.frontFace(2304):a.frontFace(2305),P=D)}function k(D){D!==Od?(Ae(2884),D!==G&&(D===Ic?a.cullFace(1029):D===zd?a.cullFace(1028):a.cullFace(1032))):ye(2884),G=D}function Qe(D){D!==H&&(Y&&a.lineWidth(D),H=D)}function Ge(D,fe,K){D?(Ae(32823),(z!==fe||R!==K)&&(a.polygonOffset(fe,K),z=fe,R=K)):ye(32823)}function It(D){D?Ae(3089):ye(3089)}function tt(D){D===void 0&&(D=33984+B-1),F!==D&&(a.activeTexture(D),F=D)}function L(D,fe,K){K===void 0&&(F===null?K=33984+B-1:K=F);let j=b[K];j===void 0&&(j={type:void 0,texture:void 0},b[K]=j),(j.type!==D||j.texture!==fe)&&(F!==K&&(a.activeTexture(K),F=K),a.bindTexture(D,fe||X[D]),j.type=D,j.texture=fe)}function T(){const D=b[F];D!==void 0&&D.type!==void 0&&(a.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{a.compressedTexImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{a.texSubImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{a.texSubImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{a.texStorage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{a.texStorage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{a.texImage2D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{a.texImage3D.apply(a,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(D){te.equals(D)===!1&&(a.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function ve(D){re.equals(D)===!1&&(a.viewport(D.x,D.y,D.z,D.w),re.copy(D))}function Ee(D,fe){let K=h.get(fe);K===void 0&&(K=new WeakMap,h.set(fe,K));let j=K.get(D);j===void 0&&(j=a.getUniformBlockIndex(fe,D.name),K.set(D,j))}function Fe(D,fe){const j=h.get(fe).get(D);u.get(D)!==j&&(a.uniformBlockBinding(fe,j,D.__bindingPointIndex),u.set(D,j))}function Xe(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},F=null,b={},m={},g=new WeakMap,d=[],p=null,_=!1,x=null,S=null,y=null,M=null,A=null,C=null,v=null,w=!1,P=null,G=null,H=null,z=null,R=null,te.set(0,0,a.canvas.width,a.canvas.height),re.set(0,0,a.canvas.width,a.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ae,disable:ye,bindFramebuffer:ge,drawBuffers:le,useProgram:Ie,setBlending:Oe,setMaterial:et,setFlipSided:Ke,setCullFace:k,setLineWidth:Qe,setPolygonOffset:Ge,setScissorTest:It,activeTexture:tt,bindTexture:L,unbindTexture:T,compressedTexImage2D:$,texImage2D:Z,texImage3D:Me,updateUBOMapping:Ee,uniformBlockBinding:Fe,texStorage2D:we,texStorage3D:ce,texSubImage2D:ee,texSubImage3D:ne,compressedTexSubImage2D:oe,scissor:Se,viewport:ve,reset:Xe}}function yv(a,e,t,n,i,r,o){const s=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,T){return _?new OffscreenCanvas(L,T):Ys("canvas")}function S(L,T,$,ee){let ne=1;if((L.width>ee||L.height>ee)&&(ne=ee/Math.max(L.width,L.height)),ne<1||T===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const oe=T?Pl:Math.floor,we=oe(ne*L.width),ce=oe(ne*L.height);d===void 0&&(d=x(we,ce));const Z=$?x(we,ce):d;return Z.width=we,Z.height=ce,Z.getContext("2d").drawImage(L,0,0,we,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+we+"x"+ce+")."),Z}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return hu(L.width)&&hu(L.height)}function M(L){return s?!1:L.wrapS!==Zn||L.wrapT!==Zn||L.minFilter!==sn&&L.minFilter!==Rn}function A(L,T){return L.generateMipmaps&&T&&L.minFilter!==sn&&L.minFilter!==Rn}function C(L){a.generateMipmap(L)}function v(L,T,$,ee,ne=!1){if(s===!1)return T;if(L!==null){if(a[L]!==void 0)return a[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=T;return T===6403&&($===5126&&(oe=33326),$===5131&&(oe=33325),$===5121&&(oe=33321)),T===33319&&($===5126&&(oe=33328),$===5131&&(oe=33327),$===5121&&(oe=33323)),T===6408&&($===5126&&(oe=34836),$===5131&&(oe=34842),$===5121&&(oe=ee===mt&&ne===!1?35907:32856),$===32819&&(oe=32854),$===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function w(L,T,$){return A(L,$)===!0||L.isFramebufferTexture&&L.minFilter!==sn&&L.minFilter!==Rn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function P(L){return L===sn||L===kc||L===Bc?9728:9729}function G(L){const T=L.target;T.removeEventListener("dispose",G),z(T),T.isVideoTexture&&g.delete(T)}function H(L){const T=L.target;T.removeEventListener("dispose",H),B(T)}function z(L){const T=n.get(L);if(T.__webglInit===void 0)return;const $=L.source,ee=p.get($);if(ee){const ne=ee[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(L),Object.keys(ee).length===0&&p.delete($)}n.remove(L)}function R(L){const T=n.get(L);a.deleteTexture(T.__webglTexture);const $=L.source,ee=p.get($);delete ee[T.__cacheKey],o.memory.textures--}function B(L){const T=L.texture,$=n.get(L),ee=n.get(T);if(ee.__webglTexture!==void 0&&(a.deleteTexture(ee.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)a.deleteFramebuffer($.__webglFramebuffer[ne]),$.__webglDepthbuffer&&a.deleteRenderbuffer($.__webglDepthbuffer[ne]);else{if(a.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&a.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&a.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ne=0;ne<$.__webglColorRenderbuffer.length;ne++)$.__webglColorRenderbuffer[ne]&&a.deleteRenderbuffer($.__webglColorRenderbuffer[ne]);$.__webglDepthRenderbuffer&&a.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ne=0,oe=T.length;ne<oe;ne++){const we=n.get(T[ne]);we.__webglTexture&&(a.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(T[ne])}n.remove(T),n.remove(L)}let Y=0;function W(){Y=0}function U(){const L=Y;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),Y+=1,L}function F(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.encoding),T.join()}function b(L,T){const $=n.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye($,L,T);return}}t.bindTexture(3553,$.__webglTexture,33984+T)}function J(L,T){const $=n.get(L);if(L.version>0&&$.__version!==L.version){ye($,L,T);return}t.bindTexture(35866,$.__webglTexture,33984+T)}function Q(L,T){const $=n.get(L);if(L.version>0&&$.__version!==L.version){ye($,L,T);return}t.bindTexture(32879,$.__webglTexture,33984+T)}function te(L,T){const $=n.get(L);if(L.version>0&&$.__version!==L.version){ge($,L,T);return}t.bindTexture(34067,$.__webglTexture,33984+T)}const re={[Al]:10497,[Zn]:33071,[Cl]:33648},_e={[sn]:9728,[kc]:9984,[Bc]:9986,[Rn]:9729,[up]:9985,[xa]:9987};function X(L,T,$){if($?(a.texParameteri(L,10242,re[T.wrapS]),a.texParameteri(L,10243,re[T.wrapT]),(L===32879||L===35866)&&a.texParameteri(L,32882,re[T.wrapR]),a.texParameteri(L,10240,_e[T.magFilter]),a.texParameteri(L,10241,_e[T.minFilter])):(a.texParameteri(L,10242,33071),a.texParameteri(L,10243,33071),(L===32879||L===35866)&&a.texParameteri(L,32882,33071),(T.wrapS!==Zn||T.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(L,10240,P(T.magFilter)),a.texParameteri(L,10241,P(T.minFilter)),T.minFilter!==sn&&T.minFilter!==Rn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(T.type===ar&&e.has("OES_texture_float_linear")===!1||s===!1&&T.type===qs&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(a.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Ae(L,T){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",G));const ee=T.source;let ne=p.get(ee);ne===void 0&&(ne={},p.set(ee,ne));const oe=F(T);if(oe!==L.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ne[oe].usedTimes++;const we=ne[L.__cacheKey];we!==void 0&&(ne[L.__cacheKey].usedTimes--,we.usedTimes===0&&R(T)),L.__cacheKey=oe,L.__webglTexture=ne[oe].texture}return $}function ye(L,T,$){let ee=3553;T.isDataArrayTexture&&(ee=35866),T.isData3DTexture&&(ee=32879);const ne=Ae(L,T),oe=T.source;t.bindTexture(ee,L.__webglTexture,33984+$);const we=n.get(oe);if(oe.version!==we.__version||ne===!0){t.activeTexture(33984+$),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const ce=M(T)&&y(T.image)===!1;let Z=S(T.image,ce,!1,u);Z=tt(T,Z);const Me=y(Z)||s,Se=r.convert(T.format,T.encoding);let ve=r.convert(T.type),Ee=v(T.internalFormat,Se,ve,T.encoding,T.isVideoTexture);X(ee,T,Me);let Fe;const Xe=T.mipmaps,D=s&&T.isVideoTexture!==!0,fe=we.__version===void 0||ne===!0,K=w(T,Z,Me);if(T.isDepthTexture)Ee=6402,s?T.type===ar?Ee=36012:T.type===or?Ee=33190:T.type===es?Ee=35056:Ee=33189:T.type===ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===hr&&Ee===6402&&T.type!==Uh&&T.type!==or&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=or,ve=r.convert(T.type)),T.format===us&&Ee===6402&&(Ee=34041,T.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=es,ve=r.convert(T.type))),fe&&(D?t.texStorage2D(3553,1,Ee,Z.width,Z.height):t.texImage2D(3553,0,Ee,Z.width,Z.height,0,Se,ve,null));else if(T.isDataTexture)if(Xe.length>0&&Me){D&&fe&&t.texStorage2D(3553,K,Ee,Xe[0].width,Xe[0].height);for(let j=0,ie=Xe.length;j<ie;j++)Fe=Xe[j],D?t.texSubImage2D(3553,j,0,0,Fe.width,Fe.height,Se,ve,Fe.data):t.texImage2D(3553,j,Ee,Fe.width,Fe.height,0,Se,ve,Fe.data);T.generateMipmaps=!1}else D?(fe&&t.texStorage2D(3553,K,Ee,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Z.width,Z.height,Se,ve,Z.data)):t.texImage2D(3553,0,Ee,Z.width,Z.height,0,Se,ve,Z.data);else if(T.isCompressedTexture){D&&fe&&t.texStorage2D(3553,K,Ee,Xe[0].width,Xe[0].height);for(let j=0,ie=Xe.length;j<ie;j++)Fe=Xe[j],T.format!==ti?Se!==null?D?t.compressedTexSubImage2D(3553,j,0,0,Fe.width,Fe.height,Se,Fe.data):t.compressedTexImage2D(3553,j,Ee,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?t.texSubImage2D(3553,j,0,0,Fe.width,Fe.height,Se,ve,Fe.data):t.texImage2D(3553,j,Ee,Fe.width,Fe.height,0,Se,ve,Fe.data)}else if(T.isDataArrayTexture)D?(fe&&t.texStorage3D(35866,K,Ee,Z.width,Z.height,Z.depth),t.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,Se,ve,Z.data)):t.texImage3D(35866,0,Ee,Z.width,Z.height,Z.depth,0,Se,ve,Z.data);else if(T.isData3DTexture)D?(fe&&t.texStorage3D(32879,K,Ee,Z.width,Z.height,Z.depth),t.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,Se,ve,Z.data)):t.texImage3D(32879,0,Ee,Z.width,Z.height,Z.depth,0,Se,ve,Z.data);else if(T.isFramebufferTexture){if(fe)if(D)t.texStorage2D(3553,K,Ee,Z.width,Z.height);else{let j=Z.width,ie=Z.height;for(let be=0;be<K;be++)t.texImage2D(3553,be,Ee,j,ie,0,Se,ve,null),j>>=1,ie>>=1}}else if(Xe.length>0&&Me){D&&fe&&t.texStorage2D(3553,K,Ee,Xe[0].width,Xe[0].height);for(let j=0,ie=Xe.length;j<ie;j++)Fe=Xe[j],D?t.texSubImage2D(3553,j,0,0,Se,ve,Fe):t.texImage2D(3553,j,Ee,Se,ve,Fe);T.generateMipmaps=!1}else D?(fe&&t.texStorage2D(3553,K,Ee,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Se,ve,Z)):t.texImage2D(3553,0,Ee,Se,ve,Z);A(T,Me)&&C(ee),we.__version=oe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ge(L,T,$){if(T.image.length!==6)return;const ee=Ae(L,T),ne=T.source;t.bindTexture(34067,L.__webglTexture,33984+$);const oe=n.get(ne);if(ne.version!==oe.__version||ee===!0){t.activeTexture(33984+$),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const we=T.isCompressedTexture||T.image[0].isCompressedTexture,ce=T.image[0]&&T.image[0].isDataTexture,Z=[];for(let j=0;j<6;j++)!we&&!ce?Z[j]=S(T.image[j],!1,!0,c):Z[j]=ce?T.image[j].image:T.image[j],Z[j]=tt(T,Z[j]);const Me=Z[0],Se=y(Me)||s,ve=r.convert(T.format,T.encoding),Ee=r.convert(T.type),Fe=v(T.internalFormat,ve,Ee,T.encoding),Xe=s&&T.isVideoTexture!==!0,D=oe.__version===void 0||ee===!0;let fe=w(T,Me,Se);X(34067,T,Se);let K;if(we){Xe&&D&&t.texStorage2D(34067,fe,Fe,Me.width,Me.height);for(let j=0;j<6;j++){K=Z[j].mipmaps;for(let ie=0;ie<K.length;ie++){const be=K[ie];T.format!==ti?ve!==null?Xe?t.compressedTexSubImage2D(34069+j,ie,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(34069+j,ie,Fe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(34069+j,ie,0,0,be.width,be.height,ve,Ee,be.data):t.texImage2D(34069+j,ie,Fe,be.width,be.height,0,ve,Ee,be.data)}}}else{K=T.mipmaps,Xe&&D&&(K.length>0&&fe++,t.texStorage2D(34067,fe,Fe,Z[0].width,Z[0].height));for(let j=0;j<6;j++)if(ce){Xe?t.texSubImage2D(34069+j,0,0,0,Z[j].width,Z[j].height,ve,Ee,Z[j].data):t.texImage2D(34069+j,0,Fe,Z[j].width,Z[j].height,0,ve,Ee,Z[j].data);for(let ie=0;ie<K.length;ie++){const Ve=K[ie].image[j].image;Xe?t.texSubImage2D(34069+j,ie+1,0,0,Ve.width,Ve.height,ve,Ee,Ve.data):t.texImage2D(34069+j,ie+1,Fe,Ve.width,Ve.height,0,ve,Ee,Ve.data)}}else{Xe?t.texSubImage2D(34069+j,0,0,0,ve,Ee,Z[j]):t.texImage2D(34069+j,0,Fe,ve,Ee,Z[j]);for(let ie=0;ie<K.length;ie++){const be=K[ie];Xe?t.texSubImage2D(34069+j,ie+1,0,0,ve,Ee,be.image[j]):t.texImage2D(34069+j,ie+1,Fe,ve,Ee,be.image[j])}}}A(T,Se)&&C(34067),oe.__version=ne.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function le(L,T,$,ee,ne){const oe=r.convert($.format,$.encoding),we=r.convert($.type),ce=v($.internalFormat,oe,we,$.encoding);n.get(T).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,ce,T.width,T.height,T.depth,0,oe,we,null):t.texImage2D(ne,0,ce,T.width,T.height,0,oe,we,null)),t.bindFramebuffer(36160,L),Ge(T)?f.framebufferTexture2DMultisampleEXT(36160,ee,ne,n.get($).__webglTexture,0,Qe(T)):a.framebufferTexture2D(36160,ee,ne,n.get($).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(L,T,$){if(a.bindRenderbuffer(36161,L),T.depthBuffer&&!T.stencilBuffer){let ee=33189;if($||Ge(T)){const ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===ar?ee=36012:ne.type===or&&(ee=33190));const oe=Qe(T);Ge(T)?f.renderbufferStorageMultisampleEXT(36161,oe,ee,T.width,T.height):a.renderbufferStorageMultisample(36161,oe,ee,T.width,T.height)}else a.renderbufferStorage(36161,ee,T.width,T.height);a.framebufferRenderbuffer(36160,36096,36161,L)}else if(T.depthBuffer&&T.stencilBuffer){const ee=Qe(T);$&&Ge(T)===!1?a.renderbufferStorageMultisample(36161,ee,35056,T.width,T.height):Ge(T)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,T.width,T.height):a.renderbufferStorage(36161,34041,T.width,T.height),a.framebufferRenderbuffer(36160,33306,36161,L)}else{const ee=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<ee.length;ne++){const oe=ee[ne],we=r.convert(oe.format,oe.encoding),ce=r.convert(oe.type),Z=v(oe.internalFormat,we,ce,oe.encoding),Me=Qe(T);$&&Ge(T)===!1?a.renderbufferStorageMultisample(36161,Me,Z,T.width,T.height):Ge(T)?f.renderbufferStorageMultisampleEXT(36161,Me,Z,T.width,T.height):a.renderbufferStorage(36161,Z,T.width,T.height)}}a.bindRenderbuffer(36161,null)}function Te(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),b(T.depthTexture,0);const ee=n.get(T.depthTexture).__webglTexture,ne=Qe(T);if(T.depthTexture.format===hr)Ge(T)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ne):a.framebufferTexture2D(36160,36096,3553,ee,0);else if(T.depthTexture.format===us)Ge(T)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ne):a.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function se(L){const T=n.get(L),$=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,L)}else if($){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]=a.createRenderbuffer(),Ie(T.__webglDepthbuffer[ee],L,!1)}else t.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=a.createRenderbuffer(),Ie(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Oe(L,T,$){const ee=n.get(L);T!==void 0&&le(ee.__webglFramebuffer,L,L.texture,36064,3553),$!==void 0&&se(L)}function et(L){const T=L.texture,$=n.get(L),ee=n.get(T);L.addEventListener("dispose",H),L.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=a.createTexture()),ee.__version=T.version,o.memory.textures++);const ne=L.isWebGLCubeRenderTarget===!0,oe=L.isWebGLMultipleRenderTargets===!0,we=y(L)||s;if(ne){$.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)$.__webglFramebuffer[ce]=a.createFramebuffer()}else{if($.__webglFramebuffer=a.createFramebuffer(),oe)if(i.drawBuffers){const ce=L.texture;for(let Z=0,Me=ce.length;Z<Me;Z++){const Se=n.get(ce[Z]);Se.__webglTexture===void 0&&(Se.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&L.samples>0&&Ge(L)===!1){const ce=oe?T:[T];$.__webglMultisampledFramebuffer=a.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let Z=0;Z<ce.length;Z++){const Me=ce[Z];$.__webglColorRenderbuffer[Z]=a.createRenderbuffer(),a.bindRenderbuffer(36161,$.__webglColorRenderbuffer[Z]);const Se=r.convert(Me.format,Me.encoding),ve=r.convert(Me.type),Ee=v(Me.internalFormat,Se,ve,Me.encoding,L.isXRRenderTarget===!0),Fe=Qe(L);a.renderbufferStorageMultisample(36161,Fe,Ee,L.width,L.height),a.framebufferRenderbuffer(36160,36064+Z,36161,$.__webglColorRenderbuffer[Z])}a.bindRenderbuffer(36161,null),L.depthBuffer&&($.__webglDepthRenderbuffer=a.createRenderbuffer(),Ie($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,ee.__webglTexture),X(34067,T,we);for(let ce=0;ce<6;ce++)le($.__webglFramebuffer[ce],L,T,36064,34069+ce);A(T,we)&&C(34067),t.unbindTexture()}else if(oe){const ce=L.texture;for(let Z=0,Me=ce.length;Z<Me;Z++){const Se=ce[Z],ve=n.get(Se);t.bindTexture(3553,ve.__webglTexture),X(3553,Se,we),le($.__webglFramebuffer,L,Se,36064+Z,3553),A(Se,we)&&C(3553)}t.unbindTexture()}else{let ce=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(s?ce=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ce,ee.__webglTexture),X(ce,T,we),le($.__webglFramebuffer,L,T,36064,ce),A(T,we)&&C(ce),t.unbindTexture()}L.depthBuffer&&se(L)}function Ke(L){const T=y(L)||s,$=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ee=0,ne=$.length;ee<ne;ee++){const oe=$[ee];if(A(oe,T)){const we=L.isWebGLCubeRenderTarget?34067:3553,ce=n.get(oe).__webglTexture;t.bindTexture(we,ce),C(we),t.unbindTexture()}}}function k(L){if(s&&L.samples>0&&Ge(L)===!1){const T=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],$=L.width,ee=L.height;let ne=16384;const oe=[],we=L.stencilBuffer?33306:36096,ce=n.get(L),Z=L.isWebGLMultipleRenderTargets===!0;if(Z)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Me,36161,null),t.bindFramebuffer(36160,ce.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Me,3553,null,0);t.bindFramebuffer(36008,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ce.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){oe.push(36064+Me),L.depthBuffer&&oe.push(we);const Se=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Se===!1&&(L.depthBuffer&&(ne|=256),L.stencilBuffer&&(ne|=1024)),Z&&a.framebufferRenderbuffer(36008,36064,36161,ce.__webglColorRenderbuffer[Me]),Se===!0&&(a.invalidateFramebuffer(36008,[we]),a.invalidateFramebuffer(36009,[we])),Z){const ve=n.get(T[Me]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,ve,0)}a.blitFramebuffer(0,0,$,ee,0,0,$,ee,ne,9728),m&&a.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+Me,36161,ce.__webglColorRenderbuffer[Me]);const Se=n.get(T[Me]).__webglTexture;t.bindFramebuffer(36160,ce.__webglFramebuffer),a.framebufferTexture2D(36009,36064+Me,3553,Se,0)}t.bindFramebuffer(36009,ce.__webglMultisampledFramebuffer)}}function Qe(L){return Math.min(h,L.samples)}function Ge(L){const T=n.get(L);return s&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function It(L){const T=o.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function tt(L,T){const $=L.encoding,ee=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Ll||$!==Mr&&($===mt?s===!1?e.has("EXT_sRGB")===!0&&ee===ti?(L.format=Ll,L.minFilter=Rn,L.generateMipmaps=!1):T=Gh.sRGBToLinear(T):(ee!==ti||ne!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),T}this.allocateTextureUnit=U,this.resetTextureUnits=W,this.setTexture2D=b,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=te,this.rebindTextures=Oe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ge}function Mv(a,e,t){const n=t.isWebGL2;function i(r,o=null){let s;if(r===yr)return 5121;if(r===pp)return 32819;if(r===mp)return 32820;if(r===hp)return 5120;if(r===fp)return 5122;if(r===Uh)return 5123;if(r===dp)return 5124;if(r===or)return 5125;if(r===ar)return 5126;if(r===qs)return n?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===gp)return 6406;if(r===ti)return 6408;if(r===vp)return 6409;if(r===xp)return 6410;if(r===hr)return 6402;if(r===us)return 34041;if(r===yp)return 6403;if(r===_p)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Ll)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Mp)return 36244;if(r===Sp)return 33319;if(r===bp)return 33320;if(r===wp)return 36249;if(r===La||r===Pa||r===Ra||r===Da)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===La)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===La)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Da)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gc||r===Vc||r===Hc||r===Wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Gc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tp)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Xc||r===qc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Xc)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===qc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yc||r===$c||r===jc||r===Zc||r===Kc||r===Jc||r===Qc||r===eu||r===tu||r===nu||r===iu||r===ru||r===su||r===ou)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Yc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$c)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===eu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===nu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===iu)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ru)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===su)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ou)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===au)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===au)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===es?n?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[r]!==void 0?a[r]:null}return{convert:i}}class Sv extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ro extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bv={type:"move"};class ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,n);if(c.joints[d.jointName]===void 0){const x=new Ro;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[d.jointName]=x,c.add(x)}const _=c.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class wv extends Gn{constructor(e,t,n,i,r,o,s,l,c,u){if(u=u!==void 0?u:hr,u!==hr&&u!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===hr&&(n=or),n===void 0&&u===us&&(n=es),super(null,i,r,o,s,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1}}class Tv extends vs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,s="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=t.getContextAttributes();let d=null,p=null;const _=[],x=[],S=new Dn;S.layers.enable(1),S.viewport=new Nt;const y=new Dn;y.layers.enable(2),y.viewport=new Nt;const M=[S,y],A=new Sv;A.layers.enable(1),A.layers.enable(2);let C=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let b=_[F];return b===void 0&&(b=new ol,_[F]=b),b.getTargetRaySpace()},this.getControllerGrip=function(F){let b=_[F];return b===void 0&&(b=new ol,_[F]=b),b.getGripSpace()},this.getHand=function(F){let b=_[F];return b===void 0&&(b=new ol,_[F]=b),b.getHandSpace()};function w(F){const b=x.indexOf(F.inputSource);if(b===-1)return;const J=_[b];J!==void 0&&J.dispatchEvent({type:F.type,data:F.inputSource})}function P(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",G);for(let F=0;F<_.length;F++){const b=x[F];b!==null&&(x[F]=null,_[F].disconnect(b))}C=null,v=null,e.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,U.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",P),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const b={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,b),i.updateRenderState({baseLayer:f}),p=new Sr(f.framebufferWidth,f.framebufferHeight,{format:ti,type:yr,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let b=null,J=null,Q=null;g.depth&&(Q=g.stencil?35056:33190,b=g.stencil?us:hr,J=g.stencil?es:or);const te={colorFormat:32856,depthFormat:Q,scaleFactor:r};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(te),i.updateRenderState({layers:[h]}),p=new Sr(h.textureWidth,h.textureHeight,{format:ti,type:yr,depthTexture:new wv(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,b),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const re=e.properties.get(p);re.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await i.requestReferenceSpace(s),U.setContext(i),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(F){for(let b=0;b<F.removed.length;b++){const J=F.removed[b],Q=x.indexOf(J);Q>=0&&(x[Q]=null,_[Q].dispatchEvent({type:"disconnected",data:J}))}for(let b=0;b<F.added.length;b++){const J=F.added[b];let Q=x.indexOf(J);if(Q===-1){for(let re=0;re<_.length;re++)if(re>=x.length){x.push(J),Q=re;break}else if(x[re]===null){x[re]=J,Q=re;break}if(Q===-1)break}const te=_[Q];te&&te.dispatchEvent({type:"connected",data:J})}}const H=new N,z=new N;function R(F,b,J){H.setFromMatrixPosition(b.matrixWorld),z.setFromMatrixPosition(J.matrixWorld);const Q=H.distanceTo(z),te=b.projectionMatrix.elements,re=J.projectionMatrix.elements,_e=te[14]/(te[10]-1),X=te[14]/(te[10]+1),Ae=(te[9]+1)/te[5],ye=(te[9]-1)/te[5],ge=(te[8]-1)/te[0],le=(re[8]+1)/re[0],Ie=_e*ge,Te=_e*le,se=Q/(-ge+le),Oe=se*-ge;b.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Oe),F.translateZ(se),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const et=_e+se,Ke=X+se,k=Ie-Oe,Qe=Te+(Q-Oe),Ge=Ae*X/Ke*et,It=ye*X/Ke*et;F.projectionMatrix.makePerspective(k,Qe,Ge,It,et,Ke)}function B(F,b){b===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(b.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;A.near=y.near=S.near=F.near,A.far=y.far=S.far=F.far,(C!==A.near||v!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),C=A.near,v=A.far);const b=F.parent,J=A.cameras;B(A,b);for(let te=0;te<J.length;te++)B(J[te],b);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),F.matrix.copy(A.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const Q=F.children;for(let te=0,re=Q.length;te<re;te++)Q[te].updateMatrixWorld(!0);J.length===2?R(A,S,y):A.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(F){h!==null&&(h.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)};let Y=null;function W(F,b){if(c=b.getViewerPose(l||o),m=b,c!==null){const J=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Q=!1;J.length!==A.cameras.length&&(A.cameras.length=0,Q=!0);for(let te=0;te<J.length;te++){const re=J[te];let _e=null;if(f!==null)_e=f.getViewport(re);else{const Ae=u.getViewSubImage(h,re);_e=Ae.viewport,te===0&&(e.setRenderTargetTextures(p,Ae.colorTexture,h.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(p))}let X=M[te];X===void 0&&(X=new Dn,X.layers.enable(te),X.viewport=new Nt,M[te]=X),X.matrix.fromArray(re.transform.matrix),X.projectionMatrix.fromArray(re.projectionMatrix),X.viewport.set(_e.x,_e.y,_e.width,_e.height),te===0&&A.matrix.copy(X.matrix),Q===!0&&A.cameras.push(X)}}for(let J=0;J<_.length;J++){const Q=x[J],te=_[J];Q!==null&&te!==void 0&&te.update(Q,b,l||o)}Y&&Y(F,b),m=null}const U=new Jh;U.setAnimationLoop(W),this.setAnimationLoop=function(F){Y=F},this.dispose=function(){}}}function Ev(a,e){function t(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,x,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,S)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?s(d,p,_,x):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===kn&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===kn&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const y=a.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.iridescenceMap?x=p.iridescenceMap:p.iridescenceThicknessMap?x=p.iridescenceThicknessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix));let S;p.aoMap?S=p.aoMap:p.lightMap&&(S=p.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uv2Transform.value.copy(S.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,_,x){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=x*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let S;p.map?S=p.map:p.alphaMap&&(S=p.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===kn&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Av(a,e,t,n){let i={},r={},o=[];const s=t.isWebGL2?a.getParameter(35375):0;function l(x,S){const y=S.program;n.uniformBlockBinding(x,y)}function c(x,S){let y=i[x.id];y===void 0&&(g(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",p));const M=S.program;n.updateUBOMapping(x,M);const A=e.render.frame;r[x.id]!==A&&(f(x),r[x.id]=A)}function u(x){const S=h();x.__bindingPointIndex=S;const y=a.createBuffer(),M=x.__size,A=x.usage;return a.bindBuffer(35345,y),a.bufferData(35345,M,A),a.bindBuffer(35345,null),a.bindBufferBase(35345,S,y),y}function h(){for(let x=0;x<s;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const S=i[x.id],y=x.uniforms,M=x.__cache;a.bindBuffer(35345,S);for(let A=0,C=y.length;A<C;A++){const v=y[A];if(m(v,A,M)===!0){const w=v.value,P=v.__offset;typeof w=="number"?(v.__data[0]=w,a.bufferSubData(35345,P,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):w.toArray(v.__data),a.bufferSubData(35345,P,v.__data))}}a.bindBuffer(35345,null)}function m(x,S,y){const M=x.value;if(y[S]===void 0)return typeof M=="number"?y[S]=M:y[S]=M.clone(),!0;if(typeof M=="number"){if(y[S]!==M)return y[S]=M,!0}else{const A=y[S];if(A.equals(M)===!1)return A.copy(M),!0}return!1}function g(x){const S=x.uniforms;let y=0;const M=16;let A=0;for(let C=0,v=S.length;C<v;C++){const w=S[C],P=d(w);if(w.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,C>0){A=y%M;const G=M-A;A!==0&&G-P.boundary<0&&(y+=M-A,w.__offset=y)}y+=P.storage}return A=y%M,A>0&&(y+=M-A),x.__size=y,x.__cache={},this}function d(x){const S=x.value,y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(x){const S=x.target;S.removeEventListener("dispose",p);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),a.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function _(){for(const x in i)a.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:_}}function Cv(){const a=Ys("canvas");return a.style.display="block",a}function rf(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Cv(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,r=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,s=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=a.alpha!==void 0?a.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mr,this.physicallyCorrectLights=!1,this.toneMapping=Si,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,_=0,x=0,S=null,y=-1,M=null;const A=new Nt,C=new Nt;let v=null,w=e.width,P=e.height,G=1,H=null,z=null;const R=new Nt(0,0,w,P),B=new Nt(0,0,w,P);let Y=!1;const W=new Kh;let U=!1,F=!1,b=null;const J=new Rt,Q=new nt,te=new N,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return S===null?G:1}let X=t;function Ae(E,I){for(let V=0;V<E.length;V++){const O=E[V],q=e.getContext(O,I);if(q!==null)return q}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rc}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",Xe,!1),X===null){const I=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&I.shift(),X=Ae(I,E),X===null)throw Ae(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ye,ge,le,Ie,Te,se,Oe,et,Ke,k,Qe,Ge,It,tt,L,T,$,ee,ne,oe,we,ce,Z,Me;function Se(){ye=new k_(X),ge=new D_(X,ye,a),ye.init(ge),ce=new Mv(X,ye,ge),le=new xv(X,ye,ge),Ie=new V_,Te=new sv,se=new yv(X,ye,le,Te,ge,ce,Ie),Oe=new F_(d),et=new U_(d),Ke=new Jp(X,ge),Z=new P_(X,ye,Ke,ge),k=new B_(X,Ke,Ie,Z),Qe=new q_(X,k,Ke,Ie),ne=new X_(X,ge,se),T=new I_(Te),Ge=new rv(d,Oe,et,ye,ge,Z,T),It=new Ev(d,Te),tt=new av,L=new dv(ye,ge),ee=new L_(d,Oe,le,Qe,u,o),$=new vv(d,Qe,ge),Me=new Av(X,Ie,ge,le),oe=new R_(X,ye,Ie,ge),we=new G_(X,ye,Ie,ge),Ie.programs=Ge.programs,d.capabilities=ge,d.extensions=ye,d.properties=Te,d.renderLists=tt,d.shadowMap=$,d.state=le,d.info=Ie}Se();const ve=new Tv(d,X);this.xr=ve,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const E=ye.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ye.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(w,P,!1))},this.getSize=function(E){return E.set(w,P)},this.setSize=function(E,I,V){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,P=I,e.width=Math.floor(E*G),e.height=Math.floor(I*G),V!==!1&&(e.style.width=E+"px",e.style.height=I+"px"),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(w*G,P*G).floor()},this.setDrawingBufferSize=function(E,I,V){w=E,P=I,G=V,e.width=Math.floor(E*V),e.height=Math.floor(I*V),this.setViewport(0,0,E,I)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,I,V,O){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,I,V,O),le.viewport(A.copy(R).multiplyScalar(G).floor())},this.getScissor=function(E){return E.copy(B)},this.setScissor=function(E,I,V,O){E.isVector4?B.set(E.x,E.y,E.z,E.w):B.set(E,I,V,O),le.scissor(C.copy(B).multiplyScalar(G).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){le.setScissorTest(Y=E)},this.setOpaqueSort=function(E){H=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(E=!0,I=!0,V=!0){let O=0;E&&(O|=16384),I&&(O|=256),V&&(O|=1024),X.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),tt.dispose(),L.dispose(),Te.dispose(),Oe.dispose(),et.dispose(),Qe.dispose(),Z.dispose(),Me.dispose(),Ge.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",be),ve.removeEventListener("sessionend",Ve),b&&(b.dispose(),b=null),it.stop()};function Ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Ie.autoReset,I=$.enabled,V=$.autoUpdate,O=$.needsUpdate,q=$.type;Se(),Ie.autoReset=E,$.enabled=I,$.autoUpdate=V,$.needsUpdate=O,$.type=q}function Xe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function D(E){const I=E.target;I.removeEventListener("dispose",D),fe(I)}function fe(E){K(E),Te.remove(E)}function K(E){const I=Te.get(E).programs;I!==void 0&&(I.forEach(function(V){Ge.releaseProgram(V)}),E.isShaderMaterial&&Ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,V,O,q,ue){I===null&&(I=re);const he=q.isMesh&&q.matrixWorld.determinant()<0,Le=qe(E,I,V,O,q);le.setMaterial(O,he);let pe=V.index;const Ne=V.attributes.position;if(pe===null){if(Ne===void 0||Ne.count===0)return}else if(pe.count===0)return;let ze=1;O.wireframe===!0&&(pe=k.getWireframeAttribute(V),ze=2),Z.setup(q,O,Le,V,pe);let De,Ue=oe;pe!==null&&(De=Ke.get(pe),Ue=we,Ue.setIndex(De));const ut=pe!==null?pe.count:Ne.count,tn=V.drawRange.start*ze,Hn=V.drawRange.count*ze,ot=ue!==null?ue.start*ze:0,Pe=ue!==null?ue.count*ze:1/0,Ft=Math.max(tn,ot),ht=Math.min(ut,tn+Hn,ot+Pe)-1,Yt=Math.max(0,ht-Ft+1);if(Yt!==0){if(q.isMesh)O.wireframe===!0?(le.setLineWidth(O.wireframeLinewidth*_e()),Ue.setMode(1)):Ue.setMode(4);else if(q.isLine){let nn=O.linewidth;nn===void 0&&(nn=1),le.setLineWidth(nn*_e()),q.isLineSegments?Ue.setMode(1):q.isLineLoop?Ue.setMode(2):Ue.setMode(3)}else q.isPoints?Ue.setMode(0):q.isSprite&&Ue.setMode(4);if(q.isInstancedMesh)Ue.renderInstances(Ft,Yt,q.count);else if(V.isInstancedBufferGeometry){const nn=Math.min(V.instanceCount,V._maxInstanceCount);Ue.renderInstances(Ft,Yt,nn)}else Ue.render(Ft,Yt)}},this.compile=function(E,I){function V(O,q,ue){O.transparent===!0&&O.side===Fi?(O.side=kn,O.needsUpdate=!0,st(O,q,ue),O.side=as,O.needsUpdate=!0,st(O,q,ue),O.side=Fi):st(O,q,ue)}f=L.get(E),f.init(),g.push(f),E.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights(d.physicallyCorrectLights),E.traverse(function(O){const q=O.material;if(q)if(Array.isArray(q))for(let ue=0;ue<q.length;ue++){const he=q[ue];V(he,E,O)}else V(q,E,O)}),g.pop(),f=null};let j=null;function ie(E){j&&j(E)}function be(){it.stop()}function Ve(){it.start()}const it=new Jh;it.setAnimationLoop(ie),typeof self<"u"&&it.setContext(self),this.setAnimationLoop=function(E){j=E,ve.setAnimationLoop(E),E===null?it.stop():it.start()},ve.addEventListener("sessionstart",be),ve.addEventListener("sessionend",Ve),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(I),I=ve.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,I,S),f=L.get(E,g.length),f.init(),g.push(f),J.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),W.setFromProjectionMatrix(J),F=this.localClippingEnabled,U=T.init(this.clippingPlanes,F,I),h=tt.get(E,m.length),h.init(),m.push(h),qt(E,I,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(H,z),U===!0&&T.beginShadows();const V=f.state.shadowsArray;if($.render(V,E,I),U===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(h,E),f.setupLights(d.physicallyCorrectLights),I.isArrayCamera){const O=I.cameras;for(let q=0,ue=O.length;q<ue;q++){const he=O[q];Je(h,E,he,he.viewport)}}else Je(h,E,I);S!==null&&(se.updateMultisampleRenderTarget(S),se.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(d,E,I),Z.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function qt(E,I,V,O){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){O&&te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);const he=Qe.update(E),Le=E.material;Le.visible&&h.push(E,he,Le,V,te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ie.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ie.render.frame),!E.frustumCulled||W.intersectsObject(E))){O&&te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);const he=Qe.update(E),Le=E.material;if(Array.isArray(Le)){const pe=he.groups;for(let Ne=0,ze=pe.length;Ne<ze;Ne++){const De=pe[Ne],Ue=Le[De.materialIndex];Ue&&Ue.visible&&h.push(E,he,Ue,V,te.z,De)}}else Le.visible&&h.push(E,he,Le,V,te.z,null)}}const ue=E.children;for(let he=0,Le=ue.length;he<Le;he++)qt(ue[he],I,V,O)}function Je(E,I,V,O){const q=E.opaque,ue=E.transmissive,he=E.transparent;f.setupLightsView(V),ue.length>0&&Ce(q,I,V),O&&le.viewport(A.copy(O)),q.length>0&&xe(q,I,V),ue.length>0&&xe(ue,I,V),he.length>0&&xe(he,I,V),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Ce(E,I,V){const O=ge.isWebGL2;b===null&&(b=new Sr(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?qs:yr,minFilter:xa,samples:O&&r===!0?4:0})),d.getDrawingBufferSize(Q),O?b.setSize(Q.x,Q.y):b.setSize(Pl(Q.x),Pl(Q.y));const q=d.getRenderTarget();d.setRenderTarget(b),d.clear();const ue=d.toneMapping;d.toneMapping=Si,xe(E,I,V),d.toneMapping=ue,se.updateMultisampleRenderTarget(b),se.updateRenderTargetMipmap(b),d.setRenderTarget(q)}function xe(E,I,V){const O=I.isScene===!0?I.overrideMaterial:null;for(let q=0,ue=E.length;q<ue;q++){const he=E[q],Le=he.object,pe=he.geometry,Ne=O===null?he.material:O,ze=he.group;Le.layers.test(V.layers)&&Ze(Le,I,V,pe,Ne,ze)}}function Ze(E,I,V,O,q,ue){E.onBeforeRender(d,I,V,O,q,ue),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(d,I,V,O,E,ue),q.transparent===!0&&q.side===Fi?(q.side=kn,q.needsUpdate=!0,d.renderBufferDirect(V,I,O,q,E,ue),q.side=as,q.needsUpdate=!0,d.renderBufferDirect(V,I,O,q,E,ue),q.side=Fi):d.renderBufferDirect(V,I,O,q,E,ue),E.onAfterRender(d,I,V,O,q,ue)}function st(E,I,V){I.isScene!==!0&&(I=re);const O=Te.get(E),q=f.state.lights,ue=f.state.shadowsArray,he=q.state.version,Le=Ge.getParameters(E,q.state,ue,I,V),pe=Ge.getProgramCacheKey(Le);let Ne=O.programs;O.environment=E.isMeshStandardMaterial?I.environment:null,O.fog=I.fog,O.envMap=(E.isMeshStandardMaterial?et:Oe).get(E.envMap||O.environment),Ne===void 0&&(E.addEventListener("dispose",D),Ne=new Map,O.programs=Ne);let ze=Ne.get(pe);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===he)return de(E,Le),ze}else Le.uniforms=Ge.getUniforms(E),E.onBuild(V,Le,d),E.onBeforeCompile(Le,d),ze=Ge.acquireProgram(Le,pe),Ne.set(pe,ze),O.uniforms=Le.uniforms;const De=O.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=T.uniform),de(E,Le),O.needsLights=ke(E),O.lightsStateVersion=he,O.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.directionalShadowMap.value=q.state.directionalShadowMap,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotShadowMap.value=q.state.spotShadowMap,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMap.value=q.state.pointShadowMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix);const Ue=ze.getUniforms(),ut=$o.seqWithValue(Ue.seq,De);return O.currentProgram=ze,O.uniformsList=ut,ze}function de(E,I){const V=Te.get(E);V.outputEncoding=I.outputEncoding,V.instancing=I.instancing,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function qe(E,I,V,O,q){I.isScene!==!0&&(I=re),se.resetTextureUnits();const ue=I.fog,he=O.isMeshStandardMaterial?I.environment:null,Le=S===null?d.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:Mr,pe=(O.isMeshStandardMaterial?et:Oe).get(O.envMap||he),Ne=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!O.normalMap&&!!V.attributes.tangent,De=!!V.morphAttributes.position,Ue=!!V.morphAttributes.normal,ut=!!V.morphAttributes.color,tn=O.toneMapped?d.toneMapping:Si,Hn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ot=Hn!==void 0?Hn.length:0,Pe=Te.get(O),Ft=f.state.lights;if(U===!0&&(F===!0||E!==M)){const dn=E===M&&O.id===y;T.setState(O,E,dn)}let ht=!1;O.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ft.state.version||Pe.outputEncoding!==Le||q.isInstancedMesh&&Pe.instancing===!1||!q.isInstancedMesh&&Pe.instancing===!0||q.isSkinnedMesh&&Pe.skinning===!1||!q.isSkinnedMesh&&Pe.skinning===!0||Pe.envMap!==pe||O.fog===!0&&Pe.fog!==ue||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==T.numPlanes||Pe.numIntersection!==T.numIntersection)||Pe.vertexAlphas!==Ne||Pe.vertexTangents!==ze||Pe.morphTargets!==De||Pe.morphNormals!==Ue||Pe.morphColors!==ut||Pe.toneMapping!==tn||ge.isWebGL2===!0&&Pe.morphTargetsCount!==ot)&&(ht=!0):(ht=!0,Pe.__version=O.version);let Yt=Pe.currentProgram;ht===!0&&(Yt=st(O,I,q));let nn=!1,kt=!1,li=!1;const xt=Yt.getUniforms(),fn=Pe.uniforms;if(le.useProgram(Yt.program)&&(nn=!0,kt=!0,li=!0),O.id!==y&&(y=O.id,kt=!0),nn||M!==E){if(xt.setValue(X,"projectionMatrix",E.projectionMatrix),ge.logarithmicDepthBuffer&&xt.setValue(X,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,kt=!0,li=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const dn=xt.map.cameraPosition;dn!==void 0&&dn.setValue(X,te.setFromMatrixPosition(E.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&xt.setValue(X,"isOrthographic",E.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||q.isSkinnedMesh)&&xt.setValue(X,"viewMatrix",E.matrixWorldInverse)}if(q.isSkinnedMesh){xt.setOptional(X,q,"bindMatrix"),xt.setOptional(X,q,"bindMatrixInverse");const dn=q.skeleton;dn&&(ge.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),xt.setValue(X,"boneTexture",dn.boneTexture,se),xt.setValue(X,"boneTextureSize",dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Aa=V.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0&&ge.isWebGL2===!0)&&ne.update(q,V,O,Yt),(kt||Pe.receiveShadow!==q.receiveShadow)&&(Pe.receiveShadow=q.receiveShadow,xt.setValue(X,"receiveShadow",q.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(fn.envMap.value=pe,fn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),kt&&(xt.setValue(X,"toneMappingExposure",d.toneMappingExposure),Pe.needsLights&&Re(fn,li),ue&&O.fog===!0&&It.refreshFogUniforms(fn,ue),It.refreshMaterialUniforms(fn,O,G,P,b),$o.upload(X,Pe.uniformsList,fn,se)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&($o.upload(X,Pe.uniformsList,fn,se),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&xt.setValue(X,"center",q.center),xt.setValue(X,"modelViewMatrix",q.modelViewMatrix),xt.setValue(X,"normalMatrix",q.normalMatrix),xt.setValue(X,"modelMatrix",q.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const dn=O.uniformsGroups;for(let Ca=0,Fd=dn.length;Ca<Fd;Ca++)if(ge.isWebGL2){const Dc=dn[Ca];Me.update(Dc,Yt),Me.bind(Dc,Yt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yt}function Re(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function ke(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,I,V){Te.get(E.texture).__webglTexture=I,Te.get(E.depthTexture).__webglTexture=V;const O=Te.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=V===void 0,O.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,I){const V=Te.get(E);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,V=0){S=E,_=I,x=V;let O=!0;if(E){const pe=Te.get(E);pe.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),O=!1):pe.__webglFramebuffer===void 0?se.setupRenderTarget(E):pe.__hasExternalTextures&&se.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture)}let q=null,ue=!1,he=!1;if(E){const pe=E.texture;(pe.isData3DTexture||pe.isDataArrayTexture)&&(he=!0);const Ne=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(q=Ne[I],ue=!0):ge.isWebGL2&&E.samples>0&&se.useMultisampledRTT(E)===!1?q=Te.get(E).__webglMultisampledFramebuffer:q=Ne,A.copy(E.viewport),C.copy(E.scissor),v=E.scissorTest}else A.copy(R).multiplyScalar(G).floor(),C.copy(B).multiplyScalar(G).floor(),v=Y;if(le.bindFramebuffer(36160,q)&&ge.drawBuffers&&O&&le.drawBuffers(E,q),le.viewport(A),le.scissor(C),le.setScissorTest(v),ue){const pe=Te.get(E.texture);X.framebufferTexture2D(36160,36064,34069+I,pe.__webglTexture,V)}else if(he){const pe=Te.get(E.texture),Ne=I||0;X.framebufferTextureLayer(36160,36064,pe.__webglTexture,V||0,Ne)}y=-1},this.readRenderTargetPixels=function(E,I,V,O,q,ue,he){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(Le=Le[he]),Le){le.bindFramebuffer(36160,Le);try{const pe=E.texture,Ne=pe.format,ze=pe.type;if(Ne!==ti&&ce.convert(Ne)!==X.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=ze===qs&&(ye.has("EXT_color_buffer_half_float")||ge.isWebGL2&&ye.has("EXT_color_buffer_float"));if(ze!==yr&&ce.convert(ze)!==X.getParameter(35738)&&!(ze===ar&&(ge.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-O&&V>=0&&V<=E.height-q&&X.readPixels(I,V,O,q,ce.convert(Ne),ce.convert(ze),ue)}finally{const pe=S!==null?Te.get(S).__webglFramebuffer:null;le.bindFramebuffer(36160,pe)}}},this.copyFramebufferToTexture=function(E,I,V=0){const O=Math.pow(2,-V),q=Math.floor(I.image.width*O),ue=Math.floor(I.image.height*O);se.setTexture2D(I,0),X.copyTexSubImage2D(3553,V,0,0,E.x,E.y,q,ue),le.unbindTexture()},this.copyTextureToTexture=function(E,I,V,O=0){const q=I.image.width,ue=I.image.height,he=ce.convert(V.format),Le=ce.convert(V.type);se.setTexture2D(V,0),X.pixelStorei(37440,V.flipY),X.pixelStorei(37441,V.premultiplyAlpha),X.pixelStorei(3317,V.unpackAlignment),I.isDataTexture?X.texSubImage2D(3553,O,E.x,E.y,q,ue,he,Le,I.image.data):I.isCompressedTexture?X.compressedTexSubImage2D(3553,O,E.x,E.y,I.mipmaps[0].width,I.mipmaps[0].height,he,I.mipmaps[0].data):X.texSubImage2D(3553,O,E.x,E.y,he,Le,I.image),O===0&&V.generateMipmaps&&X.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(E,I,V,O,q=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=E.max.x-E.min.x+1,he=E.max.y-E.min.y+1,Le=E.max.z-E.min.z+1,pe=ce.convert(O.format),Ne=ce.convert(O.type);let ze;if(O.isData3DTexture)se.setTexture3D(O,0),ze=32879;else if(O.isDataArrayTexture)se.setTexture2DArray(O,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(37440,O.flipY),X.pixelStorei(37441,O.premultiplyAlpha),X.pixelStorei(3317,O.unpackAlignment);const De=X.getParameter(3314),Ue=X.getParameter(32878),ut=X.getParameter(3316),tn=X.getParameter(3315),Hn=X.getParameter(32877),ot=V.isCompressedTexture?V.mipmaps[0]:V.image;X.pixelStorei(3314,ot.width),X.pixelStorei(32878,ot.height),X.pixelStorei(3316,E.min.x),X.pixelStorei(3315,E.min.y),X.pixelStorei(32877,E.min.z),V.isDataTexture||V.isData3DTexture?X.texSubImage3D(ze,q,I.x,I.y,I.z,ue,he,Le,pe,Ne,ot.data):V.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(ze,q,I.x,I.y,I.z,ue,he,Le,pe,ot.data)):X.texSubImage3D(ze,q,I.x,I.y,I.z,ue,he,Le,pe,Ne,ot),X.pixelStorei(3314,De),X.pixelStorei(32878,Ue),X.pixelStorei(3316,ut),X.pixelStorei(3315,tn),X.pixelStorei(32877,Hn),q===0&&O.generateMipmaps&&X.generateMipmap(ze),le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?se.setTextureCube(E,0):E.isData3DTexture?se.setTexture3D(E,0):E.isDataArrayTexture?se.setTexture2DArray(E,0):se.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){_=0,x=0,S=null,le.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Lv extends rf{}Lv.prototype.isWebGL1Renderer=!0;class Pv extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class oc extends oo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xu=new N,qu=new N,Yu=new Rt,al=new Wh,Do=new ya;class Rv extends an{constructor(e=new ai,t=new oc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Xu.fromBufferAttribute(t,i-1),qu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xu.distanceTo(qu);e.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(i),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;Yu.copy(i).invert(),al.copy(e.ray).applyMatrix4(Yu);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new N,u=new N,h=new N,f=new N,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),x=Math.min(g.count,o.start+o.count);for(let S=_,y=x-1;S<y;S+=m){const M=g.getX(S),A=g.getX(S+1);if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,A),al.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),x=Math.min(p.count,o.start+o.count);for(let S=_,y=x-1;S<y;S+=m){if(c.fromBufferAttribute(p,S),u.fromBufferAttribute(p,S+1),al.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}const $u=new N,ju=new N;class sf extends Rv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)$u.fromBufferAttribute(t,i),ju.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$u.distanceTo(ju);e.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Zu={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Dv{constructor(e,t,n){const i=this;let r=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,s),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,s),o===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Iv=new Dv;class of{constructor(e){this.manager=e!==void 0?e:Iv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Fv extends of{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Zu.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const s=Ys("img");function l(){u(),Zu.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(e),s.src=e,s}}class Ov extends of{constructor(e){super(e)}load(e,t,n,i){const r=new Gn,o=new Fv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){r.image=s,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class zv extends sf{constructor(e=10,t=10,n=4473924,i=8947848){n=new rt(n),i=new rt(i);const r=t/2,o=e/t,s=e/2,l=[],c=[];for(let f=0,m=0,g=-s;f<=t;f++,g+=o){l.push(-s,0,g,s,0,g),l.push(g,0,-s,g,0,s);const d=f===r?n:i;d.toArray(c,m),m+=3,d.toArray(c,m),m+=3,d.toArray(c,m),m+=3,d.toArray(c,m),m+=3}const u=new ai;u.setAttribute("position",new Tn(l,3)),u.setAttribute("color",new Tn(c,3));const h=new oc({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Nv extends sf{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ai;i.setAttribute("position",new Tn(t,3)),i.setAttribute("color",new Tn(n,3));const r=new oc({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new rt,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);var Fs=function(){var a=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),n(++a%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function n(u){for(var h=0;h<e.children.length;h++)e.children[h].style.display=h===u?"block":"none";a=u}var i=(performance||Date).now(),r=i,o=0,s=t(new Fs.Panel("FPS","#0ff","#002")),l=t(new Fs.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new Fs.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:e,addPanel:t,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-i,200),u>=r+1e3&&(s.update(o*1e3/(u-r),100),r=u,o=0,c)){var h=performance.memory;c.update(h.usedJSHeapSize/1048576,h.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:e,setMode:n}};Fs.Panel=function(a,e,t){var n=1/0,i=0,r=Math.round,o=r(window.devicePixelRatio||1),s=80*o,l=48*o,c=3*o,u=2*o,h=3*o,f=15*o,m=74*o,g=30*o,d=document.createElement("canvas");d.width=s,d.height=l,d.style.cssText="width:80px;height:48px";var p=d.getContext("2d");return p.font="bold "+9*o+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,s,l),p.fillStyle=e,p.fillText(a,c,u),p.fillRect(h,f,m,g),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(h,f,m,g),{dom:d,update:function(_,x){n=Math.min(n,_),i=Math.max(i,_),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,s,f),p.fillStyle=e,p.fillText(r(_)+" "+a+" ("+r(n)+"-"+r(i)+")",c,u),p.drawImage(d,h+o,f,m-o,g,h,f,m-o,g),p.fillRect(h+m-o,f,o,g),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(h+m-o,f,o,r((1-_/x)*g))}}};const Uv=Fs;class _n{static get RENDERER_SETTING(){return{clearColor:0,width:window.innerWidth,height:window.innerHeight}}static get CAMERA_PARAM(){return{fovy:60,aspect:window.innerWidth/window.innerHeight,near:.1,far:1e4,x:0,y:0,z:1,lookAt:new N(0,0,0)}}constructor(){this.render,this.scene,this.canvas,this.controls,this.stats,this.axesHelper,this.gridHelper,this.render=this.render.bind(this)}_setRender(){this.renderer=new rf({antialias:!0,alpha:!0}),this.renderer.setClearColor(new rt(_n.RENDERER_SETTING.clearColor)),this.renderer.setSize(_n.RENDERER_SETTING.width,_n.RENDERER_SETTING.height),this.renderer.setPixelRatio(window.devicePixelRatio),this.canvas=document.querySelector("#canvas"),this.canvas.appendChild(this.renderer.domElement)}_setScene(){this.scene=new Pv}_setCamera(){this.camera=new Dn(_n.CAMERA_PARAM.fovy,_n.CAMERA_PARAM.aspect,_n.CAMERA_PARAM.near,_n.CAMERA_PARAM.far),this.camera.position.set(_n.CAMERA_PARAM.x,_n.CAMERA_PARAM.y,_n.CAMERA_PARAM.z),this.camera.lookAt(_n.CAMERA_PARAM.lookAt),this.camera.updateProjectionMatrix()}_setStats(){this.stats=new Uv,document.body.appendChild(this.stats.dom)}_setHelper(){this.axesHelper=new Nv(1e3),this.scene.add(this.axesHelper),this.gridHelper=new zv(10,10),this.scene.add(this.gridHelper)}_init(){this._setRender(),this._setScene(),this._setCamera(),this._setStats()}render(){this.stats.update(),this.renderer.render(this.scene,this.camera)}onLoop(){this.render()}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}}const kv=` varying vec2 vUv;
 varying float vNoise;
 uniform float uChangeTransition;
 uniform float uChangeTransition02;
 uniform sampler2D disp;

uniform float uTime;
uniform float uAmplitude;

  void main(void) {
    vUv = uv;
    vec3 pos = position;


    gl_Position = vec4( pos, 1.0 );
  }`,Bv=` uniform vec2 uResolution;
 uniform vec2 uImageResolution;
 uniform vec2 uBounce;
 uniform float uChangeTransition;
 uniform float uChangeTransition02;
 uniform float uTime;
 uniform sampler2D uTexture;
 uniform sampler2D uNextTexture;
 uniform sampler2D uFinalTexture;

 uniform sampler2D disp;

 varying vec2 vUv;



void main(void) {
    vec2 ratio = vec2(
        min((uResolution.x / uResolution.y) / (uImageResolution.x / uImageResolution.y), 1.0),
        min((uResolution.y / uResolution.x) / (uImageResolution.y / uImageResolution.x), 1.0)
    );

    vec2 uv = vec2(
        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    // float area = smoothstep(uBounce.x,uBounce.y,vUv.y);
    // uv.x += (vUv.x - 0.5) * 0.5 * area;

     float intensity = 0.7;

    vec4 disp = texture2D(disp, uv);
    vec2 dispVec = vec2(disp.x, disp.y);
    float dispClamp = clamp(dispVec.x,dispVec.y,vUv.y);
    float dist = distance(uv,dispVec) + dispClamp * sin(uTime * 10.0); //distance : x,y\u306E\u8DDD\u96E2


    vec2 changeVec = vec2(0.0, -1.0);//\u771F\u4E0B\u304B\u3089\u771F\u4E0A\u306B\u304B\u3051\u3066\u5909\u5316\u3055\u305B\u308B

    vec2 distPos1 = uv + (dist * intensity * uChangeTransition) * changeVec;
    vec2 distPos2 = uv + (dist * -(intensity * (3.0 - ( 3.0 * uChangeTransition)))) * changeVec;
    vec2 distPos3 = uv + (dist * -(intensity * (3.0 - ( 3.0 * uChangeTransition02)))) * changeVec;


    vec4 texColorFirst = texture2D(uTexture, distPos1);
    vec4 texColorNext = texture2D(uNextTexture, distPos2);
    vec4 texColorFinal = texture2D(uFinalTexture, distPos3);

    vec4 firstTexture = mix(texColorFirst, texColorNext, uChangeTransition);
    vec4 finalTexture = mix(firstTexture, texColorFinal, uChangeTransition02);

    gl_FragColor = finalTexture;
}`;function mi(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function af(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var En={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fs={duration:.5,overwrite:!1,delay:0},ac,Wt,gt,zn=1e8,lt=1/zn,Dl=Math.PI*2,Gv=Dl/4,Vv=0,lf=Math.sqrt,Hv=Math.cos,Wv=Math.sin,Dt=function(e){return typeof e=="string"},_t=function(e){return typeof e=="function"},wi=function(e){return typeof e=="number"},lc=function(e){return typeof e>"u"},oi=function(e){return typeof e=="object"},ln=function(e){return e!==!1},cc=function(){return typeof window<"u"},Io=function(e){return _t(e)||Dt(e)},cf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xt=Array.isArray,Il=/(?:-?\.?\d|\.)+/gi,uf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ll=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hf=/[+-]=-?[.\d]+/,ff=/[^,'"\[\]\s]+/gi,Xv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dt,Pn,Fl,uc,An={},sa={},df,pf=function(e){return(sa=br(e,An))&&hn},hc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},oa=function(e,t){return!t&&console.warn(e)},mf=function(e,t){return e&&(An[e]=t)&&sa&&(sa[e]=t)||An},$s=function(){return 0},qv={suppressEvents:!0,isStart:!0,kill:!1},jo={suppressEvents:!0,kill:!1},Yv={suppressEvents:!0},fc={},Gi=[],Ol={},gf,Mn={},cl={},Ku=30,Zo=[],dc="",pc=function(e){var t=e[0],n,i;if(oi(t)||_t(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Zo.length;i--&&!Zo[i].targetTest(t););n=Zo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Bf(e[i],n)))||e.splice(i,1);return e},dr=function(e){return e._gsap||pc(Nn(e))[0]._gsap},_f=function(e,t,n){return(n=e[t])&&_t(n)?e[t]():lc(n)&&e.getAttribute&&e.getAttribute(t)||n},cn=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},ts=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},$v=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},aa=function(){var e=Gi.length,t=Gi.slice(0),n,i;for(Ol={},Gi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vf=function(e,t,n,i){Gi.length&&!Wt&&aa(),e.render(t,n,i||Wt&&t<0&&(e._initted||e._startAt)),Gi.length&&!Wt&&aa()},xf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ff).length<2?t:Dt(e)?e.trim():e},yf=function(e){return e},Vn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},jv=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},br=function(e,t){for(var n in t)e[n]=t[n];return e},Ju=function a(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=oi(t[n])?a(e[n]||(e[n]={}),t[n]):t[n]);return e},la=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Os=function(e){var t=e.parent||dt,n=e.keyframes?jv(Xt(e.keyframes)):Vn;if(ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Zv=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Mf=function(e,t,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],s;if(r)for(s=t[r];o&&o[r]>s;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ba=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Xi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Kv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},zl=function(e,t,n,i){return e._startAt&&(Wt?e._startAt.revert(jo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Jv=function a(e){return!e||e._ts&&a(e.parent)},Qu=function(e){return e._repeat?ds(e._tTime,e=e.duration()+e._rDelay)*e:0},ds=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ca=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},wa=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||lt)||0))},Ta=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),wa(e),n._dirty||pr(n,e)),e},Sf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ca(e.rawTime(),t),(!t._dur||lo(0,t.totalDuration(),n)-t._tTime>lt)&&t.render(n,!0)),pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-lt}},ei=function(e,t,n,i){return t.parent&&Xi(t),t._start=zt((wi(n)?n:n||e!==dt?Ln(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mf(e,t,"_first","_last",e._sort?"_start":0),Nl(t)||(e._recent=t),i||Sf(e,t),e._ts<0&&Ta(e,e._tTime),e},bf=function(e,t){return(An.ScrollTrigger||hc("scrollTrigger",t))&&An.ScrollTrigger.create(t,e)},wf=function(e,t,n,i,r){if(gc(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gf!==bn.frame)return Gi.push(e),e._lazy=[r,i],1},Qv=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Nl=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ex=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&Qv(e)&&!(!e._initted&&Nl(e))||(e._ts<0||e._dp._ts<0)&&!Nl(e))?0:1,s=e._rDelay,l=0,c,u,h;if(s&&e._repeat&&(l=lo(0,e._tDur,t),u=ds(l,s),e._yoyo&&u&1&&(o=1-o),u!==ds(e._tTime,s)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||Wt||i||e._zTime===lt||!t&&e._zTime){if(!e._initted&&wf(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?lt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&zl(e,t,n,!0),e._onUpdate&&!n&&Un(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Xi(e,1),!n&&!Wt&&(Un(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},tx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ps=function(e,t,n,i){var r=e._repeat,o=zt(t)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:zt(o*(r+1)+e._rDelay*r):o,s>0&&!i&&Ta(e,e._tTime=e._tDur*s),e.parent&&wa(e),n||pr(e.parent,e),e},eh=function(e){return e instanceof on?pr(e):ps(e,e._dur)},nx={_start:0,endTime:$s,totalDuration:$s},Ln=function a(e,t,n){var i=e.labels,r=e._recent||nx,o=e.duration()>=zn?r.endTime(!1):e._dur,s,l,c;return Dt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",s=t.indexOf("="),l==="<"||l===">"?(s>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(s<0?r:n).totalDuration()/100:1)):s<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(s-1)+t.substr(s+1)),c&&n&&(l=l/100*(Xt(n)?n[0]:n).totalDuration()),s>1?a(e,t.substr(0,s-1),n)+l:o+l)):t==null?o:+t},zs=function(e,t,n){var i=wi(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],s,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(s=o,l=n;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=ln(l.vars.inherit)&&l.parent;o.immediateRender=ln(s.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new St(t[0],o,t[r+1])},$i=function(e,t){return e||e===0?t(e):t},lo=function(e,t,n){return n<e?e:n>t?t:n},Ht=function(e,t){return!Dt(e)||!(t=Xv.exec(e))?"":t[1]},ix=function(e,t,n){return $i(n,function(i){return lo(e,t,i)})},Ul=[].slice,Tf=function(e,t){return e&&oi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&oi(e[0]))&&!e.nodeType&&e!==Pn},rx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return Dt(i)&&!t||Tf(i,1)?(r=n).push.apply(r,Nn(i)):n.push(i)})||n},Nn=function(e,t,n){return gt&&!t&&gt.selector?gt.selector(e):Dt(e)&&!n&&(Fl||!ms())?Ul.call((t||uc).querySelectorAll(e),0):Xt(e)?rx(e,n):Tf(e)?Ul.call(e,0):e?[e]:[]},kl=function(e){return e=Nn(e)[0]||oa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Nn(t,n.querySelectorAll?n:n===e?oa("Invalid scope")||uc.createElement("div"):e)}},Ef=function(e){return e.sort(function(){return .5-Math.random()})},Af=function(e){if(_t(e))return e;var t=oi(e)?e:{each:e},n=mr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},s=i>0&&i<1,l=isNaN(i)||s,c=t.axis,u=i,h=i;return Dt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||t).length,p=o[d],_,x,S,y,M,A,C,v,w;if(!p){if(w=t.grid==="auto"?0:(t.grid||[1,zn])[1],!w){for(C=-zn;C<(C=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(p=o[d]=[],_=l?Math.min(w,d)*u-.5:i%w,x=w===zn?0:l?d*h/w-.5:i/w|0,C=0,v=zn,A=0;A<d;A++)S=A%w-_,y=x-(A/w|0),p[A]=M=c?Math.abs(c==="y"?y:S):lf(S*S+y*y),M>C&&(C=M),M<v&&(v=M);i==="random"&&Ef(p),p.max=C-v,p.min=v,p.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=Ht(t.amount||t.each)||0,n=n&&d<0?Nf(n):n}return d=(p[f]-p.min)/p.max||0,zt(p.b+(n?n(d):d)*p.v)+p.u}},Bl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(wi(n)?0:Ht(n))}},Cf=function(e,t){var n=Xt(e),i,r;return!n&&oi(e)&&(i=n=e.radius||zn,e.values?(e=Nn(e.values),(r=!wi(e[0]))&&(i*=i)):e=Bl(e.increment)),$i(t,n?_t(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var s=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=zn,u=0,h=e.length,f,m;h--;)r?(f=e[h].x-s,m=e[h].y-l,f=f*f+m*m):f=Math.abs(e[h]-s),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||wi(o)?u:u+Ht(o)}:Bl(e))},Lf=function(e,t,n,i){return $i(Xt(e)?!t:n===!0?!!(n=0):!i,function(){return Xt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},sx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},ox=function(e,t){return function(n){return e(parseFloat(n))+(t||Ht(n))}},ax=function(e,t,n){return Rf(e,t,0,1,n)},Pf=function(e,t,n){return $i(n,function(i){return e[~~t(i)]})},lx=function a(e,t,n){var i=t-e;return Xt(e)?Pf(e,a(0,e.length),t):$i(n,function(r){return(i+(r-e)%i)%i+e})},cx=function a(e,t,n){var i=t-e,r=i*2;return Xt(e)?Pf(e,a(0,e.length-1),t):$i(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},js=function(e){for(var t=0,n="",i,r,o,s;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),s=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(s?ff:Il),n+=e.substr(t,i-t)+Lf(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Rf=function(e,t,n,i,r){var o=t-e,s=i-n;return $i(r,function(l){return n+((l-e)/o*s||0)})},ux=function a(e,t,n,i){var r=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!r){var o=Dt(e),s={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Xt(e)&&!Xt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(a(e[c-1],e[c]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=br(Xt(e)?[]:{},e));if(!u){for(l in t)mc.call(s,e,l,"get",t[l]);r=function(g){return xc(g,s)||(o?e.p:e)}}}return $i(n,r)},th=function(e,t,n){var i=e.labels,r=zn,o,s,l;for(o in i)s=i[o]-t,s<0==!!n&&s&&r>(s=Math.abs(s))&&(l=o,r=s);return l},Un=function(e,t,n){var i=e.vars,r=i[t],o=gt,s=e._ctx,l,c,u;if(!!r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Gi.length&&aa(),s&&(gt=s),u=l?r.apply(c,l):r.call(c),gt=o,u},Ls=function(e){return Xi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wt),e.progress()<1&&Un(e,"onInterrupt"),e},Zr,Df=[],If=function(e){if(cc()&&e){e=!e.name&&e.default||e;var t=e.name,n=_t(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:$s,render:xc,add:mc,kill:Ex,modifier:Tx,rawVars:0},o={targetTest:0,get:0,getSetter:vc,aliases:{},register:0};if(ms(),e!==i){if(Mn[t])return;Vn(i,Vn(la(e,r),o)),br(i.prototype,br(r,la(e,o))),Mn[i.prop=t]=i,e.targetTest&&(Zo.push(i),fc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}mf(t,i),e.register&&e.register(hn,i,un)}else e&&Df.push(e)},at=255,Ps={aqua:[0,at,at],lime:[0,at,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,at],navy:[0,0,128],white:[at,at,at],olive:[128,128,0],yellow:[at,at,0],orange:[at,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[at,0,0],pink:[at,192,203],cyan:[0,at,at],transparent:[at,at,at,0]},ul=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*at+.5|0},Ff=function(e,t,n){var i=e?wi(e)?[e>>16,e>>8&at,e&at]:0:Ps.black,r,o,s,l,c,u,h,f,m,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ps[e])i=Ps[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+r+r+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&at,i&at,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&at,e&at]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Il),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=ul(l+1/3,r,o),i[1]=ul(l,r,o),i[2]=ul(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(uf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Il)||Ps.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/at,o=i[1]/at,s=i[2]/at,h=Math.max(r,o,s),f=Math.min(r,o,s),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===r?(o-s)/m+(o<s?6:0):h===o?(s-r)/m+2:(r-o)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Of=function(e){var t=[],n=[],i=-1;return e.split(Vi).forEach(function(r){var o=r.match(jr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},nh=function(e,t,n){var i="",r=(e+i).match(Vi),o=t?"hsla(":"rgba(",s=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=Ff(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Of(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Vi,"1").split(jr),h=c.length-1;s<h;s++)i+=c[s]+(~l.indexOf(s)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Vi),h=c.length-1;s<h;s++)i+=c[s]+r[s];return i+c[h]},Vi=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ps)a+="|"+e+"\\b";return new RegExp(a+")","gi")}(),hx=/hsl[a]?\(/,zf=function(e){var t=e.join(" "),n;if(Vi.lastIndex=0,Vi.test(t))return n=hx.test(t),e[1]=nh(e[1],n),e[0]=nh(e[0],n,Of(e[1])),!0},Zs,bn=function(){var a=Date.now,e=500,t=33,n=a(),i=n,r=1e3/240,o=r,s=[],l,c,u,h,f,m,g=function d(p){var _=a()-i,x=p===!0,S,y,M,A;if(_>e&&(n+=_-t),i+=_,M=i-n,S=M-o,(S>0||x)&&(A=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=S+(S>=r?4:r-S),y=1),x||(l=c(d)),y)for(m=0;m<s.length;m++)s[m](M,f,A,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){df&&(!Fl&&cc()&&(Pn=Fl=window,uc=Pn.document||{},An.gsap=hn,(Pn.gsapVersions||(Pn.gsapVersions=[])).push(hn.version),pf(sa||Pn.GreenSockGlobals||!Pn.gsap&&Pn||{}),u=Pn.requestAnimationFrame,Df.forEach(If)),l&&h.sleep(),c=u||function(p){return setTimeout(p,o-h.time*1e3+1|0)},Zs=1,g(2))},sleep:function(){(u?Pn.cancelAnimationFrame:clearTimeout)(l),Zs=0,c=$s},lagSmoothing:function(p,_){e=p||1/0,t=Math.min(_||33,e)},fps:function(p){r=1e3/(p||240),o=h.time*1e3+r},add:function(p,_,x){var S=_?function(y,M,A,C){p(y,M,A,C),h.remove(S)}:p;return h.remove(p),s[x?"unshift":"push"](S),ms(),S},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},h}(),ms=function(){return!Zs&&bn.wake()},je={},fx=/^[\d.\-M][\d.\-,\s]/,dx=/["']/g,px=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,s,l,c;r<o;r++)l=n[r],s=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,s),t[i]=isNaN(c)?c.replace(dx,"").trim():+c,i=l.substr(s+1).trim();return t},mx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},gx=function(e){var t=(e+"").split("("),n=je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[px(t[1])]:mx(e).split(",").map(xf)):je._CE&&fx.test(e)?je._CE("",e):n},Nf=function(e){return function(t){return 1-e(1-t)}},Uf=function a(e,t){for(var n=e._first,i;n;)n instanceof on?a(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?a(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},mr=function(e,t){return e&&(_t(e)?e:je[e]||gx(e))||t},Ar=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return cn(e,function(s){je[s]=An[s]=r,je[o=s.toLowerCase()]=n;for(var l in r)je[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=je[s+"."+l]=r[l]}),r},kf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},hl=function a(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/Dl*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*Wv((u-o)*r)+1},l=e==="out"?s:e==="in"?function(c){return 1-s(1-c)}:kf(s);return r=Dl/r,l.config=function(c,u){return a(e,c,u)},l},fl=function a(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:kf(n);return i.config=function(r){return a(e,r)},i};cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;Ar(a+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});je.Linear.easeNone=je.none=je.Linear.easeIn;Ar("Elastic",hl("in"),hl("out"),hl());(function(a,e){var t=1/e,n=2*t,i=2.5*t,r=function(s){return s<t?a*s*s:s<n?a*Math.pow(s-1.5/e,2)+.75:s<i?a*(s-=2.25/e)*s+.9375:a*Math.pow(s-2.625/e,2)+.984375};Ar("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ar("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});Ar("Circ",function(a){return-(lf(1-a*a)-1)});Ar("Sine",function(a){return a===1?1:-Hv(a*Gv)+1});Ar("Back",fl("in"),fl("out"),fl());je.SteppedEase=je.steps=An.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-lt;return function(s){return((i*lo(0,o,s)|0)+r)*n}}};fs.ease=je["quad.out"];cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return dc+=a+","+a+"Params,"});var Bf=function(e,t){this.id=Vv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_f,this.set=t?t.getSetter:vc},Ks=function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ps(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),Zs||bn.wake()}var e=a.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ps(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ms(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ta(this,n),!r._dp||r.parent||Sf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ei(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===lt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Qu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Qu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ds(this._tTime,r)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-lt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ca(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-lt?0:this._rts,this.totalTime(lo(-Math.abs(this._delay),this._tDur,i),!0),wa(this),Kv(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ms(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==lt&&(this._tTime-=lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ei(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ca(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Yv);var i=Wt;return Wt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Wt=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,eh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,eh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ln(this,n),ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ln(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-lt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=_t(n)?n:yf,s=function(){var c=i.then;i.then=null,_t(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},e.kill=function(){Ls(this)},a}();Vn(Ks.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-lt,_prom:0,_ps:!1,_rts:1});var on=function(a){af(e,a);function e(n,i){var r;return n===void 0&&(n={}),r=a.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ln(n.sortChildren),dt&&ei(n.parent||dt,mi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&bf(mi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return zs(0,arguments,this),this},t.from=function(i,r,o){return zs(1,arguments,this),this},t.fromTo=function(i,r,o,s){return zs(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Os(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new St(i,r,Ln(this,o),1),this},t.call=function(i,r,o){return ei(this,St.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,s,l,c,u){return o.duration=r,o.stagger=o.stagger||s,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new St(i,o,Ln(this,l)),this},t.staggerFrom=function(i,r,o,s,l,c,u){return o.runBackwards=1,Os(o).immediateRender=ln(o.immediateRender),this.staggerTo(i,r,o,s,l,c,u)},t.staggerFromTo=function(i,r,o,s,l,c,u,h){return s.startAt=o,Os(s).immediateRender=ln(s.immediateRender),this.staggerTo(i,r,s,l,c,u,h)},t.render=function(i,r,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:zt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,d,p,_,x,S,y,M,A,C;if(this!==dt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(s!==this._time&&c&&(u+=this._time-s,i+=this._time-s),f=u,y=this._start,S=this._ts,_=!S,h&&(c||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=zt(u%p),u===l?(d=this._repeat,f=c):(d=~~(u/p),d&&d===u/p&&(f=c,d--),f>c&&(f=c)),M=ds(this._tTime,p),!s&&this._tTime&&M!==d&&this._tTime-M*p-this._dur<=0&&(M=d),A&&d&1&&(f=c-f,C=1),d!==M&&!this._lock){var v=A&&M&1,w=v===(A&&d&1);if(d<M&&(v=!v),s=v?0:u%c?c:u,this._lock=1,this.render(s||(C?0:zt(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,s=v?c:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Uf(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=tx(this,zt(s),zt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&f&&!r&&!d&&(Un(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,o),f!==this._time||!this._ts&&!_){x=0,g&&(u+=this._zTime=-lt);break}}m=g}else{m=this._last;for(var P=i<0?i:f;m;){if(g=m._prev,(m._act||P<=m._end)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,r,o);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,r,o||Wt&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){x=0,g&&(u+=this._zTime=P?-lt:lt);break}}m=g}}if(x&&!r&&(this.pause(),x.render(f>=s?0:-lt)._zTime=f>=s?1:-1,this._ts))return this._start=y,wa(this),this.render(i,r,o);this._onUpdate&&!r&&Un(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&s)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Xi(this,1),!r&&!(i<0&&!s)&&(u||s||!l)&&(Un(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(wi(r)||(r=Ln(this,r,i)),!(i instanceof Ks)){if(Xt(i))return i.forEach(function(s){return o.add(s,r)}),this;if(Dt(i))return this.addLabel(i,r);if(_t(i))i=St.delayedCall(0,i);else return this}return this!==i?ei(this,i,r):this},t.getChildren=function(i,r,o,s){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=-zn);for(var l=[],c=this._first;c;)c._start>=s&&(c instanceof St?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return Dt(i)?this.removeLabel(i):_t(i)?this.killTweensOf(i):(ba(this,i),i===this._recent&&(this._recent=this._last),pr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(bn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Ln(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var s=St.delayedCall(0,r||$s,o);return s.data="isPause",this._hasPause=1,ei(this,s,Ln(this,i))},t.removePause=function(i){var r=this._first;for(i=Ln(this,i);r;)r._start===i&&r.data==="isPause"&&Xi(r),r=r._next},t.killTweensOf=function(i,r,o){for(var s=this.getTweensOf(i,o),l=s.length;l--;)Oi!==s[l]&&s[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],s=Nn(i),l=this._first,c=wi(r),u;l;)l instanceof St?$v(l._targets,s)&&(c?(!Oi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(s,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,s=Ln(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=St.to(o,Vn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale())||lt,onStart:function(){if(o.pause(),!m){var p=r.duration||Math.abs((s-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&ps(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,Vn({startAt:{time:Ln(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),th(this,Ln(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),th(this,Ln(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+lt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var s=this._first,l=this.labels,c;s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return pr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return a.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),pr(this)},t.totalDuration=function(i){var r=0,o=this,s=o._last,l=zn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;s;)c=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,ei(o,s,u-s._delay,1)._lock=0):l=u,u<0&&s._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),s._end>r&&s._ts&&(r=s._end),s=c;ps(o,o===dt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(dt._ts&&(vf(dt,ca(i,dt)),gf=bn.frame),bn.frame>=Ku){Ku+=En.autoSleep||120;var r=dt._first;if((!r||!r._ts)&&En.autoSleep&&bn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||bn.sleep()}}},e}(Ks);Vn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var _x=function(e,t,n,i,r,o,s){var l=new un(this._pt,e,t,0,1,qf,null,r),c=0,u=0,h,f,m,g,d,p,_,x;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=js(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),f=n.match(ll)||[];h=ll.exec(i);)g=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?ts(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=ll.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=s,(hf.test(i)||_)&&(l.e=0),this._pt=l,l},mc=function(e,t,n,i,r,o,s,l,c,u){_t(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:_t(h)?c?e[t.indexOf("set")||!_t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,m=_t(h)?c?Sx:Wf:_c,g;if(Dt(i)&&(~i.indexOf("random(")&&(i=js(i)),i.charAt(1)==="="&&(g=ts(f,i)+(Ht(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Gl)return!isNaN(f*i)&&i!==""?(g=new un(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?wx:Xf,0,m),c&&(g.fp=c),s&&g.modifier(s,this,e),this._pt=g):(!h&&!(t in e)&&hc(t,i),_x.call(this,e,t,f,i,m,l||En.stringFilter,c))},vx=function(e,t,n,i,r){if(_t(e)&&(e=Ns(e,r,t,n,i)),!oi(e)||e.style&&e.nodeType||Xt(e)||cf(e))return Dt(e)?Ns(e,r,t,n,i):e;var o={},s;for(s in e)o[s]=Ns(e[s],r,t,n,i);return o},Gf=function(e,t,n,i,r,o){var s,l,c,u;if(Mn[e]&&(s=new Mn[e]).init(r,s.rawVars?t[e]:vx(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new un(n._pt,r,e,0,1,s.render,s,0,s.priority),n!==Zr))for(c=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)c[s._props[u]]=l;return s},Oi,Gl,gc=function a(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,s=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=e._dur,_=e._startAt,x=e._targets,S=e.parent,y=S&&S.data==="nested"?S.vars.targets:x,M=e._overwrite==="auto"&&!ac,A=e.timeline,C,v,w,P,G,H,z,R,B,Y,W,U,F;if(A&&(!g||!r)&&(r="none"),e._ease=mr(r,fs.ease),e._yEase=m?Nf(mr(m===!0?r:m,fs.ease)):0,m&&e._yoyo&&!e._repeat&&(m=e._yEase,e._yEase=e._ease,e._ease=m),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(R=x[0]?dr(x[0]).harness:0,U=R&&i[R.prop],C=la(i,fc),_&&(_._zTime<0&&_.progress(1),t<0&&f&&s&&!d?_.render(-1,!0):_.revert(f&&p?jo:qv),_._lazy=0),o){if(Xi(e._startAt=St.set(x,Vn({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!_&&ln(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt||!s&&!d)&&e._startAt.revert(jo),s&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&p&&!_){if(t&&(s=!1),w=Vn({overwrite:!1,data:"isFromStart",lazy:s&&!_&&ln(l),immediateRender:s,stagger:0,parent:S},C),U&&(w[R.prop]=U),Xi(e._startAt=St.set(x,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt?e._startAt.revert(jo):e._startAt.render(-1,!0)),e._zTime=t,!s)a(e._startAt,lt,lt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&ln(l)||l&&!p,v=0;v<x.length;v++){if(G=x[v],z=G._gsap||pc(x)[v]._gsap,e._ptLookup[v]=Y={},Ol[z.id]&&Gi.length&&aa(),W=y===x?v:y.indexOf(G),R&&(B=new R).init(G,U||C,e,W,y)!==!1&&(e._pt=P=new un(e._pt,G,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(b){Y[b]=P}),B.priority&&(H=1)),!R||U)for(w in C)Mn[w]&&(B=Gf(w,C,e,W,G,y))?B.priority&&(H=1):Y[w]=P=mc.call(e,G,w,"get",C[w],W,y,0,i.stringFilter);e._op&&e._op[v]&&e.kill(G,e._op[v]),M&&e._pt&&(Oi=e,dt.killTweensOf(G,Y,e.globalTime(t)),F=!e.parent,Oi=0),e._pt&&l&&(Ol[z.id]=1)}H&&Yf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!F,g&&t<=0&&A.render(zn,!0,!0)},xx=function(e,t,n,i,r,o,s){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Gl=1,e.vars[t]="+=0",gc(e,s),Gl=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=vt(n)+Ht(u.e)),u.b&&(u.b=c.s+Ht(u.b))},yx=function(e,t){var n=e[0]?dr(e[0]).harness:0,i=n&&n.aliases,r,o,s,l;if(!i)return t;r=br({},t);for(o in i)if(o in r)for(l=i[o].split(","),s=l.length;s--;)r[l[s]]=r[o];return r},Mx=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,s;if(Xt(t))s=n[e]||(n[e]=[]),t.forEach(function(l,c){return s.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)s=n[o]||(n[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:t[o],e:r})},Ns=function(e,t,n,i,r){return _t(e)?e.call(t,n,i,r):Dt(e)&&~e.indexOf("random(")?js(e):e},Vf=dc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Hf={};cn(Vf+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Hf[a]=1});var St=function(a){af(e,a);function e(n,i,r,o){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=a.call(this,o?i:Os(i))||this;var l=s.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,x=i.parent||dt,S=(Xt(n)||cf(n)?wi(n[0]):"length"in i)?[n]:Nn(n),y,M,A,C,v,w,P,G;if(s._targets=S.length?pc(S):oa("GSAP target "+n+" not found. https://greensock.com",!En.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||f||Io(c)||Io(u)){if(i=s.vars,y=s.timeline=new on({data:"nested",defaults:d||{},targets:x&&x.data==="nested"?x.vars.targets:S}),y.kill(),y.parent=y._dp=mi(s),y._start=0,f||Io(c)||Io(u)){if(C=S.length,P=f&&Af(f),oi(f))for(v in f)~Vf.indexOf(v)&&(G||(G={}),G[v]=f[v]);for(M=0;M<C;M++)A=la(i,Hf),A.stagger=0,_&&(A.yoyoEase=_),G&&br(A,G),w=S[M],A.duration=+Ns(c,mi(s),M,w,S),A.delay=(+Ns(u,mi(s),M,w,S)||0)-s._delay,!f&&C===1&&A.delay&&(s._delay=u=A.delay,s._start+=u,A.delay=0),y.to(w,A,P?P(M,w,S):0),y._ease=je.none;y.duration()?c=u=0:s.timeline=0}else if(g){Os(Vn(y.vars.defaults,{ease:"none"})),y._ease=mr(g.ease||i.ease||"none");var H=0,z,R,B;if(Xt(g))g.forEach(function(Y){return y.to(S,Y,">")}),y.duration();else{A={};for(v in g)v==="ease"||v==="easeEach"||Mx(v,g[v],A,g.easeEach);for(v in A)for(z=A[v].sort(function(Y,W){return Y.t-W.t}),H=0,M=0;M<z.length;M++)R=z[M],B={ease:R.e,duration:(R.t-(M?z[M-1].t:0))/100*c},B[v]=R.v,y.to(S,B,H),H+=B.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||s.duration(c=y.duration())}else s.timeline=0;return m===!0&&!ac&&(Oi=mi(s),dt.killTweensOf(S),Oi=0),ei(x,mi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!c&&!g&&s._start===zt(x._time)&&ln(h)&&Jv(mi(s))&&x.data!=="nested")&&(s._tTime=-lt,s.render(Math.max(0,-u)||0)),p&&bf(mi(s),p),s}var t=e.prototype;return t.render=function(i,r,o){var s=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-lt&&!u?l:i<lt?0:i,f,m,g,d,p,_,x,S,y;if(!c)ex(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,S=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,o);if(f=zt(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,f=c-f),p=ds(this._tTime,d),f===s&&!o&&this._initted)return this._tTime=h,this;g!==p&&(S&&this._yEase&&Uf(S,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(zt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(wf(this,u?i:f,o,r,h))return this._tTime=0,this;if(s!==this._time)return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!s&&!r&&!g&&(Un(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(x,m.d),m=m._next;S&&S.render(i<0?i:!f&&_?-lt:S._dur*S._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&zl(this,i,r,o),Un(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&Un(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&zl(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Xi(this,1),!r&&!(u&&!s)&&(h||s||_)&&(Un(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,s){Zs||bn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||gc(this,l),c=this._ease(l/this._dur),xx(this,i,r,o,s,c,l)?this.resetTo(i,r,o,s):(Ta(this,0),this.parent||Mf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ls(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Oi&&Oi.vars.overwrite!==!0)._first||Ls(this),this.parent&&o!==this.timeline.totalDuration()&&ps(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=i?Nn(i):s,c=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!r||r==="all")&&Zv(s,l))return r==="all"&&(this._pt=0),Ls(this);for(h=this._op=this._op||[],r!=="all"&&(Dt(r)&&(d={},cn(r,function(x){return d[x]=1}),r=d),r=yx(s,r)),_=s.length;_--;)if(~l.indexOf(s[_])){f=c[_],r==="all"?(h[_]=r,g=f,m={}):(m=h[_]=h[_]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&ba(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&Ls(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return zs(1,arguments)},e.delayedCall=function(i,r,o,s){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(i,r,o){return zs(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return dt.killTweensOf(i,r,o)},e}(Ks);Vn(St.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});cn("staggerTo,staggerFrom,staggerFromTo",function(a){St[a]=function(){var e=new on,t=Ul.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var _c=function(e,t,n){return e[t]=n},Wf=function(e,t,n){return e[t](n)},Sx=function(e,t,n,i){return e[t](i.fp,n)},bx=function(e,t,n){return e.setAttribute(t,n)},vc=function(e,t){return _t(e[t])?Wf:lc(e[t])&&e.setAttribute?bx:_c},Xf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},wx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},xc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Tx=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},Ex=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ba(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ax=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yf=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},un=function(){function a(t,n,i,r,o,s,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=s||Xf,this.d=l||this,this.set=c||_c,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Ax,this.m=n,this.mt=r,this.tween=i},a}();cn(dc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return fc[a]=1});An.TweenMax=An.TweenLite=St;An.TimelineLite=An.TimelineMax=on;dt=new on({sortChildren:!1,defaults:fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});En.stringFilter=zf;var gr=[],Ko={},Cx=[],ih=0,Lx=0,dl=function(e){return(Ko[e]||Cx).map(function(t){return t()})},Vl=function(){var e=Date.now(),t=[];e-ih>2&&(dl("matchMediaInit"),gr.forEach(function(n){var i=n.queries,r=n.conditions,o,s,l,c;for(s in i)o=Pn.matchMedia(i[s]).matches,o&&(l=1),o!==r[s]&&(r[s]=o,c=1);c&&(n.revert(),l&&t.push(n))}),dl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),ih=e,dl("matchMedia"))},$f=function(){function a(t,n){this.selector=n&&kl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Lx++,t&&this.add(t)}var e=a.prototype;return e.add=function(n,i,r){_t(n)&&(r=i,i=n,n=_t);var o=this,s=function(){var c=gt,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=kl(r)),gt=o,h=i.apply(o,arguments),_t(h)&&o._r.push(h),gt=c,o.selector=u,o.isReverted=!1,h};return o.last=s,n===_t?s(o):n?o[n]=s:s},e.ignore=function(n){var i=gt;gt=null,n(this),gt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof St&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof St)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var s=gr.length;s--;)gr[s].id===this.id&&gr.splice(s,1)},e.revert=function(n){this.kill(n||{})},a}(),Px=function(){function a(t){this.contexts=[],this.scope=t}var e=a.prototype;return e.add=function(n,i,r){oi(n)||(n={matches:n});var o=new $f(0,r||this.scope),s=o.conditions={},l,c,u;gt&&!o.selector&&(o.selector=gt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Pn.matchMedia(n[c]),l&&(gr.indexOf(o)<0&&gr.push(o),(s[c]=l.matches)&&(u=1),l.addListener?l.addListener(Vl):l.addEventListener("change",Vl)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),ua={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return If(i)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return dt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Dt(e)&&(e=Nn(e)[0]);var r=dr(e||{}).get,o=n?yf:xf;return n==="native"&&(n=""),e&&(t?o((Mn[t]&&Mn[t].get||r)(e,t,n,i)):function(s,l,c){return o((Mn[s]&&Mn[s].get||r)(e,s,l,c))})},quickSetter:function(e,t,n){if(e=Nn(e),e.length>1){var i=e.map(function(u){return hn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Mn[t],s=dr(e),l=s.harness&&(s.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Zr._pt=0,h.init(e,n?u+n:u,Zr,0,[e]),h.render(1,h),Zr._pt&&xc(1,Zr)}:s.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,s,1)}},quickTo:function(e,t,n){var i,r=hn.to(e,br((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mr(e.ease,fs.ease)),Ju(fs,e||{})},config:function(e){return Ju(En,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Mn[s]&&!An[s]&&oa(t+" effect requires "+s+" plugin.")}),cl[t]=function(s,l,c){return n(Nn(s),Vn(l||{},r),c)},o&&(on.prototype[t]=function(s,l,c){return this.add(cl[t](s,oi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){je[e]=mr(t)},parseEase:function(e,t){return arguments.length?mr(e,t):je},getById:function(e){return dt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new on(e),i,r;for(n.smoothChildTiming=ln(e.smoothChildTiming),dt.remove(n),n._dp=0,n._time=n._tTime=dt._time,i=dt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof St&&i.vars.onComplete===i._targets[0]))&&ei(n,i,i._start-i._delay),i=r;return ei(dt,n,0),n},context:function(e,t){return e?new $f(e,t):gt},matchMedia:function(e){return new Px(e)},matchMediaRefresh:function(){return gr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Vl()},addEventListener:function(e,t){var n=Ko[e]||(Ko[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ko[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:lx,wrapYoyo:cx,distribute:Af,random:Lf,snap:Cf,normalize:ax,getUnit:Ht,clamp:ix,splitColor:Ff,toArray:Nn,selector:kl,mapRange:Rf,pipe:sx,unitize:ox,interpolate:ux,shuffle:Ef},install:pf,effects:cl,ticker:bn,updateRoot:on.updateRoot,plugins:Mn,globalTimeline:dt,core:{PropTween:un,globals:mf,Tween:St,Timeline:on,Animation:Ks,getCache:dr,_removeLinkedListItem:ba,reverting:function(){return Wt},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return ac=e}}};cn("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return ua[a]=St[a]});bn.add(on.updateRoot);Zr=ua.to({},{duration:0});var Rx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Dx=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Rx(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},pl=function(e,t){return{name:e,rawVars:1,init:function(i,r,o){o._onInit=function(s){var l,c;if(Dt(r)&&(l={},cn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Dx(s,r)}}}},hn=ua.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,s,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Wt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},pl("roundProps",Bl),pl("modifiers"),pl("snap",Cf))||ua;St.version=on.version=hn.version="3.12.2";df=1;cc()&&ms();je.Power0;je.Power1;je.Power2;je.Power3;je.Power4;je.Linear;je.Quad;je.Cubic;je.Quart;je.Quint;je.Strong;je.Elastic;je.Back;je.SteppedEase;je.Bounce;je.Sine;je.Expo;je.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rh,zi,ns,yc,cr,sh,Mc,Ix=function(){return typeof window<"u"},Ti={},nr=180/Math.PI,is=Math.PI/180,Vr=Math.atan2,oh=1e8,Sc=/([A-Z])/g,Fx=/(left|right|width|margin|padding|x)/i,Ox=/[\s,\(]\S/,ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hl=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Nx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ux=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},kx=function(e,t,n){return e.style[t]=n},Bx=function(e,t,n){return e.style.setProperty(t,n)},Gx=function(e,t,n){return e._gsap[t]=n},Vx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Hx=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Wx=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},pt="transform",Kn=pt+"Origin",Xx=function a(e,t){var n=this,i=this.target,r=i.style;if(e in Ti&&r){if(this.tfm=this.tfm||{},e!=="transform")e=ni[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=gi(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:gi(i,e);else return ni.transform.split(",").forEach(function(o){return a.call(n,o,t)});if(this.props.indexOf(pt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kn,t,"")),e=pt}(r||t)&&this.props.push(e,t,r[e])},Kf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},qx=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Sc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Mc(),(!r||!r.isStart)&&!n[pt]&&(Kf(n),i.uncache=1)}},Jf=function(e,t){var n={target:e,props:[],revert:qx,save:Xx};return e._gsap||hn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Qf,Wl=function(e,t){var n=zi.createElementNS?zi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):zi.createElement(e);return n.style?n:zi.createElement(e)},ri=function a(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Sc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&a(e,gs(t)||t,1)||""},ah="O,Moz,ms,Ms,Webkit".split(","),gs=function(e,t,n){var i=t||cr,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ah[o]+e in r););return o<0?null:(o===3?"ms":o>=0?ah[o]:"")+e},Xl=function(){Ix()&&window.document&&(rh=window,zi=rh.document,ns=zi.documentElement,cr=Wl("div")||{style:{}},Wl("div"),pt=gs(pt),Kn=pt+"Origin",cr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qf=!!gs("perspective"),Mc=hn.core.reverting,yc=1)},ml=function a(e){var t=Wl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(ns.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ns.removeChild(t),this.style.cssText=r,o},lh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},ed=function(e){var t;try{t=e.getBBox()}catch{t=ml.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ml||(t=ml.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+lh(e,["x","cx","x1"])||0,y:+lh(e,["y","cy","y1"])||0,width:0,height:0}:t},td=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ed(e))},Js=function(e,t){if(t){var n=e.style;t in Ti&&t!==Kn&&(t=pt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Sc,"-$1").toLowerCase())):n.removeAttribute(t)}},Ni=function(e,t,n,i,r,o){var s=new un(e._pt,t,n,0,1,o?Zf:jf);return e._pt=s,s.b=i,s.e=r,e._props.push(n),s},ch={deg:1,rad:1,turn:1},Yx={grid:1,flex:1},qi=function a(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",s=cr.style,l=Fx.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;return i===o||!r||ch[i]||ch[o]?r:(o!=="px"&&!f&&(r=a(e,t,n,"px")),_=e.getCTM&&td(e),(m||o==="%")&&(Ti[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],vt(m?r/g*h:r/100*g)):(s[l?"width":"height"]=h+(f?o:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===zi||!d.appendChild)&&(d=zi.body),p=d._gsap,p&&m&&p.width&&l&&p.time===bn.time&&!p.uncache?vt(r/p.width*h):((m||o==="%")&&!Yx[ri(d,"display")]&&(s.position=ri(e,"position")),d===e&&(s.position="static"),d.appendChild(cr),g=cr[u],d.removeChild(cr),s.position="absolute",l&&m&&(p=dr(d),p.time=bn.time,p.width=d[u]),vt(f?g*r/h:g&&r?h/g*r:0))))},gi=function(e,t,n,i){var r;return yc||Xl(),t in ni&&t!=="transform"&&(t=ni[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ti[t]&&t!=="transform"?(r=eo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:fa(ri(e,Kn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ha[t]&&ha[t](e,t,n)||ri(e,t)||_f(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?qi(e,t,r,n)+n:r},$x=function(e,t,n,i){if(!n||n==="none"){var r=gs(t,e,1),o=r&&ri(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=ri(e,"borderTopColor"))}var s=new un(this._pt,e.style,t,0,1,qf),l=0,c=0,u,h,f,m,g,d,p,_,x,S,y,M;if(s.b=n,s.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=ri(e,t)||i,e.style[t]=n),u=[n,i],zf(u),n=u[0],i=u[1],f=n.match(jr)||[],M=i.match(jr)||[],M.length){for(;h=jr.exec(i);)p=h[0],x=i.substring(l,h.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,y=d.substr((m+"").length),p.charAt(1)==="="&&(p=ts(m,p)+y),_=parseFloat(p),S=p.substr((_+"").length),l=jr.lastIndex-S.length,S||(S=S||En.units[t]||y,l===i.length&&(i+=S,s.e+=S)),y!==S&&(m=qi(e,t,d,S)||0),s._pt={_next:s._pt,p:x||c===1?x:",",s:m,c:_-m,m:g&&g<4||t==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=t==="display"&&i==="none"?Zf:jf;return hf.test(i)&&(s.e=0),this._pt=s,s},uh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=uh[n]||n,t[1]=uh[i]||i,t.join(" ")},Zx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,s,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)s=r[c],Ti[s]&&(l=1,s=s==="transformOrigin"?Kn:pt),Js(n,s);l&&(Js(n,pt),o&&(o.svg&&n.removeAttribute("transform"),eo(n,1),o.uncache=1,Kf(i)))}},ha={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new un(e._pt,t,n,0,0,Zx);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Qs=[1,0,0,1,0,0],nd={},id=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},hh=function(e){var t=ri(e,pt);return id(t)?Qs:t.substr(7).match(uf).map(vt)},bc=function(e,t){var n=e._gsap||dr(e),i=e.style,r=hh(e),o,s,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Qs:r):(r===Qs&&!e.offsetParent&&e!==ns&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,s=e.nextElementSibling,ns.appendChild(e)),r=hh(e),l?i.display=l:Js(e,"display"),c&&(s?o.insertBefore(e,s):o?o.appendChild(e):ns.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ql=function(e,t,n,i,r,o){var s=e._gsap,l=r||bc(e,!0),c=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],x=l[5],S=t.split(" "),y=parseFloat(S[0])||0,M=parseFloat(S[1])||0,A,C,v,w;n?l!==Qs&&(C=m*p-g*d)&&(v=y*(p/C)+M*(-d/C)+(d*x-p*_)/C,w=y*(-g/C)+M*(m/C)-(m*x-g*_)/C,y=v,M=w):(A=ed(e),y=A.x+(~S[0].indexOf("%")?y/100*A.width:y),M=A.y+(~(S[1]||S[0]).indexOf("%")?M/100*A.height:M)),i||i!==!1&&s.smooth?(_=y-c,x=M-u,s.xOffset=h+(_*m+x*d)-_,s.yOffset=f+(_*g+x*p)-x):s.xOffset=s.yOffset=0,s.xOrigin=y,s.yOrigin=M,s.smooth=!!i,s.origin=t,s.originIsAbsolute=!!n,e.style[Kn]="0px 0px",o&&(Ni(o,s,"xOrigin",c,y),Ni(o,s,"yOrigin",u,M),Ni(o,s,"xOffset",h,s.xOffset),Ni(o,s,"yOffset",f,s.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},eo=function(e,t){var n=e._gsap||new Bf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",s="deg",l=getComputedStyle(e),c=ri(e,Kn)||"0",u,h,f,m,g,d,p,_,x,S,y,M,A,C,v,w,P,G,H,z,R,B,Y,W,U,F,b,J,Q,te,re,_e;return u=h=f=d=p=_=x=S=y=0,m=g=1,n.svg=!!(e.getCTM&&td(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pt]!=="none"?l[pt]:"")),i.scale=i.rotate=i.translate="none"),C=bc(e,n.svg),n.svg&&(n.uncache?(U=e.getBBox(),c=n.xOrigin-U.x+"px "+(n.yOrigin-U.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),ql(e,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,C)),M=n.xOrigin||0,A=n.yOrigin||0,C!==Qs&&(G=C[0],H=C[1],z=C[2],R=C[3],u=B=C[4],h=Y=C[5],C.length===6?(m=Math.sqrt(G*G+H*H),g=Math.sqrt(R*R+z*z),d=G||H?Vr(H,G)*nr:0,x=z||R?Vr(z,R)*nr+d:0,x&&(g*=Math.abs(Math.cos(x*is))),n.svg&&(u-=M-(M*G+A*z),h-=A-(M*H+A*R))):(_e=C[6],te=C[7],b=C[8],J=C[9],Q=C[10],re=C[11],u=C[12],h=C[13],f=C[14],v=Vr(_e,Q),p=v*nr,v&&(w=Math.cos(-v),P=Math.sin(-v),W=B*w+b*P,U=Y*w+J*P,F=_e*w+Q*P,b=B*-P+b*w,J=Y*-P+J*w,Q=_e*-P+Q*w,re=te*-P+re*w,B=W,Y=U,_e=F),v=Vr(-z,Q),_=v*nr,v&&(w=Math.cos(-v),P=Math.sin(-v),W=G*w-b*P,U=H*w-J*P,F=z*w-Q*P,re=R*P+re*w,G=W,H=U,z=F),v=Vr(H,G),d=v*nr,v&&(w=Math.cos(v),P=Math.sin(v),W=G*w+H*P,U=B*w+Y*P,H=H*w-G*P,Y=Y*w-B*P,G=W,B=U),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=vt(Math.sqrt(G*G+H*H+z*z)),g=vt(Math.sqrt(Y*Y+_e*_e)),v=Vr(B,Y),x=Math.abs(v)>2e-4?v*nr:0,y=re?1/(re<0?-re:re):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!id(ri(e,pt)),W&&e.setAttribute("transform",W))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(m*=-1,x+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=vt(m),n.scaleY=vt(g),n.rotation=vt(d)+s,n.rotationX=vt(p)+s,n.rotationY=vt(_)+s,n.skewX=x+s,n.skewY=S+s,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Kn]=fa(c)),n.xOffset=n.yOffset=0,n.force3D=En.force3D,n.renderTransform=n.svg?Jx:Qf?rd:Kx,n.uncache=0,n},fa=function(e){return(e=e.split(" "))[0]+" "+e[1]},gl=function(e,t,n){var i=Ht(t);return vt(parseFloat(t)+parseFloat(qi(e,"x",n+"px",i)))+i},Kx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rd(e,t)},Ji="0deg",bs="0px",Qi=") ",rd=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,x=n.target,S=n.zOrigin,y="",M=_==="auto"&&e&&e!==1||_===!0;if(S&&(h!==Ji||u!==Ji)){var A=parseFloat(u)*is,C=Math.sin(A),v=Math.cos(A),w;A=parseFloat(h)*is,w=Math.cos(A),o=gl(x,o,C*w*-S),s=gl(x,s,-Math.sin(A)*-S),l=gl(x,l,v*w*-S+S)}p!==bs&&(y+="perspective("+p+Qi),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(M||o!==bs||s!==bs||l!==bs)&&(y+=l!==bs||M?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+Qi),c!==Ji&&(y+="rotate("+c+Qi),u!==Ji&&(y+="rotateY("+u+Qi),h!==Ji&&(y+="rotateX("+h+Qi),(f!==Ji||m!==Ji)&&(y+="skew("+f+", "+m+Qi),(g!==1||d!==1)&&(y+="scale("+g+", "+d+Qi),x.style[pt]=y||"translate(0, 0)"},Jx=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,s=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,x=n.forceCSS,S=parseFloat(o),y=parseFloat(s),M,A,C,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=is,c*=is,M=Math.cos(l)*h,A=Math.sin(l)*h,C=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=is,w=Math.tan(c-u),w=Math.sqrt(1+w*w),C*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),M*=w,A*=w)),M=vt(M),A=vt(A),C=vt(C),v=vt(v)):(M=h,v=f,A=C=0),(S&&!~(o+"").indexOf("px")||y&&!~(s+"").indexOf("px"))&&(S=qi(m,"x",o,"px"),y=qi(m,"y",s,"px")),(g||d||p||_)&&(S=vt(S+g-(g*M+d*C)+p),y=vt(y+d-(g*A+d*v)+_)),(i||r)&&(w=m.getBBox(),S=vt(S+i/100*w.width),y=vt(y+r/100*w.height)),w="matrix("+M+","+A+","+C+","+v+","+S+","+y+")",m.setAttribute("transform",w),x&&(m.style[pt]=w)},Qx=function(e,t,n,i,r){var o=360,s=Dt(r),l=parseFloat(r)*(s&&~r.indexOf("rad")?nr:1),c=l-i,u=i+c+"deg",h,f;return s&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*oh)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*oh)%o-~~(c/o)*o)),e._pt=f=new un(e._pt,t,n,i,c,zx),f.e=u,f.u="deg",e._props.push(n),f},fh=function(e,t){for(var n in t)e[n]=t[n];return e},ey=function(e,t,n){var i=fh({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,s,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[pt]=t,s=eo(n,1),Js(n,pt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[pt],o[pt]=t,s=eo(n,1),o[pt]=c);for(l in Ti)c=i[l],u=s[l],c!==u&&r.indexOf(l)<0&&(m=Ht(c),g=Ht(u),h=m!==g?qi(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new un(e._pt,s,l,h,f-h,Hl),e._pt.u=g||0,e._props.push(l));fh(s,i)};cn("padding,margin,Width,Radius",function(a,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(s){return e<2?a+s:"border"+s+a});ha[e>1?"border"+a:a]=function(s,l,c,u,h){var f,m;if(arguments.length<4)return f=o.map(function(g){return gi(s,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},o.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(l,m,h)}});var sd={name:"css",register:Xl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,s=e.style,l=n.vars.startAt,c,u,h,f,m,g,d,p,_,x,S,y,M,A,C,v;yc||Xl(),this.styles=this.styles||Jf(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Mn[d]&&Gf(d,t,n,i,e,r)))){if(m=typeof u,g=ha[d],m==="function"&&(u=u.call(n,i,e,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=js(u)),g)g(this,e,d,u,n)&&(C=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Vi.lastIndex=0,Vi.test(c)||(p=Ht(c),_=Ht(u)),_?p!==_&&(c=qi(e,d,c,_)+_):p&&(u+=p),this.add(s,"setProperty",c,u,i,r,0,0,d),o.push(d),v.push(d,0,s[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,r):l[d],Dt(c)&&~c.indexOf("random(")&&(c=js(c)),Ht(c+"")||(c+=En.units[d]||Ht(gi(e,d))||""),(c+"").charAt(1)==="="&&(c=gi(e,d))):c=gi(e,d),f=parseFloat(c),x=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),d in ni&&(d==="autoAlpha"&&(f===1&&gi(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,s.visibility),Ni(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=ni[d],~d.indexOf(",")&&(d=d.split(",")[0]))),S=d in Ti,S){if(this.styles.save(d),y||(M=e._gsap,M.renderTransform&&!t.parseTransform||eo(e,t.parseTransform),A=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new un(this._pt,s,pt,0,1,M.renderTransform,M,0,-1),y.dep=1),d==="scale")this._pt=new un(this._pt,M,"scaleY",M.scaleY,(x?ts(M.scaleY,x+h):h)-M.scaleY||0,Hl),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(Kn,0,s[Kn]),u=jx(u),M.svg?ql(e,u,0,A,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==M.zOrigin&&Ni(this,M,"zOrigin",M.zOrigin,_),Ni(this,s,d,fa(c),fa(u)));continue}else if(d==="svgOrigin"){ql(e,u,1,A,0,this);continue}else if(d in nd){Qx(this,M,d,f,x?ts(f,x+u):u);continue}else if(d==="smoothOrigin"){Ni(this,M,"smooth",M.smooth,u);continue}else if(d==="force3D"){M[d]=u;continue}else if(d==="transform"){ey(this,u,e);continue}}else d in s||(d=gs(d)||d);if(S||(h||h===0)&&(f||f===0)&&!Ox.test(u)&&d in s)p=(c+"").substr((f+"").length),h||(h=0),_=Ht(u)||(d in En.units?En.units[d]:p),p!==_&&(f=qi(e,d,c,_)),this._pt=new un(this._pt,S?M:s,d,f,(x?ts(f,x+h):h)-f,!S&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?Ux:Hl),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Nx);else if(d in s)$x.call(this,e,d,c,x?x+u:u);else if(d in e)this.add(e,d,c||e[d],x?x+u:u,i,r);else if(d!=="parseTransform"){hc(d,u);continue}S||(d in s?v.push(d,0,s[d]):v.push(d,1,c||e[d])),o.push(d)}}C&&Yf(this)},render:function(e,t){if(t.tween._time||!Mc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gi,aliases:ni,getSetter:function(e,t,n){var i=ni[t];return i&&i.indexOf(",")<0&&(t=i),t in Ti&&t!==Kn&&(e._gsap.x||gi(e,"x"))?n&&sh===n?t==="scale"?Vx:Gx:(sh=n||{})&&(t==="scale"?Hx:Wx):e.style&&!lc(e.style[t])?kx:~t.indexOf("-")?Bx:vc(e,t)},core:{_removeProperty:Js,_getMatrix:bc}};hn.utils.checkPrefix=gs;hn.core.getStyleSaver=Jf;(function(a,e,t,n){var i=cn(a+","+e+","+t,function(r){Ti[r]=1});cn(e,function(r){En.units[r]="deg",nd[r]=1}),ni[i[13]]=a+","+e,cn(n,function(r){var o=r.split(":");ni[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){En.units[a]="px"});hn.registerPlugin(sd);var wc=hn.registerPlugin(sd)||hn;wc.core.Tween;function dh(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function ty(a,e,t){return e&&dh(a.prototype,e),t&&dh(a,t),a}/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ut,Yl,wn,Ui,ki,rs,od,ir,Us,ad,yi,$n,ld,cd=function(){return Ut||typeof window<"u"&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},ud=1,Kr=[],We=[],si=[],ks=Date.now,$l=function(e,t){return t},ny=function(){var e=Us.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,We),i.push.apply(i,si),We=n,si=i,$l=function(o,s){return t[o](s)}},Hi=function(e,t){return~si.indexOf(e)&&si[si.indexOf(e)+1][t]},Bs=function(e){return!!~ad.indexOf(e)},jt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},$t=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Fo="scrollLeft",Oo="scrollTop",jl=function(){return yi&&yi.isPressed||We.cache++},da=function(e,t){var n=function i(r){if(r||r===0){ud&&(wn.history.scrollRestoration="manual");var o=yi&&yi.isPressed;r=i.v=Math.round(r)||(yi&&yi.iOS?1:0),e(r),i.cacheID=We.cache,o&&$l("ss",r)}else(t||We.cache!==i.cacheID||$l("ref"))&&(i.cacheID=We.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Qt={s:Fo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:da(function(a){return arguments.length?wn.scrollTo(a,Tt.sc()):wn.pageXOffset||Ui[Fo]||ki[Fo]||rs[Fo]||0})},Tt={s:Oo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Qt,sc:da(function(a){return arguments.length?wn.scrollTo(Qt.sc(),a):wn.pageYOffset||Ui[Oo]||ki[Oo]||rs[Oo]||0})},rn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Ut.utils.toArray)(e)[0]||(typeof e=="string"&&Ut.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Yi=function(e,t){var n=t.s,i=t.sc;Bs(e)&&(e=Ui.scrollingElement||ki);var r=We.indexOf(e),o=i===Tt.sc?1:2;!~r&&(r=We.push(e)-1),We[r+o]||jt(e,"scroll",jl);var s=We[r+o],l=s||(We[r+o]=da(Hi(e,n),!0)||(Bs(e)?i:da(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,s||(l.smooth=Ut.getProperty(e,"scrollBehavior")==="smooth"),l},Zl=function(e,t,n){var i=e,r=e,o=ks(),s=o,l=t||50,c=Math.max(500,l*3),u=function(g,d){var p=ks();d||p-o>l?(r=i,i=g,s=o,o=p):n?i+=g:i=r+(g-r)/(p-s)*(o-s)},h=function(){r=i=n?0:i,s=o=0},f=function(g){var d=s,p=r,_=ks();return(g||g===0)&&g!==i&&u(g),o===s||_-s>c?0:(i+(n?p:-p))/((n?_:o)-d)*1e3};return{update:u,reset:h,getVelocity:f}},ws=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ph=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},hd=function(){Us=Ut.core.globals().ScrollTrigger,Us&&Us.core&&ny()},fd=function(e){return Ut=e||cd(),Ut&&typeof document<"u"&&document.body&&(wn=window,Ui=document,ki=Ui.documentElement,rs=Ui.body,ad=[wn,Ui,ki,rs],Ut.utils.clamp,ld=Ut.core.context||function(){},ir="onpointerenter"in rs?"pointer":"mouse",od=bt.isTouch=wn.matchMedia&&wn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in wn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,$n=bt.eventTypes=("ontouchstart"in ki?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ki?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ud=0},500),hd(),Yl=1),Yl};Qt.op=Tt;We.cache=0;var bt=function(){function a(t){this.init(t)}var e=a.prototype;return e.init=function(n){Yl||fd(Ut)||console.warn("Please gsap.registerPlugin(Observer)"),Us||hd();var i=n.tolerance,r=n.dragMinimum,o=n.type,s=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,m=n.ignore,g=n.wheelSpeed,d=n.event,p=n.onDragStart,_=n.onDragEnd,x=n.onDrag,S=n.onPress,y=n.onRelease,M=n.onRight,A=n.onLeft,C=n.onUp,v=n.onDown,w=n.onChangeX,P=n.onChangeY,G=n.onChange,H=n.onToggleX,z=n.onToggleY,R=n.onHover,B=n.onHoverEnd,Y=n.onMove,W=n.ignoreCheck,U=n.isNormalizer,F=n.onGestureStart,b=n.onGestureEnd,J=n.onWheel,Q=n.onEnable,te=n.onDisable,re=n.onClick,_e=n.scrollSpeed,X=n.capture,Ae=n.allowClicks,ye=n.lockAxis,ge=n.onLockAxis;this.target=s=rn(s)||ki,this.vars=n,m&&(m=Ut.utils.toArray(m)),i=i||1e-9,r=r||0,g=g||1,_e=_e||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(wn.getComputedStyle(rs).lineHeight)||22);var le,Ie,Te,se,Oe,et,Ke,k=this,Qe=0,Ge=0,It=Yi(s,Qt),tt=Yi(s,Tt),L=It(),T=tt(),$=~o.indexOf("touch")&&!~o.indexOf("pointer")&&$n[0]==="pointerdown",ee=Bs(s),ne=s.ownerDocument||Ui,oe=[0,0,0],we=[0,0,0],ce=0,Z=function(){return ce=ks()},Me=function(xe,Ze){return(k.event=xe)&&m&&~m.indexOf(xe.target)||Ze&&$&&xe.pointerType!=="touch"||W&&W(xe,Ze)},Se=function(){k._vx.reset(),k._vy.reset(),Ie.pause(),h&&h(k)},ve=function(){var xe=k.deltaX=ph(oe),Ze=k.deltaY=ph(we),st=Math.abs(xe)>=i,de=Math.abs(Ze)>=i;G&&(st||de)&&G(k,xe,Ze,oe,we),st&&(M&&k.deltaX>0&&M(k),A&&k.deltaX<0&&A(k),w&&w(k),H&&k.deltaX<0!=Qe<0&&H(k),Qe=k.deltaX,oe[0]=oe[1]=oe[2]=0),de&&(v&&k.deltaY>0&&v(k),C&&k.deltaY<0&&C(k),P&&P(k),z&&k.deltaY<0!=Ge<0&&z(k),Ge=k.deltaY,we[0]=we[1]=we[2]=0),(se||Te)&&(Y&&Y(k),Te&&(x(k),Te=!1),se=!1),et&&!(et=!1)&&ge&&ge(k),Oe&&(J(k),Oe=!1),le=0},Ee=function(xe,Ze,st){oe[st]+=xe,we[st]+=Ze,k._vx.update(xe),k._vy.update(Ze),c?le||(le=requestAnimationFrame(ve)):ve()},Fe=function(xe,Ze){ye&&!Ke&&(k.axis=Ke=Math.abs(xe)>Math.abs(Ze)?"x":"y",et=!0),Ke!=="y"&&(oe[2]+=xe,k._vx.update(xe,!0)),Ke!=="x"&&(we[2]+=Ze,k._vy.update(Ze,!0)),c?le||(le=requestAnimationFrame(ve)):ve()},Xe=function(xe){if(!Me(xe,1)){xe=ws(xe,u);var Ze=xe.clientX,st=xe.clientY,de=Ze-k.x,qe=st-k.y,Re=k.isDragging;k.x=Ze,k.y=st,(Re||Math.abs(k.startX-Ze)>=r||Math.abs(k.startY-st)>=r)&&(x&&(Te=!0),Re||(k.isDragging=!0),Fe(de,qe),Re||p&&p(k))}},D=k.onPress=function(Ce){Me(Ce,1)||Ce&&Ce.button||(k.axis=Ke=null,Ie.pause(),k.isPressed=!0,Ce=ws(Ce),Qe=Ge=0,k.startX=k.x=Ce.clientX,k.startY=k.y=Ce.clientY,k._vx.reset(),k._vy.reset(),jt(U?s:ne,$n[1],Xe,u,!0),k.deltaX=k.deltaY=0,S&&S(k))},fe=k.onRelease=function(Ce){if(!Me(Ce,1)){$t(U?s:ne,$n[1],Xe,!0);var xe=!isNaN(k.y-k.startY),Ze=k.isDragging&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),st=ws(Ce);!Ze&&xe&&(k._vx.reset(),k._vy.reset(),u&&Ae&&Ut.delayedCall(.08,function(){if(ks()-ce>300&&!Ce.defaultPrevented){if(Ce.target.click)Ce.target.click();else if(ne.createEvent){var de=ne.createEvent("MouseEvents");de.initMouseEvent("click",!0,!0,wn,1,st.screenX,st.screenY,st.clientX,st.clientY,!1,!1,!1,!1,0,null),Ce.target.dispatchEvent(de)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&!U&&Ie.restart(!0),_&&Ze&&_(k),y&&y(k,Ze)}},K=function(xe){return xe.touches&&xe.touches.length>1&&(k.isGesturing=!0)&&F(xe,k.isDragging)},j=function(){return(k.isGesturing=!1)||b(k)},ie=function(xe){if(!Me(xe)){var Ze=It(),st=tt();Ee((Ze-L)*_e,(st-T)*_e,1),L=Ze,T=st,h&&Ie.restart(!0)}},be=function(xe){if(!Me(xe)){xe=ws(xe,u),J&&(Oe=!0);var Ze=(xe.deltaMode===1?l:xe.deltaMode===2?wn.innerHeight:1)*g;Ee(xe.deltaX*Ze,xe.deltaY*Ze,0),h&&!U&&Ie.restart(!0)}},Ve=function(xe){if(!Me(xe)){var Ze=xe.clientX,st=xe.clientY,de=Ze-k.x,qe=st-k.y;k.x=Ze,k.y=st,se=!0,(de||qe)&&Fe(de,qe)}},it=function(xe){k.event=xe,R(k)},qt=function(xe){k.event=xe,B(k)},Je=function(xe){return Me(xe)||ws(xe,u)&&re(k)};Ie=k._dc=Ut.delayedCall(f||.25,Se).pause(),k.deltaX=k.deltaY=0,k._vx=Zl(0,50,!0),k._vy=Zl(0,50,!0),k.scrollX=It,k.scrollY=tt,k.isDragging=k.isGesturing=k.isPressed=!1,ld(this),k.enable=function(Ce){return k.isEnabled||(jt(ee?ne:s,"scroll",jl),o.indexOf("scroll")>=0&&jt(ee?ne:s,"scroll",ie,u,X),o.indexOf("wheel")>=0&&jt(s,"wheel",be,u,X),(o.indexOf("touch")>=0&&od||o.indexOf("pointer")>=0)&&(jt(s,$n[0],D,u,X),jt(ne,$n[2],fe),jt(ne,$n[3],fe),Ae&&jt(s,"click",Z,!1,!0),re&&jt(s,"click",Je),F&&jt(ne,"gesturestart",K),b&&jt(ne,"gestureend",j),R&&jt(s,ir+"enter",it),B&&jt(s,ir+"leave",qt),Y&&jt(s,ir+"move",Ve)),k.isEnabled=!0,Ce&&Ce.type&&D(Ce),Q&&Q(k)),k},k.disable=function(){k.isEnabled&&(Kr.filter(function(Ce){return Ce!==k&&Bs(Ce.target)}).length||$t(ee?ne:s,"scroll",jl),k.isPressed&&(k._vx.reset(),k._vy.reset(),$t(U?s:ne,$n[1],Xe,!0)),$t(ee?ne:s,"scroll",ie,X),$t(s,"wheel",be,X),$t(s,$n[0],D,X),$t(ne,$n[2],fe),$t(ne,$n[3],fe),$t(s,"click",Z,!0),$t(s,"click",Je),$t(ne,"gesturestart",K),$t(ne,"gestureend",j),$t(s,ir+"enter",it),$t(s,ir+"leave",qt),$t(s,ir+"move",Ve),k.isEnabled=k.isPressed=k.isDragging=!1,te&&te(k))},k.kill=k.revert=function(){k.disable();var Ce=Kr.indexOf(k);Ce>=0&&Kr.splice(Ce,1),yi===k&&(yi=0)},Kr.push(k),U&&Bs(s)&&(yi=k),k.enable(d)},ty(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a}();bt.version="3.12.2";bt.create=function(a){return new bt(a)};bt.register=fd;bt.getAll=function(){return Kr.slice()};bt.getById=function(a){return Kr.filter(function(e){return e.vars.id===a})[0]};cd()&&Ut.registerPlugin(bt);/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var me,qr,$e,ft,jn,ct,dd,pa,ma,Jr,Jo,zo,Vt,Ea,Kl,Zt,mh,gh,Yr,pd,_l,md,vn,gd,_d,vd,Ii,Jl,Tc,ss,Ec,vl,No=1,Jt=Date.now,xl=Jt(),Bn=0,Rs=0,_h=function(e,t,n){var i=yn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},vh=function(e,t){return t&&(!yn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},iy=function a(){return Rs&&requestAnimationFrame(a)},xh=function(){return Ea=1},yh=function(){return Ea=0},Jn=function(e){return e},Ds=function(e){return Math.round(e*1e5)/1e5||0},xd=function(){return typeof window<"u"},yd=function(){return me||xd()&&(me=window.gsap)&&me.registerPlugin&&me},wr=function(e){return!!~dd.indexOf(e)},Md=function(e){return(e==="Height"?Ec:$e["inner"+e])||jn["client"+e]||ct["client"+e]},Sd=function(e){return Hi(e,"getBoundingClientRect")||(wr(e)?function(){return ra.width=$e.innerWidth,ra.height=Ec,ra}:function(){return vi(e)})},ry=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Hi(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Md(r):e["client"+r])||0}},sy=function(e,t){return!t||~si.indexOf(e)?Sd(e):function(){return ra}},Mi=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Hi(e,n))?o()-Sd(e)()[r]:wr(e)?(jn[n]||ct[n])-Md(i):e[n]-e["offset"+i])},Uo=function(e,t){for(var n=0;n<Yr.length;n+=3)(!t||~t.indexOf(Yr[n+1]))&&e(Yr[n],Yr[n+1],Yr[n+2])},yn=function(e){return typeof e=="string"},en=function(e){return typeof e=="function"},Qo=function(e){return typeof e=="number"},rr=function(e){return typeof e=="object"},Ts=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},yl=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Hr=Math.abs,bd="left",wd="top",Ac="right",Cc="bottom",_r="width",vr="height",Gs="Right",Vs="Left",Hs="Top",Ws="Bottom",Mt="padding",In="margin",_s="Width",Lc="Height",Ot="px",Fn=function(e){return $e.getComputedStyle(e)},oy=function(e){var t=Fn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Mh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},vi=function(e,t){var n=t&&Fn(e)[Kl]!=="matrix(1, 0, 0, 1, 0, 0)"&&me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ql=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Td=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},ay=function(e){return function(t){return me.utils.snap(Td(e),t)}},Pc=function(e){var t=me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var s;if(!r)return t(i);if(r>0){for(i-=o,s=0;s<n.length;s++)if(n[s]>=i)return n[s];return n[s-1]}else for(s=n.length,i+=o;s--;)if(n[s]<=i)return n[s];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var s=t(i);return!r||Math.abs(s-i)<o||s-i<0==r<0?s:t(r<0?i-e:i+e)}},ly=function(e){return function(t,n){return Pc(Td(e))(t,n.direction)}},ko=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},Pt=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},Lt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Bo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Sh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Go={toggleActions:"play",anticipatePin:0},ga={top:0,left:0,center:.5,bottom:1,right:1},ea=function(e,t){if(yn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in ga?ga[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Vo=function(e,t,n,i,r,o,s,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,m=r.fontWeight,g=ft.createElement("div"),d=wr(n)||Hi(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,_=d?ct:n,x=e.indexOf("start")!==-1,S=x?c:u,y="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&d?"fixed;":"absolute;"),(p||l||!d)&&(y+=(i===Tt?Ac:Cc)+":"+(o+parseFloat(f))+"px;"),s&&(y+="box-sizing:border-box;text-align:left;width:"+s.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],ta(g,0,i,x),g},ta=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],s=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+_s]=1,r["border"+s+_s]=0,r[n.p]=t+"px",me.set(e,r)},Be=[],ec={},to,bh=function(){return Jt()-Bn>34&&(to||(to=requestAnimationFrame(bi)))},Wr=function(){(!vn||!vn.isPressed||vn.startX>ct.clientWidth)&&(We.cache++,vn?to||(to=requestAnimationFrame(bi)):bi(),Bn||Er("scrollStart"),Bn=Jt())},Ml=function(){vd=$e.innerWidth,_d=$e.innerHeight},Is=function(){We.cache++,!Vt&&!md&&!ft.fullscreenElement&&!ft.webkitFullscreenElement&&(!gd||vd!==$e.innerWidth||Math.abs($e.innerHeight-_d)>$e.innerHeight*.25)&&pa.restart(!0)},Tr={},cy=[],Ed=function a(){return Lt(Ye,"scrollEnd",a)||ur(!0)},Er=function(e){return Tr[e]&&Tr[e].map(function(t){return t()})||cy},xn=[],Ad=function(e){for(var t=0;t<xn.length;t+=5)(!e||xn[t+4]&&xn[t+4].query===e)&&(xn[t].style.cssText=xn[t+1],xn[t].getBBox&&xn[t].setAttribute("transform",xn[t+2]||""),xn[t+3].uncache=1)},Rc=function(e,t){var n;for(Zt=0;Zt<Be.length;Zt++)n=Be[Zt],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Ad(t),t||Er("revert")},Cd=function(e,t){We.cache++,(t||!Kt)&&We.forEach(function(n){return en(n)&&n.cacheID++&&(n.rec=0)}),yn(e)&&($e.history.scrollRestoration=Tc=e)},Kt,xr=0,wh,uy=function(){if(wh!==xr){var e=wh=xr;requestAnimationFrame(function(){return e===xr&&ur(!0)})}},Ld=function(){ct.appendChild(ss),Ec=ss.offsetHeight||$e.innerHeight,ct.removeChild(ss)},ur=function(e,t){if(Bn&&!e){Pt(Ye,"scrollEnd",Ed);return}Ld(),Kt=Ye.isRefreshing=!0,We.forEach(function(i){return en(i)&&++i.cacheID&&(i.rec=i())});var n=Er("refreshInit");pd&&Ye.sort(),t||Rc(),We.forEach(function(i){en(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Be.slice(0).forEach(function(i){return i.refresh()}),Be.forEach(function(i,r){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",s=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-s),i.refresh()}}),Be.forEach(function(i){var r=Mi(i.scroller,i._dir);(i.vars.end==="max"||i._endClamp&&i.end>r)&&i.setPositions(i.start,Math.max(i.start+1,r),!0)}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),We.forEach(function(i){en(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Cd(Tc,1),pa.pause(),xr++,Kt=2,bi(2),Be.forEach(function(i){return en(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Kt=Ye.isRefreshing=!1,Er("refresh")},tc=0,na=1,Xs,bi=function(e){if(!Kt||e===2){Ye.isUpdating=!0,Xs&&Xs.update(0);var t=Be.length,n=Jt(),i=n-xl>=50,r=t&&Be[0].scroll();if(na=tc>r?-1:1,Kt||(tc=r),i&&(Bn&&!Ea&&n-Bn>200&&(Bn=0,Er("scrollEnd")),Jo=xl,xl=n),na<0){for(Zt=t;Zt-- >0;)Be[Zt]&&Be[Zt].update(0,i);na=1}else for(Zt=0;Zt<t;Zt++)Be[Zt]&&Be[Zt].update(0,i);Ye.isUpdating=!1}to=0},nc=[bd,wd,Cc,Ac,In+Ws,In+Gs,In+Hs,In+Vs,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ia=nc.concat([_r,vr,"boxSizing","max"+_s,"max"+Lc,"position",In,Mt,Mt+Hs,Mt+Gs,Mt+Ws,Mt+Vs]),hy=function(e,t,n){os(n);var i=e._gsap;if(i.spacerIsNative)os(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},Sl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=nc.length,o=t.style,s=e.style,l;r--;)l=nc[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),s[Cc]=s[Ac]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[_r]=Ql(e,Qt)+Ot,o[vr]=Ql(e,Tt)+Ot,o[Mt]=s[In]=s[wd]=s[bd]="0",os(i),s[_r]=s["max"+_s]=n[_r],s[vr]=s["max"+Lc]=n[vr],s[Mt]=n[Mt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},fy=/([A-Z])/g,os=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||me.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(fy,"-$1").toLowerCase())}},Ho=function(e){for(var t=ia.length,n=e.style,i=[],r=0;r<t;r++)i.push(ia[r],n[ia[r]]);return i.t=e,i},dy=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,s;o<r;o+=2)s=e[o],i.push(s,s in t?t[s]:e[o+1]);return i.t=e.t,i},ra={left:0,top:0},Th=function(e,t,n,i,r,o,s,l,c,u,h,f,m,g){en(e)&&(e=e(l)),yn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ea("0"+e.substr(3),n):0));var d=m?m.time():0,p,_,x;if(m&&m.seek(0),isNaN(e)||(e=+e),Qo(e))m&&(e=me.utils.mapRange(m.scrollTrigger.start,m.scrollTrigger.end,0,f,e)),s&&ta(s,n,i,!0);else{en(t)&&(t=t(l));var S=(e||"0").split(" "),y,M,A,C;x=rn(t,l)||ct,y=vi(x)||{},(!y||!y.left&&!y.top)&&Fn(x).display==="none"&&(C=x.style.display,x.style.display="block",y=vi(x),C?x.style.display=C:x.style.removeProperty("display")),M=ea(S[0],y[i.d]),A=ea(S[1]||"0",n),e=y[i.p]-c[i.p]-u+M+r-A,s&&ta(s,A,i,n-A<20||s._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var v=e+n,w=o._isStart;p="scroll"+i.d2,ta(o,v,i,w&&v>20||!w&&(h?Math.max(ct[p],jn[p]):o.parentNode[p])<=v+1),h&&(c=vi(s),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ot))}return m&&x&&(p=vi(x),m.seek(f),_=vi(x),m._caScrollDist=p[i.p]-_[i.p],e=e/m._caScrollDist*f),m&&m.seek(d),m?e:Math.round(e)},py=/(webkit|moz|length|cssText|inset)/i,Eh=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,s;if(t===ct){e._stOrig=r.cssText,s=Fn(e);for(o in s)!+o&&!py.test(o)&&s[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=s[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;me.core.getCache(e).uncache=1,t.appendChild(e)}},Pd=function(e,t,n){var i=t,r=i;return function(o){var s=Math.round(e());return s!==i&&s!==r&&Math.abs(s-i)>3&&Math.abs(s-r)>3&&(o=s,n&&n()),r=i,i=o,o}},Wo=function(e,t,n){var i={};i[t.p]="+="+n,me.set(e,i)},Ah=function(e,t){var n=Yi(e,t),i="_scroll"+t.p2,r=function o(s,l,c,u,h){var f=o.tween,m=l.onComplete,g={};c=c||n();var d=Pd(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||s-c,f&&f.kill(),l[i]=s,l.modifiers=g,g[i]=function(){return d(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){We.cache++,bi()},l.onComplete=function(){o.tween=0,m&&m.call(f)},f=o.tween=me.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},Pt(e,"wheel",n.wheelHandler),Ye.isTouch&&Pt(e,"touchmove",n.wheelHandler),r},Ye=function(){function a(t,n){qr||a.register(me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Jl(this),this.init(t,n)}var e=a.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Rs){this.update=this.refresh=this.kill=Jn;return}n=Mh(yn(n)||Qo(n)||n.nodeType?{trigger:n}:n,Go);var r=n,o=r.onUpdate,s=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,m=r.pin,g=r.pinSpacing,d=r.invalidateOnRefresh,p=r.anticipatePin,_=r.onScrubComplete,x=r.onSnapComplete,S=r.once,y=r.snap,M=r.pinReparent,A=r.pinSpacer,C=r.containerAnimation,v=r.fastScrollEnd,w=r.preventOverlaps,P=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Qt:Tt,G=!h&&h!==0,H=rn(n.scroller||$e),z=me.core.getCache(H),R=wr(H),B=("pinType"in n?n.pinType:Hi(H,"pinType")||R&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=G&&n.toggleActions.split(" "),U="markers"in n?n.markers:Go.markers,F=R?0:parseFloat(Fn(H)["border"+P.p2+_s])||0,b=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(b)},Q=ry(H,R,P),te=sy(H,R),re=0,_e=0,X=0,Ae=Yi(H,P),ye,ge,le,Ie,Te,se,Oe,et,Ke,k,Qe,Ge,It,tt,L,T,$,ee,ne,oe,we,ce,Z,Me,Se,ve,Ee,Fe,Xe,D,fe,K,j,ie,be,Ve,it,qt,Je;if(b._startClamp=b._endClamp=!1,b._dir=P,p*=45,b.scroller=H,b.scroll=C?C.time.bind(C):Ae,Ie=Ae(),b.vars=n,i=i||n.animation,"refreshPriority"in n&&(pd=1,n.refreshPriority===-9999&&(Xs=b)),z.tweenScroll=z.tweenScroll||{top:Ah(H,Tt),left:Ah(H,Qt)},b.tweenTo=ye=z.tweenScroll[P.p],b.scrubDuration=function(de){j=Qo(de)&&de,j?K?K.duration(de):K=me.to(i,{ease:"expo",totalProgress:"+=0",duration:j,paused:!0,onComplete:function(){return _&&_(b)}}):(K&&K.progress(1).kill(),K=0)},i&&(i.vars.lazy=!1,i._initted&&!b.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),b.animation=i.pause(),i.scrollTrigger=b,b.scrubDuration(h),D=0,l||(l=i.vars.id)),y&&((!rr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in ct.style&&me.set(R?[ct,jn]:H,{scrollBehavior:"auto"}),We.forEach(function(de){return en(de)&&de.target===(R?ft.scrollingElement||jn:H)&&(de.smooth=!1)}),le=en(y.snapTo)?y.snapTo:y.snapTo==="labels"?ay(i):y.snapTo==="labelsDirectional"?ly(i):y.directional!==!1?function(de,qe){return Pc(y.snapTo)(de,Jt()-_e<500?0:qe.direction)}:me.utils.snap(y.snapTo),ie=y.duration||{min:.1,max:2},ie=rr(ie)?Jr(ie.min,ie.max):Jr(ie,ie),be=me.delayedCall(y.delay||j/2||.1,function(){var de=Ae(),qe=Jt()-_e<500,Re=ye.tween;if((qe||Math.abs(b.getVelocity())<10)&&!Re&&!Ea&&re!==de){var ke=(de-se)/tt,E=i&&!G?i.totalProgress():ke,I=qe?0:(E-fe)/(Jt()-Jo)*1e3||0,V=me.utils.clamp(-ke,1-ke,Hr(I/2)*I/.185),O=ke+(y.inertia===!1?0:V),q=Jr(0,1,le(O,b)),ue=Math.round(se+q*tt),he=y,Le=he.onStart,pe=he.onInterrupt,Ne=he.onComplete;if(de<=Oe&&de>=se&&ue!==de){if(Re&&!Re._initted&&Re.data<=Hr(ue-de))return;y.inertia===!1&&(V=q-ke),ye(ue,{duration:ie(Hr(Math.max(Hr(O-E),Hr(q-E))*.185/I/.05||0)),ease:y.ease||"power3",data:Hr(ue-de),onInterrupt:function(){return be.restart(!0)&&pe&&pe(b)},onComplete:function(){b.update(),re=Ae(),D=fe=i&&!G?i.totalProgress():b.progress,x&&x(b),Ne&&Ne(b)}},de,V*tt,ue-de-V*tt),Le&&Le(b,ye.tween)}}else b.isActive&&re!==de&&be.restart(!0)}).pause()),l&&(ec[l]=b),f=b.trigger=rn(f||m!==!0&&m),Je=f&&f._gsap&&f._gsap.stRevert,Je&&(Je=Je(b)),m=m===!0?f:rn(m),yn(s)&&(s={targets:f,className:s}),m&&(g===!1||g===In||(g=!g&&m.parentNode&&m.parentNode.style&&Fn(m.parentNode).display==="flex"?!1:Mt),b.pin=m,ge=me.core.getCache(m),ge.spacer?L=ge.pinState:(A&&(A=rn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),ge.spacerIsNative=!!A,A&&(ge.spacerState=Ho(A))),ge.spacer=ee=A||ft.createElement("div"),ee.classList.add("pin-spacer"),l&&ee.classList.add("pin-spacer-"+l),ge.pinState=L=Ho(m)),n.force3D!==!1&&me.set(m,{force3D:!0}),b.spacer=ee=ge.spacer,Xe=Fn(m),Me=Xe[g+P.os2],oe=me.getProperty(m),we=me.quickSetter(m,P.a,Ot),Sl(m,ee,Xe),$=Ho(m)),U){Ge=rr(U)?Mh(U,Sh):Sh,k=Vo("scroller-start",l,H,P,Ge,0),Qe=Vo("scroller-end",l,H,P,Ge,0,k),ne=k["offset"+P.op.d2];var Ce=rn(Hi(H,"content")||H);et=this.markerStart=Vo("start",l,Ce,P,Ge,ne,0,C),Ke=this.markerEnd=Vo("end",l,Ce,P,Ge,ne,0,C),C&&(qt=me.quickSetter([et,Ke],P.a,Ot)),!B&&!(si.length&&Hi(H,"fixedMarkers")===!0)&&(oy(R?ct:H),me.set([k,Qe],{force3D:!0}),ve=me.quickSetter(k,P.a,Ot),Fe=me.quickSetter(Qe,P.a,Ot))}if(C){var xe=C.vars.onUpdate,Ze=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){b.update(0,0,1),xe&&xe.apply(C,Ze||[])})}if(b.previous=function(){return Be[Be.indexOf(b)-1]},b.next=function(){return Be[Be.indexOf(b)+1]},b.revert=function(de,qe){if(!qe)return b.kill(!0);var Re=de!==!1||!b.enabled,ke=Vt;Re!==b.isReverted&&(Re&&(Ve=Math.max(Ae(),b.scroll.rec||0),X=b.progress,it=i&&i.progress()),et&&[et,Ke,k,Qe].forEach(function(E){return E.style.display=Re?"none":"block"}),Re&&(Vt=b,b.update(Re)),m&&(!M||!b.isActive)&&(Re?hy(m,ee,L):Sl(m,ee,Fn(m),Se)),Re||b.update(Re),Vt=ke,b.isReverted=Re)},b.refresh=function(de,qe,Re,ke){if(!((Vt||!b.enabled)&&!qe)){if(m&&de&&Bn){Pt(a,"scrollEnd",Ed);return}!Kt&&J&&J(b),Vt=b,ye.tween&&!Re&&(ye.tween.kill(),ye.tween=0),K&&K.pause(),d&&i&&i.revert({kill:!1}).invalidate(),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var E=Q(),I=te(),V=C?C.duration():Mi(H,P),O=tt<=.01,q=0,ue=ke||0,he=rr(Re)?Re.end:n.end,Le=n.endTrigger||f,pe=rr(Re)?Re.start:n.start||(n.start===0||!f?0:m?"0 0":"0 100%"),Ne=b.pinnedContainer=n.pinnedContainer&&rn(n.pinnedContainer,b),ze=f&&Math.max(0,Be.indexOf(b))||0,De=ze,Ue,ut,tn,Hn,ot,Pe,Ft,ht,Yt,nn,kt,li,xt;for(U&&rr(Re)&&(li=me.getProperty(k,P.p),xt=me.getProperty(Qe,P.p));De--;)Pe=Be[De],Pe.end||Pe.refresh(0,1)||(Vt=b),Ft=Pe.pin,Ft&&(Ft===f||Ft===m||Ft===Ne)&&!Pe.isReverted&&(nn||(nn=[]),nn.unshift(Pe),Pe.revert(!0,!0)),Pe!==Be[De]&&(ze--,De--);for(en(pe)&&(pe=pe(b)),pe=_h(pe,"start",b),se=Th(pe,f,E,P,Ae(),et,k,b,I,F,B,V,C,b._startClamp&&"_startClamp")||(m?-.001:0),en(he)&&(he=he(b)),yn(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(yn(pe)?pe.split(" ")[0]:"")+he:(q=ea(he.substr(2),E),he=yn(pe)?pe:(C?me.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,se):se)+q,Le=f)),he=_h(he,"end",b),Oe=Math.max(se,Th(he||(Le?"100% 0":V),Le,E,P,Ae()+q,Ke,Qe,b,I,F,B,V,C,b._endClamp&&"_endClamp"))||-.001,q=0,De=ze;De--;)Pe=Be[De],Ft=Pe.pin,Ft&&Pe.start-Pe._pinPush<=se&&!C&&Pe.end>0&&(Ue=Pe.end-(b._startClamp?Math.max(0,Pe.start):Pe.start),(Ft===f&&Pe.start-Pe._pinPush<se||Ft===Ne)&&isNaN(pe)&&(q+=Ue*(1-Pe.progress)),Ft===m&&(ue+=Ue));if(se+=q,Oe+=q,b._startClamp&&(b._startClamp+=q),b._endClamp&&!Kt&&(b._endClamp=Oe||-.001,Oe=Math.min(Oe,Mi(H,P))),tt=Oe-se||(se-=.01)&&.001,O&&(X=me.utils.clamp(0,1,me.utils.normalize(se,Oe,Ve))),b._pinPush=ue,et&&q&&(Ue={},Ue[P.a]="+="+q,Ne&&(Ue[P.p]="-="+Ae()),me.set([et,Ke],Ue)),m)Ue=Fn(m),Hn=P===Tt,tn=Ae(),ce=parseFloat(oe(P.a))+ue,!V&&Oe>1&&(kt=(R?ft.scrollingElement||jn:H).style,kt={style:kt,value:kt["overflow"+P.a.toUpperCase()]},R&&Fn(ct)["overflow"+P.a.toUpperCase()]!=="scroll"&&(kt.style["overflow"+P.a.toUpperCase()]="scroll")),Sl(m,ee,Ue),$=Ho(m),ut=vi(m,!0),ht=B&&Yi(H,Hn?Qt:Tt)(),g&&(Se=[g+P.os2,tt+ue+Ot],Se.t=ee,De=g===Mt?Ql(m,P)+tt+ue:0,De&&Se.push(P.d,De+Ot),os(Se),Ne&&Be.forEach(function(fn){fn.pin===Ne&&fn.vars.pinSpacing!==!1&&(fn._subPinOffset=!0)}),B&&Ae(Ve)),B&&(ot={top:ut.top+(Hn?tn-se:ht)+Ot,left:ut.left+(Hn?ht:tn-se)+Ot,boxSizing:"border-box",position:"fixed"},ot[_r]=ot["max"+_s]=Math.ceil(ut.width)+Ot,ot[vr]=ot["max"+Lc]=Math.ceil(ut.height)+Ot,ot[In]=ot[In+Hs]=ot[In+Gs]=ot[In+Ws]=ot[In+Vs]="0",ot[Mt]=Ue[Mt],ot[Mt+Hs]=Ue[Mt+Hs],ot[Mt+Gs]=Ue[Mt+Gs],ot[Mt+Ws]=Ue[Mt+Ws],ot[Mt+Vs]=Ue[Mt+Vs],T=dy(L,ot,M),Kt&&Ae(0)),i?(Yt=i._initted,_l(1),i.render(i.duration(),!0,!0),Z=oe(P.a)-ce+tt+ue,Ee=Math.abs(tt-Z)>1,B&&Ee&&T.splice(T.length-2,2),i.render(0,!0,!0),Yt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),_l(0)):Z=tt,kt&&(kt.value?kt.style["overflow"+P.a.toUpperCase()]=kt.value:kt.style.removeProperty("overflow-"+P.a));else if(f&&Ae()&&!C)for(ut=f.parentNode;ut&&ut!==ct;)ut._pinOffset&&(se-=ut._pinOffset,Oe-=ut._pinOffset),ut=ut.parentNode;nn&&nn.forEach(function(fn){return fn.revert(!1,!0)}),b.start=se,b.end=Oe,Ie=Te=Kt?Ve:Ae(),!C&&!Kt&&(Ie<Ve&&Ae(Ve),b.scroll.rec=0),b.revert(!1,!0),_e=Jt(),be&&(re=-1,be.restart(!0)),Vt=0,i&&G&&(i._initted||it)&&i.progress()!==it&&i.progress(it||0,!0).render(i.time(),!0,!0),(O||X!==b.progress||C)&&(i&&!G&&i.totalProgress(C&&se<-.001&&!X?me.utils.normalize(se,Oe,0):X,!0),b.progress=O||(Ie-se)/tt===X?0:X),m&&g&&(ee._pinOffset=Math.round(b.progress*Z)),K&&K.invalidate(),isNaN(li)||(li-=me.getProperty(k,P.p),xt-=me.getProperty(Qe,P.p),Wo(k,P,li),Wo(et,P,li-(ke||0)),Wo(Qe,P,xt),Wo(Ke,P,xt-(ke||0))),O&&!Kt&&b.update(),u&&!Kt&&!It&&(It=!0,u(b),It=!1)}},b.getVelocity=function(){return(Ae()-Te)/(Jt()-Jo)*1e3||0},b.endAnimation=function(){Ts(b.callbackAnimation),i&&(K?K.progress(1):i.paused()?G||Ts(i,b.direction<0,1):Ts(i,i.reversed()))},b.labelToScroll=function(de){return i&&i.labels&&(se||b.refresh()||se)+i.labels[de]/i.duration()*tt||0},b.getTrailing=function(de){var qe=Be.indexOf(b),Re=b.direction>0?Be.slice(0,qe).reverse():Be.slice(qe+1);return(yn(de)?Re.filter(function(ke){return ke.vars.preventOverlaps===de}):Re).filter(function(ke){return b.direction>0?ke.end<=se:ke.start>=Oe})},b.update=function(de,qe,Re){if(!(C&&!Re&&!de)){var ke=Kt===!0?Ve:b.scroll(),E=de?0:(ke-se)/tt,I=E<0?0:E>1?1:E||0,V=b.progress,O,q,ue,he,Le,pe,Ne,ze;if(qe&&(Te=Ie,Ie=C?Ae():ke,y&&(fe=D,D=i&&!G?i.totalProgress():I)),p&&!I&&m&&!Vt&&!No&&Bn&&se<ke+(ke-Te)/(Jt()-Jo)*p&&(I=1e-4),I!==V&&b.enabled){if(O=b.isActive=!!I&&I<1,q=!!V&&V<1,pe=O!==q,Le=pe||!!I!=!!V,b.direction=I>V?1:-1,b.progress=I,Le&&!Vt&&(ue=I&&!V?0:I===1?1:V===1?2:3,G&&(he=!pe&&W[ue+1]!=="none"&&W[ue+1]||W[ue],ze=i&&(he==="complete"||he==="reset"||he in i))),w&&(pe||ze)&&(ze||h||!i)&&(en(w)?w(b):b.getTrailing(w).forEach(function(tn){return tn.endAnimation()})),G||(K&&!Vt&&!No?(K._dp._time-K._start!==K._time&&K.render(K._dp._time-K._start),K.resetTo?K.resetTo("totalProgress",I,i._tTime/i._tDur):(K.vars.totalProgress=I,K.invalidate().restart())):i&&i.totalProgress(I,!!(Vt&&(_e||de)))),m){if(de&&g&&(ee.style[g+P.os2]=Me),!B)we(Ds(ce+Z*I));else if(Le){if(Ne=!de&&I>V&&Oe+1>ke&&ke+1>=Mi(H,P),M)if(!de&&(O||Ne)){var De=vi(m,!0),Ue=ke-se;Eh(m,ct,De.top+(P===Tt?Ue:0)+Ot,De.left+(P===Tt?0:Ue)+Ot)}else Eh(m,ee);os(O||Ne?T:$),Ee&&I<1&&O||we(ce+(I===1&&!Ne?Z:0))}}y&&!ye.tween&&!Vt&&!No&&be.restart(!0),s&&(pe||S&&I&&(I<1||!vl))&&ma(s.targets).forEach(function(tn){return tn.classList[O||S?"add":"remove"](s.className)}),o&&!G&&!de&&o(b),Le&&!Vt?(G&&(ze&&(he==="complete"?i.pause().totalProgress(1):he==="reset"?i.restart(!0).pause():he==="restart"?i.restart(!0):i[he]()),o&&o(b)),(pe||!vl)&&(c&&pe&&yl(b,c),Y[ue]&&yl(b,Y[ue]),S&&(I===1?b.kill(!1,1):Y[ue]=0),pe||(ue=I===1?1:3,Y[ue]&&yl(b,Y[ue]))),v&&!O&&Math.abs(b.getVelocity())>(Qo(v)?v:2500)&&(Ts(b.callbackAnimation),K?K.progress(1):Ts(i,he==="reverse"?1:!I,1))):G&&o&&!Vt&&o(b)}if(Fe){var ut=C?ke/C.duration()*(C._caScrollDist||0):ke;ve(ut+(k._isFlipped?1:0)),Fe(ut)}qt&&qt(-ke/C.duration()*(C._caScrollDist||0))}},b.enable=function(de,qe){b.enabled||(b.enabled=!0,Pt(H,"resize",Is),R||Pt(H,"scroll",Wr),J&&Pt(a,"refreshInit",J),de!==!1&&(b.progress=X=0,Ie=Te=re=Ae()),qe!==!1&&b.refresh())},b.getTween=function(de){return de&&ye?ye.tween:K},b.setPositions=function(de,qe,Re,ke){if(C){var E=C.scrollTrigger,I=C.duration(),V=E.end-E.start;de=E.start+V*de/I,qe=E.start+V*qe/I}b.refresh(!1,!1,{start:vh(de,Re&&!!b._startClamp),end:vh(qe,Re&&!!b._endClamp)},ke),b.update()},b.adjustPinSpacing=function(de){if(Se&&de){var qe=Se.indexOf(P.d)+1;Se[qe]=parseFloat(Se[qe])+de+Ot,Se[1]=parseFloat(Se[1])+de+Ot,os(Se)}},b.disable=function(de,qe){if(b.enabled&&(de!==!1&&b.revert(!0,!0),b.enabled=b.isActive=!1,qe||K&&K.pause(),Ve=0,ge&&(ge.uncache=1),J&&Lt(a,"refreshInit",J),be&&(be.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!R)){for(var Re=Be.length;Re--;)if(Be[Re].scroller===H&&Be[Re]!==b)return;Lt(H,"resize",Is),R||Lt(H,"scroll",Wr)}},b.kill=function(de,qe){b.disable(de,qe),K&&!qe&&K.kill(),l&&delete ec[l];var Re=Be.indexOf(b);Re>=0&&Be.splice(Re,1),Re===Zt&&na>0&&Zt--,Re=0,Be.forEach(function(ke){return ke.scroller===b.scroller&&(Re=1)}),Re||Kt||(b.scroll.rec=0),i&&(i.scrollTrigger=null,de&&i.revert({kill:!1}),qe||i.kill()),et&&[et,Ke,k,Qe].forEach(function(ke){return ke.parentNode&&ke.parentNode.removeChild(ke)}),Xs===b&&(Xs=0),m&&(ge&&(ge.uncache=1),Re=0,Be.forEach(function(ke){return ke.pin===m&&Re++}),Re||(ge.spacer=0)),n.onKill&&n.onKill(b)},Be.push(b),b.enable(!1,!1),Je&&Je(b),i&&i.add&&!tt){var st=b.update;b.update=function(){b.update=st,se||Oe||b.refresh()},me.delayedCall(.01,b.update),tt=.01,se=Oe=0}else b.refresh();m&&uy()},a.register=function(n){return qr||(me=n||yd(),xd()&&window.document&&a.enable(),qr=Rs),qr},a.defaults=function(n){if(n)for(var i in n)Go[i]=n[i];return Go},a.disable=function(n,i){Rs=0,Be.forEach(function(o){return o[i?"kill":"disable"](n)}),Lt($e,"wheel",Wr),Lt(ft,"scroll",Wr),clearInterval(zo),Lt(ft,"touchcancel",Jn),Lt(ct,"touchstart",Jn),ko(Lt,ft,"pointerdown,touchstart,mousedown",xh),ko(Lt,ft,"pointerup,touchend,mouseup",yh),pa.kill(),Uo(Lt);for(var r=0;r<We.length;r+=3)Bo(Lt,We[r],We[r+1]),Bo(Lt,We[r],We[r+2])},a.enable=function(){if($e=window,ft=document,jn=ft.documentElement,ct=ft.body,me&&(ma=me.utils.toArray,Jr=me.utils.clamp,Jl=me.core.context||Jn,_l=me.core.suppressOverwrites||Jn,Tc=$e.history.scrollRestoration||"auto",tc=$e.pageYOffset,me.core.globals("ScrollTrigger",a),ct)){Rs=1,ss=document.createElement("div"),ss.style.height="100vh",ss.style.position="absolute",Ld(),iy(),bt.register(me),a.isTouch=bt.isTouch,Ii=bt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Pt($e,"wheel",Wr),dd=[$e,ft,jn,ct],me.matchMedia?(a.matchMedia=function(l){var c=me.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},me.addEventListener("matchMediaInit",function(){return Rc()}),me.addEventListener("matchMediaRevert",function(){return Ad()}),me.addEventListener("matchMedia",function(){ur(0,1),Er("matchMedia")}),me.matchMedia("(orientation: portrait)",function(){return Ml(),Ml})):console.warn("Requires GSAP 3.11.0 or later"),Ml(),Pt(ft,"scroll",Wr);var n=ct.style,i=n.borderTopStyle,r=me.core.Animation.prototype,o,s;for(r.revert||Object.defineProperty(r,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=vi(ct),Tt.m=Math.round(o.top+Tt.sc())||0,Qt.m=Math.round(o.left+Qt.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),zo=setInterval(bh,250),me.delayedCall(.5,function(){return No=0}),Pt(ft,"touchcancel",Jn),Pt(ct,"touchstart",Jn),ko(Pt,ft,"pointerdown,touchstart,mousedown",xh),ko(Pt,ft,"pointerup,touchend,mouseup",yh),Kl=me.utils.checkPrefix("transform"),ia.push(Kl),qr=Jt(),pa=me.delayedCall(.2,ur).pause(),Yr=[ft,"visibilitychange",function(){var l=$e.innerWidth,c=$e.innerHeight;ft.hidden?(mh=l,gh=c):(mh!==l||gh!==c)&&Is()},ft,"DOMContentLoaded",ur,$e,"load",ur,$e,"resize",Is],Uo(Pt),Be.forEach(function(l){return l.enable(0,1)}),s=0;s<We.length;s+=3)Bo(Lt,We[s],We[s+1]),Bo(Lt,We[s],We[s+2])}},a.config=function(n){"limitCallbacks"in n&&(vl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(zo)||(zo=i)&&setInterval(bh,i),"ignoreMobileResize"in n&&(gd=a.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Uo(Lt)||Uo(Pt,n.autoRefreshEvents||"none"),md=(n.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(n,i){var r=rn(n),o=We.indexOf(r),s=wr(r);~o&&We.splice(o,s?6:2),i&&(s?si.unshift($e,i,ct,i,jn,i):si.unshift(r,i))},a.clearMatchMedia=function(n){Be.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},a.isInViewport=function(n,i,r){var o=(yn(n)?rn(n):n).getBoundingClientRect(),s=o[r?_r:vr]*i||0;return r?o.right-s>0&&o.left+s<$e.innerWidth:o.bottom-s>0&&o.top+s<$e.innerHeight},a.positionInViewport=function(n,i,r){yn(n)&&(n=rn(n));var o=n.getBoundingClientRect(),s=o[r?_r:vr],l=i==null?s/2:i in ga?ga[i]*s:~i.indexOf("%")?parseFloat(i)*s/100:parseFloat(i)||0;return r?(o.left+l)/$e.innerWidth:(o.top+l)/$e.innerHeight},a.killAll=function(n){if(Be.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Tr.killAll||[];Tr={},i.forEach(function(r){return r()})}},a}();Ye.version="3.12.2";Ye.saveStyles=function(a){return a?ma(a).forEach(function(e){if(e&&e.style){var t=xn.indexOf(e);t>=0&&xn.splice(t,5),xn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),me.core.getCache(e),Jl())}}):xn};Ye.revert=function(a,e){return Rc(!a,e)};Ye.create=function(a,e){return new Ye(a,e)};Ye.refresh=function(a){return a?Is():(qr||Ye.register())&&ur(!0)};Ye.update=function(a){return++We.cache&&bi(a===!0?2:0)};Ye.clearScrollMemory=Cd;Ye.maxScroll=function(a,e){return Mi(a,e?Qt:Tt)};Ye.getScrollFunc=function(a,e){return Yi(rn(a),e?Qt:Tt)};Ye.getById=function(a){return ec[a]};Ye.getAll=function(){return Be.filter(function(a){return a.vars.id!=="ScrollSmoother"})};Ye.isScrolling=function(){return!!Bn};Ye.snapDirectional=Pc;Ye.addEventListener=function(a,e){var t=Tr[a]||(Tr[a]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(a,e){var t=Tr[a],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ye.batch=function(a,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],f=[],m=me.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||m.restart(!0),h.push(g.trigger),f.push(g),r<=h.length&&m.progress(1)}},s;for(s in e)n[s]=s.substr(0,2)==="on"&&en(e[s])&&s!=="onRefreshInit"?o(s,e[s]):e[s];return en(r)&&(r=r(),Pt(Ye,"refresh",function(){return r=e.batchMax()})),ma(a).forEach(function(l){var c={};for(s in n)c[s]=n[s];c.trigger=l,t.push(Ye.create(c))}),t};var Ch=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},bl=function a(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(bt.isTouch?" pinch-zoom":""):"none",e===jn&&a(ct,t)},Xo={auto:1,scroll:1},my=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||me.core.getCache(r),s=Jt(),l;if(!o._isScrollT||s-o._isScrollT>2e3){for(;r&&r!==ct&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Xo[(l=Fn(r)).overflowY]||Xo[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!wr(r)&&(Xo[(l=Fn(r)).overflowY]||Xo[l.overflowX]),o._isScrollT=s}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Rd=function(e,t,n,i){return bt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&my,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Pt(ft,bt.eventTypes[0],Ph,!1,!0)},onDisable:function(){return Lt(ft,bt.eventTypes[0],Ph,!0)}})},gy=/(input|label|select|textarea)/i,Lh,Ph=function(e){var t=gy.test(e.target.tagName);(t||Lh)&&(e._gsapAllow=!0,Lh=t)},_y=function(e){rr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,s,l,c=rn(e.target)||jn,u=me.core.globals().ScrollSmoother,h=u&&u.get(),f=Ii&&(e.content&&rn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),m=Yi(c,Tt),g=Yi(c,Qt),d=1,p=(bt.isTouch&&$e.visualViewport?$e.visualViewport.scale*$e.visualViewport.width:$e.outerWidth)/$e.innerWidth,_=0,x=en(i)?function(){return i(s)}:function(){return i||2.8},S,y,M=Rd(c,e.type,!0,r),A=function(){return y=!1},C=Jn,v=Jn,w=function(){l=Mi(c,Tt),v=Jr(Ii?1:0,l),n&&(C=Jr(0,Mi(c,Qt))),S=xr},P=function(){f._gsap.y=Ds(parseFloat(f._gsap.y)+m.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",m.offset=m.cacheID=0},G=function(){if(y){requestAnimationFrame(A);var U=Ds(s.deltaY/2),F=v(m.v-U);if(f&&F!==m.v+m.offset){m.offset=F-m.v;var b=Ds((parseFloat(f&&f._gsap.y)||0)-m.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",f._gsap.y=b+"px",m.cacheID=We.cache,bi()}return!0}m.offset&&P(),y=!0},H,z,R,B,Y=function(){w(),H.isActive()&&H.vars.scrollY>l&&(m()>l?H.progress(1)&&m(l):H.resetTo("scrollY",l))};return f&&me.set(f,{y:"+=0"}),e.ignoreCheck=function(W){return Ii&&W.type==="touchmove"&&G()||d>1.05&&W.type!=="touchstart"||s.isGesturing||W.touches&&W.touches.length>1},e.onPress=function(){y=!1;var W=d;d=Ds(($e.visualViewport&&$e.visualViewport.scale||1)/p),H.pause(),W!==d&&bl(c,d>1.01?!0:n?!1:"x"),z=g(),R=m(),w(),S=xr},e.onRelease=e.onGestureStart=function(W,U){if(m.offset&&P(),!U)B.restart(!0);else{We.cache++;var F=x(),b,J;n&&(b=g(),J=b+F*.05*-W.velocityX/.227,F*=Ch(g,b,J,Mi(c,Qt)),H.vars.scrollX=C(J)),b=m(),J=b+F*.05*-W.velocityY/.227,F*=Ch(m,b,J,Mi(c,Tt)),H.vars.scrollY=v(J),H.invalidate().duration(F).play(.01),(Ii&&H.vars.scrollY>=l||b>=l-1)&&me.to({},{onUpdate:Y,duration:F})}o&&o(W)},e.onWheel=function(){H._ts&&H.pause(),Jt()-_>1e3&&(S=0,_=Jt())},e.onChange=function(W,U,F,b,J){if(xr!==S&&w(),U&&n&&g(C(b[2]===U?z+(W.startX-W.x):g()+U-b[1])),F){m.offset&&P();var Q=J[2]===F,te=Q?R+W.startY-W.y:m()+F-J[1],re=v(te);Q&&te!==re&&(R+=re-te),m(re)}(F||U)&&bi()},e.onEnable=function(){bl(c,n?!1:"x"),Ye.addEventListener("refresh",Y),Pt($e,"resize",Y),m.smooth&&(m.target.style.scrollBehavior="auto",m.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){bl(c,!0),Lt($e,"resize",Y),Ye.removeEventListener("refresh",Y),M.kill()},e.lockAxis=e.lockAxis!==!1,s=new bt(e),s.iOS=Ii,Ii&&!m()&&m(1),Ii&&me.ticker.add(Jn),B=s._dc,H=me.to(s,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Pd(m,m(),function(){return H.pause()})},onUpdate:bi,onComplete:B.vars.onComplete}),s};Ye.sort=function(a){return Be.sort(a||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(a){return new bt(a)};Ye.normalizeScroll=function(a){if(typeof a>"u")return vn;if(a===!0&&vn)return vn.enable();if(a===!1)return vn&&vn.kill();var e=a instanceof bt?a:_y(a);return vn&&vn.target===e.target&&vn.kill(),wr(e.target)&&(vn=e),e};Ye.core={_getVelocityProp:Zl,_inputObserver:Rd,_scrollers:We,_proxies:si,bridge:{ss:function(){Bn||Er("scrollStart"),Bn=Jt()},ref:function(){return Vt}}};yd()&&me.registerPlugin(Ye);wc.registerPlugin(Ye);class vy{constructor(e){this.stage=e,this.geometry,this.material,this.mesh,this.loader=new Ov,this.mouse=new nt(0,0),this.width=window.innerWidth,this.height=window.innerHeight}_init(){this.createMesh(),this.scrollAnimated()}createMesh(){const e={x:2,y:2},t=this.loader.load("./img01.jpg"),n=this.loader.load("./img02.jpg"),i=this.loader.load("./img03.jpg");this.disp=this.loader.load("./noise.jpeg");const r={uResolution:{value:new nt(this.width,this.height)},uImageResolution:{value:new nt(2048,1356)},uTexture:{value:t},uNextTexture:{value:n},uFinalTexture:{value:i},disp:{value:this.disp},uChangeTransition:{value:0},uChangeTransition02:{value:0},uTime:{value:0},uAmplitude:{value:1},uBounce:{value:new nt(0,0)}};this.geometry=new Ma(e.x,e.y,100,100),this.material=new Wi({uniforms:r,vertexShader:kv,fragmentShader:Bv}),this.mesh=new xi(this.geometry,this.material),this.stage.scene.add(this.mesh)}createAnimation(e,t,n,i){wc.to(e,{value:n,scrollTrigger:{trigger:t,start:"top top",end:()=>`+=${window.innerHeight}px`,scrub:!0,invalidateOnRefresh:!0}})}scrollAnimated(){const e={duration:3};this.createAnimation(this.mesh.material.uniforms.uChangeTransition,"#sec01",1,e.duration),this.createAnimation(this.mesh.material.uniforms.uChangeTransition,"#sec02",1.5,e.duration),this.createAnimation(this.mesh.material.uniforms.uChangeTransition02,"#sec02",1,e.duration)}onLoop(){this.mesh.material.uniforms.uTime.value+=.001}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.mesh.material.uniforms.uResolution.value.set(this.width,this.height)}}function Rh(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,typeof(i=function(r,o){if(typeof r!="object"||r===null)return r;var s=r[Symbol.toPrimitive];if(s!==void 0){var l=s.call(r,"string");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(n.key))=="symbol"?i:String(i),n)}var i}function Dd(a,e,t){return e&&Rh(a.prototype,e),t&&Rh(a,t),Object.defineProperty(a,"prototype",{writable:!1}),a}function ic(){return ic=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},ic.apply(this,arguments)}function _a(a,e,t){return Math.max(a,Math.min(e,t))}var xy=function(){function a(){}var e=a.prototype;return e.advance=function(t){var n,i,r,o;if(this.isRunning){var s=!1;if(this.lerp)this.value=(i=this.value,r=this.to,(1-(o=1-Math.exp(-60*this.lerp*t)))*i+o*r),Math.round(this.value)===this.to&&(this.value=this.to,s=!0);else{this.currentTime+=t;var l=_a(0,this.currentTime/this.duration,1),c=(s=l>=1)?1:this.easing(l);this.value=this.from+(this.to-this.from)*c}(n=this.onUpdate)==null||n.call(this,this.value,{completed:s}),s&&this.stop()}},e.stop=function(){this.isRunning=!1},e.fromTo=function(t,n,i){var r=i.lerp,o=r===void 0?.1:r,s=i.duration,l=s===void 0?1:s,c=i.easing,u=c===void 0?function(f){return f}:c,h=i.onUpdate;this.from=this.value=t,this.to=n,this.lerp=o,this.duration=l,this.easing=u,this.currentTime=0,this.isRunning=!0,this.onUpdate=h},a}(),yy=function(){function a(e){var t,n,i=this,r=e===void 0?{}:e,o=r.wrapper,s=r.content,l=r.autoResize,c=l===void 0||l;if(this.resize=function(){i.onWrapperResize(),i.onContentResize()},this.onWrapperResize=function(){i.wrapper===window?(i.width=window.innerWidth,i.height=window.innerHeight):(i.width=i.wrapper.clientWidth,i.height=i.wrapper.clientHeight)},this.onContentResize=function(){i.scrollHeight=i.content.scrollHeight,i.scrollWidth=i.content.scrollWidth},this.wrapper=o,this.content=s,c){var u=(t=this.resize,function(){var h=arguments,f=this;clearTimeout(n),n=setTimeout(function(){t.apply(f,h)},250)});this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(u),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(u),this.contentResizeObserver.observe(this.content)}this.resize()}return a.prototype.destroy=function(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect()},Dd(a,[{key:"limit",get:function(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}]),a}(),Id=function(){function a(){this.events={}}var e=a.prototype;return e.emit=function(t){for(var n=this.events[t]||[],i=0,r=n.length;i<r;i++)n[i].apply(n,[].slice.call(arguments,1))},e.on=function(t,n){var i,r=this;return(i=this.events[t])!=null&&i.push(n)||(this.events[t]=[n]),function(){var o;r.events[t]=(o=r.events[t])==null?void 0:o.filter(function(s){return n!==s})}},e.destroy=function(){this.events={}},a}(),My=function(){function a(t,n){var i=this,r=n.wheelMultiplier,o=r===void 0?1:r,s=n.touchMultiplier,l=s===void 0?2:s,c=n.normalizeWheel,u=c!==void 0&&c;this.onTouchStart=function(h){var f=h.targetTouches?h.targetTouches[0]:h,m=f.clientY;i.touchStart.x=f.clientX,i.touchStart.y=m,i.lastDelta={x:0,y:0}},this.onTouchMove=function(h){var f=h.targetTouches?h.targetTouches[0]:h,m=f.clientX,g=f.clientY,d=-(m-i.touchStart.x)*i.touchMultiplier,p=-(g-i.touchStart.y)*i.touchMultiplier;i.touchStart.x=m,i.touchStart.y=g,i.lastDelta={x:d,y:p},i.emitter.emit("scroll",{type:"touch",deltaX:d,deltaY:p,event:h})},this.onTouchEnd=function(h){i.emitter.emit("scroll",{type:"touch",inertia:!0,deltaX:i.lastDelta.x,deltaY:i.lastDelta.y,event:h})},this.onWheel=function(h){var f=h.deltaX,m=h.deltaY;i.normalizeWheel&&(f=_a(-100,f,100),m=_a(-100,m,100)),i.emitter.emit("scroll",{type:"wheel",deltaX:f*=i.wheelMultiplier,deltaY:m*=i.wheelMultiplier,event:h})},this.element=t,this.wheelMultiplier=o,this.touchMultiplier=l,this.normalizeWheel=u,this.touchStart={x:null,y:null},this.emitter=new Id,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}var e=a.prototype;return e.on=function(t,n){return this.emitter.on(t,n)},e.destroy=function(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})},a}(),Sy=function(){function a(t){var n=this,i=t===void 0?{}:t,r=i.wrapper,o=r===void 0?window:r,s=i.content,l=s===void 0?document.documentElement:s,c=i.wheelEventsTarget,u=c===void 0?o:c,h=i.smoothWheel,f=h===void 0||h,m=i.smoothTouch,g=m!==void 0&&m,d=i.syncTouch,p=d!==void 0&&d,_=i.syncTouchLerp,x=_===void 0?.1:_,S=i.__iosNoInertiaSyncTouchLerp,y=S===void 0?.4:S,M=i.touchInertiaMultiplier,A=M===void 0?35:M,C=i.duration,v=i.easing,w=v===void 0?function(X){return Math.min(1,1.001-Math.pow(2,-10*X))}:v,P=i.lerp,G=P===void 0?C&&.1:P,H=i.infinite,z=H!==void 0&&H,R=i.orientation,B=R===void 0?"vertical":R,Y=i.gestureOrientation,W=Y===void 0?"vertical":Y,U=i.touchMultiplier,F=U===void 0?1:U,b=i.wheelMultiplier,J=b===void 0?1:b,Q=i.normalizeWheel,te=Q!==void 0&&Q,re=i.autoResize,_e=re===void 0||re;this.onVirtualScroll=function(X){var Ae=X.type,ye=X.inertia,ge=X.deltaX,le=X.deltaY,Ie=X.event;if(!Ie.ctrlKey){var Te=Ae==="touch",se=Ae==="wheel";if(!(n.options.gestureOrientation==="vertical"&&le===0||n.options.gestureOrientation==="horizontal"&&ge===0||Te&&n.options.gestureOrientation==="vertical"&&n.scroll===0&&!n.options.infinite&&le<=0||Ie.composedPath().find(function(k){return(k==null||k.hasAttribute==null?void 0:k.hasAttribute("data-lenis-prevent"))||Te&&(k==null||k.hasAttribute==null?void 0:k.hasAttribute("data-lenis-prevent-touch"))||se&&(k==null||k.hasAttribute==null?void 0:k.hasAttribute("data-lenis-prevent-wheel"))})))if(n.isStopped||n.isLocked)Ie.preventDefault();else{if(n.isSmooth=(n.options.smoothTouch||n.options.syncTouch)&&Te||n.options.smoothWheel&&se,!n.isSmooth)return n.isScrolling=!1,void n.animate.stop();Ie.preventDefault();var Oe=le;n.options.gestureOrientation==="both"?Oe=Math.abs(le)>Math.abs(ge)?le:ge:n.options.gestureOrientation==="horizontal"&&(Oe=ge);var et=Te&&n.options.syncTouch,Ke=Te&&ye&&Math.abs(Oe)>1;Ke&&(Oe=n.velocity*n.options.touchInertiaMultiplier),n.scrollTo(n.targetScroll+Oe,ic({programmatic:!1},et&&{lerp:Ke?n.syncTouchLerp:n.options.__iosNoInertiaSyncTouchLerp}))}}},this.onScroll=function(){if(!n.isScrolling){var X=n.animatedScroll;n.animatedScroll=n.targetScroll=n.actualScroll,n.velocity=0,n.direction=Math.sign(n.animatedScroll-X),n.emit()}},window.lenisVersion="1.0.19",o!==document.documentElement&&o!==document.body||(o=window),this.options={wrapper:o,content:l,wheelEventsTarget:u,smoothWheel:f,smoothTouch:g,syncTouch:p,syncTouchLerp:x,__iosNoInertiaSyncTouchLerp:y,touchInertiaMultiplier:A,duration:C,easing:w,lerp:G,infinite:z,gestureOrientation:W,orientation:B,touchMultiplier:F,wheelMultiplier:J,normalizeWheel:te,autoResize:_e},this.dimensions=new yy({wrapper:o,content:l,autoResize:_e}),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=f||g,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new xy,this.emitter=new Id,this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new My(u,{touchMultiplier:F,wheelMultiplier:J,normalizeWheel:te}),this.virtualScroll.on("scroll",this.onVirtualScroll)}var e=a.prototype;return e.destroy=function(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.rootElement.classList.remove("lenis"),this.rootElement.classList.remove("lenis-smooth"),this.rootElement.classList.remove("lenis-scrolling"),this.rootElement.classList.remove("lenis-stopped")},e.on=function(t,n){return this.emitter.on(t,n)},e.off=function(t,n){var i;this.emitter.events[t]=(i=this.emitter.events[t])==null?void 0:i.filter(function(r){return n!==r})},e.setScroll=function(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t},e.resize=function(){this.dimensions.resize()},e.emit=function(){this.emitter.emit("scroll",this)},e.reset=function(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()},e.start=function(){this.isStopped=!1,this.reset()},e.stop=function(){this.isStopped=!0,this.animate.stop(),this.reset()},e.raf=function(t){var n=t-(this.time||t);this.time=t,this.animate.advance(.001*n)},e.scrollTo=function(t,n){var i=this,r=n===void 0?{}:n,o=r.offset,s=o===void 0?0:o,l=r.immediate,c=l!==void 0&&l,u=r.lock,h=u!==void 0&&u,f=r.duration,m=f===void 0?this.options.duration:f,g=r.easing,d=g===void 0?this.options.easing:g,p=r.lerp,_=p===void 0?!m&&this.options.lerp:p,x=r.onComplete,S=x===void 0?null:x,y=r.force,M=r.programmatic,A=M===void 0||M;if(!this.isStopped||y!==void 0&&y){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var C,v;if(typeof t=="string"?v=document.querySelector(t):(C=t)!=null&&C.nodeType&&(v=t),v){if(this.options.wrapper!==window){var w=this.options.wrapper.getBoundingClientRect();s-=this.isHorizontal?w.left:w.top}var P=v.getBoundingClientRect();t=(this.isHorizontal?P.left:P.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=s,t=Math.round(t),this.options.infinite?A&&(this.targetScroll=this.animatedScroll=this.scroll):t=_a(0,t,this.limit),c)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.emit(),void(S==null||S());if(!A){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:m,easing:d,lerp:_,onUpdate:function(G,H){var z=H.completed;h&&(i.isLocked=!0),i.isScrolling=!0,i.velocity=G-i.animatedScroll,i.direction=Math.sign(i.velocity),i.animatedScroll=G,i.setScroll(i.scroll),A&&(i.targetScroll=G),z&&(h&&(i.isLocked=!1),requestAnimationFrame(function(){i.isScrolling=!1}),i.velocity=0,S==null||S()),i.emit()}})}}},Dd(a,[{key:"rootElement",get:function(){return this.options.wrapper===window?this.options.content:this.options.wrapper}},{key:"limit",get:function(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}},{key:"isHorizontal",get:function(){return this.options.orientation==="horizontal"}},{key:"actualScroll",get:function(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}},{key:"scroll",get:function(){return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll;var t}},{key:"progress",get:function(){return this.limit===0?1:this.scroll/this.limit}},{key:"isSmooth",get:function(){return this.__isSmooth},set:function(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}},{key:"isScrolling",get:function(){return this.__isScrolling},set:function(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}},{key:"isStopped",get:function(){return this.__isStopped},set:function(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}]),a}();let Es,qo,Dh;function by(){Dh=new Sy({duration:2,smoothWheel:!0,smoothTouch:!0,wheelMultiplier:.5,touchMultiplier:.5,infinite:!1}),Es=new _n,qo=new vy(Es),Es._init(),qo._init(),window.addEventListener("resize",()=>{Es.onResize(),qo.onResize()});const a=e=>{requestAnimationFrame(a),Dh.raf(e),Es.onLoop(),qo.onLoop()};a()}window.addEventListener("DOMContentLoaded",by);
