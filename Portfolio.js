// scroll effect JS
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});


  const texts = [
    "Software Engineer",
    "Web Developer",
    "UX/UI & Developer",
    "MERN Learner",
    "Java Learner",
    
  ];
  
  let index = 0;
  const typingElement = document.querySelector(".typing-text");

  function typeText() {
    typingElement.textContent = texts[index];
    typingElement.style.animation = "none"; // reset
    void typingElement.offsetWidth; // reflow trick
    typingElement.style.animation = "typing 2s steps(5,end) forwards, blink 0.7s infinite";
    index = (index + 1) % texts.length;
  }

  setInterval(typeText, 3000); // change every 3s
  typeText(); // start immediately

