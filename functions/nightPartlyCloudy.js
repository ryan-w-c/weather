let cdnScript = document.createElement('script');
cdnScript.src = `https://cdn.jsdelivr.net/npm/vanta/dist/vanta.fog.min.js`;
cdnScript.onload = () => {
  VANTA.FOG({
    el: "#vantaCanvas",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: 0x181816,
    midtoneColor: 0x6b6b6b,
    lowlightColor: 0x151316,
    baseColor: 0x0,
    blurFactor: 0.59,
    zoom: 0.80
  });
};
document.body.appendChild(cdnScript);