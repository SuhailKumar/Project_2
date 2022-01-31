var options = {
  opacityIn:[0,1],
  scaleIn:[0.2,1],
  scaleOut:3,
  durationIn:600,
  durationOut:400,
  delay:50,
  easing:"easeInExpo"
};
anime.timeline({loop:true})
.add({
  targets:'.text-animation .one',
  opacity:options.opacityIn,
  scale:options.scaleIn,
  duration:options.durationIn
})
.add({
  targets:'.text-animation .one',
  opacity:0,
  scale:options.scaleOut,
  easing:options.easing,
  duration:options.durationOut,
  delay:options.delay
})
.add({
  targets:'.text-animation .two',
  opacity:options.opacityIn,
  scale:options.scaleIn,
  duration:options.durationIn
})
.add({
  targets:'.text-animation .two',
  opacity:0,
  scale:options.scaleOut,
  easing:options.easing,
  duration:options.durationOut,
  delay:options.delay
})
.add({
  targets:'.text-animation .three',
  opacity:options.opacityIn,
  scale:options.scaleIn,
  duration:options.durationIn
})
.add({
  targets:'.text-animation .three',
  opacity:0,
  scale:options.scaleOut,
  easing:options.easing,
  duration:options.durationOut,
  delay:options.delay
})
.add({
  targets:'.text-animation .four',
  opacity:options.opacityIn,
  scale:options.scaleIn,
  duration:options.durationIn
})
.add({
  targets:'.text-animation .four',
  opacity:0,
  scale:options.scaleOut,
  easing:options.easing,
  duration:options.durationOut,
  delay:options.delay
})
.add({
  targets:'.text-animation .five',
  opacity:options.opacityIn,
  scale:options.scaleIn,
  duration:options.durationIn
})
.add({
  targets:'.text-animation .five',
  opacity:0,
  scale:options.scaleOut,
  easing:options.easing,
  duration:options.durationOut,
  delay:options.delay
})
.add({
  targets:'.text-animation .six',
  opacity:options.opacityIn,
  scale:options.scaleIn,
  duration:options.durationIn
})
.add({
  targets:'.text-animation .six',
  opacity:0,
  scale:options.scaleOut,
  easing:options.easing,
  duration:options.durationOut,
  delay:options.delay
})
.add({
  targets:'.text-animation .seven',
  opacity:options.opacityIn,
  scale:options.scaleIn,
  duration:options.durationIn
})
.add({
  targets:'.text-animation .seven',
  opacity:0,
  scale:options.scaleOut,
  easing:options.easing,
  duration:options.durationOut,
  delay:options.delay
})
.add({
  targets:'.text-animation .eight',
  opacity:options.opacityIn,
  scale:options.scaleIn,
  duration:options.durationIn
})
.add({
  targets:'.text-animation .eight',
  opacity:0,
  scale:options.scaleOut,
  easing:options.easing,
  duration:options.durationOut,
  delay:options.delay
})
.add({
  targets:'.text-animation .nine',
  opacity:options.opacityIn,
  scale:options.scaleIn,
  duration:options.durationIn
})
.add({
  targets:'.text-animation .nine',
  opacity:0,
  scale:options.scaleOut,
  easing:options.easing,
  duration:options.durationOut,
  delay:options.delay
})
.add({
  targets:'.text-animation',
  opacity:0,
  duration:100,
  delay:100
})