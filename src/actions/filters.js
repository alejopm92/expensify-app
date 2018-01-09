export const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

export const setTextfilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const sortByAmount = () => ({
  type: 'SET_SORT_BY',
  sortBy: 'amount'
});

export const sortByDate = () => ({
  type: 'SET_SORT_BY',
  sortBy: 'date'
});

export const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  startDate: date
});

export const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  endDate: date
});
