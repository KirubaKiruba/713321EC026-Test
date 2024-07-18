function showCreateAccountForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('createAccountForm').style.display = 'block';
  }
  
  function showLoginForm() {
    document.getElementById('createAccountForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }
  
  function createAccount() {
    var username = document.getElementById('createUsername').value.trim();
    var email = document.getElementById('createEmail').value.trim();
    var password = document.getElementById('createPassword').value;
  
    if (username === '' || email === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Assuming account creation logic here (not implemented in this basic example)
    alert('Account created successfully!');
    document.getElementById('createAccountForm').reset();
  }
  
  function login() {
    var username = document.getElementById('loginUsername').value.trim();
    var password = document.getElementById('loginPassword').value;
  
    if (username === '' || password === '') {
      alert('Please enter both username and password');
      return;
    }
  
    // Assuming login logic here (not implemented in this basic example)
    alert('Login successful!');  
    document.getElementById('loginForm').reset();
  }
  