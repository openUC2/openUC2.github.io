import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  to: string;
  image: string;
  description: string;
};

const FEATURES: FeatureItem[] = [
  {
    title: 'Optics Basics',
    to: '/docs/Toolboxes',
    image: require('@site/static/img/Application_Discovery_Kit_Base.png').default,
    description: 'Explorer & Discovery boxes to master fundamentals.',
  },
  {
    title: 'Advanced Microscopy',
    to: 'docs/Investigator/FRAME/',
    image: require('@site/static/img/M274_AC_0100_30_FiveD1-768x766.png').default,
    description: 'FRAME - fast rigid automated microscope engine',
  },
  {
    title: 'Fluorescence & Lightsheet',
    to: '/docs/Toolboxes/LightsheetBox/Light_sheet_Fluoresence_microscope',
    image: require('@site/static/img/ZebraFish-1-1536x864.gif').default,
 
    description: 'LED, laser & light-sheet fluorescence tutorials.',
  },
  {
    title: 'Interferometry & Polarization',
    to: '/docs/Toolboxes/QuantumBox/MichelsonInterferometer/MichelsonInterferometer',
    image: require('@site/static/img/429833192-806c55e3-47cf-45a0-b216-883e5747821a.jpg').default,
    description: 'Michelson, Mach-Zehnder, Newton’s rings, stress birefringence.',
  },
  {
    title: 'ImSwitch and Firmware',
    to: '/docs/ImSwitch/Quickstart',
    image: require('@site/static/img/FRAME6.png').default,
    description: 'Everything that drives your microscopy hardware.',
  },
  {
    title: 'Seeed Studio x openUC2',
    to: '/docs/Toolboxes/SeeedMicroscope/04_1_seeedmicroscope',
    image: require('@site/static/img/Application_SEEEDxOpenUC2_v2.png').default,
    description: 'The standalone microscope for the IoT.',
  },
];

function FeatureCard({title, to, image, description}: FeatureItem) {
  return (
    <Link to={to} className={clsx('card', styles.card)}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className="card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.featuresSection}>
      <h2 className="text--center margin-bottom--lg">What you’ll learn with openUC2</h2>
      <div className="container">
        <div className="row">
          {FEATURES.map((item) => (
            <div key={item.title} className="col col--4 margin-bottom--lg">
              <FeatureCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
