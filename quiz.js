function checkQuiz() {
    const form = document.getElementById('quizForm');
    const totalQuestions = 5;
    let score = 0;

    // Loop through all questions
    for (let i = 1; i <= totalQuestions; i++) {
        const answer = form['q' + i];
        for (let j = 0; j < answer.length; j++) {
            if (answer[j].checked && answer[j].value == "1") {
                score++;
            }
        }
    }

    // Calculate percentage
    const percentage = (score / totalQuestions) * 100;

    const result = document.getElementById('result');
    if (percentage >= 80) {
        result.innerHTML = `You passed! Your score is ${percentage}%`;
        result.className = 'result pass';
        
    } else {
        result.innerHTML = `You failed. Your score is ${percentage}%. Try again.`;
        result.className = 'result fail';
    }
}