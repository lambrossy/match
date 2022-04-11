import stubTrue from 'lodash/fp/stubTrue.js';
import cond from 'lodash/fp/cond.js';

export const otherwise = stubTrue;

const throwTypeError = () => {
  throw new TypeError();
};

const match = conds => cond([...conds, [otherwise, throwTypeError]]);

export default match;