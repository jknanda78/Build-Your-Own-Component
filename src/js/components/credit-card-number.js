import { h, Component } from 'preact';
import InputField from '@jsfoobar/input-field';
import { VaultDesignInputField } from '@jsfoobar/design-patterns';

class CardNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      mask: props.placeholder
    };

    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
  }

  onKeyUpHandler = e => {
    console.log("CreditCardNumber::onKeyUpHandler", e, this.state); // eslint-disable-line no-console
    switch (e.keyCode) { // allows navigating thru input
      case 20: // caplocks
      case 17: // control
      case 18: // option
      case 16: // shift
      case 37: // arrow keys
      case 38:
      case 39:
      case 40:
      case  9: // tab (let blur handle tab)
        return;
      }

    const maskedNumber = 'XdDmMyY9';
    const props = this.props;
    let currentValue = e.target.value;
    const len = currentValue.length;
    let newValue = '';

    if (currentValue.match(/[A-Z]/i)) {
      currentValue = currentValue.substr(0, len-1);
    }

    const strippedValue = currentValue.replace(/\D/g, "");
    const l = props.placeholder.length;

    for (let i = 0, j = 0; i < l; i++) {
      let isInt = !isNaN(parseInt(strippedValue[j]));
      let matchesNumber = maskedNumber.indexOf(props.placeholder[i]) >= 0;

      if (matchesNumber && isInt) {
        newValue += strippedValue[j++];
      } else if (matchesNumber && !isInt){
        this.setState({
          value: newValue
        });
      } else {
        newValue += props.placeholder[i];
      }

      if (strippedValue[j] == undefined) {
        break;
      }
    }

    this.setState({
      value: newValue,
      mask: props.placeholder.substr(newValue.length)
    });
  }

  render(props) {
    console.log("state", this.state.value);
    const { placeholder, ...propsForInput } = props; // eslint-disable-line no-unused-vars

    propsForInput.maxLength = placeholder.length;

    return (
      <VaultDesignInputField label="Card Number">
        <InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
        <span class="shell">
          <span>
            <i arial-hidden="true">{this.state.value}</i>
            {this.state.mask}
          </span>
        </span>

      </VaultDesignInputField>
    )
  }
}

export default CardNumber;
