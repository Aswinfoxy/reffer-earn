function generateReferralCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById("referral-code").textContent = "Your Referral Code: " + code;

  // Retrieve user input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Display user info below referral code
  document.getElementById("user-info").innerHTML = `
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
  `;
}


