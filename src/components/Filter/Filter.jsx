import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  FormLabel,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';
import { Wrapper } from './Filter.styled';

class Filter extends Component {
  filterId = nanoid();

  render() {
    return (
      <Wrapper>
        <FormLabel htmlFor={this.filterId}>Find contats by name</FormLabel>
        <FormInput
          id={this.filterId}
          name="filter"
          value={this.props.value}
          onChange={this.props.changeFilter}
        ></FormInput>
      </Wrapper>
    );
  }
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func,
};
