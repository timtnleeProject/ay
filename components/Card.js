import React from "react";
import styles from "./styles/Card.module.scss";
import classnames from "classnames";

export default function Card(props) {
  const { children, className, as = "div", ...rest } = props;
  const Component = (props) => React.createElement(as, props);
  return (
    <Component className={classnames(styles.card, className)} {...rest}>
      {children}
    </Component>
  );
}
