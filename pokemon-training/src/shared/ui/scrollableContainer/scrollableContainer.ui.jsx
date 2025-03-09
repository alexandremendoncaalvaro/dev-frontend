import styled from 'styled-components';

export const ScrollableContainer = styled.div`
  height: ${(props) => props.$h};
  width: ${(props) => props.$w};
  max-height: ${(props) => props.$maxHeight};
  overflow-y: ${(props) => props.$overflowY};
  overflow-x: ${(props) => props.$overflowX};
  margin: ${(props) => props.$m};
  margin-right: ${(props) => props.$mr};
  margin-left: ${(props) => props.$ml};
  margin-top: ${(props) => props.$mt};
  margin-bottom: ${(props) => props.$mb};
  padding: ${(props) => props.$p};
  padding-right: ${(props) => props.$pr};
  padding-left: ${(props) => props.$pl};
  padding-top: ${(props) => props.$pt};
  padding-bottom: ${(props) => props.$pb};
  gap: ${(props) => props.$gap};
  display: ${(props) => props.$display};
  flex-direction: ${(props) => props.$flexDirection};
  flex-wrap: ${(props) => props.$flexWrap};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: var(--scrollbar-background);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--item-menu);
    border-radius: 10px;
  }
`;
