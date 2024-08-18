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
    highlightColor: 0xcfcbc0,
    midtoneColor: 0x595959,
    lowlightColor: 0x6e6e6e,
    baseColor: 0x878787
  })
};
document.body.appendChild(cdnScript);