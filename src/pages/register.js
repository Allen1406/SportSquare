import React, { useState } from "react";
import "../styles/register.css";
import { TextField, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Link } from "react-router-dom";

const inputStyle = {
  // Root class for the input field
  "& .MuiOutlinedInput-root": {
    color: "#000",
    fontFamily: "Arial",
    // fontWeight: "bold",
    // Class for the border around the input field
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#2e2e2e",
      borderWidth: "2px",
    },
  },
  // Class for the label of the input field
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [collegeYear, setCollegeYear] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = () => {};
  return (
    <>
      <div class="register">
        <link
          href="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />
        <form method="post" action="connect.php" id="registrationForm">
          <h1>Register</h1>
          <div class="content">
            <TextField
              sx={inputStyle}
              label="First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />{" "}
            <TextField
              sx={inputStyle}
              label="Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <TextField
              sx={inputStyle}
              label="College Name"
              onChange={(e) => {
                setCollegeName(e.target.value);
              }}
            />
            <TextField
              sx={inputStyle}
              label="College Year"
              type="tel"
              onChange={(e) => {
                setCollegeYear(e.target.value);
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="DOB" format="DD/MM/YYYY" sx={inputStyle} />
            </LocalizationProvider>
            <TextField
              sx={inputStyle}
              inputProps={{ maxLength: 10 }}
              label="Phone number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <TextField
              sx={inputStyle}
              label="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              sx={inputStyle}
              label="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <TextField
              sx={inputStyle}
              label="Repeat Password"
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
            />
            <Button style={{ backgroundColor: "#324b4f" }} variant="contained">
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
