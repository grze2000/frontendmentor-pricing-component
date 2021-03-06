const style = document.createElement('style');
const progressColor = 'hsl(174, 77%, 80%)';
const backgroundColor = 'hsl(224, 65%, 95%)';
const slider = document.querySelector('.slider');

style.innerHTML = `.slider::-webkit-slider-runnable-track { background: linear-gradient(to right, ${progressColor} 0%, ${progressColor} 50%, ${backgroundColor} 50%, ${backgroundColor} 100%); }`;
document.querySelector('head').appendChild(style);

slider.addEventListener('input', function() {
  style.innerHTML = `.slider::-webkit-slider-runnable-track { background: linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${this.value}%, ${backgroundColor} ${this.value}%, ${backgroundColor} 100%); }`;
});