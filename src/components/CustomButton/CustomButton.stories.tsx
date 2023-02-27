import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';

import CustomButton from '.';
import {ButtonVariants} from './types';
import colors from '../../theme/colors';
import Separator from '../Separator';
import {H2} from '../Typography';

const CustomButtons = () => (
  <View style={{padding: 16, backgroundColor: colors.gray[0], flex: 1}}>
    <Separator size={32} />
    <H2>Primary</H2>
    <Separator size={8} />
    <CustomButton variant={ButtonVariants.Primary} text="Primary" />
    <Separator size={32} />
    <H2>Secondary</H2>
    <Separator size={8} />
    <CustomButton variant={ButtonVariants.Secondary} text="Secondary" />
    <Separator size={32} />
    <H2>Light</H2>
    <Separator size={8} />
    <CustomButton variant={ButtonVariants.Light} text="Light" />
    <Separator size={32} />
    <H2>Dark</H2>
    <Separator size={8} />
    <CustomButton variant={ButtonVariants.Dark} text="Dark" />
    <Separator size={32} />
    <H2>Disabled</H2>
    <Separator size={8} />
    <CustomButton variant={ButtonVariants.Disabled} text="Disabled" />
  </View>
);

storiesOf('CustomButton', module).add('CustomButton', () => <CustomButtons />);
