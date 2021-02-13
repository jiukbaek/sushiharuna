import React from "react";
import styled from "styled-components";
import device from "components/device";

const EmptyBoxComponent = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "0px")};
  @media ${device.md} {
    width: ${(props) =>
      props.pcWidth ? props.pcWidth : props.width ? props.width : "100%"};
    height: ${(props) =>
      props.pcHeight ? props.pcHeight : props.height ? props.height : "100%"};
  }
`;

const EmptyBox = ({ width = "", height = "", pcWidth = "", pcHeight = "" }) => {
  return (
    <EmptyBoxComponent
      width={width}
      height={height}
      pcWidth={pcWidth}
      pcHeight={pcHeight}
    />
  );
};

export default EmptyBox;
