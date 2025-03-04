document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("h2[id], #note-1,#note-2,#note-3,#note-4");
  const navLinks = document.querySelectorAll(".list .navigation");

  function highlightCurrentSection() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 100) { // Adjust the offset as needed
        currentSection = section.id;
      }
    });

    // Remove the 'active' class from all links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the 'active' class to the current link
    if (currentSection) {
      const currentLink = document.querySelector(`.list .navigation[href="#${currentSection}"]`);
      if (currentLink) {
        currentLink.classList.add("active");
      }
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", highlightCurrentSection);

  // Call the function once on page load
  highlightCurrentSection();
});