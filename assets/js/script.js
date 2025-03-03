document.addEventListener("DOMContentLoaded", function () {
    // Select all chapter headings (h2) and note headings (h5)
    const sections = document.querySelectorAll("h2[id], h5[id]");
    const navLinks = document.querySelectorAll(".list .navigation");
  
    // Function to highlight the current section in the list
    function highlightCurrentSection() {
      let currentSection = "";
  
      // Loop through sections to find the one currently in view
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) { // Adjust the offset as needed
          currentSection = section.id;
        }
      });
  
      // Remove highlight from all links
      navLinks.forEach((link) => {
        link.style.backgroundColor = ""; // Reset background color
      });
  
      // Highlight the current section link
      if (currentSection) {
        const currentLink = document.querySelector(`.list .navigation[href="#${currentSection}"]`);
        if (currentLink) {
          currentLink.style.backgroundColor = "yellow"; // Highlight with yellow
        }
      }
    }
  
    // Add scroll event listener
    window.addEventListener("scroll", highlightCurrentSection);
  
    // Call the function once on page load
    highlightCurrentSection();
  });