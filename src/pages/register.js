import React, { useState } from "react";
import "../styles/register.css";
import { TextField, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link } from "react-router-dom";

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    color: "#000",
    fontFamily: "Arial",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2e2e2e",
      borderWidth: "2px",
    },
  },
  "& .MuiInputLabel-outlined": {
    color: "#2e2e2e",
    fontWeight: "bold",
    "&.Mui-focused": {
      color: "secondary.main",
      fontWeight: "bold",
    },
  },
};

const Register = () => {
  // State for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [collegeYear, setCollegeYear] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [dob, setDob] = useState(null);

  // State for error messages
  const [errors, setErrors] = useState({});

  // Function to validate form inputs
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Validate First Name
    if (!firstName) {
      formErrors.firstName = "First name is required";
      isValid = false;
    }

    // Validate Last Name
    if (!lastName) {
      formErrors.lastName = "Last name is required";
      isValid = false;
    }

    // Validate College Name
    if (!collegeName) {
      formErrors.collegeName = "College name is required";
      isValid = false;
    }

    // Validate College Year
    if (!collegeYear) {
      formErrors.collegeYear = "College year is required";
      isValid = false;
    } else if (isNaN(collegeYear) || collegeYear < 1 || collegeYear > 6) {
      formErrors.collegeYear = "Please enter a valid year (1-6)";
      isValid = false;
    }

    // Validate Date of Birth
    if (!dob) {
      formErrors.dob = "Date of birth is required";
      isValid = false;
    }

    // Validate Phone Number
    if (!phoneNumber) {
      formErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      formErrors.phoneNumber = "Phone number must be 10 digits";
      isValid = false;
    }

    // Validate Email
    if (!email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid";
      isValid = false;
    }

    // Validate Password
    if (!password) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    // Validate Repeat Password
    if (!repeatPassword) {
      formErrors.repeatPassword = "Please confirm your password";
      isValid = false;
    } else if (password !== repeatPassword) {
      formErrors.repeatPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, handle form submission
      console.log("Form submitted successfully!");
      // You can handle the form data here, e.g., send it to a server
    }
  };

  return (
    <>
      <div className="register">
        <link
          href="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />
        <form method="post" action="connect.php" id="registrationForm" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="content">
            <TextField
              sx={inputStyle}
              label="First Name"
              error={!!errors.firstName}
              helperText={errors.firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              sx={inputStyle}
              label="Last Name"
              error={!!errors.lastName}
              helperText={errors.lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              sx={inputStyle}
              label="College Name"
              error={!!errors.collegeName}
              helperText={errors.collegeName}
              onChange={(e) => setCollegeName(e.target.value)}
            />
            <TextField
              sx={inputStyle}
              label="College Year"
              type="number"
              inputProps={{ min: 1, max: 6, maxLength: 1, pattern: "[1-6]" }}
              error={!!errors.collegeYear}
              helperText={errors.collegeYear}
              onChange={(e) => setCollegeYear(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="DOB"
                format="DD/MM/YYYY"
                sx={inputStyle}
                value={dob}
                onChange={(newValue) => setDob(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={!!errors.dob}
                    helperText={errors.dob}
                    sx={inputStyle}
                  />
                )}
              />
            </LocalizationProvider>
            <TextField
              sx={inputStyle}
              inputProps={{ maxLength: 10 }}
              label="Phone number"
              type="tel"
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
            />
            <TextField
              sx={inputStyle}
              label="Email"
              error={!!errors.email}
              helperText={errors.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              sx={inputStyle}
              label="Password"
              type="password"
              error={!!errors.password}
              helperText={errors.password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              sx={inputStyle}
              label="Repeat Password"
              type="password"
              error={!!errors.repeatPassword}
              helperText={errors.repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <Button
              style={{ backgroundColor: "#324b4f" }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
            <Typography style={{ marginBlock: "1rem" }}>
              Already have an Account? <Link to="/login">Login</Link>
            </Typography>
          </div>
        </form>
      </div>
      <footer>
        <p id="bottom">Team SportSquare</p>
      </footer>
    </>
  );
};

export default Register;
