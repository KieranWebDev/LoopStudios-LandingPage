import './WebsiteIntro.css';
import IntroPicMobile from '../../assets/images/mobile/image-interactive.jpg';
import IntroPicDesktop from '../../assets/images/desktop/image-interactive.jpg';

export default function WebsiteIntro() {
  return (
    <section className="intro-section">
      <img
        className="intro-pic"
        src={IntroPicDesktop}
        srcSet={`${IntroPicMobile} 651w, ${IntroPicDesktop}`}
        sizes="(max-width: 700px) 651px, 100vw"
        alt="person using a VR headset"
      />
      <h2>The leader in interactive VR</h2>
      <p>
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </section>
  );
}
