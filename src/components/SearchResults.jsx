import React, { Component } from "react";
import { connect } from "react-redux";

class SearchResults extends Component {
  renderSchoolName() {
    const schoolType = this.props.form.schoolType;
    const city = this.props.city[0];
    if (schoolType == "budget") {
      return city.schoolBudget.name;
    } else if (schoolType == "middle") {
      return city.schoolMiddle.name;
    } else if (schoolType == "top") return city.schoolTop.name;
  }

  renderSchoolPrice(value) {
    return this.props.city.finalPriceSchool;
  }

  renderCity() {
    const city = this.props.city;
    if (!this.props.city[0]) {
      return console.log("you must select a city");
    }
    return (
      <div className="search-results_main">
        <div>
          <h1>Search Results</h1>
        </div>
        <div> Nome: {city[0].city.name}</div>
        <div> Pais: {city[0].city.country}</div>

        <div> Escola: R${city.schoolFinalPrice} </div>
        <div> Acomodação: R${city.accommodationFinalPrice} </div>
        <div> Comida: R${city.foodFinalPrice} </div>
        <div> Transporte: R${city.transportFinalPrice}</div>
        <div> Utilidades Domésticas: R${city.utilitiesFinalPrice}</div>
      </div>
    );
  }

  render() {
    return <div> {this.renderCity()}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { city: state.city, form: state.form.searchForm.values };
}

export default connect(mapStateToProps, null)(SearchResults);
