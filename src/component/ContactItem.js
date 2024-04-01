import React from 'react'
import { Row,Col } from 'react-bootstrap'
const ContactItem = ({item}) => {
  return (
    <div>
      <Row>
        <Col lg={2}>
        <img src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMjNfMjQ1%2FMDAxNzA1OTk2ODE1NjEw.cPmilYwMr-4yZHhbYuuIv6nzGdZsp6mR20Ymaev2dU8g.-nNimAQu5eG4sFT8iRtJeM0e54p3TCyl96xGRIwfD00g.JPEG.rabbit_e%2F75307.jpg&type=sc960_832'width={90}/> </Col>
        <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
        </Col>


      </Row>
    </div>
  )
}

export default ContactItem
