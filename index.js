const getThreshold = () => {
  let data = [];

  for (let i=0; i<=1.0; i+= 0.01) {
    data.push(i);
  }

  return data;
}

const mountObserver = ({target, handler, threshold}) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold
  }

  const observer = new IntersectionObserver( handler, options);

  observer.observe(target);
}

mountObserver({
  target: document.querySelector('.view--home'),
  handler: (entries) =>{
    entries.forEach(function(entry) {
      console.log('entry', entry.target.className, (Math.floor(entry.intersectionRatio * 100)) + "%");
    });
  },
  threshold: getThreshold()
});

mountObserver({
  target: document.querySelector('.view--about'),
  handler: (entries) =>{
    entries.forEach(function(entry) {
      console.log('entry', entry.target.className, (Math.floor(entry.intersectionRatio * 100)) + "%");
    });
  },
  threshold: getThreshold()
});

mountObserver({
  target: document.querySelector('.view--contact'),
  handler: (entries) =>{
    entries.forEach(function(entry) {
      console.log('entry', entry.target.className, (Math.floor(entry.intersectionRatio * 100)) + "%");
    });
  },
  threshold: getThreshold()
});

mountObserver({
  target: document.querySelector('.view--services'),
  handler: (entries) =>{
    entries.forEach(function(entry) {
      console.log('entry', entry.target.className, (Math.floor(entry.intersectionRatio * 100)) + "%");
    });
  },
  threshold: getThreshold()
});

document.addEventListener('DOMContentLoaded', function(event) {

});
