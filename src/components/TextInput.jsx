import { TextInput as NativeTextInput } from 'react-native';
import theme from '../theme';


const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [
        style,
        error && { borderColor: theme.colors.errorColor }
    ];
    /*
    console.log("moi");
    console.log('style: ',style);
    console.log('error: ',error);
    console.log('props: ',props);
    */

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;