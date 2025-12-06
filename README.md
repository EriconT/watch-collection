⌚ Watch Collection Tracker

A minimalist, serverless Progressive Web App (PWA) designed to track and visualize a personal watch collection. The app uses Google Sheets as a backend database, allowing for easy updates without touching a line of code.

(You can replace this link with a screenshot of your actual app later)
✨ Features

    Google Sheets Backend: Add, remove, or edit watches using a standard spreadsheet.

    Serverless Architecture: Runs entirely in the browser using HTML5, JavaScript, and Tailwind CSS.

    Analytics Dashboard: Automatically calculates total collection size, top brands, favorite movements, and latest acquisitions.

    Dark Mode: Built-in toggle for Light/Dark themes with local storage memory.

    Instant Search: Filter the collection by Brand, Model, or Reference number in real-time.

    iOS Native Experience: Optimized for "Add to Home Screen" on iPhone with a custom icon and full-screen display.

    Force Sync: Manual refresh button to bypass browser caching and fetch the latest Google Sheet data immediately.

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
ImageURL	Direct link to an image	https://i.imgur.com/...jpg
Notes	Personal description/story	Bought to celebrate...
2. Connect to the App

    In Google Sheets, go to File > Share > Publish to web.

    Change "Web page" to Comma-separated values (.csv).

    Click Publish and copy the link.

    Open index.html in this repository.

    Find the configuration section and paste your link:
    JavaScript

    const SHEET_URL = "YOUR_GOOGLE_SHEET_CSV_LINK_HERE";

3. Deploy

    Upload index.html to your GitHub repository.

    Go to Settings > Pages.

    Select main branch and /root folder.

    Click Save. Your app will be live at https://username.github.io/repo-name.

📱 How to Install on iPhone

    Open your live GitHub link in Safari.

    Tap the Share icon (square with arrow).

    Scroll down and tap Add to Home Screen.

    Tap Add.

    Note: If the icon appears as an "E", delete the bookmark, clear Safari cache, reload the page, and try again.

🛠 Maintenance & Usage
Adding/Removing Watches

You do not need to edit the code to update your collection.

    Open your Google Sheet.

    Add a new row or delete an old one.

    Open the app and click the Sync (Refresh) button in the navbar to fetch the new data.

Sorting

The app automatically sorts the collection by PurchaseDate, displaying the most recently acquired pieces first.
Changing the Design

    Colors/Styling: The app uses Tailwind CSS via CDN. You can edit classes directly in index.html.

    Icons: The app uses an SVG watch icon for the iOS home screen. To change it, update the <link rel="apple-touch-icon" ...> tag in the <head>.

🔧 Technology Stack

    Frontend: HTML5, Vanilla JavaScript

    Styling: Tailwind CSS (CDN)

    Data Parsing: PapaParse

    Proxy: CorsProxy.io (To bypass CORS restrictions on Google Sheets)

    Hosting: GitHub Pages

📄 License

This project is open source. Feel free to fork it to track other collections (Retro Games, Camera Lenses, Vinyl Records, etc.) by simply changing the CSV headers.
