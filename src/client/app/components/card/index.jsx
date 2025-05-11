import { Card } from 'antd';

const CardContent = ({ mainTitle, data }) => (
  <Card title={mainTitle}>
    <div className='card-wrapper'>
      {data.map(({ cardTitle, cardContent }) => (
        <Card type='inner' title={cardTitle}>
          {cardContent}
        </Card>
      ))}
    </div>
  </Card>
);
export default CardContent;
