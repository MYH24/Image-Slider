// Array of image URLs
const images = [
    'https://picsum.photos/id/1018/800/400',
    'https://picsum.photos/id/1015/800/400',
    'https://picsum.photos/id/1019/800/400',
    'https://picsum.photos/id/1016/800/400',
    'https://picsum.photos/id/1020/800/400'
];

// Get DOM elements
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');

let currentIndex = 0;
let intervalId;

// Function to create image elements and dots
function createSlider() {
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Slide ${index + 1}`;
        slider.appendChild(img);

        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    updateSlider();
}

// Function to update slider position and active dot
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Function to go to a specific slide
function goToSlide(index) {
    currentIndex = index;
    updateSlider();
    resetInterval();
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
    resetInterval();
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
    resetInterval();
}

// Function to reset the automatic slideshow interval
function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000);
}

// Event listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Initialize slider
createSlider();
resetInterval();