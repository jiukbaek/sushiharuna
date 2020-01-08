import * as React from "react";
import styled from "styled-components";

interface TextProps {
  size?: string;
  color?: string;
  margin?: string;
  shadow?: string;
  children: any;
}

const TextComponent = styled.div`
  font-size: ${props => (props.size ? props.size : "5vw")};
  font-weight: 600;
  color: ${props => (props.color ? props.color : "rgb(53,7,7)")};
  font-family: "TlabShin", sans serif;
  margin: ${props => (props.margin ? props.margin : "0 0")};
  text-shadow: ${props => (props.shadow ? props.shadow : "none")};
`;

const Text = ({
  size = "",
  color = "",
  margin = "",
  shadow = "",
  children
}: TextProps) => {
  return (
    <TextComponent size={size} color={color} margin={margin} shadow={shadow}>
      {children}
    </TextComponent>
  );
};

export default Text;
