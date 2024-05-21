// script.js
let totalTime = 30; // Total time in seconds (5 minutes)
const timerElement = document.getElementById('timer');

function startTimer() {
    const interval = setInterval(() => {
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;

        // Add leading zero to seconds if less than 10
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Display the countdown timer
        timerElement.innerHTML = `Time Remaining: ${minutes}:${seconds}`;

        // If time runs out, stop the timer and handle the end of the quiz
        if (totalTime <= 0) {
            clearInterval(interval);
            timerElement.innerHTML = "Time's up!";
            endQuiz();
        }

        totalTime--;
    }, 1000);
}

function endQuiz() {
    // Disable the quiz inputs and submit button
    document.getElementById('quiz').innerHTML = '<p>The quiz has ended. Thank you for participating!</p>';
}

function submitQuiz() {
    // Logic to handle quiz submission
    alert('Quiz submitted!');
}

