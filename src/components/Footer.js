import FilterLink from '../containers/FilterLink';
const Footer=()=>(
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      ALL
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      completed
    </FilterLink>
  </p>
)