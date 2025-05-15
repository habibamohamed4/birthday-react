import { Link } from 'react-router-dom';
export default () => (
  <div className="birthdayCard">
    <div className="cardFront">
      <h3 className="happy">HAPPY BIRTHDAY Love!</h3>
      <div className="balloons">
        <div className="balloonOne" />
        <div className="balloonTwo" />
        <div className="balloonThree" />
        <div className="balloonFour" />
      </div>
      <div className="cake">
        <div className="top-layer" />
        <div className="middle-layer" />
        <div className="bottom-layer" />
      </div>  
        <div class="candle-container">
    <div class="candle">
      <div class="heart-flame"></div>
      2
    </div>
    <div class="candle">
      <div class="heart-flame"></div>
      9
    </div>
  </div>
    </div>
    <div className="cardInside">
      <h3 className="back">HAPPY BIRTHDAY SaSa!</h3>
      <p>عزيزي مصطفي</p>
      <p>
        كل سنة وانت طيب و يا رب تكون سنة كلها سعادة و توفيق و تحقق كل اللي نفسك فيه. بشكر الظروف اللي جمعتنا و بقيت انت احلي نصيب ف حياتي ربنا يخليك ليا و كل سنة و احنا مع بعض وبنحقق احلامنا سوا
      </p>
      
       <Link to="/birthday-react/gift">
        <h1 className="gift">&#127873;</h1>
        <h1 className="click">Click Me </h1>
      </Link>
      
      <p className="name">حبيبه</p>
    </div>
  </div>
);
