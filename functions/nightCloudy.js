cdnScript = document.createElement('script');
cdnScript.src = `https://cdn.jsdelivr.net/npm/vanta/dist/vanta.clouds.min.js`;
cdnScript.onload = () => {
  vantaEffect = VANTA.CLOUDS({
    el: "#vantaCanvas",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    backgroundColor: 0x50505,
    skyColor: 0x0,
    sunColor: 0xffffff,
    sunGlareColor: 0xffffff,
    sunlightColor: 0xffffff
  });
};
document.body.appendChild(cdnScript);