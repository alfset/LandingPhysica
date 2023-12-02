/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type = 'text', placeholder = 'Search', id, width = 'w-96' } = props;
  return (
    <input
      type={`${type}`}
      id={`${id}`}
      className={`input input-bordered md:${width}`}
      placeholder={`${placeholder}`}
      required
    />
  );
};

export default Input;
