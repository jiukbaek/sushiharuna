import * as React from "react";
import styled from "styled-components";

interface EmptyBoxProps {
  width?: string;
  height?: string;
}

const EmptyBoxComponent = styled.div`
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "0px")};
`;

const EmptyBox = ({ width = "", height = "" }) => {
  return <EmptyBoxComponent width={width} height={height} />;
};

export default EmptyBox;
