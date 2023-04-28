function toggleButton() {
    var button = document.getElementById("myButton");
    button.classList.toggle("enabled");
    
    if (button.classList.contains("enabled")) {
      button.innerHTML = "Disable";
    } else {
      button.innerHTML = "Enable";
    }
  }
function validateDate() { const datepicker = document.getElementById('datepicker'); const selectedDate = new Date(datepicker.value); const currentDate = new Date(); // Get current date 
    if (selectedDate.getDay() !== 4 || selectedDate < currentDate) { datepicker.value = ''; alert('Please choose a valid Thursday date.'); } // Set the minimum date to the current date
    datepicker.min = currentDate.toISOString().slice(0, 10); } 

function increment() {
                var input = document.getElementById('quantity');
                var value = parseInt(input.value);
                if (value < 1000) {
                value+=50;
                input.value = value;
                }
            }
            
            function decrement() {
                var input = document.getElementById('quantity');
                var value = parseInt(input.value);
                if (value > 1) {
                value--;
                input.value = value;
                }
            }
  function toggleCard(button) {
    const card = button.parentNode;
    card.classList.toggle('open');
  }

  function updateSliderValue(sliderId) {
    const slider = document.getElementById(sliderId);
    const valueElement = document.getElementById(`${sliderId}-value`);
    valueElement.textContent = slider.value;
  }