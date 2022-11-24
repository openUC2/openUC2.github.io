import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';



type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList = [
  {
    title: 'Learning Kits (Explorer/Discovery)',
    imageUrl: 'img/Application_Discovery_Kit_Base.png',
    description: (
      <>
        Step by step guides to learn everything about optics. 
      </>
    ),
  },
  {
    title: 'Cutting the Edge! (Investigator)',
    imageUrl: 'img/Application_Discovery_Kit_Base_IncubatorMicroscope.png',
    description: (
      <>
        Get the most of your ready-to-use microscopes.
      </>
    ),
  },
  {
    title: 'Anything else.',
    imageUrl: 'img/Artboard4@4x.png',
    description: (
      <>
        Anything that is yet missing. 
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} height="200" src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}


export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
