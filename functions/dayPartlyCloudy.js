let cdnScript = document.createElement('script');
cdnScript.src = `https://cdn.jsdelivr.net/npm/vanta/dist/vanta.fog.min.js`;
cdnScript.onload = () => {
    VANTA.FOG({
        el: "#vantaCanvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x91cde6,
        midtoneColor: 0x38c4ff,
        lowlightColor: 0xb3ff,
        blurFactor: 0.50,
        zoom: 0.70
    });
};
document.body.appendChild(cdnScript);