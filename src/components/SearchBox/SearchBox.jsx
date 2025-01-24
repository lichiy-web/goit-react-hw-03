import css from './SearchBox.module.css';

const SearchBox = ({ searchQuery, onSearch }) => {
  return (
    <div className={css.SearchBox}>
      <label className={css.searchLabelWrapper}>
        <span className={css.searchLabel}>Find contacts by name</span>
        <input
          className={css.searchInput}
          type="text"
          value={searchQuery}
          onChange={onSearch}
        />
      </label>
    </div>
  );
};
export default SearchBox;
