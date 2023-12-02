/* eslint-disable react/prop-types */
const CardCta = (props) => {
  const {
    title,
    imgUrl,
    width = 'w-96',
    bgColor = 'bg-white',
    other = 'cursor-pointer',
    padding,
    component,
  } = props;

  return (
    <div className={`relative ${width} ${bgColor} ${other} rounded-4xl`}>
      <img
        src={imgUrl}
        alt=""
        className="object-cover w-full h-[300px] md:h-48 lg:h-48 rounded-3xl"
      />
      <div
        className={`absolute inset-0 flex flex-col justify-center items-start px-5 md:px-10 lg:px-10 text-center ${padding}`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 md:space-y-6 md:flex-col lg:flex-row lg:justify-between">
          <h2
            className={`text-white font-semibold leading-normal text-xl md:text-2xl lg:text-3xl text-center lg:text-left lg:flex-wrap max-w-sm md:max-w-lg`}
          >
            {title}
          </h2>
          <div className="flex flex-col w-full space-y-2 md:justify-center md:max-w-4xl lg:max-w-lg md:space-y-0 md:flex-row md:space-x-3 lg:space-x-6">
            {component}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCta;
