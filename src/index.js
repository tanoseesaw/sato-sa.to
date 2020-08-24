import './stylesheets/index.scss';

window.addEventListener('load', () => {
  document.querySelector('#party-button').addEventListener('click', () => {
    document.querySelector('#sato-icon').setAttribute('class', 'party-color');
  });
});
