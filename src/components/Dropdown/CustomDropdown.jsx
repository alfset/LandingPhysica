/* eslint-disable react/prop-types */

const CustomDropdown = (props) => {
  const { children, icon, component, width, padding = 'p-2', position } = props;

  return (
    <div className={`dropdown ${position}`}>
      <label tabIndex={1} className="btn btn-ghost">
        {children} {icon}
      </label>
      <ul
        tabIndex={1}
        className={`menu menu-sm dropdown-content mt-0 z-[1] ${padding} shadow bg-base-100 rounded-box ${width}`}
      >
        {component}
      </ul>
    </div>
  );
};

export default CustomDropdown;
