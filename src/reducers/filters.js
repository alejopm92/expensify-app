const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const newArray = ['a','b']
const arrayNew =[...newArray,'c','d']
console.log(newArray);
console.log(arrayNew);


export default ( state = filterReducerDefaultState, action) => {
  switch (action.type) {

    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };

    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.sortBy
      };

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };

    default:
      return state;
  }
};
