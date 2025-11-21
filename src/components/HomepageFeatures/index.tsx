import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  src: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What is a digital garden?',
    src: 'img/lantern.png',
    description: (
      <>
        A digital garden is a collection of random notes, documents, images, links, source, and other forms of media.
        In a digital garden, there is no specific way to organize data, or projects, it's sort of just a notebook for the mind.
      </>
    ),
  },
  {
    title: 'What will I find here?',
    src: 'img/book.png',
    description: (
      <>
        I'm sure I'll throw a lot of random stuff in here, but mostly architecture notes,
        project outlines, notes on AI usage, notes on my home networks organization maps,
        maybe some OCD rantings if I ever need to get that out.
      </>
    ),
  },
  {
    title: '',
    src: 'img/skull.png',
    description: (
      <>
        ---
      </>
    ),
  },
];

function Feature({title, src, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureItem)}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={src}/>
      </div>
      <div className={clsx('text--center padding-horiz--md', styles.featureContent)}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
