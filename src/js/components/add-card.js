import { h, Component } from 'preact';
import { VaultDesignInputField } from '@jsfoobar/design-patterns';
import InputField from '@jsfoobar/input-field';
import CardNumber from './credit-card-number';
import '../../scss/add-card.scss';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
  }

  onChangeHandler = e => {
    console.log("AddCard::onChangeHandler", e); // eslint-disable-line no-console
  }

  onKeyUpHandler = e => {
    console.log("AddCard::onKeyUpHandler", e); // eslint-disable-line no-console
  }

  render () {
    return (
      <form>
        <h2>Add Card</h2>
        <div class="add-card">
          <CardNumber class="masked" type="tel" name="card-number" id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" onChange={this.onChangeHandler} onKeyUp={this.onKeyUpHandler} required="required" />

          <VaultDesignInputField label="Expiry">
            <InputField name="expiry" id="expiry" maxLength="7" placeholder="MM/YYYY" onChange={this.onChangeHandler} required="required"/>
          </VaultDesignInputField>

          <VaultDesignInputField label="CVV">
            <InputField name="cvv" id="cvv" maxLength="3" placeholder="* * *" onChange={this.onChangeHandler} required="required"/>
          </VaultDesignInputField>

          <VaultDesignInputField label="Nickname">
            <InputField name="nick-name" id="nickName" maxLength="20" placeholder="E.g. My Points Card" onChange={this.onChangeHandler} required="required"/>
          </VaultDesignInputField>

          <VaultDesignInputField>
            <InputField name="addCard" type="submit" />
          </VaultDesignInputField>
        </div>
      </form>
    )
  }
}

export default AddCard;
