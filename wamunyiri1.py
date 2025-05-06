from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key_here'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///wamunyiri.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer)
    email = db.Column(db.String(100), nullable=False)
    address = db.Column(db.String(200))
    football_career = db.Column(db.Text)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

@app.route('/')
def home():
    return render_template('wamunyiri1.html')

@app.route('/submit', methods=['POST'])
def submit_form():
    try:
        name = request.form.get('name')
        age = request.form.get('age')
        email = request.form.get('email')
        address = request.form.get('address')
        football_career = request.form.get('FOOTBALL CAREER')

        new_contact = Contact(
            name=name,
            age=age,
            email=email,
            address=address,
            football_career=football_career
        )
        
        db.session.add(new_contact)
        db.session.commit()
        
        flash('Thank you for contacting Wamunyiri FC! We will get back to you soon.', 'success')
    except Exception as e:
        db.session.rollback()
        flash('An error occurred while submitting your form. Please try again.', 'danger')
    
    return redirect(url_for('home'))

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)