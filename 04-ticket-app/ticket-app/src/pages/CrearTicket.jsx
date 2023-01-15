import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const CrearTicket = () => {

  const nuevoTicket = () => {
    console.log('nuevoTicket');
  };

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Presione el boton para crear un nuevo Ticket</Title>
          <Button
            type='primary'
            shape='round'
            icon={<DownloadOutlined />}
            size='large'
            onClick={nuevoTicket}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>
            Su numero
          </Text>
          <br />
          <Text type='success' style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};
