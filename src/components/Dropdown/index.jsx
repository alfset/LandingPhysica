/* eslint-disable react/prop-types */
import DropdownItem from './DropdownItem';

const DropdownMenu = (props) => {
  const { children, icon, items, width, padding = 'p-2', position } = props;

  return (
    <div className={`dropdown ${position}`}>
      <label
        tabIndex={0}
        className="btn btn-ghost btn-sm my-1.5 capitalize text-black/90 hover:bg-black/10 hover:dark:bg-white/10 dark:text-neutral font-normal"
      >
        {children} {icon}
      </label>
      <ul
        tabIndex={0}
        className={`menu menu-vertical w-80 dropdown-content mt-0 z-[1] ${padding} gap-2 shadow shadow-black/20 dark:shadow-secondary bg-white dark:bg-primary opacity-0 rounded-box ${width}`}
      >
        {items.map((item, index) => (
          <DropdownItem key={index} url={item.url} target={item.target}>
            {item.icon} {item.text}
          </DropdownItem>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
