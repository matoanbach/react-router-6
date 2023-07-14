import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className='section'>
      <h1>404</h1>
      <h2>Error</h2>
      <Link to="/">Back home</Link>
    </section>
  );
};
export default Error;
