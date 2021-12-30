import axios from "axios";
import { Dispatch } from "redux";
import {
  PokemonDispatchType,
  POKEMON_SUCCESS,
  POKEMON_FAIL,
} from "./PokemonActionTypes";

// Dispatch는 generic type. 구체화<>
export const fetchPokemonData =
  (pokemonName: string) => async (dispatch: Dispatch<PokemonDispatchType>) => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      const data = res.data;

      dispatch({
        type: POKEMON_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: POKEMON_FAIL,
      });
    }
  };
