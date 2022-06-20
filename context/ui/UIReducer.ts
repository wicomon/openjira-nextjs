import { UIState } from './';

type UIActionType =
  | {type: 'UI - Open Sidebar'}
  | {type: 'UI - Close Sidebar'}
;

export const UIReducer = ( state: UIState, action:UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return {
        ...state,
        sidemenuOpone: true
      };
    case 'UI - Close Sidebar':
      return {
        ...state,
        sidemenuOpone: false
      };
      default:
        return state;
  }

}