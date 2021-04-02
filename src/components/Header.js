import React, {Component} from 'react';


//함수나 클래스명 첫글자 대문자로해야함!
// component를 써서 클래스화 시키는것이 일반적
//function Header(){}
class Header extends Component{
   //클래스 내부는 반드시 render 함수로 감싸야 한다.
   //클래스 내부의 멤버 함수는 function 키워드를 사용해서는 안된다.
   render(){
     //return의 값인 JSX는 태그가 하나일 때 ()없이 작성하고, 자식태그를 포함할 때는 ()를 사용한다.
     return (
       //최상위 태그는 모든 태그를 포함하는 하나의 태그만 있어야 한다.
       <header>
         <h4>This is Header Area..</h4>
       </header>
     );
   }
}

export default Header;