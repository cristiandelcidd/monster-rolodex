export const SearchBox = ({ placeholder, handleChange }) => (
   <input
      type="search"
      autoComplete="off"
      placeholder={placeholder}
      onChange={handleChange}
   />
);
