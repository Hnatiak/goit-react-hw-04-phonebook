import Proptypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <>
      <label className={css.label}>
        <p className={css.text}>Find contacts by name</p>
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={value}
          onChange={e => onChangeFilter(e.target.value)}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: Proptypes.string,
  onChangeFilter: Proptypes.func.isRequired,
};

export default Filter;