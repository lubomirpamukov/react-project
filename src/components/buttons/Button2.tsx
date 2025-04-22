import React from "react";
import type { FunctionComponent } from "react";
import className from "classnames";

type ExcludeFromTuple<T extends any[], U> = {
  [K in keyof T]: T[K] extends U ? never : T[K];
}[number];
 
type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
  ? E extends string
    ? Record<E, U> & { [k in ExcludeFromTuple<T, E>]?: never }
    : never
  : never & {};
 
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    outline?: boolean;
    rounded?: boolean;
  }> &
  Exclusive<["primary", "secondary", "success", "warning", "danger"], boolean>;
 
const Button2: FunctionComponent<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = className(
    rest.className,
    "flex items-center gap-1 px-3 py-2 border-2",
    {
      "border-blue-500 bg-blue-500": primary,
      "border-gray-900 bg-gray-900": secondary,
      "border-green-500 bg-green-500": success,
      "border-yellow-400 bg-yellow-400": warning,
      "border-red-500 bg-red-500": danger,
      "rounded-full": rounded,
      "text-white":
        !outline && (primary || secondary || success || warning || danger),
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    }
  );
 
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};
 
export default Button2;