import { Formik } from 'formik';
import { Button, Pressable, StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from "../theme";
import * as yup from 'yup';

const initialValues = {
    username: '',
    password: '',
};

const styles = StyleSheet.create({
    textInput: {
        margin: 10,
        paddingHorizontal: 9,
        paddingVertical: 3,
        borderWidth: 1,
        borderRadius: 9,
        borderColor: "#b6b6b6",
    },
    signButton: {
        backgroundColor: theme.colors.primary,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 9,
    },
    buttonContainer: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'center'
    },
})

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username must be longer')
      .required('Username is required'),
    password: yup
      .string()
      .min(3, 'Password must be longer')
      .required('Password is required'),
});

const SignInForm = ({onSubmit}) => {

    return (
        <View>
          <FormikTextInput style={styles.textInput} name="username" placeholder="Username" />
          <FormikTextInput style={styles.textInput} name="password" placeholder="Password" secureTextEntry/>
          {/*
          <Pressable onPress={onSubmit}>
            <Text style={styles.signButton}>Sign In</Text>
          </Pressable>
          */}
          <View style={styles.buttonContainer}>
            <Button color="#fff" title="Sign in" onPress={onSubmit}/>
          </View>
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
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    );
};

export default SignIn;