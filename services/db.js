const CONST = require('../constants');

function sortdb(db, query){
	const key = query.key;
	const order = query.order;

	if(key === CONST.id || key === CONST.popularity){
			db.sort((a, b) => {
					return a[key] - b[key];
			});
	} else if (key === CONST.name || key === CONST.adult) {
			db.sort((a, b) => {
					if(a[key] < b[key][0]) return -1;
					else if (a[key] > b[key][0]) return 1;
					else return 0;
			});
	}
	if(order === CONST.dec) db.reverse();

	return db;
};

function findById(db, id){
	return db.find(elem => {
			return elem[CONST.id] === parseInt(id);
	});
};


function findByName(db, name){
	const found = [];

	db.find((elem) => {
			const sample = name.replace(' ', '').toLowerCase();
			const elValue = elem[CONST.name]? elem[CONST.name].replace(' ', '').toLowerCase() : "";
			if (elValue.search(sample) !== -1)
					found.push(elem);
			return false;
	});

	return found;
};


function pagination(db, query){
	const offset = parseInt(query.offset);
	const limit = parseInt(query.limit);

	return db.slice(offset, offset + limit);
};