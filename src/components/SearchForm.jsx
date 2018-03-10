import PropTypes from "prop-types";
import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Field, reduxForm } from "redux-form";

import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import { MenuItem } from "material-ui";

import { renderTextField } from "./TextField";
import { renderSelectField } from "./SelectField";

import { fetchCity } from "../actions/index";

const style = {
  margin: 20,
  padding: 30,
  display: "inline-block"
};

const divmain = {
  padding: 50
};

class SearchForm extends Component {
  state = {
    dataSource: [],
    value: null
  };

  render() {
    return (
      <div style={divmain}>
        <Paper style={style} zDepth={3}>
        <form onSubmit={this.props.handleSubmit(values => {
                fetchCity(values);
              })}>
          <div>
            <Field
              name="cityName"
              component={renderTextField}
              label="Quero ir estudar e morar em"
              placeholder="ex: Londres"
            />
          </div>
          <div>
            <Field
              name="time"
              component={renderSelectField}
              label="Por quanto tempo?"
              placeholder="ex: 3 Meses"
            >
              <MenuItem value="less1" primaryText="1 - 4 Semanas" />
              <MenuItem value="1to3" primaryText="1 - 3 Meses" />
              <MenuItem value="3to6" primaryText="3 - 6 Meses" />
            </Field>
          </div>
          <div>
            <Field
              name="schoolType"
              component={renderSelectField}
              label="Qual o nível da escola?"
              placeholder="ex: Top"
            >
              <MenuItem value="budget" primaryText="Budget" />
              <MenuItem value="middle" primaryText="Mid" />
              <MenuItem value="top" primaryText="Top" />
            </Field>
          </div>
          <div>
            <Field
              name="accommodationType"
              component={renderSelectField}
              label="Qual tipo de hospedagem?"
              placeholder="ex: Apartamento"
            >
              <MenuItem value="hostel" primaryText="Hostel" />
              <MenuItem value="apartament1" primaryText="Apartamento Dividido" />
              <MenuItem value="apartament2" primaryText="Apartamento 2-3 Quartos" />
            </Field>
          </div>
          <div>
            <Field
              name="foodType"
              component={renderSelectField}
              label="Geralmente para comer vou..."
              placeholder="ex: Cozinhar eu mesmo"
            >
              <MenuItem value="cookmyself" primaryText="Vou cozinhar em casa" />
              <MenuItem value="restaurant" primaryText="Restaurante Barato" />
              <MenuItem value="expensiverestaurant" primaryText="Restaurante Caro" />
            </Field>
          </div>

          <div>
            {/* onClick={this.props.handleSubmit(values => {submitNewCity(values)})} */}
            <RaisedButton
              type="submit"
              label="Pesquisar"
              secondary={true}
            />
          </div>
          </form>
        </Paper>
      </div>
    );
  }
}

export default reduxForm({
  form: "defaultForm" // a unique identifier for this form
})(SearchForm);
