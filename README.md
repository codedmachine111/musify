# Musify

Musify is an innovative web application that combines the power of deep learning and image processing technologies to detect facial emotions and provide personalized music recommendations. Whether you're feeling happy, sad, excited, or calm, Musify delivers a seamless and immersive experience, bringing together the worlds of facial emotion detection and music.
<br>
[Live Demo](https://musifi.vercel.app) | [Jupyter Notebook](https://github.com/codedmachine111/musify-deep-learning-model/blob/important-labels-model/musify_emotion_detection_important_labels.ipynb)

## Features

- Emotion Detection: Initially utilized a custom-built CNN [model](https://github.com/codedmachine111/musify-deep-learning-model/blob/important-labels-model/musify_emotion_detection_important_labels.ipynb) for   facial emotion detection, and now leverages the highly accurate facial expression model by ![face-api-js](https://github.com/vladmandic/face-api/model) for even better results.
- Personalized Music Recommendations: Integrates with the Spotify API to curate customized music playlists based on users' facial expression.
- Face Detection: Employs face-api.js for face detection, ensuring a seamless user experience.

# Results of the CNN model
- Accuracy and loss
<img src="https://github.com/codedmachine111/musify/assets/88738817/90fcc3ae-b6fa-4464-9f9b-97f6e7ddc60b" width="700"/>

  
- Confusion matrix
<img src="https://github.com/codedmachine111/musify/assets/88738817/6ee7c248-1ce6-4021-8d06-adc6ecf0edca" width="300"/>

## Tools used
<p align="left">
   <img src="https://www.svgrepo.com/show/452092/react.svg" height="50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://www.svgrepo.com/show/354440/tensorflow.svg" height="50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <img src="https://www.svgrepo.com/show/349502/sass.svg" height="50px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

- [**React**](https://reactjs.org/): JavaScript library for building user interfaces.
- [**Tensorflow**](https://nodejs.org/): Provides comprehensive ecosystem for building and deploying machine learning/deep learning models.
- [**Tensorflow.js**](https://nodejs.org/): JavaScript library that allows running TensorFlow models directly in the web browser or on Node.js
- [**Sass**](https://sass-lang.com/): CSS extension language that provides more advanced features and capabilities.

## Installation steps

1. - Fork the [repo](https://github.com/codedmachine111/musify)
   - Clone the repo to your local machine `git clone https://github.com/codedmachine111/musify.git`
   - Change current directory `cd musify`
2. Install latest version of [Nodejs](https://nodejs.org/en/) and install all the dependencies using:

```bash
npm install
```

3. For using spotify in the web-app, create a .env file in the root directory of the project and add:

```bash
VITE_SPOTIFY_CLIENT_ID = "YOUR-SPOTIFY-CLIENT-ID"
VITE_SPOTIFY_CLIENT_SECRET = "YOUR-SPOTIFY-CLIENT-SECRET"
VITE_APP_URL = "VITE-APP-URL-AFTER-HOSTING"
```
> **Note**
> You need to get your Spotify ID and SECRET key from ![here](https://developer.spotify.com/documentation/web-api)

5. Run the development server:

```bash
npm run dev
```

## Contribution

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request or open an issue on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
