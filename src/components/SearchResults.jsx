import React, { Component } from "react";
import { connect } from "react-redux";

class SearchResults extends Component {
  renderSchool() {
    const city = this.props.city;
    return (
      <div className="results-school">
        <div> Escolhida: {city.school.name}</div>
        <div> Categoria: {city.school.sType}</div>
        <div> Escola: R${city.schoolPrice} </div>
      </div>
    );
  }

  renderAccommodation() {
    const city = this.props.city;
    return (
      <div className="results-accommodation">
        <div> Acomodação: R${city.accommodationPrice} </div>
      </div>
    );
  }

  renderFood() {
    const city = this.props.city;
    return (
      <div className="results-food">
        <div> Comida: R${city.accommodationPrice} </div>
      </div>
    );
  }

  renderOtherUtilites() {
    const city = this.props.city;
    return (
      <div className="results-utilities">
        <div> Transporte: R${city.transportPrice}</div>
        <div> Utilidades Domésticas: R${city.utilitiesPrice}</div>
      </div>
    );
  }

  renderCity() {
    const city = this.props.city;
    if (!this.props.city.city) {
      return console.log("you must select a city");
    }
    return (
      <div className="search-results">
        <div className="search-results_main">
          <div className="search-results_title">
            <h1>Search Results</h1>
          </div>
          <div className="search-results_body">
            <div> {city.city.country}#flag</div>
          </div>
        </div>
        <div className="results-container">
          <div className="results-main-div">
            <div><h2>{city.city.name}</h2></div>
            {this.renderSchool()}
            {this.renderAccommodation()}
            {this.renderFood()}
            {this.renderOtherUtilites()}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div> {this.renderCity()}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state.city);
  return { city: state.city, form: state.form.searchForm.values };
}

export default connect(mapStateToProps, null)(SearchResults);
