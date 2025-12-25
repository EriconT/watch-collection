⌚ Enrico's Watch Collection

A modern, serverless Progressive Web App (PWA) designed to track and visualize a personal watch collection. The app uses Google Sheets as a backend database, allowing for instant updates without touching code.
✨ Key Features

    Dynamic Data Engine: The app automatically detects new columns in your spreadsheet. Add a column like "Lug-to-Lug" or "Service History" in Google Sheets, and it instantly appears on the watch cards.

    Smart Sorting: Sort the collection by Date (Newest/Oldest), Brand (A-Z), or Case Size (Small/Large).

    Resilient Connectivity: Uses a multi-proxy fallback system. If one connection fails (e.g., restricted networks in South Korea), it automatically switches to a backup to ensure the app always loads.

    Smart Date Parsing: Intelligently handles American (MM/DD/YYYY), European (DD/MM/YYYY), and ISO (YYYY-MM-DD) date formats correctly.

    Google Drive Integration: Automatically converts standard Drive sharing links into high-speed thumbnails.

    Collection Analytics: Real-time stats on total pieces, favorite brands, most common movements, and latest acquisitions.

    iOS Native Experience: Optimized for "Add to Home Screen" on iPhone with a custom icon and full-screen display.

🚀 Setup & Configuration
1. The Google Sheet

The app relies on a Google Sheet with specific headers. Required Columns:

    Brand

    Model

    Reference

    ImageURL

    PurchaseDate (or Date Acquired)

Optional / Dynamic Columns: You can add any other column you want (e.g., Case Size, Lug Width, Movement, Notes). The app will automatically generate a label and value for them in the grid.

⚠️ Image Rules: If using Google Drive, ensure the image file permission is set to "General Access: Anyone with the link".
2. Linking the Sheet

The connection links are hardcoded in index.html for stability. To change the source sheet:

    Open index.html.

    Scroll to the bottom <script> section.

    Update these two variables:
    JavaScript

    const SHEET_URL = "YOUR_PUBLISHED_CSV_LINK";
    const EDIT_URL = "YOUR_GOOGLE_SHEET_EDIT_LINK";

3. Deploying

    Upload index.html to your GitHub repository.

    Go to Settings > Pages.

    Select the main branch and click Save.

    Your app will be live at https://username.github.io/repo-name.

📱 How to Use on iPhone

    Open your live GitHub link in Safari.

    Tap the Share icon (square with arrow).

    Scroll down and tap Add to Home Screen.

    Tap Add.

    Tip: If the icon doesn't update, delete the bookmark, clear Safari cache, and try again.

🛠 Troubleshooting

"Connection Failed" Error The app uses a proxy to fetch data from Google. If you see this error, the app automatically retries using backup proxies (corsproxy.io -> allorigins.win -> thingproxy). Wait 5 seconds and the data usually appears.

Images Not Loading

    Check that the link in the Google Sheet is correct.

    Crucial: Check that the file permissions in Google Drive are set to "Public/Anyone with the link".

Sorting Looks Wrong The app attempts to parse "Case Size" intelligently (stripping "mm" to sort by number). Ensure your size column contains numbers (e.g., 41mm or 41). For dates, the app prefers YYYY-MM-DD but accepts DD/MM/YYYY.
🔧 Technology Stack

    Frontend: HTML5, Vanilla JavaScript

    Styling: Tailwind CSS (CDN)

    Data Parsing: PapaParse

    Hosting: GitHub Pages

🤖 Credits

This application was architected and developed with the assistance of Google Gemini, acting as a technical consultant and coding partner.