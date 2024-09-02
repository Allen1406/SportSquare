document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const password = document.getElementById("password");
  const repeatPassword = document.getElementById("repeatpassword");
  const dobInput = document.getElementById("dob-input");
  const phoneInput = document.getElementById("number-input");
  const collegeYearInput = document.getElementById("college-year-input");
  const inputs = form.querySelectorAll("input");

  const errors = {
    firstname: document.getElementById("firstname-error"),
    lastname: document.getElementById("lastname-error"),
    collegename: document.getElementById("collegename-error"),
    collegeYear: document.getElementById("college-year-error"),
    dob: document.getElementById("dob-error"),
    number: document.getElementById("number-error"),
    email: document.getElementById("email-error"),
    password: document.getElementById("password-error"),
    repeatPassword: document.getElementById("repeatpassword-error"),
    general: document.getElementById("general-error"),
  };

  form.addEventListener("submit", function (event) {
    let hasErrors = false;

    // Clear all error messages and remove error class from inputs
    for (let key in errors) {
      errors[key].textContent = "";
    }
    inputs.forEach((input) => input.classList.remove("error-outline"));

    // Validate each field and add error-outline class if validation fails
    if (!form.firstname.value) {
      errors.firstname.textContent = "Please enter your first name.";
      document.getElementById("firstname-input").style.border = "2px solid red";
      hasErrors = true;
    } else {
      document.getElementById("firstname-input").style.border = "";
    }

    if (!form.lastname.value) {
      errors.lastname.textContent = "Please enter your last name.";
      document.getElementById("lastname-input").style.border = "2px solid red";
      hasErrors = true;
    } else {
      document.getElementById("lastname-input").style.border = "";
    }

    if (!form.collegename.value) {
      errors.collegename.textContent = "Please enter your college name.";
      document.getElementById("collegename-input").style.border =
        "2px solid red";
      hasErrors = true;
    } else {
      document.getElementById("collegename-input").style.border = "";
    }
    //validate college year
    if (
      collegeYearInput.value.length !== 1 ||
      collegeYearInput.value < 0 ||
      collegeYearInput.value > 9
    ) {
      errors.collegeYear.textContent =
        "Please enter a valid single-digit college year.";
      collegeYearInput.style.border = "2px solid red";
      hasErrors = true;
    } else {
      collegeYearInput.style.border = "";
    }

    // Validate date
    const dobValue = dobInput.value;
    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dobValue.match(datePattern) || !isValidDate(dobValue)) {
      errors.dob.textContent =
        "Please enter a valid date in DD/MM/YYYY format.";
      dobInput.style.border = "2px solid red";
      hasErrors = true;
    } else {
      dobInput.style.border = "";
    }

    // Validate phone number
    if (!/^\d{10}$/.test(phoneInput.value)) {
      errors.number.textContent = "Please enter a valid 10-digit phone number.";
      phoneInput.style.border = "2px solid red";
      hasErrors = true;
    } else {
      phoneInput.style.border = "";
    }
    //validate email
    if (!form.email.value) {
      errors.email.textContent = "Please enter a valid email address.";
      document.getElementById("email-input").style.border = "2px solid red";
      hasErrors = true;
    } else {
      document.getElementById("email-input").style.border = "";
    }
    //validate password
    if (password.value.length < 8 || password.value.length > 16) {
      errors.password.textContent =
        "Password must be between 8 and 16 characters.";
      password.style.border = "2px solid red";
      hasErrors = true;
    } else {
      password.style.border = "";
    }

    if (password.value !== repeatPassword.value) {
      errors.repeatPassword.textContent = "Passwords do not match.";
      repeatPassword.style.border = "2px solid red";
      hasErrors = true;
    } else {
      repeatPassword.style.border = "";
    }

    if (hasErrors) {
      event.preventDefault(); // Prevent form submission if there are errors
    }
  });

  function isValidDate(dateString) {
    const [day, month, year] = dateString.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    return (
      date.getDate() === day &&
      date.getMonth() === month - 1 &&
      date.getFullYear() === year
    );
  }

  dobInput.addEventListener("input", function () {
    let value = dobInput.value.replace(/\D/g, ""); // Remove non-digits
    if (value.length > 2 && value.length <= 4) {
      value = value.slice(0, 2) + "/" + value.slice(2);
    } else if (value.length > 4) {
      value =
        value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4, 8);
    }
    dobInput.value = value;
  });

  // Limit phone number input to 10 digits
  phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ""); // Remove non-digits
    if (this.value.length > 10) {
      this.value = this.value.slice(0, 10); // Truncate to 10 digits
    }
  });

  // Limit college year input to a single digit
  collegeYearInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ""); // Remove non-digits
    if (this.value.length > 1) {
      this.value = this.value.slice(0, 1); // Allow only the first digit
    }
  });
});
  