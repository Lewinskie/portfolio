import "./intro.css";
import Me from "../../img/me2.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="iLeft">
        <div className="iLeftWrapper">
          <h2 className="iIntro">Hello, my name is</h2>
          <h1 className="iName">Lewis Maina</h1>
          <div className="iTitle">
            <div className="iTitleWrapper">
              <div className="iTitleItem">Web Developer</div>
              <div className="iTitleItem">UI/UX Designer</div>
              <div className="iTitleItem">Network Engineer</div>
              <div className="iTitleItem">Writer</div>
              <div className="iTitleItem">Biker</div>
            </div>
          </div>

          <div className="iDesc">
            i design and develop services for customers of all sizes
            specializing in creating stylish , modern websites, web services and
            online stores.
          </div>
        </div>
      </div>
      <div className="iRight">
        <div className="iBg"></div>
        <img src={Me} alt="" className="iImg" />
      </div>
    </div>
  );
};
export default Intro;
