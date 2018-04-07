import Slider from 'material-ui/Slider'
import createComponent from './createComponent'
import React, { Component } from 'react'


// export default createComponent(
//   Slider,
//   ({
//     input: { onDragStart, onChange, name, value },
//     onChange: onChangeFromField,
//     defaultValue,
//     meta,
//     ...props
//   }) => ({
//     // eslint-disable-line no-unused-vars
//     ...props,
//     name,
//     value,
//     onChange: (event, value) => {
//       onChange(value)
//       if (onChangeFromField) {
//         onChangeFromField(value)
//       }(value)
//     }
//   })
// )




export const renderSliderField = ({
  input: { onDragStart, onChange, name, value },
  onChange: onChangeFromField,
  defaultValue,
  meta,
...props
}) => (
  <div>
      <Slider
          {...props}
          name
          value
          onChange={(event, value) => {
            onChange(value)
            if (onChangeFromField) {
              onChangeFromField(value)
            }
          }}
        />
        {value}
  </div>
);

// const min = 1;
// const max = Math.pow(2, 5.65);
// const power = 1;

// function transform(value) {
//   return Math.round((Math.exp(power * value / max) - 1) / (Math.exp(power) - 1) * max);
// }

// function reverse(value) {
//   return (1 / power) * Math.log(((Math.exp(power) - 1) * value / max) + 1) * max;
// }
// const style = {
//   marginBottom: 0,
//   height: 20,
// }

// export class renderSliderField extends Component {
//   state = {
//     slider: Math.pow(2, 5),
//   };

//   handleSlider = (event, value) => {
//     this.setState({slider: transform(value)});
//   };

//   render() {
//     return (
//       <div>
//         <Slider
//           min={min}
//           max={max}
//           step={max / 100}
//           value={reverse(this.state.slider)}
//           onChange={this.handleSlider}
//           style={style}
//         />
//          <span> {this.state.slider} Semanas</span>
//       </div>
//     );
//   }
// }