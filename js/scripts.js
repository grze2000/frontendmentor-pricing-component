const style = document.createElement('style');
const progressColor = 'hsl(174, 77%, 80%)';
const backgroundColor = 'hsl(224, 65%, 95%)';
const slider = document.querySelector('.slider');
const views = document.querySelector('.views-value');
const price = document.querySelector('.price-value');
const billing = document.querySelector('.switch__checkbox');

style.innerHTML = `.slider::-webkit-slider-runnable-track { background: linear-gradient(to right, ${progressColor} 0%, ${progressColor} 50%, ${backgroundColor} 50%, ${backgroundColor} 100%); }`;
document.querySelector('head').appendChild(style);

const updatePrice = () => {
  price.innerText = `$${(slider.value*0.16*(billing.checked ? 0.75 : 1)).toFixed(2)}`;
}

slider.addEventListener('input', function() {
  const val = (this.value - this.min) / (this.max - this.min) * 100;
  style.innerHTML = `.slider::-webkit-slider-runnable-track { background: linear-gradient(to right, ${progressColor} 0%, ${progressColor} ${val}%, ${backgroundColor} ${val}%, ${backgroundColor} 100%); }`;
  views.innerText = this.value;
  updatePrice();
});

billing.addEventListener('change', updatePrice);