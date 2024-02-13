import { insertNavMenu } from './components/nav-menu';

document.addEventListener('DOMContentLoaded', () => {
   const mobileNavContainer: HTMLElement | null = document.querySelector('.mobile-nav');
   const navMenuDesktop: HTMLElement | null = document.getElementById('navMenuDesktop');

   insertNavMenu(mobileNavContainer, 'dark');
   insertNavMenu(navMenuDesktop, 'light');
});
