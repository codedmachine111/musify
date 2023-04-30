import * as tf from '@tensorflow/tfjs'
import { TARGET_CLASSES } from './target_classes'

export const loadModel = async ()=>{
    const model = await tf.loadLayersModel(`${import.meta.env.VITE_APP_URL}/src/assets/model/model.json`); 
    return model;
}

// export const preprocessImage = async (image)=>{
//     // Convert image to a tensor and resize to (224,224,3)
//     const tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([224,224]).toFloat();

//     // Normalize the values between -1 and 1
//     const offset = tf.scalar(127);
//     const normalized = tensor.sub(offset).div(offset);

//     // Add a batch dimension to the tensor
//     const batched = normalized.expandDims(0);
    
//     return batched;
// }

export const preprocessImage = async (image) => {
    // Convert image to a tensor and resize to (224,224,3)
    const tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([224,224]).toFloat();
  
    // Normalize the values between -1 and 1
    const offset = tf.scalar(127);
    const normalized = tensor.sub(offset).div(offset);
  
    // Add a batch dimension to the tensor
    const batched = normalized.expandDims(0);
  
    // Convert pixel values from 0-255 to 0-1
    const scaled = batched.div(tf.scalar(255));

    return scaled;
  };

export const predictImageClass = async (image)=>{
    const model = await loadModel();

    const preprocessed = await preprocessImage(image);

    const prediction = await model.predict(preprocessed);

    const predictedIndex = prediction.argMax(1).dataSync()[0];

    const predictedClass = TARGET_CLASSES[predictedIndex];

    return predictedClass;
}