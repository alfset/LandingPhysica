import { useState } from 'react';

function Toggle() {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div>
      <Toggle
        checked={isToggled}
        onChange={handleToggle}
        label="Toggle Label"
        size="lg" // You can adjust the size if needed
      />
      <p>Toggle is {isToggled ? 'on' : 'off'}</p>
    </div>
  );
}

export default Toggle;
