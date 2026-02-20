---
id: index
slug: /
sidebar_position: 0
---
import { variant } from './site-config';
import { If } from 'react-extras';

# openUC2 Documentation

Welcome to the openUC2 documentation website! Here you'll find:

- Documentation to help you [use openUC2 products](./usage/README.md), including:
  - the [FRAME](./usage/pro/frame/README.md) microscope
  - the [miniFRAME](./usage/pro/miniframe/README.md) microscope
  - the [Discovery Line](./usage/disc/README.md) learning & prototyping kits
- Documentation to help you [develop new things](./dev/README.md) with openUC2 products & projects

<If condition={variant !== 'full'}>
  :::info

  You're viewing the **{variant}** subset of the full documentation.
  For the full documentation, please visit [openuc2.github.io](https://openuc2.github.io/).

  :::
</If>
