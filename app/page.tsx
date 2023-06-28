import styles from './page.module.css';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/Portfolio';

import { portfolio } from '../common/data/portfolio';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <Hero />
      </div>
      <Portfolio projects={portfolio} />
    </main>
  );
}
