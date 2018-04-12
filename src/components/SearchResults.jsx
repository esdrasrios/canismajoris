import React, { Component } from "react";
import { connect } from "react-redux";
import scrollToComponent from 'react-scroll-to-component';

class SearchResults extends Component {
componentDidUpdate(){
  scrollToComponent(this.city, { offset: 0, align: 'middle', duration: 300, ease:'inCirc'});
}

  renderSchool() {
    const city = this.props.city;
    return (
      <div className="results">
      <div className="results__subitem--img"><img src="img/bookshelf.png" alt="school" /> </div>
        <div className="results__subitem--heading"> ESCOLA </div>
        <div className="results__main">
        <div className="results__subitem"> 
          <div className="results__subitem--body">
           <div className="results__subitem--title">NOME</div>
           <div className="results__subitem--main">{city.school.name}</div>
          </div>
        </div>
        <div className="results__subitem"> 
          <div className="results__subitem--body">
           <div className="results__subitem--title">CATEGORIA</div>
           <div className="results__subitem--main">{city.school.sType}</div>
          </div>
        </div>
        <div className="results__subitem"> 
          <div className="results__subitem--body">
          <div className="results__subitem--title">DETALHES</div>
           <div className="results__subitem--main"><a href={city.school.url}> ver escola</a></div>
          </div>
        </div>
        <div className="results__subitem"> 
          <div className="results__subitem--body">
           <div className="results__subitem--price">R${city.schoolPrice}</div>
          </div>
        </div>
        </div>
      </div>
    );
  }

  renderAccommodation(){
    const city = this.props.city;
    return (
      <div className="results">
      <div className="results__subitem--img"><img src="img/apartments.png" alt="school" /></div>
      <div className="results__subitem--heading"> ACOMODAÇÃO </div>
      <div className="results__main">
      
      <div className="results__subitem"> 
          <div className="results__subitem--body">
           <div className="results__subitem--title">NOME</div>
           <div className="results__subitem--main">{city.accommodation.name}</div>
          </div>
        </div>
        <div className="results__subitem"> 
          <div className="results__subitem--body">
           <div className="results__subitem--title">CATEGORIA</div>
           <div className="results__subitem--main">{city.accommodation.aType}</div>
          </div>
        </div>
        <div className="results__subitem"> 
          <div className="results__subitem--body">
          <div className="results__subitem--title">DETALHES</div>
           <div className="results__subitem--main"><a href={city.accommodation.url}> ver hospedagem </a></div>
          </div>
        </div>
        <div className="results__subitem"> 
          <div className="results__subitem--body">
           <div className="results__subitem--price">R${city.accommodationPrice}</div>
          </div>
        </div>
      </div>
    </div>
    );
  }

  renderOtherUtilites() {
    const city = this.props.city;
    return (
      <div className="results">
      <div className="results__subitem--img"><img src="img/fast-food.png" alt="school" /> </div>
        <div className="results__subitem--heading"> ADICIONAIS </div>
        <div className="results__main"> 
        <div className="results__subitem"> 
          <div className="results__subitem--body">
           <div className="results__subitem--title">ALIMENTAÇÃO</div>
           <div className="results__subitem--main">R${city.foodPrice}</div>
          </div>
        </div>
        <div className="results__subitem"> 
          <div className="results__subitem--body">
           <div className="results__subitem--title">TRANSPORTE</div>
           <div className="results__subitem--main">R${city.transportPrice}/mês</div>
          </div>
        </div>
        <div className="results__subitem"> 
          <div className="results__subitem--body">
           <div className="results__subitem--title">ÁGUA,LUZ,INTERNET</div>
           <div className="results__subitem--main">R${city.houseUtilitiesPrice}/mês</div>
          </div>
        </div>
        <div className="results__subitem"> 
          <div className="results__subitem--body">
           <div className="results__subitem--price">R${city.allAditionalPrices}</div>
          </div>
        </div>
        </div>
      </div>
    );
  };

  renderTotal() {
    const city = this.props.city;
    return ( 
      <div className="results__total">
        <div className="results__total--title">PREÇO FINAL</div>
        <div className="results__total--main">
        R${city.finalPrice}
        </div>
      </div>
    )
  }

  renderCity() {
    const city = this.props.city;
    if (!this.props.city.city) {
      return console.log("you must select a city");
    }
    return (
        <div className="results-container">
        <h2>{city.city.name}</h2>
          <div className="results__main--div">
            {this.renderSchool()}
            {this.renderAccommodation()}
            {this.renderOtherUtilites()}
          </div>
          {this.renderTotal()}  
        </div>
    );
  }

  render() {
    return <section className='green' ref={(section) => { this.city = section; }}>
    <div> {this.renderCity()}</div>
    </section>;
  }
}

function mapStateToProps(state) {
  console.log(state.city)
  return { city: state.city, form: state.form.searchForm.values };
}

export default connect(mapStateToProps, null)(SearchResults);
