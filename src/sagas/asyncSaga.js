import { call, put } from 'redux-saga/effects';

const asyncSaga = (fn) =>
	function* asyncSagaWrapper(action) {
		try {
			const payload = yield call(fn, action);

			yield put({
				payload,
				type: action.type.replace('_REQUEST', '_SUCCESS'),
			});
		} catch (error) {
			yield put({
				error,
				payload: action.payload,
				retry: action,
				type: action.type.replace('_REQUEST', '_FAILURE'),
			});
		}
	};

export default asyncSaga;
