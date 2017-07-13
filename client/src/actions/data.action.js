import HttpService from '../services/http.service';
const httpService = new HttpService();

export const LOAD_WIDGETS_LIST = 'LOAD_WIDGETS_LIST'
export const SET_WIDGETS_LIST = 'SET_WIDGETS_LIST';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const DELETE_WIDGET = 'DELET_WIDGET';


export function loadWidgetList() {

  return {
    type: LOAD_WIDGETS_LIST,
    promiseFactory: (dispatch, getState) => {
      // this promise factory should return a function that return a promise
      return () => httpService.get('url.to.some.backend', {})
      .then( data => {
          dispatch(setWidgetsList(data.widgets))
        }
      )
    }
  }
}

export function setWidgetsList(newWidgetsList) {
  return {
    type: SET_WIDGETS_LIST,
    widgetsList: newWidgetsList
  }
}

export function updateWidget(newWidget) {
  return {
    type: UPDATE_WIDGET,
    widget: newWidget
  }
}

export function deleteWidget(widgetId) {
  return {
    type: DELETE_WIDGET,
    widgetId: widgetId
  }
}
