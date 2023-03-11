const root = ReactDOM.createRoot(document.querySelector('#root'));

// Add External Stylesheet to React JS
// const className = 'box';
// const element = (
//   <div className={className}></div>    
// )

// Add Event Handling
// function clickMe(msg){
//   alert(msg);
// }
// const element = (
//   <button onClick={clickMe.bind(this, "Clicked!!!!!!!")}>Click Me</button> 
// )

// React Component and State
// State is isolated data that cannot be accessed by other component
// State data value is editable and will be re-rendered after detected any change
function App() {
  const [count, setCount] = React.useState(0); //  Initialize value with this
  // By changing state value, page will be re-rendered

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, "\xA0 ", count, " \xA0"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"));
}
root.render( /*#__PURE__*/React.createElement(App, null));

// root.render(element);