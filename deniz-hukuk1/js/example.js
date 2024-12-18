let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Otomatik geçiş fonksiyonu
function autoMoveSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

// Manuel geçiş fonksiyonu
function moveSlide(step) {
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    updateSlider();
}

// Slider'ı güncelle
function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Otomatik geçişi başlat
setInterval(autoMoveSlide, 5000); // 5 saniyede bir slayt değişir
