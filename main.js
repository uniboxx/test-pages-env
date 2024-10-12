import './style.css';

const word = import.meta.env.VITE_WORD;
const prova = import.meta.env.VITE_PROVA;
console.log(word);

document.querySelector('#app').innerHTML = `
  <div>
    <p>${word}</p>
    <p>${prova}</p>
  </div>
`;
