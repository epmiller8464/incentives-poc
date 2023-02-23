import {StackNavigationOptions} from '@react-navigation/stack'
import React from 'react'
import {StatusBarStyle} from 'react-native'

import {
  CallToAction,
  SystemTypeScreen,
  SelectUtilityScreen,
  ExistingHVACSystem,
  ExistingHVACSystemAge,
  Income,
  CustomerPriority,
  HomeSize,
  ContactInfo,
  DoingSomeMath,
  DisplayCase,
  Address
} from '../screens'

type RouteKeys = keyof typeof _routes;


const _routes = {
  CallToAction: {
    name: 'CallToAction',
    screen: CallToAction,
    statusBarStyle: 'dark-content' as StatusBarStyle,
  },
  SystemType: {
    name: 'SystemType',
    screen: SystemTypeScreen,
    statusBarStyle: 'dark-content' as StatusBarStyle,
  },

  SelectUtility: {
    name: 'SelectUtility',
    screen: SelectUtilityScreen,
    statusBarStyle: 'dark-content' as StatusBarStyle,
  },
  ExistingHVACSystem: {
    name: 'ExistingHVACSystem',
    screen: ExistingHVACSystem,
    statusBarStyle: 'dark-content' as StatusBarStyle,
  },
  ExistingHVACSystemAge: {
    name: 'ExistingHVACSystemAge',
    screen: ExistingHVACSystemAge,
    statusBarStyle: 'dark-content' as StatusBarStyle,
  },
  Income: {
    name: 'Income',
    screen: Income,
    statusBarStyle: 'dark-content' as StatusBarStyle,
  },
  CustomerPriority: {
    name: 'CustomerPriority',
    screen: CustomerPriority,
    statusBarStyle: 'dark-content' as StatusBarStyle,
  },
  Address:{
    name: 'Address',
    screen: Address,
    statusBarStyle: 'dark-content' as StatusBarStyle,
  },
  HomeSize: {
    name: 'HomeSize',
    screen: HomeSize,
    statusBarStyle: 'dark-content' as StatusBarStyle,
  },
  ContactInfo: {
    name: 'ContactInfo',
    screen: ContactInfo,
    statusBarStyle: 'dark-content' as StatusBarStyle,
  },
  DoingSomeMath: {
    name: 'DoingSomeMath',
    screen: DoingSomeMath,
    statusBarStyle: 'dark-content' as StatusBarStyle,
  },
  DisplayCase: {
    name: 'DisplayCase',
    screen: DisplayCase,
    statusBarStyle: 'dark-content' as StatusBarStyle,
  },
}

export const routes: Record<
  RouteKeys,
  {
    name: string;
    screen: React.ComponentType<any>;
    screenNavigationOptions?: StackNavigationOptions;
    statusBarStyle?: StatusBarStyle;
  }
> = _routes
