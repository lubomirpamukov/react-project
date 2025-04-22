import PropTypes from "prop-types";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return <button className="text-red-900 border-2 p-2 bg-amber-300 mb-2 rounded-xl

uu">{children}</button>;
};

Button.propTypes = {
  checkVarationValues: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, or danger can be true"
      );
    }
    return null;
  },
};

export default Button;
