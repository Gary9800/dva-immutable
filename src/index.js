import hashHistory from 'react-router/lib/hashHistory';
import {
  routerMiddleware,
  syncHistoryWithStore,
} from 'react-router-redux';
import createDva from './createDva';

import Immutable from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = Immutable.fromJS({
  locationBeforeTransitions: null
});

const routing =  (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.set('locationBeforeTransitions', action.payload);
  }

  return state;
};

export default createDva({
  mobile: false,
  initialReducer: {
    routing,
  },
  defaultHistory: hashHistory,
  routerMiddleware,

  setupHistory(history) {
    this._history = syncHistoryWithStore(history, this._store, {
      selectLocationState (state) {
        return state.get('routing').toJS();
      }
    });
  },
});
