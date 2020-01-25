// == Initial State
const initialState = {
  categories: [
    {
      id: '1',
      name: 'PLAYSTATION',

    },
    {
      id: '2',
      name: 'XBOX',

    },
    {
      id: '3',
      name: 'NINTENDO',


    },
  ],
  genres: [
    { id: 1, name: 'RPG' },
    { id: 2, name: 'SURVIVAL HORROR' },
    { id: 3, name: 'MMORPG' },
    { id: 4, name: 'MOBA' },
    { id: 5, name: 'ARCADE' },
  ],
  activeItem: 'home',
};

// == Types
export const GET_PLATEFORM = 'GET_PLATEFORM';
export const GET_GENRE = 'GET_GENRE';

const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';


// == Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.name,
      };

    default:
      return state;
  }
};

// == Action Creators
export const setActiveItem = name => ({
  type: SET_ACTIVE_ITEM,
  name,
});
export const getPlateform = () => ({
  type: GET_PLATEFORM,
});
export const getGenres = () => ({
  type: GET_GENRE,
});

// == Export
export default reducer;
