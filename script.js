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
