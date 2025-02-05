import styles from './button.module.css'
import {ButtonHTMLAttributes, ReactNode} from "react";


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    isActive?: boolean
};

const Button = ({children, className, isActive, ...props}: ButtonProps) => {
    return (
        <button className={`${styles.button} ${className} ${isActive ? styles.active : ''}`} {...props}>
            {children}
        </button>
    )
}

export default Button
