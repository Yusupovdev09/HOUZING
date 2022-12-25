import styled from "styled-components";

const Container = styled.div`
  /* display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between; */

  display: grid;
  padding: var(--padding);
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;

  max-width: 1440px;
  width: 100%;
  margin: auto;
`;
export { Container };
