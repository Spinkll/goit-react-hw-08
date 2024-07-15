import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <div>
          <h1 className={css.title}>
            Welcome to Contacts Manager{" "}
            <span role="img" aria-label="Greeting icon">
              💁‍♀️
            </span>
          </h1>
          <p className={css.subtitle}>
            Easily manage all your contacts in one place.
          </p>
          <Link to="/contacts" className={css.button}>
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
