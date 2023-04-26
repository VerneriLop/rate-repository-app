import { Formik } from 'formik';
import { Pressable, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const initialValues = {
    username: '',
    password: '',
};

const SignInForm = ({onSubmit}) => {

    return (
        <View>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
          <Pressable onPress={onSubmit}>
            <Text>Sign In</Text>
          </Pressable>
        </View>
    );
}

const SignIn = () => {

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <View>
            <Text>The sign-in view</Text>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    );
};

export default SignIn;