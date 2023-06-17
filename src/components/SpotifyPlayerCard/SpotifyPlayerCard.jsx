import "./SpotifyPlayerCard.scss";
import { Button } from "../Button/Button";

export const SpotifyPlayerCard = (props) => {
  const { emotion } = props;

  const onTryAgainHandler = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const textResponse = (emotion) => {
    if (expression === "happy") {
      responseText.textContent = "You seem to be happy!";
    } else if (expression === "sad") {
      responseText.textContent = "AI predicted you are sad. Soothe your soul!";
    } else if (expression === "neutral") {
      responseText.textContent =
        "You have a neutral expression. Embrace the tranquility!";
    } else if (expression === "angry") {
      responseText.textContent =
        "You appear to be angry. Take a deep breath and find your calm.";
    } else {
      responseText.textContent = "Unable to determine your expression.";
    }
  };
  return (
    <>
      <div className={`spc-container`}>
        <div className="spc-card-container">
          <div className="spc-header">
            <h2 id="prediction">
              AI predicted you have a <span id="pred">{emotion}</span>{" "}
              expression.
            </h2>
          </div>
          <div className="spc-title">
            <h1>
              {emotion === "happy"
                ? "The Power of Happy Music!"
                : emotion === "sad"
                ? "Soothe your soul!"
                : emotion === "neutral"
                ? "Embrace the tranquility!"
                : "Finding your calm"}
            </h1>
          </div>
          <div className="spc-desc">
            {emotion === "happy" && (
              <>
                <p>
                  Research has shown that listening to happy music can have
                  several positive effects on our mood and overall well-being.
                  Happy music has a way of lifting our spirits and bringing joy
                  to our day. It can also boost our energy levels, improve our
                  motivation, and reduce stress and anxiety.
                </p>
                <p>
                  When we listen to music that makes us feel happy, our brain
                  releases dopamine, a neurotransmitter associated with pleasure
                  and reward, which can make us feel good and enhance our mood.
                  So, if you're feeling down, listening to some happy music can
                  be a great way to lift your mood and bring some positivity
                  into your day!
                </p>
              </>
            )}
            {emotion === "sad" && (
              <>
                <p>
                  When we're feeling down, listening to sad songs can actually
                  help us feel better. Sad music can be cathartic, allowing us
                  to express and process our emotions. It can also help us feel
                  a sense of connection and understanding, knowing that others
                  have experienced similar feelings.
                </p>
                <p>
                  Research has also shown that listening to sad music can
                  actually activate pleasure centers in our brain, leading to
                  feelings of comfort and even pleasure. Additionally, sad music
                  can be calming and provide a sense of solace during difficult
                  times. So if you're feeling sad, don't be afraid to listen to
                  some melancholy tunes - it may just help you feel a little bit
                  better.
                </p>
              </>
            )}
            {emotion === "neutral" && (
              <>
                <p>
                  A neutral expression often reflects a state of calmness and
                  balance. In moments like these, it can be refreshing to
                  explore music that complements your neutral mood. Consider
                  listening to genres that evoke a sense of relaxation, harmony,
                  and gentle introspection. Whether it's instrumental melodies,
                  ambient compositions, or soothing soundscapes, these genres
                  can enhance your serene state of mind.
                </p>
                <p>
                  Neutral moments provide an opportunity to appreciate music in
                  its pure form, allowing you to immerse yourself in its
                  textures, rhythms, and subtleties. By embracing this neutral
                  state, you can create a space for introspection, rejuvenation,
                  and open-minded exploration.
                </p>
              </>
            )}
            {emotion === "angry" && (
              <>
                <p>
                  When anger arises, it's important to find ways to calm and
                  center yourself. Listening to calming and soothing music can
                  help in soothing your emotions and finding your calm.
                </p>
                <p>
                  However, if you're looking for an outlet to channel your anger
                  and release some energy, consider listening to high-energy and
                  motivational gym songs. These songs are known for their
                  powerful beats, intense lyrics, and energetic vibes, which can
                  help you channel your anger into a focused and empowering
                  workout.
                </p>
                <p>
                  Engaging in physical activity while listening to gym songs can
                  provide a healthy release for your anger, boost your mood, and
                  help you regain a sense of control. So put on your headphones,
                  hit the gym, and let the music drive your determination and
                  resilience.
                </p>
              </>
            )}
          </div>
        </div>
        <div className="try-again">
          <Button title="Try again" onClick={onTryAgainHandler} />
        </div>
      </div>
    </>
  );
};
