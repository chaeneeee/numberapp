import logo from './logo.svg';
import './App.css';
import ContactFrom from './component/ContactFrom';
import {Container, Row, Col, Form,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactList from './component/ContactList';

//1. 왼쪽에는 연락처 등록하는 폼이 오른쪽에는 연락처 리스트와 search 창이 있다
//2. 리스트에 유저 일므과 전화번호를 추가할 수 있다
//3. 리스트에 아이템이 몇개있는지 보인다
//4. 사용자가 유저를 이름 검색으로 찾을 수 있다.


function App() {
  return (
    <div >
     <h1 className='title'>연락처</h1>
     <Container>
      <Row>
        <Col>
        <ContactFrom/>
        </Col>
        <Col>
        <ContactList/>
        </Col>
      </Row>
     </Container>
    </div>
  );
}

export default App;
