 uniform vec2 uResolution;
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
    float dist = distance(uv,dispVec) + dispClamp * sin(uTime * 10.0); //distance : x,yの距離


    vec2 changeVec = vec2(0.0, -1.0);//真下から真上にかけて変化させる

    vec2 distPos1 = uv + (dist * intensity * uChangeTransition) * changeVec;
    vec2 distPos2 = uv + (dist * -(intensity * (3.0 - ( 3.0 * uChangeTransition)))) * changeVec;
    vec2 distPos3 = uv + (dist * -(intensity * (3.0 - ( 3.0 * uChangeTransition02)))) * changeVec;


    vec4 texColorFirst = texture2D(uTexture, distPos1);
    vec4 texColorNext = texture2D(uNextTexture, distPos2);
    vec4 texColorFinal = texture2D(uFinalTexture, distPos3);

    vec4 firstTexture = mix(texColorFirst, texColorNext, uChangeTransition);
    vec4 finalTexture = mix(firstTexture, texColorFinal, uChangeTransition02);

    gl_FragColor = finalTexture;
}