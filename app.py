from flask import Flask,render_template,request
app=Flask(__name__)
@app.route('/')
def home():
    return render_template('wamunyiri.html')
@app.route('/submit',methods=['POST'])
def submit_form():
    name=request.form.get('name')
    age=request.form.get('age')
    email=request.form.get('email')
    address=request.form.get('address')
    career=request.form.get('FOOTBALL CAREER')


    print(f"Form submitted by:{name},{age},{email},{address},{career}")
    return "Thank you contacting Wamunyiri FC!"

if __name__=='__main__':
    app.run(debug=True)