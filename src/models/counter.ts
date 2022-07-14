import { numberLiteralTypeAnnotation } from '@umijs/deps/compiled/babel/types';
import { number } from '@umijs/deps/compiled/yargs';
import { useState, useCallback } from 'react';
import {Model} from 'umi'

export interface ICounter extends Model<number> {
    counter: number ,
    increment: () => void ,
    decrement: () => void ,
}

const Counter = () =>  {
  const [counter, setCounter] = useState<number>(0);
  const increment = useCallback(() => setCounter((c) => c + 1), []);
  const decrement = useCallback(() => setCounter((c) => c - 1), []);
  return { counter, increment, decrement };
};

export default Counter
