# testing (`component`)

## Description

This blueprint is based on the blueprint of Veams.

> Just place a generic quote for your type.

-----------

## Requirements
- `Veams#5.0.0` - Replace this requirement with the libs you need for this type.

-----------

## Installation

### Installation with Veams from local machine

`veams install bp absolute/filepath/to/testing`

### Installation with Bower or Veams

When published on bower you can install the component by executing:

1. `veams install veams-component testing`
2. `bower install veams-component-testing --save`

-----------

## Fields

### `c-testing.hbs`

#### Settings
- settings.testingClasses {`String`} - _Modifier classes for component._
- settings.testingContextClass {`String`} [default] - _Context class of component._ 
- settings.testingJsOptions {`Object`} - _JavaScript options which gets stringified._

#### Content
- content.testingField {`String`} - _Please add a description!_

-------------

## JavaScript Options

The module gives you the possibility to override default JS options:

- optionOne {`String`} ['is-option'] - _Please add a description!_

------------

## SASS

### Variables

- $testing-my-custom-var {`String`} [] - _Please add a description!_

### Modifier Classes

You can add the following modifiers to `testing`:
- is-modifier - _Please add a description!_
