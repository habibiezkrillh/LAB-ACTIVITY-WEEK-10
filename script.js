document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const program = document.getElementById('program').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const motherName = document.getElementById('mother-name').value;
    const fatherName = document.getElementById('father-name').value;

    // Display form data
    document.getElementById('result-name').innerText = name;
    document.getElementById('result-email').innerText = email;
    document.getElementById('result-dob').innerText = dob;
    document.getElementById('result-gender').innerText = gender;
    document.getElementById('result-program').innerText = program;
    document.getElementById('result-address').innerText = address;
    document.getElementById('result-phone').innerText = phone;
    document.getElementById('result-mother-name').innerText = motherName;
    document.getElementById('result-father-name').innerText = fatherName;

    document.getElementById('form-result').style.display = 'block';
});
