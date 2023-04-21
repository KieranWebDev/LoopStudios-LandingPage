import './OurCreations.css';
import { creationSectionData } from '../../data.jsx';

// import DeepEarthMobile from '../../assets/images/mobile/image-deep-earth.jpg';
// import DeepEarthDesktop from '../../assets/images/desktop/image-deep-earth.jpg';

export default function OurCreations() {
  return (
    <section className="our-creations-section">
      <h2>Our Creations</h2>
      <div className="our-creations-container">
        {/*  */}
        <div className="our-creations-card">
          <img
            className="our-creation-pic"
            src={creationSectionData[0].mobileImg}
            srcSet={`${creationSectionData[0].mobileImg} 654w, ${creationSectionData[0].desktopImg}`}
            sizes="(max-width: 800px) 651px, 100vw"
            alt="person using a VR headset"
          />
          <h3>Deep earth</h3>
        </div>
        {/* <div className="our-creations-card">
          <img
            className="our-creation-pic"
            src={DeepEarthMobile}
            srcSet={`${DeepEarthMobile} 654w, ${DeepEarthDesktop}`}
            sizes="(max-width: 800px) 651px, 100vw"
            alt="person using a VR headset"
          />
          <h3>Deep earth</h3>
        </div>
        <div className="our-creations-card">
          <img
            className="our-creation-pic"
            src={DeepEarthMobile}
            srcSet={`${DeepEarthMobile} 654w, ${DeepEarthDesktop}`}
            sizes="(max-width: 800px) 651px, 100vw"
            alt="person using a VR headset"
          />
          <h3>Deep earth</h3>
        </div>
        <div className="our-creations-card">
          <img
            className="our-creation-pic"
            src={DeepEarthMobile}
            srcSet={`${DeepEarthMobile} 654w, ${DeepEarthDesktop}`}
            sizes="(max-width: 800px) 651px, 100vw"
            alt="person using a VR headset"
          />
          <h3>Deep earth</h3>
        </div> */}
      </div>
    </section>
  );
}
