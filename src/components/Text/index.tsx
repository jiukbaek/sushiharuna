import * as React from "react";
import styled from "styled-components";
import device from "components/device";

interface TextProps {
  size?: string;
  pcSize?: string;
  color?: string;
  margin?: string;
  pcMargin?: string;
  shadow?: string;
  onClick?: any;
  children: any;
}

const TextComponent = styled.div`
  font-size: ${props => (props.size ? props.size : "5vw")};
  font-weight: 600;
  color: ${props => (props.color ? props.color : "rgb(53,7,7)")};
  font-family: "TlabShin", sans serif;
  margin: ${props => (props.margin ? props.margin : "0 0")};
  text-shadow: ${props => (props.shadow ? props.shadow : "none")};
  @media ${device["pc"]} {
    font-size: ${props =>
      props.pcSize ? props.pcSize : props.size ? props.size : "5vw"};

    margin: ${props =>
      props.pcMargin ? props.pcMargin : props.margin ? props.margin : "0 0"};
  }
`;

const Text = ({
  size = "",
  color = "",
  margin = "",
  shadow = "",
  pcSize = "",
  pcMargin = "",
  onClick,
  children
}: TextProps) => {
  return (
    <TextComponent
      size={size}
      pcSize={pcSize}
      color={color}
      margin={margin}
      shadow={shadow}
      pcMargin={pcMargin}
      onClick={onClick}
    >
      {children}
    </TextComponent>
  );
};

export default Text;
