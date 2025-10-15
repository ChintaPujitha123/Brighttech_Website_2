# Brighttech_Website_2
# Brighttech_Website_2

BrightTech Website:
This project is a simple static website built using Gulp, Nunjucks templates, and BrowserSync.
It helps you develop, preview, and organize your web pages with reusable layouts and components.

Project Features:
Uses Nunjucks templating for clean and reusable HTML.

Automatically copies CSS and images to the dist folder.

Runs a local development server with auto-reload.

Clean and easy workflow.

How to Set Up:
Install Node.js
Make sure Node.js (version 20 or above) is installed on your system.

Install Dependencies

npm install


Run the Development Server

npx gulp


or

npm run dev


The project will open automatically in your browser at:

http://localhost:3000/

 How It Works:

gulp compiles the .njk (Nunjucks) templates into .html files.

CSS and image files are copied to the dist/assets/ folder.

BrowserSync automatically refreshes the website when you edit a file.

Images Not Showing?
Live Link:https://brighttech-website-2-an4j.onrender.com

Example Pages:

Home: index.njk

About: about.njk

Contact: contact.njk

Each page extends the main layout.njk file and includes the common header and footer.
