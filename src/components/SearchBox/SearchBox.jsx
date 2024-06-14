import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css["filter-box"]}>
      <p>Find contacts by name</p>
      <input
        className={css["filter-input"]}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
}