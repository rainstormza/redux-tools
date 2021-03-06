const retryStrategies = {
	constant: () => 1,
	exponential: (i) => Math.pow(2, i),
	immediate: () => 0,
	linear: (i) => i,
};

export default retryStrategies;
