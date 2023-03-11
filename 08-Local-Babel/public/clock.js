// const root = document.querySelector('#root');
// const element = document.createElement('h1');
// element.textContent = 'Hello, world!';
// element.className = 'heading-1';
// root.appendChild(element);

const root = ReactDOM.createRoot(document.querySelector('#root'));
function tick() {
  const element =
  /*#__PURE__*/
  // Basic Inline Style on React
  React.createElement("div", {
    style: {
      width: '200px',
      height: '200px',
      backgroundColor: 'blue'
    }
  });
  root.render(element);
}
tick();
setInterval(function () {
  tick();
}, 1000);