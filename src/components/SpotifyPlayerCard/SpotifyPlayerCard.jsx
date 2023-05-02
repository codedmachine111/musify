import "./SpotifyPlayerCard.scss";

export const SpotifyPlayerCard = (props) => {
  const { emotion } = props;
  return (
    <div className="spc-container">
      <div className="spc-header">
        <h2 id="prediction">AI predicted you are <span id="pred">{emotion}</span></h2>
      </div>
      <div className="spc-title">
        {emotion == "sad" ? (
          <>
            <h1>Soothe your soul!</h1>
          </>
        ) : (
          <>
            <h1>The Power of Happy Music!</h1>
          </>
        )}
      </div>
      <div className="spc-desc">
        {emotion == "sad" ? (
          <>
            <p>
              When we're feeling down, listening to sad songs can actually help
              us feel better. Sad music can be cathartic, allowing us to express
              and process our emotions. It can also help us feel a sense of
              connection and understanding, knowing that others have experienced
              similar feelings.
            </p>
            <p>
              Research has also shown that listening to sad music can actually
              activate pleasure centers in our brain, leading to feelings of
              comfort and even pleasure. Additionally, sad music can be calming
              and provide a sense of solace during difficult times. So if you're
              feeling sad, don't be afraid to listen to some melancholy tunes -
              it may just help you feel a little bit better.
            </p>
          </>
        ) : (
          <>
            <p>
              Research has shown that listening to happy music can have several
              positive effects on our mood and overall well-being. Happy music
              has a way of lifting our spirits and bringing joy to our day. It
              can also boost our energy levels, improve our motivation, and
              reduce stress and anxiety.
            </p>
            <p>
              When we listen to music that makes us feel happy, our brain
              releases dopamine, a neurotransmitter associated with pleasure and
              reward, which can make us feel good and enhance our mood. So, if
              you're feeling down, listening to some happy music can be a great
              way to lift your mood and bring some positivity into your day!
            </p>
          </>
        )}
      </div>
    </div>
  );
};
