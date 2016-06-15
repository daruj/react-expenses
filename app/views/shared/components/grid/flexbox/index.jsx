import {
  createCustomClasses,
  EXPAND_CHILD
} from 'react-flexbox-layout';

import {
  Grid,
  Cell,
  stylesheet,
  optimizedResize,
  findBreakpoints,
  findMatch,
  setBreakpoints,
  getBreakpoints,
  clearBreakpoints
} from 'react-flexr';

import '!style-loader!css-loader!react-flexbox-layout/lib/styles';

const { HLayout, HLayoutItem, VLayout, VLayoutItem } = createCustomClasses({
  defaultGutter: 10,
  gutterMultiplier: 1,
  defaultGutterUnit: 'px'
});

export {
  HLayout,
  HLayoutItem,
  VLayout,
  VLayoutItem,
  EXPAND_CHILD,
  Grid,
  Cell,
  stylesheet,
  optimizedResize,
  findBreakpoints,
  findMatch,
  setBreakpoints,
  getBreakpoints,
  clearBreakpoints
};
