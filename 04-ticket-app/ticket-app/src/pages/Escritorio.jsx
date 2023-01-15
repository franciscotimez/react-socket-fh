import React, { useContext, useState } from 'react';
import { Button, Col, Divider, Row, Typography } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helpers/getUsuarioStorage';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;


export const Escritorio = () => {

  const navigate = useNavigate();
  const { socket } = useContext(SocketContext);
  const [usuario] = useState(getUsuarioStorage());

  const [miTicket, setMiTicket] = useState(null);

  useHideMenu(false);

  const salir = () => {
    localStorage.clear();
    navigate('/ingresar', { replace: true });
  };

  const siguienteTicket = () => {
    socket.emit('siguiente-ticket', usuario, (ticket) => {
      setMiTicket(ticket);
    });
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
      {
        miTicket && (
          <Row>
            <Col>
              <Text>Esta atendiendo el Ticket: </Text>
              <Text
                style={{ fontSize: 30 }}
                type='danger'
              >
                {miTicket.numero}
              </Text>
            </Col>
          </Row>
        )
      }
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
