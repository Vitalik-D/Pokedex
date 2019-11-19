import * as actions from "../ActionTypes";

export const initCounter = async () => {
  const limit = 897;
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
  const json = await data.json();
  return {
    type: actions.COUNTER,
    payload: json
  };
};
