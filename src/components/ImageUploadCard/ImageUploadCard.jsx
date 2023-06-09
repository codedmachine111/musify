import "./ImageUploadCard.scss";
import { Button } from "../Button/Button";
import { CircularProgress } from "@mui/material";
import Webcam from "react-webcam";
import { useState, useRef, useCallback } from "react";
import { detectFaceAndExpression } from "../../utilities/predict";
import { getGenreSongsForEmotion } from "../../utilities/spotify.util";
import { useContext } from "react";
import { PredictContext } from '../../App'
import { SongsContext } from '../../App'

const ImageUploadCard = () => {
  const videoConstraints = {
    width: 400,
    height: 400,
    facingMode: "user",
  };
  const { predicted, setPredicted } = useContext(PredictContext);
  const { setSongs } = useContext(SongsContext);

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    if (image == null) {
      alert('Please enable your camera!');
      return;
    }
    setImage(image);
  });

  let expression = "";
  const handleImageLoadAndPredict = async (image) => {
    const [canvas, maxExpression] = await detectFaceAndExpression(image);
    setPredicted(maxExpression);
    expression = maxExpression;
    setCroppedImage(canvas.toDataURL());
  };

  const onPredictHandler = async (e) => {
    const imageElement = document.getElementById("captured-image");

    e.preventDefault();
    if (!(imageElement instanceof HTMLImageElement)) {
      console.error('Invalid image element!');
      return;
    }

    loading ? setLoading(false) : setLoading(true);
    await handleImageLoadAndPredict(imageElement)
    // const predictedClass = await predictImageClassMinModel(imageElement);
    // setPredicted(predictedClass);
    const tracks = await getGenreSongsForEmotion(expression);
    setSongs(tracks);
    setLoading(false);
  };
  

  return (
    <>
      <div className="image-upload-card-container">
        <div className="image-input">
          <h2>Take a <span id="diff">S</span>elfie!</h2>
          <p>(Please take a clear photo!)</p>
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
        <div className="display-face">
          {croppedImage && (<>
            <img src={croppedImage} alt="Cropped img" />
            <p>Face Detected!</p>
          </>)}
        </div>
        {loading ? (<>
          <div className="loading">
            <CircularProgress />
          </div>
          </>):(<>
            <div className="buttons">
          {image != "" ? (
            <>
              <Button
                title="Retake"
                onClick={(e) => {
                  e.preventDefault();
                  setImage("");
                  setPredicted("");
                }}
              />
              <Button title="recommend music" onClick={onPredictHandler} disabled={loading}/>
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
          </>)}
      </div>
    </>
  );
};

export default ImageUploadCard;
