import { StrictMode,useState } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from "./App.jsx";
import StarRating from "./components/StarRating.jsx";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return <div>
     <StarRating color='pink' maxRating={10} size={30} onSetRating={setMovieRating}/>
     <p>this movie is raited by {movieRating} pepole</p>
  </div>
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={'9'}
      messages={["Terrible", "bad", "okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    {/* <Test/> */}
  </StrictMode>,
);
