// const root = document.querySelector('#root');
// const element = document.createElement('h1');
// element.textContent = 'Hello, world!';
// element.className = 'heading-1';
// root.appendChild(element);

const root = ReactDOM.createRoot(document.querySelector('#root'));
function tick() {
  const element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang"), new Date().toLocaleTimeString());
  root.render(element);
}
tick();
setInterval(function () {
  tick();
}, 1000);