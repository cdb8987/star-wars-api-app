import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <App />
    </div>

  </React.StrictMode>
);

setTimeout(CharacterSearchInput, 30)

function CharacterSearchInput() {
  const characterInputField = document.getElementById('characterinput')
  const characterSearchButton = document.getElementById('characterSearchButton')

  characterSearchButton.addEventListener('click', () => {
    const characterInput = characterInputField.value
    console.log(characterInput)
  })
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
