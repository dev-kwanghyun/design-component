interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

function Input({}: InputProps) {
  return <input type="text" />;
}

export default Input;
