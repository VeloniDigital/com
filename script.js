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










  // Pre-filled WhatsApp message for 1 Day Website
  const oneDayWebsiteBtn = document.getElementById('oneDayWebsiteBtn');
  const whatsappLink = document.getElementById('whatsappLink');

  oneDayWebsiteBtn.addEventListener('click', () => {
    const message = encodeURIComponent("Hi Veloni! I am interested in your 1 Day Website service. Please provide more details.");
    const phoneNumber = "916381918347"; // Your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp link in a new tab
    window.open(url, "_blank");
  });
