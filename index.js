const getThreshold = () => {
  let data = [];

  for (let i = 0; i <= 1.0; i += 0.01) {
    data.push(i);
  }

  return data;
}

const mountObserver = ({ target, handler, threshold }) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold
  }

  const observer = new IntersectionObserver(handler, options);

  observer.observe(target);
}

const handleChanges = (entries) => {
  entries.forEach(function ({ target, intersectionRatio }) {
    const element = target.querySelector('.percentage__value');
    const bg = target.querySelector('.legend__bg');
    const view = target.className.split(' ')[1];

    element.textContent = Math.round(intersectionRatio * 100);

    handleLegendBg({
      bg: document.querySelector(`.legend__item--${view}`).querySelector('.legend__bg'),
      percentage: Math.round(intersectionRatio * 100) /100
    })
  });
}

const handleLegendBg = ({ bg, percentage }) => {
  console.log('handleLegendBg', percentage);
  bg.style.transform = `scaleX(${percentage}`;
};

document.addEventListener('DOMContentLoaded', function (event) {
  mountObserver({
    target: document.querySelector('.home'),
    handler: handleChanges,
    threshold: getThreshold()
  });

  mountObserver({
    target: document.querySelector('.about'),
    handler: handleChanges,
    threshold: getThreshold()
  });

  mountObserver({
    target: document.querySelector('.contact'),
    handler: handleChanges,
    threshold: getThreshold()
  });

  mountObserver({
    target: document.querySelector('.services'),
    handler: handleChanges,
    threshold: getThreshold()
  });
});
