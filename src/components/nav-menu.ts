type ArrowColor = 'light' | 'dark';

export function insertNavMenu(container: HTMLElement | null, arrowColor: ArrowColor): void {
   if (!container) return;

   const navMenu = `<ul class="menu">
         <li>
            <details>
               <summary>
                  <span>Product</span>
                  <img class="arrow" src="/src/assets/images/icon-arrow-${arrowColor}.svg" alt="Arrow" />
               </summary>

               <ul class="details-options">
                  <li class="details-options__option">Overview</li>
                  <li class="details-options__option">Pricing</li>
                  <li class="details-options__option">Marketplace</li>
                  <li class="details-options__option">Features</li>
                  <li class="details-options__option">Integrations</li>
               </ul>
            </details>
         </li>
         <li>
            <details>
               <summary>
                  <span>Company</span>
                  <img class="arrow" src="/src/assets/images/icon-arrow-${arrowColor}.svg" alt="Arrow" />
               </summary>

               <ul class="details-options">
                  <li class="details-options__option">About</li>
                  <li class="details-options__option">Team</li>
                  <li class="details-options__option">Blog</li>
                  <li class="details-options__option">Careers</li>
               </ul>
            </details>
         </li>
         <li>
            <details>
               <summary>
                  <span>Connect</span>
                  <img class="arrow" src="/src/assets/images/icon-arrow-${arrowColor}.svg" alt="Arrow" />
               </summary>

               <ul class="details-options">
                  <li class="details-options__option">Contact</li>
                  <li class="details-options__option">Newsletter</li>
                  <li class="details-options__option">LinkedIn</li>
               </ul>
            </details>
         </li>
      </ul>`;
   //

   container.insertAdjacentHTML('afterbegin', navMenu);
}
