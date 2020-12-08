import classnames from "classnames";
import styles from "./styles/Tag.module.scss";
import PropTypes from "prop-types";

const Tag = (props) => {
  const { children, className, variant, color = "main", ...rest } = props;
  return (
    <div
      className={classnames(
        variant && `g-bg-${variant}`,
        `g-color-${color}`,
        styles.tag,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
};

export default Tag;
