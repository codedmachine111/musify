import * as tf from '@tensorflow/tfjs'
import { MIN_TARGET_CLASSES } from './target_classes'

export const loadModel = async ()=>{
    if(import.meta.env.VITE_APP_URL){
        // FOR DEV
        const model = await tf.loadLayersModel(`${import.meta.env.VITE_APP_URL}/src/assets/final-model/model.json`); 
        return model;
    }else{
        const model = await tf.loadLayersModel('/assets/model/model.json');
        return model;
    }
}

export const preprocessImageMinLabelModel = async (image)=>{
    // Convert image to a tensor and resize to (48, 48, 3)
    const tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([48,48]).toFloat();

    // Convert to grayscale and reshape to (48, 48, 1)
    const gray = tensor.mean(2, true);
    const reshapedTensor = gray.reshape([1, 48, 48, 1]);

    // Normalize the values between -1 and 1
    const offset = tf.scalar(255);
    const normalized = reshapedTensor.sub(offset).div(offset);

    // Add a batch dimension to the tensor
    const batched = normalized;

    return batched;
}

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

export const predictImageClassMinModel = async (image)=>{
    const model = await loadModel();

    const preprocessed = await preprocessImageMinLabelModel(image);

    const prediction = await model.predict(preprocessed);

    const predictedIndex = prediction.argMax(1).dataSync()[0];

    const predictedClass = MIN_TARGET_CLASSES[predictedIndex];

    return predictedClass;
}