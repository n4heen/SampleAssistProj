function checkQuiz() {
    const form = document.getElementById('quizForm');
    const totalQuestions = 30;
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
    const userName = document.getElementById('name').value; // Get the user's name
    if (percentage >= 80) {
        result.innerHTML = `You passed! Your score is ${percentage}%`;
        result.className = 'result pass';
        generateCertificate(userName);
        
    } else {
        result.innerHTML = `You failed. Your score is ${percentage}%. Try again.`;
        result.className = 'result fail';
    }
}

function generateCertificate(name, score) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add certificate content
    doc.setFontSize(22);
    doc.text('Certificate of Completion', 105, 40, null, null, 'center');
    doc.setFontSize(16);
    doc.text(`This is to certify that ${name}`, 105, 60, null, null, 'center');
    doc.text(`has successfully completed the Quiz`, 105, 70, null, null, 'center');

    // Display download button
    const downloadLink = document.createElement('a');
    downloadLink.innerHTML = 'Download Certificate';
    downloadLink.href = doc.output('bloburl');
    downloadLink.download = `${name}-Certificate.pdf`;
    
    const certificateDiv = document.getElementById('certificateDownload');
    certificateDiv.innerHTML = ''; // Clear previous content
    certificateDiv.appendChild(downloadLink); // Append the download link
}
