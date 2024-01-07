/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const LottieAnimation = (props) => {
  const { srcJson } = props;
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(srcJson);
        const json = await response.json();
        setAnimationData(json);
      } catch (error) {
        console.error('Error fetching animation:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {animationData && (
        <Lottie
          animationData={animationData}
          style={{ width: '500px', height: '500px' }}
        />
      )}
    </div>
  );
};

export default LottieAnimation;
