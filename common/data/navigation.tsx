import { SiGithub } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';

const navigationItems: NavigationItem[] = [
  {
    name: 'What i do',
    href: '#what',
  },
  {
    name: 'Portfolio',
    href: '#portfolio',
  },
  {
    name: 'About me',
    href: '#who',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

const socialMediaItems: SocialMediaItems[] = [
  {
    name: 'Github',
    componentName: <SiGithub size={28} />,
    href: 'https://github.com/Noloto',
    target: '_blank',
  },
  {
    name: 'Linkedin',
    componentName: <BsLinkedin size={28} />,
    href: 'https://www.linkedin.com/in/no%C3%ABl-willener/',
    target: '_blank',
  },
];

export { navigationItems, socialMediaItems };
