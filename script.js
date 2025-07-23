// Accordion functionality
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Toggle active class
    btn.classList.toggle('active');
    // Accordion content
    const content = btn.nextElementSibling;
    if (btn.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = "0";
    }
    // Close others
    document.querySelectorAll('.accordion-btn').forEach(otherBtn => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove('active');
        otherBtn.nextElementSibling.style.maxHeight = "0";
      }
    });
  });
});
