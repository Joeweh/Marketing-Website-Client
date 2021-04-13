const faders = document.querySelectorAll('.feature-item')
const sliders = document.querySelectorAll('.download-option')

const fadeInOptions = { 
  threshold: 0.5
};

const slideInOptions = { 
  threshold: 0
};

const fadeInOnScroll = new IntersectionObserver
(function(entries, fadeInOnScroll) { 
  entries.forEach(entry => {
    if (!entry.isIntersecting)
    {
      return;
    }
    else
    {
      entry.target.classList.add('appear');
      fadeInOnScroll.unobserve(entry.target);
    }
  })
}, fadeInOptions);

const slideInOnScroll = new IntersectionObserver
(function(entries, slideInOnScroll) { 
  entries.forEach(entry => {
    if (!entry.isIntersecting)
    {
      return;
    }
    else
    {
      entry.target.classList.add('appear');
      slideInOnScroll.unobserve(entry.target);
    }
  })
}, slideInOptions);

faders.forEach(fader => {
  fadeInOnScroll.observe(fader);
})

sliders.forEach(slider => {
  slideInOnScroll.observe(slider);
});