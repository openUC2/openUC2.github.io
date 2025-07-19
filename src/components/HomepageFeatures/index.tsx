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
    to: '/docs/category/learning-kits',
    image: require('@site/static/img/Application_Discovery_Kit_Base.png').default,
    description: 'Explorer & Discovery boxes to master fundamentals.',
  },
  {
    title: 'Advanced Microscopy',
    to: '/docs/category/cutting-edge',
    image: require('@site/static/img/Application_Discovery_Kit_Base.png').default,
    description: 'Incubator, light-sheet & DPC microscopes.',
  },
  {
    title: 'Fluorescence & Lightsheet',
    to: '/docs/category/fluorescence',
    image: require('@site/static/img/Application_Discovery_Kit_Base.png').default,
    description: 'LED, laser & light-sheet fluorescence tutorials.',
  },
  {
    title: 'Interferometry & Polarization',
    to: '/docs/category/polarisation',
    image: require('@site/static/img/Application_Discovery_Kit_Base.png').default,
    description: 'Michelson, Mach-Zehnder, Newton’s rings, stress birefringence.',
  },
  {
    title: 'Fourier & Quantum Optics',
    to: '/docs/category/quantum',
    image: require('@site/static/img/Application_Discovery_Kit_Base.png').default,
    description: 'Galvo scanners, Fourier optics & entry-level quantum labs.',
  },
  {
    title: 'Workshops & Pro Line',
    to: '/docs/category/workshops',
    image: require('@site/static/img/Application_Discovery_Kit_Base.png').default,
    description: 'Curriculum-ready workshops and professional modules.',
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
