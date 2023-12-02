/* eslint-disable react/prop-types */
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import { Link } from 'react-router-dom';

const MenuDrawer = (props) => {
  const { items, component, modeButton, footer } = props;

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-ghost dark:btn-ghost drawer-button"
        >
          <FaBars />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="min-h-full p-4 space-y-4 bg-white menu w-80 dark:bg-primary">
          {/* Sidebar content here */}
          <div className="flex flex-col justify-between flex-grow">
            <div className="space-y-5">
              {component}
              {items.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    target={item.target}
                    className="gap-4 text-lg font-medium text-blue-950 dark:text-neutral"
                  >
                    {item.icon}
                    {item.children}
                  </Link>
                </li>
              ))}
              {modeButton}
            </div>
            <div className="mt-auto">{footer}</div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MenuDrawer;
