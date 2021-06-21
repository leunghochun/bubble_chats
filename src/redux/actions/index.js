import { MOVE_UP, MOVE_DOWN } from "../actionTypes";

export const movingUp = (data) => ({
  type: MOVE_UP,
  payload: { data }
});

export const movingDown = (data) => ({
  type: MOVE_DOWN,
  payload: { data }
});
