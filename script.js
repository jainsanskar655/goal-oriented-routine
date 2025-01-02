// Function to show the current section
function showSection(section) {
  const sections = ['schedule', 'finance', 'strategies', 'weekends', 'journal'];
  sections.forEach(s => {
      document.getElementById(s).style.display = s === section ? 'block' : 'none';
  });
}

// Function to display the current ongoing task
function getCurrentTask() {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes(); // current time in minutes
  
  const schedule = [
      { name: "Wake Up and Hydrate", start: 360, end: 370 }, // 6:00 AM – 6:10 AM
      { name: "Japanese Learning", start: 370, end: 420 }, // 6:10 AM – 7:00 AM
      { name: "Breakfast and Cooking Prep", start: 420, end: 480 }, // 7:00 AM – 8:00 AM
      { name: "Personal Development or Light Reading", start: 480, end: 510 }, // 8:00 AM – 8:30 AM
      { name: "Get Ready for Work", start: 510, end: 540 }, // 8:30 AM – 9:00 AM
      { name: "Commute to Office", start: 540, end: 600 }, // 9:00 AM – 10:00 AM
      { name: "Morning Focus", start: 600, end: 780 }, // 10:00 AM – 1:00 PM
      { name: "Lunch Break", start: 780, end: 825 }, // 1:00 PM – 1:45 PM
      { name: "Afternoon Work", start: 840, end: 1080 }, // 2:00 PM – 6:00 PM
      { name: "Gym Workout", start: 1080, end: 1140 }, // 6:00 PM – 7:00 PM
      { name: "Commute Home and Refresh", start: 1140, end: 1170 }, // 7:00 PM – 7:30 PM
      { name: "Dinner Prep and Eating", start: 1170, end: 1215 }, // 7:30 PM – 8:15 PM
      { name: "Competitive Exam Preparation", start: 1215, end: 1230 }, // 8:15 PM – 9:15 PM
      { name: "Japanese Listening Practice", start: 1230, end: 1260 }, // 9:15 PM – 9:45 PM
      { name: "Wind Down and Reflection", start: 1260, end: 1290 }, // 9:45 PM – 10:15 PM
      { name: "Bedtime Prep", start: 1290, end: 1320 }, // 10:15 PM – 10:30 PM
      { name: "Sleep", start: 1320, end: 0 } // 10:30 PM onwards
  ];

  // Find the task based on the current time
  let currentTask = "No task currently running";
  schedule.forEach(task => {
      if (currentTime >= task.start && currentTime < task.end) {
          currentTask = task.name;
      }
  });

  document.getElementById("current-task").innerHTML = "Current Task: " + currentTask;
}

// Function to display the detailed schedule when "View All Tasks" is clicked
function viewAllTasks() {
  const detailedTasks = `
      <h2>My Detailed Schedule</h2>
      <h3>Morning Routine (6:00 AM – 9:00 AM)</h3>
      <ol>
          <li><strong>Wake Up and Hydrate (6:00–6:10 AM)</strong>: Start the day with a glass of water and perform light stretches to wake up the body.</li>
          <li><strong>Japanese Learning (6:10–7:00 AM)</strong>: Dedicate time to learning Japanese: practice vocabulary, grammar, or listening using apps and textbooks.</li>
          <li><strong>Breakfast and Cooking Prep (7:00–8:00 AM)</strong>: Prepare a nutritious breakfast and, if necessary, cook lunch for work. Opt for quick meals that support your goals.</li>
          <li><strong>Personal Development or Light Reading (8:00–8:30 AM)</strong>: Read books or listen to a podcast for personal growth, relaxation, and self-improvement.</li>
          <li><strong>Get Ready for Work (8:30–9:00 AM)</strong>: Prepare for the workday by getting dressed and packing any items needed for the day.</li>
          <li><strong>Commute to Office (9:00–10:00 AM)</strong>: Use this time to relax or listen to educational content while traveling to work.</li>
      </ol>
      <h3>Office Hours (10:00 AM – 6:00 PM)</h3>
      <ol>
          <li><strong>Morning Focus (10:00 AM–1:00 PM)</strong>: Focus on high-priority tasks that require deep concentration or creativity.</li>
          <li><strong>Lunch Break (1:00–1:45 PM)</strong>: Take a break for a light, healthy lunch to recharge.</li>
          <li><strong>Afternoon Work (2:00–6:00 PM)</strong>: Continue with client meetings, routine tasks, and follow-ups related to your pre-sales consultant role.</li>
      </ol>
      <h3>Evening Routine (6:00 PM – 10:30 PM)</h3>
      <ol>
          <li><strong>Gym Workout (6:00–7:00 PM)</strong>: Perform strength training, cardio, or flexibility exercises to maintain fitness.</li>
          <li><strong>Commute Home and Refresh (7:00–7:30 PM)</strong>: Travel back home and freshen up after the workout.</li>
          <li><strong>Dinner Prep and Eating (7:30–8:15 PM)</strong>: Cook and enjoy a balanced, nutritious dinner that aligns with your health goals.</li>
          <li><strong>Competitive Exam Preparation (8:15–9:15 PM)</strong>: Study for competitive exams. Focus on different topics each day to ensure balanced preparation.</li>
          <li><strong>Japanese Listening Practice (9:15–9:45 PM)</strong>: Watch Japanese shows, videos, or practice listening skills to improve comprehension and speaking ability.</li>
          <li><strong>Wind Down and Reflection (9:45–10:15 PM)</strong>: Journal about the day’s progress and emotions. Engage in mindfulness practices or gratitude meditation to relax.</li>
          <li><strong>Bedtime Prep (10:15–10:30 PM)</strong>: Prepare for bed to ensure a restful sleep.</li>
          <li><strong>Sleep (10:30 PM)</strong>: Aim for 7.5+ hours of quality sleep.</li>
      </ol>
  `;
  document.querySelector('.content#schedule').innerHTML = detailedTasks;
}

// Run the current task function every minute
setInterval(getCurrentTask, 60000);
getCurrentTask(); // Initialize on page load
