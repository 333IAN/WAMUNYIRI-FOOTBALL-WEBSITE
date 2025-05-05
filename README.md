### Wamunyiri Football Club - Official Website

![Python](https://img.shields.io/badge/Python-3.8+-blue?logo=python)
![Flask](https://img.shields.io/badge/Flask-2.0+-black?logo=flask)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-lightgrey?logo=sqlalchemy)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScriptES6+](https://img.shields.io/badge/JavaScriptES6+-F7DF1E?logo=javascriptES6+&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

![Home Page View](/teampage.png)
![database view](/contact.png)
![my team view](/myteam.png)
![table view](/table.png)
![view](/view.png)
![second view](/view1.png)

# Table of Contents

  - Project Overview
  - Features
  - Technologies Used
  - Installation
  - Project Structure
  - Configuration
  - Usage
  - Development
  - Contributing
  - License

### Project Overview 🎯

Wamunyiri Football Club is a professional football club based in Western, Kenya that competes in regional leagues. This official website showcases the club's history, teams, achievements, and provides a platform for fans to connect with the club.
The website features:
 - Responsive design for all devices
 - Interactive image galleries and video highlights
 - Contact form with database storage
 - Smooth animations and transitions
 - Modern UI with club branding

### Features
**Technical Features**
 - Backend:
     - Flask web framework
     - SQLAlchemy ORM for database operations
     - Form validation and flash messaging
     - Secure data handling
  - Frontend:
     - Modern CSS with Flexbox and Grid
     - Interactive Javascript elements
     - Smooth scrolling navigation
     - Image sliders and responsive video embeds
     - Form validation
  - UI/UX:
      - Consistent color scheme and typography
      - Animated transitions between sections
      - Accessibility considerations
      - Optimized media loading

 ### Technologies Used
**Backend**
   - Python 3.8+
   - Flask 2.0+
   - SQLAlchemy 1.4+
   - SQLite (development database)

**Frontend**
   - HTML5
   - CSS3 (with CSS Variables)
   - JavaScript(ES6+)
   - Font Icons
   - Google Fonts

**Development Tools**
   - VS Code 
   - Chrome Developer Tools

### Installation

**Prerequisites**
   - Python 3.8 or higher
   - pip package manager
   - Git(optional)

**Setup Instructions**

1. Clone the repository:
```
git clone https://github.com/your-username/wamunyiri-fc-website.git
cd wamunyiri-fc-website
```
2. Create a virtual environment:
```
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```
3. Install dependencies
```
pip install -r requirements.txt
```
4. Set up environment variables:

Create a .env in the root directory with:
```
SECRET_KEY=your_secret_key_here
```
5. Initialize the database:
```
python
>>> from app import db, app
>>> with app.app_context():
...     db.create_all()
```
6. Run the development server:
```
python app.py
```
7. Access the website:
Open your browser and visit http://localhost:5000

### Project Structure
```
wamunyiri-fc-website/
├── wamunyiri.py                # Main Flask application
├── requirements.txt      # Python dependencies
├── static/               # Static files
│   ├── Image/            # All images
│   ├── wamunyiri1.css     # Main stylesheet
│   └── wamunyiri1.js      # Main JavaScript file
├── templates/            # HTML templates
│   └── wamunyiti1.html    # Main template
├── instance/             # Database files (created at runtime)
│   └── wamunyiri.db
└── README.md             # This documentation
```
### Configuration

Create a ```.env```







































 














































































