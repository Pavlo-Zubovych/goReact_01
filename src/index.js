import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const Link = React.createElement(
  'a',
  {
    href: 'https://translate.google.com.ua/?hl=uk&sl=en&tl=uk&op=translate.org',
  },
  'Ссилка...'
);

const jsxLink = (
  <a href="https://create-react-app.dev/docs/getting-started/" target="_blanc">
    Ссилка...
  </a>
);

console.log(Link);
console.log(jsxLink);

ReactDOM.render(jsxLink, document.getElementById('root'));
