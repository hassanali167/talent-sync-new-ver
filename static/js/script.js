function validateFiles() {
    const fileInput = document.getElementById('file-input');
    const fileError = document.getElementById('file-error');
    const files = fileInput.files;

    for (let file of files) {
        if (!file.name.endsWith('.pdf') && !file.name.endsWith('.docx')) {
            fileError.style.display = 'block';
            fileInput.value = ''; // Clear the input
            return;
        }
    }
    fileError.style.display = 'none'; // Hide error if files are valid
}

document.getElementById('upload-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();

    // Display the analysis summary
    const analysisSummary = document.getElementById('analysis-summary');
    analysisSummary.innerHTML = data.analysis_results;

    // Create and display the download link
    const downloadLink = document.createElement('a');
    downloadLink.href = `/download/${data.report_file}`;
    downloadLink.textContent = 'Download Report';
    document.getElementById('download-link-container').appendChild(downloadLink);
});