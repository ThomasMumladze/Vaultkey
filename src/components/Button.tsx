interface Props {
    children: React.ReactNode;
    className?: string;
    btnFunc: () => void;
    type?: "button" | "submit" | "reset";
}

const Button = (props: Props) => {
    const { btnFunc, children, className = "", type = "button" } = props;

    if (!children) {
        console.warn("Button: children is required");
        return null;
    }

    return (
        <button type={type} className={`btn-primary ${className}`} onClick={btnFunc}>
            {children}
        </button>
    );
};

export default Button;
