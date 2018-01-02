import * as React from 'react';
import { Layout, Card, Row, Col } from 'antd';

const { Content } = Layout;
const { Meta } = Card;

function Collection () {
  return (
    <div>
      <Layout>
        <Content>
          <Card title="Collection">
            <Row gutter={16} type="flex" justify="space-between">
              <Col span={6}>
                <Card
                  style={{ width: 240 }}
                  cover={<img 
                    alt="example" 
                    src="https://a1276.ztat.net/lpo/zalando/3_edit/2016/02-2016/scc-648/men/Sport_training_1344x400.jpg"
                  />}
                >
                  <Meta
                    title="Sport"
                    description="www.zalando.de"
                  />
                </ Card>
              </ Col>
              <Col span={6}>
                <Card
                  style={{ width: 240 }}
                  cover={<img 
                    alt="example" 
                    src="https://brands.ztat.net/img/exported/boss/hugobossshopherren/65eeb32c"
                  />}
                >
                  <Meta
                    title="Business"
                    description="www.zalando.de"
                  />
                </ Card>
              </Col>
              <Col span={6}>
                <Card
                  style={{ width: 240 }}
                  cover={<img 
                    alt="example" 
                    src="https://brands.ztat.net/img/exported/timberland/timberlandshopherren/77c2a0f4"
                  />}
                >
                  <Meta
                    title="Boots"
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

export default Collection;