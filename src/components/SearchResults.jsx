import React, { Component } from "react";
import { connect } from "react-redux";
import scrollToComponent from 'react-scroll-to-component';

class SearchResults extends Component {
componentDidUpdate(){
  scrollToComponent(this.city, { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
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
           <div className="results__subitem--main">ver escola</div>
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
           <div className="results__subitem--main">ver hospedagem</div>
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
           <div className="results__subitem--main">R${city.utilitiesPrice}/mês</div>
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
  };

  renderTotal() {
    const city = this.props.city;
    return ( 
      <div className="results__total">
        <div className="results__total--title">PREÇO FINAL</div>
        <div className="results__total--main">
        R$123,00
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
      // <div className="search-results">
        <div className="results-container">
        <div><h2>{city.city.name}</h2></div>
        {/* <div><h2>1</h2></div> */}
          <div className="results__main--div">
            {this.renderSchool()}
            {this.renderAccommodation()}
            {this.renderOtherUtilites()}
          </div>
          {this.renderTotal()}  
        </div>
      // </div>
    );
  }

  render() {
    return <section className='green' ref={(section) => { this.city = section; }}>
    <div> {this.renderCity()}</div>
    </section>;
  }
}

function mapStateToProps(state) {
  return { city: state.city, form: state.form.searchForm.values };
}

export default connect(mapStateToProps, null)(SearchResults);
