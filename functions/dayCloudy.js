cdnScript = document.createElement('script');
cdnScript.src = `https://cdn.jsdelivr.net/npm/vanta/dist/vanta.clouds.min.js`;
cdnScript.onload = () => {
    vantaEffect = VANTA.CLOUDS({
        el: "#vantaCanvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x1c64a4,
    });
};
document.body.appendChild(cdnScript);

