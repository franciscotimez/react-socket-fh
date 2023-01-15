import React from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;


export const Escritorio = () => {

  const salir = () => {
    console.log('salir');
  };

  const siguienteTicket = () => {
    console.log('siguiente');
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Francisc</Title>
          <Text>Usted esta en el escritorio: </Text>
          <Text type='success'>5</Text>
        </Col>
        <Col span={4} align="right">
          <Button
            shape='round'
            danger
            onClick={salir}
          >
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Esta atendiendo el Ticket: </Text>
          <Text
            style={{ fontSize: 30 }}
            type='danger'
          >
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col
          offset={18}
          span={6}
          align='right'
        >
          <Button
            shape='round'
            type='primary'
            onClick={siguienteTicket}
          >
            Siguiente
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};
