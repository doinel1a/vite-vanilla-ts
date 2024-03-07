import '../styles/global.scss';
import '../styles/global.css';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const counter = main?.querySelector('#counter');
  const year = document.querySelector('#year');

  if (main && counter) {
    main.addEventListener('click', (event: MouseEvent) => {
      const { id, tagName } = event.target as HTMLElement;

      if (tagName === 'BUTTON') {
        const currentCount = Number(counter.textContent);

        switch (id) {
          case 'increment': {
            counter.textContent = `${currentCount + 1}`;

            break;
          }
          case 'decrement': {
            counter.textContent = `${currentCount - 1}`;

            break;
          }
        }
      }
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear().toString();
  }
});
