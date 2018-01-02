import * as React from 'react';
import { Layout, Card, Row, Col } from 'antd';

const { Content } = Layout;
const { Meta } = Card;

function Realm () {
  return (
    <div>
      <Layout>
        <Content>
          <Card title="Realm">
            <Row gutter={16} type="flex" justify="space-between">
              <Col span={6}>
                <Card
                  style={{ width: 240 }}
                  cover={<img 
                    alt="example" 
                    src="https://brands.ztat.net/img/exported/adidas/adidasshopherren/7e1d6cf9"
                  />}
                >
                  <Meta
                    title="Football"
                    description="www.zalando.de"
                  />
                </ Card>
              </ Col>
              <Col span={6}>
                <Card
                  style={{ width: 240 }}
                  cover={<img 
                    alt="example" 
                    src="https://brands.ztat.net/img/exported/asics/asicsshopherren/6220d174"
                  />}
                >
                  <Meta
                    title="Sneaker"
                    description="www.zalando.de"
                  />
                </ Card>
              </Col>
              <Col span={6}>
                <Card
                  style={{ width: 240 }}
                  cover={<img 
                    alt="example" 
                    src="https://brands.ztat.net/img/exported/gap/gapshopherren/ae901724"
                  />}
                >
                  <Meta
                    title="Jeans"
                    description="www.zalando.de"
                  />
                </ Card>
              </Col>
            </Row>
          </ Card>
        </ Content>
      </ Layout>
    </div>
  );
}

export default Realm;