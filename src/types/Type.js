class Type {
	constructor(name) {
		this.name = name;
		this.namespace = '';
	}

	setNamespace(namespace) {
		this.namespace = `${namespace}/`;
	}
}

export default Type;
