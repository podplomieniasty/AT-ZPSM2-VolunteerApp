import { TextInput, TextInputProps } from "react-native";
import { GlobalStylesheet } from "../../assets/GlobalStyles";

const Input = ({}: TextInputProps) => {
    return(
        <TextInput 
            style={GlobalStylesheet.textinput}
            />
    );
}

export default Input;