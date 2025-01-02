// ParticlesJS Initialization
window.onload = function() {
  particlesJS("particles-js", {
      particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
          size: { value: 3, random: true, anim: { enable: true, speed: 4, size_min: 0.1 } },
          line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }
      },
      interactivity: { detect_on: "window", events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } } }
  });

  displayCurrentTask();
};

// Tab Navigation
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Display Current Task Based on IST
function displayCurrentTask() {
  var currentDate = new Date();
  var hours = currentDate.getUTCHours() + 5;
  var minutes = currentDate.getUTCMinutes() + 30;

  if (minutes >= 60) {
      minutes -= 60;
      hours += 1;
  }

  var currentTaskElement = document.getElementById("current-task");

  if (hours >= 6 && hours < 7) {
      currentTaskElement.innerHTML = "Ongoing Task: Wake Up and Hydrate, Japanese Learning";
  } else if (hours >= 7 && hours < 8) {
      currentTaskElement.innerHTML = "Ongoing Task: Breakfast and Cooking Prep";
  } else if (hours >= 8 && hours < 9) {
      currentTaskElement.innerHTML = "Ongoing Task: Personal Development or Light Reading";
  } else if (hours >= 10 && hours < 13) {
      currentTaskElement.innerHTML = "Ongoing Task: Morning Focus";
  } else if (hours >= 13 && hours < 14) {
      currentTaskElement.innerHTML = "Ongoing Task: Lunch Break";
  } else if (hours >= 14 && hours < 18) {
      currentTaskElement.innerHTML = "Ongoing Task: Afternoon Work";
  } else if (hours >= 18 && hours < 19) {
      currentTaskElement.innerHTML = "Ongoing Task: Gym Workout";
  } else if (hours >= 19 && hours < 19.5) {
      currentTaskElement.innerHTML = "Ongoing Task: Commute Home and Refresh";
  } else if (hours >= 19.5 && hours < 20.25) {
      currentTaskElement.innerHTML = "Ongoing Task: Dinner Prep and Eating";
  } else if (hours >= 20.25 && hours < 21.25) {
      currentTaskElement.innerHTML = "Ongoing Task: Competitive Exam Preparation";
  } else if (hours >= 21.25 && hours < 21.75) {
      currentTaskElement.innerHTML = "Ongoing Task: Japanese Listening Practice";
  } else if (hours >= 21.75 && hours < 22.5) {
      currentTaskElement.innerHTML = "Ongoing Task: Wind Down and Reflection";
  } else {
      currentTaskElement.innerHTML = "View All Tasks for the Day.";
  }
}

// Show All Tasks when button is clicked
function showAllTasks() {
  document.getElementById("all-tasks").classList.toggle("hidden");
}

// Add Expense to Tracker
function addExpense() {
  var name = document.getElementById("expense-name").value;
  var amount = document.getElementById("expense-amount").value;
  if (name && amount) {
      var expenseList = document.getElementById("expense-list");
      var li = document.createElement("li");
      li.textContent = name + ": ₹" + amount;
      expenseList.appendChild(li);

      // Save to local storage
      var expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
      expenses.push({ name: name, amount: amount });
      localStorage.setItem("expenses", JSON.stringify(expenses));

      // Clear inputs
      document.getElementById("expense-name").value = "";
      document.getElementById("expense-amount").value = "";
  }
}

// Save Journal Entry
function saveJournal() {
  var entry = document.getElementById("journal-entry").value;
  if (entry) {
      var savedJournal = document.getElementById("saved-journal");
      savedJournal.innerHTML = "<p>" + entry + "</p>";
      localStorage.setItem("journal", entry);
      document.getElementById("journal-entry").value = "";
  }
}
