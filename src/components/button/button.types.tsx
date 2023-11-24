interface IButton {
    children? : any;
    title? : string; 
    onClick : () => void;
    isLoding? : boolean;
}
export default IButton