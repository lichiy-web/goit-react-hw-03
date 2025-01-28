import css from './SearchBox.module.css';
import { ImSearch } from 'react-icons/im';

const SearchBox = ({ searchQuery, onSearch }) => {
  return (
    <div className={css.SearchBox}>
      <label className={css.searchLabelWrapper}>
        <span className={css.searchLabel}>Find contacts by name</span>
        <div className={css.searchInputItem} tabIndex="1">
          <div className={css.searchIcon}>
            <ImSearch />
          </div>
          <input
            className={css.searchInputField}
            type="text"
            value={searchQuery}
            onChange={onSearch}
          />
        </div>
      </label>
    </div>
  );
};
export default SearchBox;
