import './style.css';

const word = import.meta.env.VITE_WORD;
console.log(word);

document.querySelector('#app').innerHTML = `
  <div>
    <p>${word}</p>
  </div>
`;
