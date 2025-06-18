document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("typing-effect");
  const messages = ["Hello, world!", "Welcome to my page", "Scroll down to continue"];
  let messageIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  type();

  function type() {
    const currentMessage = messages[messageIndex];

    if (!isDeleting) {
      element.textContent = currentMessage.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentMessage.length) {
        if (messageIndex === 2) {
          document.querySelectorAll('.js-scroll span').forEach(span => {
            span.classList.add('scroll-opacity');
          })
          element.removeAttribute('id');
          return;

        } else {
          isDeleting = true;
          setTimeout(type, 1000);
          return;
        }
      }

    } else {
      element.textContent = currentMessage.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        setTimeout(type, 750);
        messageIndex = messageIndex + 1;
        return;
      }
    }
    setTimeout(type, 70);
  }
});

let projectTypeStarted = false;

window.addEventListener('scroll', () => {
  const aboutSection = document.getElementById('about-section');
  const myProjects = document.getElementById('projects-section');
  if (window.scrollY > 300 && window.scrollY < 999) {
    aboutSection.classList.add('active');
  } else {
    aboutSection.classList.remove('active');
  }

  if (window.scrollY > 1000) {
    myProjects.classList.add('active');
    if (!projectTypeStarted) {
      projectType();
      projectTypeStarted = true;
    }

  } else {
    myProjects.classList.remove('active');
    projectTypeStarted = false;
  }

  document.querySelectorAll('.js-scroll span').forEach(span => {
    span.classList.add('scroll-opacity');
  })
});

function projectType() {
  const messages = ["Work in progress.."];
  const element = document.getElementById("project-typing");
  let messageIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentMessage = messages[messageIndex];

    if (!isDeleting) {
      element.textContent = currentMessage.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex <= currentMessage.length) {
        setTimeout(type, 70);
      }
    }
  }
  type();
}

