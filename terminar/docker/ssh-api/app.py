from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)

# Route cho trang chính
@app.route('/')
def index():
    return render_template('index.html')

# Route để kết nối SSH
@app.route('/connect', methods=['POST'])
def connect():
    username = request.form['username'].strip()  # Loại bỏ khoảng trắng
    ip = request.form['ip'].strip()  # Loại bỏ khoảng trắng
    password = request.form['password'].strip()  # Loại bỏ khoảng trắng

    # Kiểm tra xem username, ip và password có rỗng không
    if not username or not ip or not password:
        return "Username, IP, and Password cannot be empty!", 400

    # Chuyển hướng đến ttyd với thông tin SSH
    return redirect(url_for('ttyd', username=username, ip=ip, password=password))

# Route cho ttyd
@app.route('/ttyd/<username>/<ip>/<password>')
def ttyd(username, ip, password):
    # Tạo lệnh SSH với sshpass
    command = f"sshpass -p '{password}' ssh -o StrictHostKeyChecking=no {username}@{ip}"

    # Khởi động ttyd với lệnh SSH
    os.system(f"ttyd -p 7688 {command}")

    return render_template('ttyd.html', command=command)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

