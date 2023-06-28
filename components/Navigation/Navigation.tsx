'use client';
import styles from './Navigation.module.css';

import Link from 'next/link';
import React, { useState } from 'react';

import { FaBurger } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type OptionalProps = {
  navigationItems?: NavigationItem[];
  socialMediaItems?: SocialMediaItems[];
};

const Navigation: React.FC<OptionalProps> = ({
  navigationItems,
  socialMediaItems,
}) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.burgerSection}>
        <FaBurger
          className={styles.burgerIcon}
          size={28}
          onClick={() => setShowMobileNav((prev) => !prev)}
        />
        <AnimatePresence>
          {showMobileNav && (
            <motion.div
              className={styles.mobileNavigation}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {navigationItems?.map((navigationItem, idx) => {
                return (
                  <Link key={idx} href={navigationItem.href}>
                    {navigationItem.name}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.logo}>
        <Image src="/images/me.svg" width={42} height={36} alt="" />
      </div>
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
