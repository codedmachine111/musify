import * as tf from "@tensorflow/tfjs";
import { MIN_TARGET_CLASSES } from "./target_classes";
import * as faceapi from "@vladmandic/face-api";

tf.setBackend("webgl");

export const detectFaceAndExpression = async (image) => {
  const minConfidence = 0.5;
  let MODEL_URL = "";
  if (import.meta.env.VITE_APP_URL) {
    // FOR DEV
    MODEL_URL = `${import.meta.env.VITE_APP_URL}/src/assets/models`;
  } else {
    MODEL_URL = "/models";
  }

  await faceapi.loadFaceExpressionModel(MODEL_URL);
  await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);

  // detect faces and expressions
  const result = await faceapi
    .detectAllFaces(image, new faceapi.SsdMobilenetv1Options({ minConfidence }))
    .withFaceExpressions(image);

  if (result && result.length > 0) {
    console.log("Emotion detected!");
  } else {
    console.warn("No emotion detected");
    alert("No emotion detected. Please try again.");
    window.location.reload();
    return null;
  }

  let maxExpression = ""
  let maxConfidence = 0;
  const expressions = result[0].expressions;
  
  const targetExpressions = ["happy", "sad", "angry", "neutral"];
  
  for(const expression of targetExpressions){
    const confidence = expressions[expression] || 0;
    if(confidence > maxConfidence){
      maxConfidence = confidence;
      maxExpression = expression;
    }
  }

  // To draw the detected face on the canvas
  const { x, y, width, height } = result[0].detection.box;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.drawImage(image, x, y, width, height, 0, 0, width, height);

  return [canvas, maxExpression];
};

const loadModel = async () => {
  if (import.meta.env.VITE_APP_URL) {
    // FOR DEV
    const model = await tf.loadLayersModel(
      `${import.meta.env.VITE_APP_URL}/src/assets/final-model/model.json`
    );
    return model;
  } else {
    const model = await tf.loadLayersModel("/final-model/model.json");
    return model;
  }
};

const preprocessImageMinLabelModel = async (image) => {
  // Detect face
  const face = await detectFace(image);

  // Convert image to a tensor and resize to (48, 48, 3)
  const tensor = tf.browser
    .fromPixels(face)
    .resizeNearestNeighbor([48, 48])
    .toFloat();

  // Convert to grayscale and reshape to (48, 48, 1)
  const gray = tensor.mean(2, true);
  const reshapedTensor = gray.reshape([1, 48, 48, 1]);

  // Normalize the values between -1 and 1
  const offset = tf.scalar(255);
  const normalized = reshapedTensor.sub(offset).div(offset);

  // Add a batch dimension to the tensor
  const batched = normalized;

  return batched;
};

export const predictImageClassMinModel = async (image) => {
  const model = await loadModel();

  const preprocessed = await preprocessImageMinLabelModel(image);

  const prediction = await model.predict(preprocessed);

  const predictedIndex = prediction.argMax(1).dataSync()[0];

  const predictedClass = MIN_TARGET_CLASSES[predictedIndex];

  return predictedClass;
};
