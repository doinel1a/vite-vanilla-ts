import '../css/global.css';
import '../scss/global.scss';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  const counter = main?.querySelector('#counter');

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
});
