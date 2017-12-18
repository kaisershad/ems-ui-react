import * as React from 'react';
import { Row, Col, Menu, Dropdown, Icon, message, Divider } from 'antd';
import './header.css';

function handleMenuClick() {
  message.info('Account switched.');
}

const logo = require('./logo.svg');
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Nike</Menu.Item>
    <Menu.Item key="2">Adidas</Menu.Item>
    <Menu.Item key="3">Kiomi</Menu.Item>
  </Menu>
);

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Header () {
  return (
    <div>
      <Row type="flex" gutter={16} align="middle" justify="space-between">
        <Col span={2}>
          <img src={logo} alt="logo"/>
        </Col>
        <Col span={14} className="headerText">Content</Col>
        <Col>
          <Dropdown overlay={menu}>
            <a>
              Account <Icon type="down" />
            </a>
          </Dropdown>
        </Col>
        <Col>
          <Divider type="vertical" />
          <Icon type="user-add"/>User
        </Col>
        <Divider className="divider"/>
      </Row>
    </div>
  );
}

export default Header;