const createSelectors = (models) =>
	Object.keys(models).reduce((accumulator, key) => {
		if (models[key].selectors) {
			accumulator[key] = models[key].selectors;
		}

		return accumulator;
	}, {});

export default createSelectors;
