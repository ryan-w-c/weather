let cdnScript = document.createElement('script');
cdnScript.src = `https://cdn.jsdelivr.net/npm/vanta/dist/vanta.birds.min.js`;
cdnScript.onload = () => {
    VANTA.BIRDS({
        el: "#vantaCanvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x52C2E8,
        color1: 0x000000,
        color2: 0x000000,
        speedLimit: 7.00,
        separation: 100.00,
        quantity: 3.00
    });
};
document.body.appendChild(cdnScript);