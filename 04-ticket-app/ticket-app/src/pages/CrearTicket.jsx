import React, { useContext, useState } from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/SocketContext';

const { Title, Text } = Typography;

export const CrearTicket = () => {

  useHideMenu(true);

  const [ticket, setTicket] = useState(null);

  const { socket } = useContext(SocketContext);

  const nuevoTicket = () => {
    console.log('nuevoTicket');
    socket.emit("solicitar-ticket", null, (tiket) => {
      setTicket(tiket);
    });
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
      {
        ticket && (
          <Row style={{ marginTop: 100 }}>
            <Col span={14} offset={6} align="center">
              <Text level={2}>
                Su numero
              </Text>
              <br />
              <Text type='success' style={{ fontSize: 55 }}>
                {ticket.numero}
              </Text>
            </Col>
          </Row>
        )
      }
    </>
  );
};
