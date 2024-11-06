# Sử dụng Python phiên bản mới nhất
FROM python:3.9

# Cài đặt JupyterLab và các thư viện Python cơ bản
RUN pip install --no-cache-dir jupyterlab pandas numpy matplotlib

# Tạo thư mục làm việc
WORKDIR /workspace

# Khởi động JupyterLab khi container chạy
CMD ["jupyter", "lab", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root", "--NotebookApp.token=''"]

