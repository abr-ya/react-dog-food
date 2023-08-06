import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./Tag.module.css";
import cn from "classnames";

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m";
  children: ReactNode;
  color?: "ghost" | "red" | "grey" | "primary";
  href?: string;
}

export const Tag = ({ size = "s", children, color = "ghost", href, className, ...props }: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.grey]: color == "grey",
        [styles.primary]: color == "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
