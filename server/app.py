from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

@app.route('/api/details')
def get_name():
    return jsonify({"name": "Vignesh Shivhare"})

if __name__ == '__main__':
    app.run(debug=True)
