// Helper function to get an element by selector
function getElement(selector) {
    return document.querySelector(selector);
}

// 1. Password Visibility Toggle
const password = getElement('#password');
const togglePassword = getElement('#togglePassword');

if (password && togglePassword) {
    togglePassword.addEventListener('click', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
}

// Optional: Confirm Password Toggle (if used)
const confirmPassword = getElement('#confirmPassword');
const toggleConfirmPassword = getElement('#toggleConfirmPassword');

if (confirmPassword && toggleConfirmPassword) {
    toggleConfirmPassword.addEventListener('click', function () {
        const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPassword.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
}

// 2. Clear Input Fields when clicking the X icon
document.querySelectorAll('.input-icon').forEach(icon => {
    icon.addEventListener('click', function () {
        const inputId = this.getAttribute('data-input');
        const input = document.getElementById(inputId);
        if (input) input.value = ''; // Clear the input field
    });
});

// 3. Redirect to Register Page
const registerButton = getElement('#registerButton');
if (registerButton) {
    registerButton.addEventListener('click', function () {
        window.location.href = 'register.html';
    });
}

// 4. Back to Login Navigation (Quay lại Đăng nhập)
const backToLoginButton = getElement('.back-to-login');
if (backToLoginButton) {
    backToLoginButton.addEventListener('click', function () {
        window.location.href = 'login.html';
    });
}

// API Call Function (Optional)
function callApi(serviceId) {
    fetch(`https://dev1.techsupport.com.vn/api/auth/register/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Service ${serviceId} not found (Status: ${response.status})`);
        }
        return response.json();
    })
    .then(data => console.log(`Service ${serviceId} data:`, data))
    .catch(error => console.error('Error:', error));
}

// Assign Click Event to Service Cards (if used)
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function () {
        const serviceId = this.id;
        if (serviceId) callApi(serviceId);
    });
});

// User Menu Toggle
const userMenuButton = getElement('#userMenuButton');
const userMenu = getElement('#userMenu');

if (userMenuButton && userMenu) {
    userMenuButton.addEventListener('click', function () {
        userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close Menu when clicking outside
    window.addEventListener('click', function (event) {
        if (!event.target.matches('#userMenuButton') && userMenu.style.display === 'block') {
            userMenu.style.display = 'none';
        }
    });
}

// Logout Function
const logoutButton = getElement('#logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', function () {
        alert('Đăng xuất thành công!');
        window.location.href = 'login.html';
    });
}

// Toggle Service Menu Visibility
const serviceMenuButton = getElement('#serviceMenuButton');
const serviceMenu = getElement('#serviceMenu');

if (serviceMenuButton && serviceMenu) {
    serviceMenuButton.addEventListener('click', function () {
        serviceMenu.style.display = serviceMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the service menu when clicking outside
    window.addEventListener('click', function (event) {
        if (!event.target.closest('#serviceMenuButton') && !event.target.closest('#serviceMenu')) {
            serviceMenu.style.display = 'none';
        }
    });
}

// Modal Handling
const modal = getElement('#serviceModal');
const closeButton = getElement('.close-button');
const cancelButton = getElement('.cancel-button');

if (modal && closeButton && cancelButton) {
    closeButton.addEventListener('click', () => (modal.style.display = 'none'));
    cancelButton.addEventListener('click', () => (modal.style.display = 'none'));

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

//
document.getElementById('loginGoogle').addEventListener('click', function() {
    // Điều hướng đến trang đăng nhập Google hoặc mở popup
    alert('Đăng nhập bằng Google!');
});

document.getElementById('loginZalo').addEventListener('click', function() {
    // Điều hướng đến trang đăng nhập Zalo hoặc mở popup
    alert('Đăng nhập bằng Zalo!');
});
