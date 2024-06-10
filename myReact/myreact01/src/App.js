// import logo from './.svg';
// import './.css';
import MyHeader from './components/Header.jsx';
import MyFooter from './components/Footer.jsx';
import Menu from './components01/Menu';
import React from 'react';



function App() {
  return (

    <React.Fragment>
      <MyHeader />
      <Menu />
      <MyFooter />
    </React.Fragment>
  );
}
// ** React.Fragment(조각)
// => 리액트는 둘 이상의 형제 엘리먼트를 랜더링 하지않으므로 
//    ( 최상위 Tag 규칙, 프래그먼트 사용을 권장하는 오류 발생 ) 
//    이들을 <div> 와 같은 Tag로 감싸 주어야 하는데,
//    이때 <React.Fragment> Tag 로 감싸면 불필요한  <div> 사용을 줄여줌
// => <React.Fragment> 는 렌더링 되지않음
export default App;
