
  function createAccount() {
    // Optional: Add validation logic here

    // Show success popup
    alert("Account created successfully!");

    // Show success text message as well (optional)
    document.getElementById('successMessage').style.display = 'block';

    // Optional: redirect after showing popup
    setTimeout(() => {
      window.location.href = 'signup.html'; // Or redirect to dashboard if you have one
    }, 2000);
  }

  function Submit() {
    // You can add more validation if needed
    alert("Account created successfully!");
  }
  
