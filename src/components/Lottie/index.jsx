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
    <div className="w-auto max-w-sm mb-2 h-[350px] lg:h-screen lg:max-w-md lg:mb-0 lg:mr-12">
      {animationData && <Lottie animationData={animationData} />}
    </div>
  );
};

export default LottieAnimation;
