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

import scrollToComponent from 'react-scroll-to-component';

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
        <div className="main_content_left"><h2> Quanto vale seu sonho?</h2><h3>Nós te ajudamos a calcular tudo!</h3></div>
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
                    value="apshared"
                    primaryText="Apartamento Dividido"
                  />
                  <MenuItem value="ap" primaryText="Apartamento 2-3 Quartos" />
                </Field>
              </div>
              {/* <div>
                <Field
                  name="foodType"
                  component={renderSelectField}
                  label="Geralmente para comer vou..."
                  placeholder="ex: Cozinhar eu mesmo"
                >
                  <MenuItem
                    value="cookmyself"
                    primaryText="Vou cozinhar em casa"
                  />
                  <MenuItem
                    value="restaurant"
                    primaryText="Restaurante Barato"
                  />
                  <MenuItem
                    value="otherrestaurant"
                    primaryText="Restaurante Caro"
                  />
                </Field>
              </div> */}
              {/* <div>
          <Field
            name="time"
            component={renderSliderField}
            defaultValue={0}
            format={null}
            min={0}
            max={50}
            step={1}
          />
        </div> */}

              {/* <div className="search__slider">
              <h3>Por quanto tempo </h3>
                <Field 
                name="time"
                component={renderSliderField}
                />
              </div> */}

              <div>
                {/* onClick={this.props.handleSubmit(values => {submitNewCity(values)})} */}
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
