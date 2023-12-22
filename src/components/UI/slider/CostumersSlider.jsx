import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import ava04 from "../../../assets/images/ava-4.jpg";
import "./CostumerSlider.scss";

function CostumersSlider() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slideToShow: 1,
    slideToScroll: 1,
  };

  return (
    <Slider {...settings} className="costumers">
      <section className="costumer">
        <h5>Testimonial</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          corporis porro perspiciatis, quas aliquam dolorem tempora voluptate
          consectetur quasi sint repudiandae, incidunt fugit illo. Eius quidem
          soluta consequuntur quas vel!
        </p>
        <div>
          <img className="avatar" src={ava01} alt="" />
          <h4>Teona Maghradze</h4>
        </div>
      </section>
      <section>
        <h5>Testimonial</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          corporis porro perspiciatis, quas aliquam dolorem tempora voluptate
          consectetur quasi sint repudiandae, incidunt fugit illo. Eius quidem
          soluta consequuntur quas vel!
        </p>
        <div>
          <img className="avatar" src={ava02} alt="" />
          <h4>Teona Maghradze</h4>
        </div>
      </section>
      <section>
        <h5>Testimonial</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          corporis porro perspiciatis, quas aliquam dolorem tempora voluptate
          consectetur quasi sint repudiandae, incidunt fugit illo. Eius quidem
          soluta consequuntur quas vel!
        </p>
        <div>
          <img className="avatar" src={ava03} alt="" />
          <h4>Teona Maghradze</h4>
        </div>
      </section>

      <section>
        <h5>Testimonial</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          corporis porro perspiciatis, quas aliquam dolorem tempora voluptate
          consectetur quasi sint repudiandae, incidunt fugit illo. Eius quidem
          soluta consequuntur quas vel!
        </p>
        <div>
          <img className="avatar" src={ava04} alt="" />
          <h4>Teona Maghradze</h4>
        </div>
      </section>
    </Slider>
  );
}

export default CostumersSlider;
