import { insertNavMenu } from './components/nav-menu';

document.addEventListener('DOMContentLoaded', () => {
   const mobileNavContainer: HTMLElement | null = document.querySelector('.mobile-nav');
   const navMenuDesktop: HTMLElement | null = document.getElementById('navMenuDesktop');
   const modalNav: HTMLElement | null = document.getElementById('mobile-nav-container');
   const btnHamburger: HTMLElement | null = document.querySelector('.btn-mobile .hamburger');
   const btnClose: HTMLElement | null = document.querySelector('.close');
   const html = document.querySelector('html');
   let detailsNavbar: NodeListOf<HTMLElement>;
   let detailsMobile: NodeListOf<HTMLElement>;

   const mutationObserver = new MutationObserver(() => {
      detailsNavbar = document.querySelectorAll('#navMenuDesktop details');
      detailsMobile = document.querySelectorAll('.mobile-nav .menu details');
   });

   mutationObserver.observe(navMenuDesktop as HTMLElement, { childList: true });
   mutationObserver.observe(mobileNavContainer as HTMLElement, { childList: true });

   insertNavMenu(mobileNavContainer, 'dark');
   insertNavMenu(navMenuDesktop, 'light');

   btnHamburger?.addEventListener('click', () => {
      if (!modalNav || !btnClose || !html) return;

      html.style.overflowY = 'hidden';
      btnHamburger.style.transform = 'scale(0)';
      btnClose.style.transform = 'scale(1)';
      modalNav.style.transform = 'translateX(0)';
   });

   btnClose?.addEventListener('click', () => {
      if (!btnHamburger || !modalNav || !html) return;

      html.style.overflowY = 'auto';
      btnHamburger.style.transform = 'scale(1)';
      btnClose.style.transform = 'scale(0)';
      modalNav.style.transform = 'translateX(100%)';

      detailsMobile.forEach((element) => element.toggleAttribute('open', false));
   });

   document.addEventListener('click', (event: MouseEvent) => {
      for (let element of detailsNavbar) {
         if (event.target === element || element.contains(event.target as Node)) continue;
         else element.toggleAttribute('open', false);
      }
   });
});
