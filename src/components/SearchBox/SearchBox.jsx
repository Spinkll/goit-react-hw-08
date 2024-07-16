import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import {
  changeNameFilter,
  changeNumberFilter,
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filters/slice";

const SearchBox = () => {
  const name = useSelector(selectNameFilter);
  const number = useSelector(selectNumberFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(changeNameFilter(value));
    dispatch(changeNumberFilter(value));
  };

  return (
    <div className={css.form_container}>
      <label htmlFor="find_contacts">Find contacts by name or number </label>
      <input
        type="text"
        name="find_contacts"
        id="find_contacts"
        value={name || number}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
