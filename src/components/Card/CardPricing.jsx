const plansData = [
  {
    title: 'Small',
    price: '$22',
    frequency: 'Monthly',
    features: ['1 core', '1GB RAM', '5GB Storage', '2 Containers'],
    button: {
      text: 'Get started',
      className:
        'bg-white border border-red text-red font-bold w-full p-3 rounded no-underline',
      href: '#',
    },
  },
  {
    title: 'Small',
    price: '$22',
    frequency: 'Monthly',
    features: ['1 core', '1GB RAM', '5GB Storage', '2 Containers'],
    button: {
      text: 'Get started',
      className:
        'bg-white border border-red text-red font-bold w-full p-3 rounded no-underline',
      href: '#',
    },
  },
  {
    title: 'Small',
    price: '$22',
    frequency: 'Monthly',
    features: ['1 core', '1GB RAM', '5GB Storage', '2 Containers'],
    button: {
      text: 'Get started',
      className:
        'bg-white border border-red text-red font-bold w-full p-3 rounded no-underline',
      href: '#',
    },
  },
];

const Plans = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="lg:flex lg:items-center lg:-mx-2">
        {plansData.map((plan, index) => (
          <div key={index} className="mb-4 lg:mb-0 lg:w-1/3 lg:px-2">
            <div className="text-center border border-grey-light p-10 rounded lg:shadow-lg">
              <h2 className="text-lg mb-4">{plan.title}</h2>
              <div className="mb-6">
                <span className="block text-5xl pb-2">{plan.price}</span>
                <span className="text-sm text-grey">{plan.frequency}</span>
              </div>
              <ul className="text-grey-dark leading-loose list-reset mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a
                className={`text-sm tracking-wide uppercase inline-block ${plan.button.className}`}
                href={plan.button.href}
              >
                {plan.button.text}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
