interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
    label? : string;
    error? : string;
    icon? : React.ReactNode;
}
export default IInputProps