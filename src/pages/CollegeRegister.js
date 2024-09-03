import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
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

const CollegeRegister = () => {
  const [collegeName, setCollegeName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [establishedDate, setEstablishedDate] = useState(null);
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Function to validate form inputs
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!collegeName) {
      formErrors.collegeName = "College name is required";
      isValid = false;
    }

    if (!contactPerson) {
      formErrors.contactPerson = "Contact person is required";
      isValid = false;
    }

    if (!phoneNumber) {
      formErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      formErrors.phoneNumber = "Phone number must be 10 digits";
      isValid = false;
    }

    if (!email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid";
      isValid = false;
    }

    if (!password) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!repeatPassword) {
      formErrors.repeatPassword = "Please confirm your password";
      isValid = false;
    } else if (password !== repeatPassword) {
      formErrors.repeatPassword = "Passwords do not match";
      isValid = false;
    }

    if (!establishedDate) {
      formErrors.establishedDate = "Established date is required";
      isValid = false;
    }

    if (!address) {
      formErrors.address = "Address is required";
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
      console.log({
        collegeName,
        contactPerson,
        phoneNumber,
        email,
        establishedDate: establishedDate.format('DD/MM/YYYY'),
        address,
      });
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <Typography variant="h4" gutterBottom>
        College Registration - SPORTQUARE
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={inputStyle}
          label="College Name"
          fullWidth
          margin="normal"
          error={!!errors.collegeName}
          helperText={errors.collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
        />
        <TextField
          sx={inputStyle}
          label="Contact Person"
          fullWidth
          margin="normal"
          error={!!errors.contactPerson}
          helperText={errors.contactPerson}
          onChange={(e) => setContactPerson(e.target.value)}
        />
        <TextField
          sx={inputStyle}
          label="Phone Number"
          fullWidth
          margin="normal"
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
        />
        <TextField
          sx={inputStyle}
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Established Date"
            value={establishedDate}
            onChange={(newValue) => setEstablishedDate(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                margin="normal"
                sx={inputStyle}
                error={!!errors.establishedDate}
                helperText={errors.establishedDate}
              />
            )}
          />
        </LocalizationProvider>
        <TextField
          sx={inputStyle}
          label="Address"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          error={!!errors.address}
          helperText={errors.address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          sx={inputStyle}
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          error={!!errors.password}
          helperText={errors.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          sx={inputStyle}
          label="Repeat Password"
          type="password"
          fullWidth
          margin="normal"
          error={!!errors.repeatPassword}
          helperText={errors.repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, backgroundColor: "#324b4f" }}
        >
          Register
        </Button>
        {submitted && (
          <Typography color="success" sx={{ mt: 2 }}>
            Registration Successful!
          </Typography>
        )}
        <Typography style={{ marginBlock: "1rem" }}>
          Already registered? <Link to="/login">Login</Link>
        </Typography>
      </form>
    </Box>
  );
};

export default CollegeRegister;
