import createActions from './create/actions';
import createReducer from './create/reducer';
import createSagas from './create/sagas';
import createSelectors from './create/selectors';
import createTypes from './create/types';

export const createModels = (models) => ({
	actions: createActions(models),
	reducer: createReducer(models),
	sagas: createSagas(models),
	selectors: createSelectors(models),
	types: createTypes(models),
});

export default createModels;
