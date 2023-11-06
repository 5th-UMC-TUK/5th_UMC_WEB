import { useLocation, useParams } from "react-router-dom";
import { ImgBox } from "../style/Movie/movie.style";

function DetailPage() {
  const { titleText } = useParams();
  const { state } = useLocation();
  console.log(titleText);
  console.log(state);
  return (
    <div>
      <ImgBox src={state.img} />
      <h1>{state.titleText}</h1>
    </div>
  );
}

export default DetailPage;
