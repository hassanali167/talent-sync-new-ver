# CV Processing Flask App

## Overview
This is a Flask-based web application that processes uploaded CVs to extract LinkedIn profile IDs and generate an analysis report based on a given job description. The extracted LinkedIn IDs are stored in a CSV file, and the processed results are saved in an output folder. The user can download the generated report via the provided API.

## Features
- Upload multiple CVs in PDF or DOCX format.
- Extract LinkedIn profile IDs from CVs.
- Analyze CVs based on a job description.
- Generate a report with the analysis results.
- Download the processed report.

## Project Structure
```
CV-Processing-Flask-App/
│── uploaded_cvs/                  # Directory for uploaded CVs
│── output_result/                  # Directory for storing output reports
│── linkedin_id_extract/            # Directory for storing extracted LinkedIn IDs
│── app.py                          # Main Flask application
│── extract_linkedin.py             # Script for extracting LinkedIn IDs from CVs
│── process_cvs.py                   # Script for analyzing CVs based on job description
│── templates/
│   └── index.html                  # HTML template for the web UI
│── static/                         # Static assets (CSS, JS, images)
│── requirements.txt                # Dependencies for the project
│── README.md                       # Documentation
```

## Prerequisites
Make sure you have the following installed:
- Python 3.8+
- pip (Python package manager)

## Installation
1. **Clone the repository**
```bash
git clone <repository_url>
cd CV-Processing-Flask-App
```

2. **Create and activate a virtual environment**
```bash
python -m venv venv  # Create virtual environment
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate  # On Windows
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

## Running the Application
1. **Start the Flask application**
```bash
python app.py
```
This will start a local development server at `http://127.0.0.1:5000/`.

2. **Access the web interface**
Open a browser and go to `http://127.0.0.1:5000/` to upload CVs and process them.

## Usage
### Upload CVs
- Navigate to the web interface.
- Enter a job description in the provided text area.
- Upload multiple CVs in PDF or DOCX format.
- Click on the "Upload & Process" button.

### Process Flow
1. The uploaded CVs are stored in the `uploaded_cvs/` folder.
2. The script `extract_linkedin.py` extracts LinkedIn profile links from the CVs and saves them in `linkedin_id_extract/linkedin_ids.csv`.
3. The script `process_cvs.py` analyzes the CVs based on the provided job description and generates a report.
4. The report is saved in `output_result/`.
5. The user receives a JSON response with the report filename and its contents.

### Download Report
Use the following API endpoint to download the generated report:
```bash
GET /download/<filename>
```
Example:
```
http://127.0.0.1:5000/download/report.csv
```

## Cleanup
After processing, the uploaded CVs are automatically deleted to keep the system clean. New uploads will not interfere with previous results.

## Future Improvements
- Implement authentication for secure access.
- Improve LinkedIn ID extraction accuracy.
- Add a UI to display analysis results before downloading.


