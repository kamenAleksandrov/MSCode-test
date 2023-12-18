document.querySelector('.login-form').addEventListener('submit', function(e) {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (!username || !password) {
        e.preventDefault();
        alert("Please fill in both username and password.");
    }
});