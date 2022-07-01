import css from './Filter.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const filterInputId = nanoid();


  export const Filter = ({ setFilter, filter }) => {
    return (
      <>
        <label className={css.label} htmlFor={filterInputId}>
          Find contacts by name
          <input
            id={filterInputId}
            onChange={e => setFilter(e.currentTarget.value)}
            type="text"
            value={filter}
          />
        </label></>
    );
  };


Filter.propTypes = {
  onChange: PropTypes.func,
  filter: PropTypes.string,
};