// api fetch 성공/실패 type 분기
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";
export const POKEMON_FAIL = "POKEMON_FAIL";

// payload에서 따오기
export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonSprites = {
  front_default: string;
};

// dispatch는 interface

// action에 따른 interface 정의
export interface pokemonFailDispatch {
  type: typeof POKEMON_FAIL;
}

// fetch 성공시 response를 받는 payload 부여 (payload는 reponse형식에 따라 type을 맞춰줌)
export interface pokemonSuccessDispatch {
  type: typeof POKEMON_SUCCESS;
  payload: {
    abilities: PokemonAbility[];
    sprites: PokemonSprites;
  };
}

// interface로 정의한 dispatch 또한 type이다.
export type PokemonDispatchType = pokemonSuccessDispatch | pokemonFailDispatch;
