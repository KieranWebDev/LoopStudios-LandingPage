import React from 'react';

export default function CreationComponent({
  title,
  mobileImg,
  desktopImg,
  alt,
  link,
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="our-creations-card"
      rel="noreferrer"
    >
      <img
        className="our-creation-pic"
        src={mobileImg}
        srcSet={`${mobileImg} 654w, ${desktopImg}`}
        sizes="(max-width: 800px) 654px, 100vw"
        alt={alt}
      />
      <h3>{title}</h3>
    </a>
  );
}
