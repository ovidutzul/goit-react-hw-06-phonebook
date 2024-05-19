import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/actions';

import css from '../Filter/Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <>
           <input className={css.filter__input} type="text" name="filter" placeholder="Find contacts by name or phone number" onChange={onChange} />
    </>
  );
};

export default Filter;
