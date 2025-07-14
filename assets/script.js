let sec = document.querySelectorAll('section');
let links = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Add background image transition
            entry.target.style.background = 'rgba(255, 255, 255, 0.3)';
        } else {
            entry.target.classList.remove('show');
            // Reset background on exit
            entry.target.style.background = 'transparent';
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
    const starLayer = document.createElement('div');
    starLayer.style.position = 'fixed';
    starLayer.style.top = 0;
    starLayer.style.left = 0;
    starLayer.style.width = '100%';
    starLayer.style.height = '100%';
    starLayer.style.zIndex = '0';
    starLayer.style.pointerEvents = 'none';
    document.body.appendChild(starLayer);

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        starLayer.appendChild(star);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const starLayer = document.createElement('div');
    starLayer.style.position = 'fixed';
    starLayer.style.top = 0;
    starLayer.style.left = 0;
    starLayer.style.width = '100%';
    starLayer.style.height = '100%';
    starLayer.style.zIndex = '0';
    starLayer.style.pointerEvents = 'none';
    document.body.appendChild(starLayer);

    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;  // 2s–5s
        star.style.animationDelay = `${Math.random() * 5}s`;         // random delay
        star.style.width = star.style.height = `${Math.random() * 3 + 2}px`; // 2px–5px
        starLayer.appendChild(star);
    }
});

function switchSheet(index) {
  const tabs = document.querySelectorAll('.tab-link');
  const iframes = document.querySelectorAll('.tab-content');

  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
    iframes[i].style.display = i === index ? 'block' : 'none';
  });
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const indicator = document.querySelector(".indicator");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // Add buffer
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link, index) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
      // Move indicator
      indicator.style.transform = `translateX(${index * 5}rem)`;
      indicator.style.backgroundColor = link.style.getPropertyValue('--clr');
    }
  });
});
