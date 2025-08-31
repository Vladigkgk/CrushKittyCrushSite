// Простой скрипт: анимация кота при наведении на кнопки
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  const cat = document.getElementById('cat');

  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      cat.style.animationDuration = '3s';
    });
    btn.addEventListener('mouseleave', () => {
      cat.style.animationDuration = '15s';
    });
  });

  // Easter egg: 10 кликов на кота — мяукает
  let clickCount = 0;
  cat.addEventListener('click', () => {
    clickCount++;
    if (clickCount >= 10) {
      alert('МЯЯЯУ! Хватит тыкать!');
      clickCount = 0;
    }
  });
});
