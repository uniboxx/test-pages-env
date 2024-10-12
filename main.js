import './style.css';

console.log(word);

document.querySelector('#app').innerHTML = `
  <div>
    <p>${import.meta.env.VITE_WORD}</p>
  </div>
`;
