function openJournal() {
  document.getElementById("journalModal").style.display = "block";
}

function closeJournal() {
  document.getElementById("journalModal").style.display = "none";
}

function saveJournal() {
  const journalEntry = document.getElementById("journalInput").value;
  alert("Journal saved: " + journalEntry);
  closeJournal();
}

function openTasks() {
  document.getElementById("taskModal").style.display = "block";
}

function closeTasks() {
  document.getElementById("taskModal").style.display = "none";
}

function saveTask() {
  const taskEntry = document.getElementById("taskInput").value;
  alert("Task saved: " + taskEntry);
  closeTasks();
}
