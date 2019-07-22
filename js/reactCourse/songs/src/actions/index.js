// Action creator
export const SelectSond = () => {
  //Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};