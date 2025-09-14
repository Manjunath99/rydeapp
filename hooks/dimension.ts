import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

export default function useScreenSize() {
  const [screen, setScreen] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreen(window);
    });

    return () => subscription?.remove();
  }, []);

  return screen;
}
