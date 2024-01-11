document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('pic-1');
    let currentScroll = 0;

    window.addEventListener('scroll', () => {
        // Get the current scroll position
        const scrollY = window.scrollY;

        // Calculate the rotation angle
        const rotationAngle = scrollY; // Adjust as needed

        // Update the image's rotation
        image.style.transform = `rotate(${rotationAngle}deg)`;
    });
});

