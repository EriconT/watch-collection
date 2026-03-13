⌚ Enrico's Watch Collection

A modern, serverless Progressive Web App (PWA) designed to track and visualize a personal watch collection. The app uses Google Sheets as a backend database, allowing for instant updates without touching code.
✨ Key Features

    Dynamic Data Engine: The app automatically detects new columns in your spreadsheet. Add a column like "Lug-to-Lug" or "Service History" in Google Sheets, and it instantly appears on the watch cards.
    
    Full CRUD Operations: Not just read-only! Add new watches, edit existing entries, and delete watches directly from the web app using a custom Google Apps Script backend.

    Smart Sorting: Sort the collection by Date (Newest/Oldest), Brand (A-Z), or Case Size (Small/Large).

    Direct Connection: Communicates directly with your Google Sheet via Google Apps Script and native `fetch`, eliminating the need for third-party proxies and ensuring reliable, instantaneous updates.

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
2. The Apps Script Backend (`Code.gs`)

This app requires a Google Apps Script to securely read and write to your spreadsheet.
1. Open your Google Sheet.
2. Go to **Extensions > Apps Script**.
3. Copy the contents of the `Code.gs` file from this repository and paste it into the editor.
4. Replace `SHEET_ID` in the code with your actual Google Sheet ID.
5. Click **Deploy > New deployment**.
6. Select type **Web app**.
7. Set "Execute as" to **Me** and "Who has access" to **Anyone**.
8. Deploy and authorize the script. Copy the resulting **Web App URL**.

3. Linking the Backend

The connection links are hardcoded in `index.html` for stability. To connect your backend:

    Open `index.html`.

    Scroll to the bottom `<script>` section.

    Update these two variables:
    ```javascript
    const APPS_SCRIPT_URL = "YOUR_NEWLY_DEPLOYED_WEB_APP_URL";
    const EDIT_URL = "YOUR_GOOGLE_SHEET_EDIT_LINK";
    ```

4. Deploying

    Upload `index.html` to your GitHub repository.

    Go to Settings > Pages.

    Select the main branch and click Save.

    Your app will be live at `https://username.github.io/repo-name`.

📱 How to Use on iPhone

    Open your live GitHub link in Safari.

    Tap the Share icon (square with arrow).

    Scroll down and tap Add to Home Screen.

    Tap Add.

    Tip: If the icon doesn't update, delete the bookmark, clear Safari cache, and try again.

🛠 Troubleshooting

"Connection Failed" Error Ensure your `APPS_SCRIPT_URL` is set correctly in `index.html` and that your Google Apps Script deployment is set to be accessible by "Anyone". If you recently changed `Code.gs`, you must create a **New deployment** for the changes to take effect.

Images Not Loading

    Check that the link in the Google Sheet is correct.

    Crucial: Check that the file permissions in Google Drive are set to "Public/Anyone with the link".

Sorting Looks Wrong The app attempts to parse "Case Size" intelligently (stripping "mm" to sort by number). Ensure your size column contains numbers (e.g., 41mm or 41). For dates, the app prefers YYYY-MM-DD but accepts DD/MM/YYYY.
🔧 Technology Stack

    Frontend: HTML5, Vanilla JavaScript

    Styling: Tailwind CSS (CDN)

    Backend: Google Apps Script

    Hosting: GitHub Pages

🤖 Credits

This application was architected and developed with the assistance of Google Gemini, acting as a technical consultant and coding partner.