# app.py
import subprocess
from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/run', methods=['POST'])
def run_docker_command():
    command = request.form.get("command")
    if not command:
        return jsonify({"error": "No command provided"}), 400

    try:
        # Thực thi lệnh Docker
        result = subprocess.check_output(command, shell=True, stderr=subprocess.STDOUT, text=True)
        return jsonify({"output": result})
    except subprocess.CalledProcessError as e:
        return jsonify({"error": e.output}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

