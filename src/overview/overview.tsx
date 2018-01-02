import * as React from 'react';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';
import Collection from './collection/collection';

const menu = (
  <Menu>
    <Menu.Item key="1">Label1</ Menu.Item>
    <Menu.Item key="2">Label2</ Menu.Item>
    <Menu.Item key="3">Label3</ Menu.Item>
  </ Menu>
);

function Overview () {
  return (
    <div>
      <Row type="flex" gutter={16} justify="end">
        <Col span={2}>
          <Icon type="filter" />
          Filter
        </ Col>
        <Col span={4}>
          <Dropdown overlay={menu}>
            <p>
              group by type <Icon type="down" />
            </p>
          </ Dropdown>
        </ Col>
      </ Row>
      <Collection />
    </ div>
  );
}

export default Overview;