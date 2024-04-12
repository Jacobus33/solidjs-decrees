import type { Component, JSX } from 'solid-js';

//import styles from './App.module.css';

const MyComponent2 = (props: { name: string }) => <div>MyComponent2: Hello {props.name}!</div>;

function MyComponent(props: { name: string }) {
  return <div>MyComponent: Hello {props.name}</div>;
}

const App: Component = () => {
    return (
    <>
      <div>
        <p>uuuu</p>
        <MyComponent name="Solid" />
        <MyComponent2 name="Solid" />
      
      </div>
      zzzzzzzzzzzzzzzzzzzzzzz
    </>
  );
};



export default App;
