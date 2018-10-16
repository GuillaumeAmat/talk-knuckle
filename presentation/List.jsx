import styled from 'styled-components';

import { List as RawList } from 'spectacle';
import { sizes } from './const';

export const List = styled(RawList)`
  && {
    padding-left: ${p => p.textSize || sizes.text};
  }
`;

export default List;
