import "./ImageUploadCard.scss";
import { Button } from "../Button/Button";
import Webcam from "react-webcam";
import { useState, useRef, useCallback } from "react";
import { predictImageClass } from "../../utilities/predict";

const ImageUploadCard = () => {
  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };

  const [image, setImage] = useState("");
  const [prediction, setPrediction] = useState("");

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    setImage(image);
  });

  const onPredictHandler = async (e) => {
    const imageElement = document.getElementById("captured-image");

    e.preventDefault();
    if (!(imageElement instanceof HTMLImageElement)) {
      console.error('Invalid image element!');
      return;
    }
    
    const predictedClass = await predictImageClass(imageElement);
    setPrediction(predictedClass);
  };
  

  return (
    <>
      <div className="image-upload-card-container">
        <div className="image-input">
          <h2>Take a Selfie!</h2>
          <div className="webcam-container">
            {image == "" ? (
              <Webcam
                audio={false}
                height={"100%"}
                ref={webcamRef}
                width={"100%"}
                screenshotFormat="image/jpeg"
                id="webcam-camera"
                videoConstraints={videoConstraints}
              />
            ) : (
              <img src={image} id="captured-image" />
            )}
          </div>
        </div>
        <div className="buttons">
          {image != "" ? (
            <>
              <Button
                title="Retake"
                onClick={(e) => {
                  e.preventDefault();
                  setImage("");
                  setPrediction("");
                }}
              />
              <Button title="music" onClick={onPredictHandler} />
            </>
          ) : (
            <Button
              title="capture"
              onClick={(e) => {
                e.preventDefault();
                capture();
              }}
            />
          )}
        </div>
        <div className="prediction">
          {prediction != "" ? (
            <>
              <h2>{prediction}</h2>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default ImageUploadCard;
