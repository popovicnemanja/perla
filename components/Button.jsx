const Button = ({ children, className, data }) => {
  return (
    <button className={`button ${className}`} data-name={data}>
      {children}
    </button>
  );
};

export default Button;
