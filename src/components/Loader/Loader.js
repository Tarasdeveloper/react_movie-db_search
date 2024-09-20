import { MutatingDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#4d56a9"
      secondaryColor="#4d56a9"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
