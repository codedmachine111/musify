import React from "react";
import "./AboutPage.scss";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

export const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-page-container">
        <div className="about-page-content">
          <h1>
            About <span id="diff">m</span>usify
          </h1>
          <p>
            Musify is an innovative web application that combines deep learning
            and image processing technologies to detect facial emotions and
            recommend music based on those emotions.
          </p>
          <p>
            Our goal is to provide users with a unique and interactive
            experience by leveraging cutting-edge technologies in facial emotion
            detection and music recommendation.
          </p>
          <h2>Key Features:</h2>
          <ul>
            <li>
              Accurate facial emotion detection using deep learning models
            </li>
            <li>
              Seamless integration with Spotify API for personalized music
              recommendations
            </li>
            <li>Visually stunning and user-friendly interface</li>
            <li>Real-time face detection using face-api.js</li>
            <li>
              Continuous learning and improvement of the emotion detection
              models
            </li>
          </ul>
          <h2>How It Works:</h2>
          <p>
            Musufy utilizes state-of-the-art deep learning models trained on the
            FER 2013 dataset. When a user uploads an image, face-api.js detects
            the face in the image. The detected face is then passed to the deep
            learning model for emotion prediction.
          </p>
          <p>
            Based on the predicted emotion, Musify leverages the Spotify API to
            recommend music that matches the user's emotional state. Users can
            explore different emotions and discover new music tailored to their
            mood.
          </p>
          <h2>Get Started:</h2>
          <p>
            Go to{" "}
            <Link to="/" id="link">
              Home
            </Link>{" "}
            and try it out.
          </p>
        </div>
      </div>
    </>
  );
};
