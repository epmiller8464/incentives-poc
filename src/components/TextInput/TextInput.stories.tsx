import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';

import CustomTextInput from '.';
import {H2} from '../Typography';
import Separator from '../Separator';
import colors from '../../theme/colors';

const TextInput = () => (
  <View style={{padding: 16, backgroundColor: colors.gray[0], flex: 1}}>
    <Separator size={24} />
    <H2>Regluar</H2>
    <Separator size={8} />
    <CustomTextInput placeholder="Regular" />
    <Separator size={24} />
    <H2>Disabled</H2>
    <Separator size={8} />
    <CustomTextInput editable={false} placeholder="Disabled" />
    <Separator size={24} />
    <H2>Search with label</H2>
    <Separator size={8} />
    <CustomTextInput leftIcon placeholder="Search with Label" />
    <Separator size={24} />
    <H2>Error</H2>
    <Separator size={8} />
    <CustomTextInput
      error
      leftIcon
      errorMessage="Error Message here"
      placeholder="Error"
    />
    <Separator size={24} />
    <H2>Sucess</H2>
    <Separator size={8} />
    <CustomTextInput rightIcon placeholder="Success" />
  </View>
);

storiesOf('Text Input', module).add('Text Input', () => <TextInput />);
