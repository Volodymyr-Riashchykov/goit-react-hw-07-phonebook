// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import s from "./Spinner.module.css";
// height={12} width={84}
const Spinner = ({ height, width }) => {
  return (
    <div className={s.wrapper}>
      <Loader type="ThreeDots" color="#00BFFF" height={height} width={width} />
    </div>
  );
};
export default Spinner;