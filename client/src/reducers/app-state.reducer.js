import {
  LOAD_WIDGETS_LIST,
  SET_WIDGETS_LIST,
  UPDATE_WIDGET,
  DELETE_WIDGET
} from '../actions/types';

const appState = (state = {}, action) => {

  switch(action.type){
    case LOAD_WIDGETS_LIST:
      return { ...state };
    case SET_WIDGETS_LIST:
      let { widgetsList } = action;
      return {...state, widgetsList};
    case UPDATE_WIDGET:
      const { widget } = action;
      widgetsList = state.widgetsList.map(item => item.id == widget.id ? widget : item);
      return {...state, widgetsList};
      case DELETE_WIDGET:
        const { widgetId } = action;
        widgetsList = state.widgetsList.filter(item => item.id != widgetId);
        return {...state, widgetsList};
    default:
      return { ...state} ;
  }
}

export default appState;
