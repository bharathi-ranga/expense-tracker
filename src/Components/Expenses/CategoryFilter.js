const CategoryFilter = (props) => {
  const categoryChangehandler = (event) => {
    props.onSelectCategory(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Category</label>
        <select value={props.currentCategory} onChange={categoryChangehandler}>
          <option value="0">select</option>
          <option value="groceries">groceries</option>
          <option value="home-expenses">home-expenses</option>
          <option value="insurance">insurance</option>
          <option value="bills">bills</option>
          <option value="loans">loans</option>
          <option value="others">others</option>
        </select>
      </div>
    </div>
  );
};
export default CategoryFilter;
