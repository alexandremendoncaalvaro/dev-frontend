import styled from 'styled-components';
//para definir altura usar height
//para definir largura usar widht
const display = ['block', 'flex', 'inline-block', 'inline-flex', 'grid', 'none'];
const justifyContent = [
  'initial',
  'center',
  'flex-end',
  'flex-start',
  'space-between',
  'space-evenly',
];
const alignItems = ['initial', 'center', 'flex-end', 'flex-start'];
const direction = ['initial', 'column', 'row', 'column-reverse', 'frow-reverse'];

export const Div = styled.div`
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  maxWidth: ${(props) => props.maxWidth};
  display: ${(props) => display[props.display] || display[0]};
  justify-content: ${(props) => justifyContent[props.justifyContent] || justifyContent[0]};
  align-items: ${(props) => alignItems[props.alignItems] || alignItems[0]};
  justify-items: ${(props) => props.justifyItems};
  gap: ${(props) => props.gap || 'initial'};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin};
  flex-direction: ${(props) => direction[props.flexDirection] || direction[0]};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  color: ${(props) => props.color};
  font-color: ${(props) => props.fontColor};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  grid-template-columns: ${(props) => (display[1] ? props.gridTemplateColumns : 'none')};
  cursor: ${(props) => props.cursor};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
  transform: ${(props) => props.transform};
  z-index: ${(props) => props.zIndex};
`;
