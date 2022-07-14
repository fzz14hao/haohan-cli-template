import { useState } from 'react';

const CreatPo = () => {
  const [poOrderInfo, setPoOrderInfo] = useState<any>({});

  return { poOrderInfo, setPoOrderInfo };
};

export default CreatPo;
