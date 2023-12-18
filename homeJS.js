document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.getElementById('bubbles');
    for (let i = 0; i < 100; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.width = bubble.style.height = (Math.random() * 10) + 'px';
        bubble.style.left = (Math.random() * 100) + '%';
        bubble.style.bottom = (Math.random() * 100) + '%';
        bubblesContainer.appendChild(bubble);
    }
});

/* window.addEventListener('scroll', function() {
    const bubbles = document.getElementById('bubbles');
    const bubblesChildren = bubbles.children;
    for (let i = 0; i < bubblesChildren.length; i++) {
        bubblesChildren[i].style.transform = 'translateY(' + window.scrollY * -0.5 + 'px)';
    }
}); */
window.addEventListener('scroll', function() {
    const bubbles = document.getElementById('bubbles');
    bubbles.style.transform = 'translateY(' + window.scrollY * -0.2 + 'px)';    
});

window.addEventListener('scroll', function() {
    const clouds = document.querySelectorAll('.cloud1, .cloud2, .cloud3, .cloud4');
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].style.transform = 'translateX(' + window.scrollY * -0.2 + 'px)';
    }
});