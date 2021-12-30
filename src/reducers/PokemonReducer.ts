import {
  PokemonDispatchType,
  PokemonType,
  POKEMON_FAIL,
  POKEMON_SUCCESS,
} from "../actions/PokemonActionTypes";

//reducer는 store에 들어갈 state와 state를 변경시키는 함수를 정의하는 곳.
//api fetching은 reducer에서 하지않고 Action ts 에서 한다. 않는다.

// 처음에는 pokemon 값이 null 이므로 option(?) 처리
interface InitialState {
  success: boolean;
  pokemon?: PokemonType;
}

const initialState: InitialState = {
  success: false,
};

const PokemonReducer = (
  state = initialState,
  action: PokemonDispatchType
): InitialState => {
  switch (action.type) {
    case POKEMON_FAIL:
      return {
        ...state,
        success: false,
      };
    case POKEMON_SUCCESS:
      const { abilities, sprites } = action.payload;
      return {
        ...state,
        success: true,
        pokemon: {
          abilities,
          sprites,
        },
      };
    default:
      return state;
  }
};

export default PokemonReducer;
