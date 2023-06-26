import styles from './Navigation.module.css';

import Link from 'next/link';
import React from 'react';

import { FaBurger } from 'react-icons/fa6';

type OptionalProps = {
  navigationItems?: NavigationItem[];
  socialMediaItems?: SocialMediaItems[];
};

const Navigation: React.FC<OptionalProps> = ({
  navigationItems,
  socialMediaItems,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.burgerSection}>
        <FaBurger size={28} />
      </div>
      <h1>Logo</h1>
      <div className={styles.navItemsSection}>
        {navigationItems?.map((navigationItem, idx) => {
          return (
            <Link key={idx} href={navigationItem.href}>
              {navigationItem.name}
            </Link>
          );
        })}
      </div>
      <div className={styles.socialMediaSection}>
        {socialMediaItems?.map((socialMediaItem, idx) => {
          return (
            <Link
              key={idx}
              href={socialMediaItem.href}
              target={socialMediaItem.target}
            >
              {socialMediaItem.componentName}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
