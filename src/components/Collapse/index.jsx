/* eslint-disable react/prop-types */
const Collapse = ({ header, content, footer, border }) => {
  return (
    <details className={`collapse collapse-arrow bg-base-200 ${border} `}>
      <summary className="collapse-title font-medium">{header}</summary>
      <div className="divider px-3 items-start my-0"></div>
      <div className="collapse-content">{content}</div>
      <div className="divider px-3 items-start my-0"></div>
      <div className="collapse-content">{footer}</div>
    </details>
  );
};

export default Collapse;
