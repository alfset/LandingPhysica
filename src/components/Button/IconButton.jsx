/* eslint-disable react/prop-types */

const IconButton = ({ onClick, gradient, iconColor, text, icon, padding }) => {
  return (
    <button
      data-collapse-toggle="navbar-sticky"
      type="button"
      onClick={onClick}
      className={`${gradient} text-${iconColor}  ${padding} focus:outline-none focus:ring`}
      aria-controls="navbar-sticky"
      aria-expanded="false"
    >
      <span className="sr-only">{text}</span>
      {icon}
    </button>
  );
};

export default IconButton;
