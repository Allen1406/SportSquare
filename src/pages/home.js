import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div class="title">
        <h1>
          Welcome to Sport Square, the Ultimate Hub for College Sports
          Tournaments!
        </h1>
      </div>
      <div class="discription">
        <p id="p1">
          Are you passionate about sports and looking for a way to connect with
          other college athletes? Look no further! Sports Square is your
          one-stop destination for discovering and joining sports tournaments
          hosted by colleges across the country.
        </p>
        <p id="p2">
          Our platform is designed to bridge the gap between colleges hosting
          sports events and students eager to participate. Whether you’re
          organizing a tournament or searching for an exciting competition to
          join, Sports Square makes it easy to connect, engage, and compete with
          fellow athletes.
        </p>

        <p id="p3">
          You can register your team, and stay updated on all the latest
          happenings in the college sports scene. Join us today and be part of a
          vibrant community where sportsmanship meets opportunity.
        </p>
      </div>
      <div class="buttons">
        <Link to="/register">
          <button id="reg">Register</button>
        </Link>
        <Link to="/login">
          <button id="log">Login</button>
        </Link>
      </div>
      <footer>
        <p id="bottom">Team SportSquare</p>
      </footer>
    </>
  );
};

export default Home;
