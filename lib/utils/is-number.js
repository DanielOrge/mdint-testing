// Random Color Changer Script

function getRandomColor() {
  // Generate a random hex color
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

// Create a button and add it to the page
const button = document.createElement('button');
button.textContent = 'Change Background Color';
button.onclick = changeBackgroundColor;
document.body.appendChild(button);
