function generatePassword() {
  var length = 16;
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={[}]|:;'<,>.?/";
  var password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  document.getElementById("password").innerHTML = password;
  var strength = calculatePasswordStrength(password);
  document.getElementById("password-strength").innerHTML = "Password strength: " + strength;
}

function calculatePasswordStrength(password) {
  var strength = 0;
  var regex = /[$-/:-?{-~!"^_`\[\]]/;
  var lowercaseRegex = /[a-z]/;
  var uppercaseRegex = /[A-Z]/;
  var numberRegex = /[0-9]/;
  var symbolRegex = /[^a-zA-Z0-9]/;
  if (password.length < 8) {
    strength = 0;
  } else if (password.length >= 8 && password.length < 12) {
    strength = 1;
  } else if (password.length >= 12 && password.length < 16) {
    strength = 2;
  } else if (password.length >= 16) {
    strength = 3;
  }
  if (password.match(lowercaseRegex)) {
    strength++;
  }
  if (password.match(uppercaseRegex)) {
    strength++;
  }
  if (password.match(numberRegex)) {
    strength++;
  }
  if (password.match(symbolRegex)) {
    strength++;
  }
  if (password.match(regex)) {
    strength++;
  }
  return strength;
}

generatePassword(); // Call the function when the page loads to show the initial password
