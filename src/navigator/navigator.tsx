import * as React from 'react';
import './navigator.css';
import { Layout, Menu, Divider, Icon, Row, Col, Button } from 'antd';

const { Header } = Layout;

function Navigator () {
  return (
    <div>
      <Layout className="navigator">
        <Header className="header">
          <Row gutter={16} type="flex" justify="space-between">
            <Col span={14}>
              <Menu theme="light" mode="horizontal" defaultSelectedKeys={['all']}>
                <Menu.Item key="reporting" disabled="true">
                  <Icon type="area-chart"/>
                  Reporting
                  <Divider type="vertical"/>
                </Menu.Item>
                <Menu.Item key="all">All</Menu.Item>
                <Menu.Item key="collection">Collection</Menu.Item>
                <Menu.Item key="realm">Realm</Menu.Item>
              </Menu>
            </Col>
            <Col span={4}>
              <Button type="primary">Create Content</Button>
            </Col>
            <Col span={2}>
              <Icon type="notification" style={{ fontSize: 23, padding: 8 }} />
              <Icon type="question-circle-o" style={{ fontSize: 23 }} />
            </ Col>
          </Row>
        </Header>
      </Layout>
    </div>
  );
}

export default Navigator;