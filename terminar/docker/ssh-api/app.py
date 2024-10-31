from flask import Flask, render_template, request, redirect, url_for
import subprocess
import os

app = Flask(__name__)

# Danh sách các phiên đăng nhập
sessions = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/connect', methods=['POST'])
def connect():
    username = request.form['username']
    ip = request.form['ip']
    password = request.form['password']  # Lưu ý: không nên lưu mật khẩu ở đây

    # Tạo phiên đăng nhập
    session_id = len(sessions) + 1
    sessions.append({'id': session_id, 'username': username, 'ip': ip})

    # Khởi động ttyd với thông tin phiên
    command = f"ttyd -p 7688 sshpass -p '{password}' ssh -o StrictHostKeyChecking=no {username}@{ip}"
    subprocess.Popen(command, shell=True)

    return redirect(url_for('session', session_id=session_id))

@app.route('/session/<int:session_id>')
def session(session_id):
    session_info = next((s for s in sessions if s['id'] == session_id), None)
    if session_info:
        return render_template('session.html', session=session_info)
    return "Session not found", 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

