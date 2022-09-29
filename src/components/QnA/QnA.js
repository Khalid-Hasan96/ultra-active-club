import React from 'react';
import './QnA.css'

const QnA = () => {
      return (
            <div className='QnA-container'>
                  <div className='QnA'>
                        <h2>How does <strong>React</strong> works?</h2>
                        <hr />
                        <p>React is a JavaScript library for building user interfaces. React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation. Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
                  </div>
                  <div className='QnA'>
                        <h2>What are the differences between <strong>props</strong> & <strong>state</strong>?</h2>
                        <hr />
                        <p><strong>State:</strong> The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
                        <p><strong>Props:</strong> Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
                  </div>
                  <div className='QnA'>
                        <h2>Without data load what else <strong>useEffect</strong> can do?</h2>
                        <hr />
                        <p>useEffect is a Hook. By using this Hook, we tell React that our component needs to do something after render. React will remember the function we passed, and call it later after performing the DOM updates.</p>
                  </div>
            </div>
      );
};

export default QnA;