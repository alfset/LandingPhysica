import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Logo = (props) => {
  const { srcLogo, url = '#' } = props;
  return (
    <Link to={url}>
      <a className="flex items-center">
        <img src={`${srcLogo}`} className="h-7 h-lg-8" alt="PlanQ Network" />
      </a>
    </Link>
  );
};

export default Logo;
