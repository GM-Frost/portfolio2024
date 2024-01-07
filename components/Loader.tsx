import { RotatingLines } from "react-loader-spinner";
const Loader = () => {
  return (
    <RotatingLines
      visible={true}
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      strokeColor="#1393BE"
    />
  );
};

export default Loader;
