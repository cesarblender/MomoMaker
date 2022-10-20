import { RefObject, useContext } from "react";
import { AppContext } from "../context/context";

export function TempPreviewImage({
  momo,
}: {
  momo: RefObject<HTMLDivElement>;
}) {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div style={{ position: "absolute", top: "-200%", left: "-200%" }}>
      <div
        ref={momo}
        className="meme"
        style={{
          backgroundImage: `url(${state.momoProperties.backgroundImage})`,
          filter: `saturate(${state.momoProperties.saturation}) brightness(${(state.momoProperties.brightness / 2) + 0.5})`,
        }}
      >
        <div className="meme_text">
          {state.momoProperties.topText.split("\n").map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className="meme_text">
          {state.momoProperties.bottomText.split("\n").map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
