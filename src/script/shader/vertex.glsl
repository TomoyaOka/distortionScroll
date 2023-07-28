 varying vec2 vUv;
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
  }