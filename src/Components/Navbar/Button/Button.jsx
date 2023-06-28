import './Button.css';

const Button = ({text}) => {
    return (
        <div>
            <button className="neon-button">{text}</button>
        </div>
    );
};

export default Button;