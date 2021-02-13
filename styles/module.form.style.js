import styled from 'styled-components'

export const A = styled.a`
  color: #654321;
  font-size: 2em;
  margin: 0 auto;
  text-align;
  cursor: pointer;
`;

export const Button = styled.button`
  background: #00ffff;
  color: #000;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #00ffff;
  border-radius: 3px;
  height: 40px;
`;

export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: palevioletred;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred";
  background: papayawhip;
  border-radius: 3px;
`;

export const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
  display: flex;
  flex-direction: column;
  align-items center
`;

export const InputWrapper = styled.section`
  padding: 2em;
  background: palevioletred;
  display: flex;
  flex-direction: column;
  width: 30em;
`;
