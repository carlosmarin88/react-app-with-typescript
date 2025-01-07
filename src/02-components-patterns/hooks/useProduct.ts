import { useEffect, useRef, useState } from "react"
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product,
  onChange?: (args: onChangeArgs) => void,
  value?: number,
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  //console.log(initialValues?.count);
  //console.log(!!initialValues?.maxCount);

  const increaseBy = (value: number) => {

    
    const newValue = !!initialValues?.maxCount ? Math.min(counter + value, initialValues?.maxCount) : Math.max(counter + value, 0);

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  }

  const isEmpty = counter === 0;

  useEffect(() => {
    if(!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);
  
  const reset = () => {
    setCounter(initialValues?.count || value);
  }


  return {
    counter,
    isEmpty,
    isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
    
  }
}
