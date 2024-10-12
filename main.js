import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
    <p>${import.meta.env.VITE_WORD}</p>
  </div>
`;
