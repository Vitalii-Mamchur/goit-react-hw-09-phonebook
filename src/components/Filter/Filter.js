import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/Phonebook/phonebook-actions";
import styles from "./Filter.module.css";
import { getFilter } from "../../redux/Phonebook/phonebook-selectors";

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChangeFilter = useCallback(
    (e) => {
      dispatch(changeFilter(e.target.value));
    },
    [dispatch]
  );

  return (
    <label className={styles.filter_label}>
      Find contacts by name
      <input
        className={styles.filter_input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
}

export default Filter;
