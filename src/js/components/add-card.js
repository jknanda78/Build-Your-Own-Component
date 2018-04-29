import { h, Component } from 'preact';
import { cardNumberMaskingHOC } from '@jsfoobar/masking-input-field';
import { validateCardNumberHOC } from '@jsfoobar/card-validation';
import CardNumber from './card-number';
import '../../scss/add-card.scss';

//Card number field with validation and no masking
const CardNumberWithValidation = validateCardNumberHOC(CardNumber); //eslint-disable-line

//Card number field with masking and no validation
const CardNumberWithMasking = cardNumberMaskingHOC(CardNumber);  //eslint-disable-line

//Card number field with masking and validation
const CardNumberWithMaskingAndValidation = validateCardNumberHOC(cardNumberMaskingHOC(CardNumber)); //eslint-disable-line

//Card number field with validation and masking
const CardNumberWithValidationAndMasking = cardNumberMaskingHOC(CardNumberWithValidation); //eslint-disable-line

//Card expiry field with masking and no validation
/* const CardExpiryWithMasking = cardExpiryMaskingHOC(CardExpiry); */

//Card cvv field with masking and no validation
/* const CardCVVWithMasking = cardCVVMaskingHOC(CardCVV); */

class AddCard extends Component {
		state = {
			cardType: ''
		};

		onChangeHandler = e => {
			console.log('AddCard::onChange'); // eslint-disable-line no-console
		}

		onKeyUpHandler = (e, cardType) => {
			console.log('AddCard::onKeyUp'); // eslint-disable-line no-console
			if (cardType) {
				this.setState({
					cardType
				});
			}
		}

		onBlurHandler = (e, cardType) => {
			console.log('AddCard::onBlur'); // eslint-disable-line no-console
			if (cardType) {
				this.setState({
					cardType
				});
			}
		}

		render () {
			return (
				<div>
					<ul>
						<li> Try entering valid (16 digit) card number and tab out.</li>
						<li> Try entering invalid card number and tab out.</li>
					</ul>
					<form>
						<h2>Card entry - Card number with masking & without validation</h2>
						<div class="add-card">
							<CardNumberWithMasking
								{...this.props}
								label="Card Number"
								class="masked"
								type="tel"
								name="card-number"
								id="cardNumber"
								placeholder="15 to 16 digits"
								onBlur={this.onBlurHandler}
								onChange={this.onChangeHandler}
								onKeyUp={this.onKeyUpHandler}
								required="required"
							/>
						</div>
					</form>
					<form>
						<h2>Card entry - Card number with validation without masking</h2>
						<div class="add-card">
							<CardNumberWithValidation
								{...this.props}
								label="Card Number"
								class="masked"
								type="tel"
								name="card-number"
								id="cardNumber"
								placeholder="15 to 16 digits"
								onBlur={this.onBlurHandler}
								onChange={this.onChangeHandler}
								onKeyUp={this.onKeyUpHandler}
								required="required"
							/>
						</div>
					</form>
					<form>
						<h2>Card entry - Card number with validation and masking</h2>
						<div class="add-card">
							<CardNumberWithMaskingAndValidation
								{...this.props}
								label="Card Number"
								class="masked"
								type="tel"
								name="card-number"
								id="cardNumber"
								placeholder="15 to 16 digits"
								onBlur={this.onBlurHandler}
								onChange={this.onChangeHandler}
								onKeyUp={this.onKeyUpHandler}
								required="required"
							/>
						</div>
					</form>
				</div>
			);
		}
}

AddCard.displayName = 'Add Card';

export default AddCard;
