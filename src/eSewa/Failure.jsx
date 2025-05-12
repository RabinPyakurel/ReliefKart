import { Link } from "react-router-dom";

const Failure = () => {
  return (
    <div>
      Failed to processed payment
      <Link to="/">Return to home</Link>
    </div>
  );
};

export default Failure;
