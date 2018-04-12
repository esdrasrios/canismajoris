import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Field, reduxForm } from "redux-form";

import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import { MenuItem } from "material-ui";

import { renderTextField } from "./TextField";
import { renderSelectField } from "./SelectField";
import { renderSliderField } from "./SliderField";

import { fetchCity } from "../actions/index";
import VideoBg from "./VideoBg";

const style = {
  width: 340,
  padding: 40
};

class SearchForm extends Component {
  state = {
    dataSource: [],
    value: null
  };

  render() {
    return (
      <div className="main_content">
        <div className="main_content_left">
          <h2> Quanto vale seu sonho?</h2>
          <h3>Nós te ajudamos a calcular tudo!</h3>
        </div>
        <div className="main_content_right">
            <form
              onSubmit={this.props.handleSubmit(values => {
                this.props.fetchCity(values);
              })}
            >
              <div>
                <Field
                  name="cityName"
                  component={renderTextField}
                  label="Quero ir para"
                  placeholder="ex: Londres"
                />
              </div>
              <div>
                <Field
                  name="time"
                  component={renderSelectField}
                  label="Por esse tempo"
                  placeholder="ex: 3 Meses"
                >
                  <MenuItem value="4" primaryText="1 Mês" />
                  <MenuItem value="12" primaryText="3 Meses" />
                  <MenuItem value="24" primaryText="6 Meses" />
                  <MenuItem value="52" primaryText="12 Meses" />
                </Field>
              </div>
              <div>
                <Field
                  name="schoolType"
                  component={renderSelectField}
                  label="No tipo de escola"
                  placeholder="ex: Top"
                >
                  <MenuItem value="budget" primaryText="Budget" />
                  <MenuItem value="mid" primaryText="Mid" />
                  <MenuItem value="top" primaryText="Top" />
                </Field>
              </div>
              <div>
                <Field
                  name="accommodationType"
                  component={renderSelectField}
                  label="No tipo de hospedagem"
                  placeholder="ex: Apartamento"
                >
                  <MenuItem value="hostel" primaryText="Hostel" />
                  <MenuItem
                    value="apartamentShared"
                    primaryText="Apartamento Dividido"
                  />
                  <MenuItem value="apartament" primaryText="Apartamento Inteiro" />
                </Field>
              </div>
              <div>
                <RaisedButton
                  type="submit"
                  label="Pesquisar"
                  secondary={true}
                  style={{marginTop: 20, marginRight:20}}
                />
              </div>
            </form>
        </div>
      </div>
    );
  }
}

const City = reduxForm({
  form: "searchForm"
})(SearchForm);

export default connect(null, { fetchCity })(City);
