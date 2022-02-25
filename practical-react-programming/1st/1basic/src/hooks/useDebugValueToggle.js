import { useState, useDebugValue } from 'react';

const useToggle = (initialValue = true) => {
  const [value, setValue] = useState(initialValue);
  const onToggle = () => setValue(!value);
  useDebugValue(value ? 'on' : 'off');
  return [value, onToggle];
}

export default useToggle;