import { useState } from "react";
import Ad from "./ad";

function AdPage() {
  const [advertisement, setAdvertisement] = useState(true);
  const toggle = () => {
    setAdvertisement(!advertisement);
  };
  return (
    <div>
      {advertisement ? <Ad /> : ""}
      <button onClick={toggle}>
        {advertisement ? "광고 안보기" : "광고 보기"}
      </button>
    </div>
  );
}

export default AdPage;
