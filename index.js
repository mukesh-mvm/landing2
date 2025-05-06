// Show the form
document.getElementById("enquiryBtn").addEventListener("click", () => {
    document.getElementById("contactForm1").classList.add("show");
  });
  
  // Hide the form
  document.getElementById("closeForm").addEventListener("click", () => {
    document.getElementById("contactForm1").classList.remove("show");
  });





  // for modal
  // Get modal elements
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close");

// Open modal
btn.onclick = () => {
  modal.style.display = "block";
};

// Close modal on X click
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close modal if clicked outside content
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};





document.getElementById("interestForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const messageBox = document.getElementById("formMessage");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      messageBox.textContent = "✅ Thank you! Your form was submitted successfully.";
      messageBox.style.color = "green";
      form.reset();
    } else {
      messageBox.textContent = "❌ Submission failed. Please try again.";
      messageBox.style.color = "red";
    }
  } catch (error) {
    messageBox.textContent = "⚠️ An error occurred. Please try again later.";
    messageBox.style.color = "red";
  }
});





  
  




  


  