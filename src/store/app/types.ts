import {
  composeTypes,
} from 'iron-redux';

/**
 * 定义 types
 */
const prefix = 'app/';

enum BasicTypes {
  initializeApp,
}

enum FetchTypes {
}

const Types = composeTypes({
  prefix,
  BasicTypes,
  FetchTypes,
});

export { Types, prefix };
