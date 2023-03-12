// Get the form element
const form = document.querySelector('#resume-form');

// Add an event listener for when the form is submitted
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting to the server
  event.preventDefault();

  // Get the input elements from the form
  const nameInput = document.querySelector('#name-input');
  const emailInput = document.querySelector('#email-input');
  const phoneInput = document.querySelector('#phone-input');
  
  // Get the values from the input elements
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  
  // Validate the inputs
  if (name === '') {
    alert('Please enter your name');
    return;
  }
  if (email === '') {
    alert('Please enter your email');
    return;
  }
  if (phone === '') {
    alert('Please enter your phone number');
    return;
  }
  
  // Generate the preview of the resume using the input data
  const preview = generateResumePreview(name, email, phone);
  
  // Display
