import React, { FC } from 'react';
import { Row, Col } from 'antd';

import style from './index.module.scss';

import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

const Admin: FC = (props) => (
  <div className={style.container}>
    <Row>
      <Col span={4}>
        <Nav />
      </Col>
      <Col span={20}>
        <Row>
          <Col span={24}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Main>
              { props.children }
            </Main>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Footer />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Admin;