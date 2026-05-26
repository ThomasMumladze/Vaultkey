interface Props {
    children: React.ReactNode;
    className?: string;
    btnFunc: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const Button = (props: Props) => {
    const { btnFunc, children, className = "", type = "button", disabled } = props;

    if (!children) {
        console.warn("Button: children is required");
        return null;
    }

    return (
        <button disabled={disabled} type={type} className={`btn-primary ${className}`} onClick={btnFunc}>
            {children}
        </button>
    );
};

export default Button;
