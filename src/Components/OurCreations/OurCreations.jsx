import './OurCreations.css';
import { creationSectionData } from '../../data.jsx';
import CreationComponent from './CreationComponent';

export default function OurCreations() {
  return (
    <section className="our-creations-section">
      <h2>Our Creations</h2>
      <div className="our-creations-container">
        {creationSectionData.map((item) => (
          <CreationComponent
            key={item.title}
            title={item.title}
            mobileImg={item.mobileImg}
            desktopImg={item.desktopImg}
            alt={item.alt}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}
