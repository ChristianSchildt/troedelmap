import React from 'react';
import BigInputField from './BigInputField';
import InputField from './InputField';
import Text from './Text';
import TextHeading from './TextHeading';
import '.index.css';

function App() {
  return (
    <div>
      <header>
        <Text id="text" value=""></Text>
        <InputField id="input" value=""></InputField>
        <BigInputField id="biginput" value=""></BigInputField>
        <TextHeading id="texthead" value="" ></TextHeading>
      </header>
    </div>
  );
}

export default App;