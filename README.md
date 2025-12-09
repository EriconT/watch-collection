⌚ Enrico's Watch Collection

A minimalist, serverless Progressive Web App (PWA) designed to track and visualize a personal watch collection. The app uses Google Sheets as a backend database, allowing for easy updates without touching a line of code.
✨ Features

    Google Sheets Backend: Add, remove, or edit watches using a standard spreadsheet.

    Google Drive Image Support: Automatically converts Drive links into visible images.

    Direct Edit Access: A button in the app takes you directly to the spreadsheet for quick updates.

    Analytics Dashboard: Automatically calculates total collection size, top brands, favorite movements, and latest acquisitions.

    Dark Mode: Built-in toggle for Light/Dark themes with local storage memory.

    Instant Search: Filter the collection by Brand, Model, or Reference number in real-time.

    iOS Native Experience: Optimized for "Add to Home Screen" on iPhone with a custom icon and full-screen display.

🚀 Setup Guide
1. Prepare the Data

Create a new Google Sheet. The first row must contain these exact headers (case-sensitive):
Column Name	Description	Example
Brand	The manufacturer	Rolex
Model	The model name	Submariner
Reference	Reference number	124060
CaseSize	Diameter (include unit)	41mm
Movement	Movement type	Automatic
PurchaseDate	ISO Format (YYYY-MM-DD)	2023-05-12
ImageURL	Direct link or Google Drive link	https://drive.google.com...
Notes	Personal description/story	A gift from my wife...

⚠️ Important for Images: If using Google Drive, right-click the image file in Drive, select Share, and ensure "General Access" is set to "Anyone with the link".
2. Connect to the App

    Get the Data Link:

        In Google Sheets, go to File > Share > Publish to web.

        Change "Web page" to Comma-separated values (.csv).

        Click Publish and copy the link.

    Get the Edit Link:

        Copy the URL from your browser address bar while editing the sheet.

    Update Code:

        Open index.html in this repository.

        Scroll to the bottom configuration section and paste both links:
    JavaScript

    const SHEET_URL = "YOUR_PUBLISHED_CSV_LINK";
    const EDIT_URL = "YOUR_BROWSER_EDIT_LINK";

3. Deploy

    Upload index.html to your GitHub repository (or Push via GitHub Desktop).

    Go to Settings > Pages.

    Select main branch and /root folder.

    Click Save. Your app will be live at https://username.github.io/repo-name.

📱 How to Install on iPhone

    Open your live GitHub link in Safari.

    Tap the Share icon (square with arrow).

    Scroll down and tap Add to Home Screen.

    Tap Add.

    Note: If the icon does not update, delete the bookmark, clear Safari cache, and try again.

🛠 Maintenance
Updating the Collection

You do not need to touch the code to add watches.

    Open the app and click the Document Icon to open your Google Sheet.

    Add a new row.

    Return to the app and click the Refresh Icon to sync the data immediately.

Updating the Code (via GitHub Desktop)

    Open the project in GitHub Desktop.

    Click "Open in Visual Studio Code" to make changes (e.g., colors, title).

    Save the file.

    In GitHub Desktop: Type a summary, click Commit to main, then click Push origin.

🔧 Technology Stack

    Frontend: HTML5, Vanilla JavaScript

    Styling: Tailwind CSS (CDN)

    Data Parsing: PapaParse

    Proxy: CorsProxy.io

    Hosting: GitHub Pages

📄 About

"Enrico's Watch Collection" was born out of a desire for simplicity and control. As a digital cinematographer, I wanted a tool that was clean, precise, and visually focused. This project is a serverless Progressive Web App (PWA) that acts as a digital window into my personal curation. It separates the data (Google Sheets) from the interface, ensuring that my catalogue remains portable, private, and future-proof.