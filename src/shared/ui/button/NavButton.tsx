import {NavLink} from "react-router-dom";
import styles from './button.module.css';
import {AnchorHTMLAttributes, ReactNode} from "react";

type NavButtonProps = {
    children: ReactNode;
    to: string;
    className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const NavButton = ({ children, to, className, ...props }: NavButtonProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `${styles.button} ${className} ${isActive ? styles.active : ''}`}
            {...props}
        >
            {children}
        </NavLink>
    );
};

export default NavButton;
