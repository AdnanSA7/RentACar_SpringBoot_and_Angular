defaultColor = 'border border-white'; // Default color
activeColor = 'bg-blue-500'; // Active color
buttons = document.querySelectorAll('.btn'); // Select all buttons

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Rest all button colors
    buttons.forEach((b) => {
      b.classList.add(defaultColor);
      b.classList.remove(activeColor);
    });
// Add active color on the clicked button, remove default color
    btn.classList.remove(defaultColor);
    btn.classList.add(activeColor);
  });
});
