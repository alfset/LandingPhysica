/* eslint-disable react/prop-types */

const CustomCard = (props) => {
  const {
    title,
    subtitle,
    classCard,
    component,
    align = 'justify-end',
    other = 'cursor-pointer',
    imgUrl,
    titleClass,
    subtitleClass,
    isBorder = true,
    borderColor,
    spaceY,
  } = props;

  const borderClasses = isBorder ? 'border-8' : '';

  return (
    <div className={`card`}>
      <div
        className={`card-body p-2 shadow-2xl dark:shadow-lg shadow-blue-800 bg-blue-950 dark:bg-secondary border-0 ${classCard}`}
      >
        <div
          className={`flex flex-col text-center ${borderClasses} ${other} ${borderColor}`}
        >
          <figure className="px-10 animate-pulse">
            <img src={imgUrl} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className={`pb-10 ${spaceY}`}>
            <h2 className={`card-title ${titleClass}`}>{title}</h2>
            <p className={`${subtitleClass}`}>{subtitle}</p>
            <div className={`card-actions ${align}`}>{component}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
