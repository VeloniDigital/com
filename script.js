document.querySelector(".menu-btn").addEventListener("click", () => {
  const nav = document.querySelector("nav");

  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "fixed";
    nav.style.right = "16px";
    nav.style.top = "72px";
    nav.style.background =
      "linear-gradient(180deg, rgba(2,6,23,0.9), rgba(2,6,23,0.95))";
    nav.style.padding = "12px";
    nav.style.borderRadius = "12px";
    nav.style.gap = "12px";
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const speed = 20; // smaller = faster

    const updateCount = () => {
      if (current < target) {
        current++;
        counter.innerText = current + "%";
        setTimeout(updateCount, speed);
      } else {
        counter.innerText = target + "%";
      }
    };

    updateCount();
  });
});



const modal = document.getElementById('projectModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const sendBtn = document.getElementById('sendWhatsApp');

openBtn.onclick = e => {
  e.preventDefault();
  modal.style.display = 'flex';
};

closeBtn.onclick = () => modal.style.display = 'none';

sendBtn.onclick = () => {
  const service = document.getElementById('serviceSelect').value;
  if(!service){
    alert('Please select a service');
    return;
  }

  const phone = "916381918347"; // YOUR NUMBER
  const time = new Date().toLocaleString('en-IN');

  const message =
`#NewLead
Service: ${service}
Source: Website
CTA: Start Project
Time: ${time}

Hello, I’d like to start a project.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url,'_blank');
  modal.style.display = 'none';
};

// Close on outside click
modal.addEventListener('click', e => {
  if(e.target === modal) modal.style.display = 'none';
});










// Bubble element
const contactBubble = document.getElementById('contactBubble');

// Collect all elements that should trigger the bubble
const triggers = [
  document.querySelector('#contactBtn'),
  document.querySelector('#service-contact'),
  document.querySelector('.tagline-badge')
].filter(el => el !== null);

// Toggle bubble on click
triggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    if (contactBubble) {
      contactBubble.classList.toggle('show');
    }

    // Scroll to contact section if exists
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hide bubble when clicking outside
window.addEventListener('click', (e) => {
  if (contactBubble && !contactBubble.contains(e.target) && !triggers.some(t => t.contains(e.target))) {
    contactBubble.classList.remove('show');
  }
});




  const serviceSelect = document.getElementById('serviceSelect');

  // Function to open popup
  function openBookingPopup(serviceName = '') {
    if (serviceName) {
      serviceSelect.value = serviceName;
    }

    // OPEN YOUR POPUP HERE
    // Example:
    document.getElementById('contactBubble').classList.add('active');
  }

  // Click on service list item
  document.querySelectorAll('.service-list li').forEach(item => {
    item.addEventListener('click', () => {
      const service = item.getAttribute('data-service');
      openBookingPopup(service);
    });
  });

  // Click on Book Now button
  document.querySelectorAll('.book-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service');
      openBookingPopup(service);
    });
  });






  