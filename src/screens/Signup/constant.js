export const SIGNUP = {
  forms(inputs, setInput) {
    const {
      firstName,
      lastName,
      email,
      gamePlatform,
      userName,
      password,
      country,
    } = inputs;

    const handleInput = (inputName, inputValue) =>
      setInput({
        ...inputs,
        [inputName]: inputValue,
      });

    return [
      {
        placeholder: 'translation:pages.signup.input1',
        secureTextEntry: false,
        value: firstName,
        setInput: (value) => handleInput('firstName', value),
        onSubmitEditing: () => null,
      },
      {
        placeholder: 'translation:pages.signup.input2',
        secureTextEntry: false,
        value: lastName,
        setInput: (value) => handleInput('lastName', value),
        onSubmitEditing: () => null,
      },
      {
        placeholder: 'translation:pages.signup.input3',
        secureTextEntry: false,
        value: email,
        setInput: (value) => handleInput('email', value),
        onSubmitEditing: () => null,
      },
      {
        placeholder: 'translation:pages.signup.input4',
        secureTextEntry: false,
        value: gamePlatform,
        setInput: (value) => handleInput('gamePlatform', value),
        onSubmitEditing: () => null,
      },
      {
        placeholder: 'translation:pages.signup.input5',
        secureTextEntry: false,
        value: userName,
        setInput: (value) => handleInput('userName', value),
        onSubmitEditing: () => null,
      },
      {
        placeholder: 'translation:pages.signup.input6',
        secureTextEntry: true,
        value: password,
        setInput: (value) => handleInput('password', value),
        onSubmitEditing: () => null,
      },
      {
        placeholder: 'translation:pages.signup.input7',
        secureTextEntry: false,
        value: country,
        setInput: (value) => handleInput('country', value),
        onSubmitEditing: () => null,
      },
    ];
  },
};
