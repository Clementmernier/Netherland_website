function toggleRectangle(rectId) {
    const rectangles = document.querySelectorAll('.rectangle');
    
    rectangles.forEach(rect => {
        if (rect.id === rectId) {
            rect.classList.toggle('active');
        } else {
            rect.classList.remove('active');
        }
    });
}
