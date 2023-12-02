/* eslint-disable react/prop-types */
const InputGroup = ({ label, component }) => {
  return (
    <div className="form-control w-full px-2 bg-base-200 rounded-xl pb-2">
      <label className="label px-2">
        <span className="label-text text-sm">{label}</span>
      </label>
      {component}
    </div>
  );
};

export default InputGroup;
