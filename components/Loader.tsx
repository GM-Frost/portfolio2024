import { RotatingLines } from "react-loader-spinner";
const Loader = () => {
  return (
    <RotatingLines
      visible={true}
      height="96"
      width="96"
      color="red"
      strokeColor="#1393BE"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
