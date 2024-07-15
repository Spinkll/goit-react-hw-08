import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";
const SearchBox = () => {
  const name = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.form_container}>
      <label htmlFor="find_contacts">Find contacts by name</label>
      <input
        type="text"
        name="find_contacts"
        id="find_contacts"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
