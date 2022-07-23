import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserContacts } from "../../redux/user/userSelector";
import { onFilterValueChange } from "../../redux/user/userSlice";
import s from "./Filter.module.scss";
const Filter = () => {
  const userContacts = useSelector(getUserContacts);
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();

  const filterContactsSelectors = (filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();
    const findEl =
      userContacts.length === 0
        ? []
        : userContacts.filter((contact) =>
            contact.name.toLocaleLowerCase().includes(normalizedFilter)
          );

    dispatch(onFilterValueChange(findEl));
  };

  useEffect(() => {
    filterContactsSelectors(filter);
  }, [filter]);

  return (
    <div className={s.wrapper}>
      <p> Find contacts by name</p>
      <input
        type="text"
        className={s.input}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
