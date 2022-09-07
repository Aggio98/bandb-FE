import "./style.css";
import picBanner from "@/../../public/assets/womanbanner.png";
const Banner = () => {
  return (
    <div>
      <div className="container1">
        <div className="picContainer">
          <div className="textContainer">
            <h2>One click, one product, one opportunity</h2>
          </div>
          <div className="textContainer"></div>
          <div className="textContainer"></div>
          <img className="pic" src={picBanner} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export { Banner };
