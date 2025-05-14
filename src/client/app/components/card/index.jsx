import { Card, Col, Row } from 'antd';

const CardContent = ({ mainTitle, data }) => (
  <Row gutter={16}>
    <Col>
      <Card title={mainTitle}>
        <div className='card-wrapper'>
          {data.map(({ cardTitle, cardContent }, index) => (
            <div className='inner-card' key={index}>
              <Card type='inner' title={cardTitle}>
                <div className='card-content-text'>{cardContent}</div>
              </Card>
            </div>
          ))}
        </div>
      </Card>
    </Col>
  </Row>
);
export default CardContent;
