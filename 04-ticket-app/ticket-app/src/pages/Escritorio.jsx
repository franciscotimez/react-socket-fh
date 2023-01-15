import React, { useState } from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;


export const Escritorio = () => {

  const navigate = useNavigate();

  const [usuario] = useState(getUsuarioStorage());

  useHideMenu(false);

  const salir = () => {
    console.log('salir');
    localStorage.clear();
    navigate('/ingresar', { replace: true });
  };

  const siguienteTicket = () => {
    console.log('siguiente');
  };

  if (!usuario.agente || !usuario.escritorio) {
    navigate('/ingresar', { replace: true });
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted esta en el escritorio: </Text>
          <Text type='success'>{usuario.escritorio}</Text>
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
