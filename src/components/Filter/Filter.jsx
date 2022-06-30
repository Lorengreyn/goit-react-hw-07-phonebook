import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/FilterSlice';
import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const onFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value.toLowerCase()));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        className={css.input}
        value={filterValue}
        onChange={onFilterChange}
        name="filter"
      />
    </label>
  );
}


export default Filter;