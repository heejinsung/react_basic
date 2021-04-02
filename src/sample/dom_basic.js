import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

// function Greeting() {
//   //render 함수의 내부에 return 값은 반드시 하나의 태그로 감싸져야 한다.(규칙)
//   //render(){
//     return (
//       <div>
//         <p>Hello Again React!!</p>
//       </div>
//     );
//   //}
// }



function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App; 
