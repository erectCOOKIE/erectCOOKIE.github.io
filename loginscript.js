document.getElementById("signupLink").addEventListener("click", function(){
    document.getElementById("loginForm").classList.remove("active");
    document.getElementById("signupForm").classList.add("active");
  });
  
  document.getElementById("loginLink").addEventListener("click", function(){
    document.getElementById("signupForm").classList.remove("active");
    document.getElementById("loginForm").classList.add("active");
  });
  