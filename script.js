function toggleReadMore(event) {
    event.preventDefault();

    const span = document.querySelector(".read-more");
    const button = document.querySelector(".read-more-button");

    // Toggle the 'show' class for smooth transition
    span.classList.toggle("show");

    // Update button text
    if (span.classList.contains("show")) {
      button.textContent = "Read Less";
    } else {
      button.textContent = "Read More";
    }
  }