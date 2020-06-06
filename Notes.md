# Pipes

const pipe = (...fns) => initialVal => fns.reduce((g,f) => f(g), initialVal);

For each function in an array of functions, run the callback:
	(g, f) => f(g)

	Ex. if you pass add, mul2, the f(g) is:

		x => { 
			(x + 1) => { 
				x * 2
			}
		}

// create the functions that you want to run through
// the pipeline here. Notice how they all return the 
// same type (number)

const add1 = x => x + 1;
const mul2 = x => x * 2;

// create an initial value. It will have 1 added to it,
// and then it will be doubled
const initVal = 5;

const result = pipe(add1, mul2)(initVal);

console.log(result); // 12
