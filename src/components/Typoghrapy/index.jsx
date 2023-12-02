/* eslint-disable react/prop-types */

const Typography = ({ children, className, icon }) => {
  return (
    <div className={`prose ${className}`}>
      {children} {icon}
    </div>
  );
};

export default Typography;
