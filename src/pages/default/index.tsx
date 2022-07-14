
import bg from './assets/bg-default.png';
import { Row } from 'antd';

const Default = () => {
  return (
    <Row justify="center" align="middle" style={{height:'90vh'}}>
      <div>
      <img style={{maxWidth:'100%'}} src={bg}></img>
      </div>
    </Row>
  );
};

export default Default;
