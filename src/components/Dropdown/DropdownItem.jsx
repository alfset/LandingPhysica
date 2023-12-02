/* eslint-disable react/prop-types */

const DropdownItem = (props) => {
  const {
    icon,
    children = 'Home',
    target,
    url = 'https://physica.finance',
  } = props;

  return (
    <li>
      <a
        href={url}
        target={target}
        className={`block px-4 py-2 text-sm w-full`}
        role="menuitem"
      >
        <div className="flex items-center w-full gap-3 flex-nowrap">
          {icon}
          {children}
        </div>
      </a>
    </li>
  );
};

export default DropdownItem;
