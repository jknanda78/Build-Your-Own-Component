import { h, Component } from 'preact';
import { VaultDesignInputField, AtomDesignInputField } from '@jsfoobar/design-patterns';
import InputField from '@jsfoobar/input-field';
import CardNumber from './card-number';
import CardExpiry from './card-expiration';
import CardCVV from './card-cvv';
import '../../scss/add-card.scss';

class AddCard extends Component {
		onChangeHandler = e => {
			console.log('AddCard::onChangeHandler', e); // eslint-disable-line no-console
		}

		onKeyUpHandler = (e, state) => {
			this.setState({
				cardType: state.cardType
			});
		}

		constructor(props) {
			super(props);

			this.state = {
				cardType: ''
			};

			this.onChangeHandler = this.onChangeHandler.bind(this);
			this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		}

		render () {
			return (
				<form>
					<h2>Add Card</h2>
					<div class="add-card">
						<CardNumber
							label="Card Number"
							class="masked"
							type="tel"
							name="card-number"
							id="cardNumber"
							placeholder="15 to 16 digits"
							onChange={this.onChangeHandler}
							onKeyUp={this.onKeyUpHandler}
							required="required"
						/>

						<CardExpiry
							label="Expiry"
							class="masked"
							type="tel"
							name="cvv"
							id="cvv"
							placeholder="MM/YY"
							onChange={this.onChangeHandler}
							onKeyUp={this.onKeyUpHandler}
							required="required"
						/>

						<CardCVV
							label="CVV"
							class="masked"
							type="tel"
							name="cvv"
							id="cvv"
							cardType={this.state.cardType}
							placeholder="3 to 5 digits"
							onChange={this.onChangeHandler}
							onKeyUp={this.onKeyUpHandler}
							required="required"
						/>

						<VaultDesignInputField label="Nickname">
							<InputField
								name="nick-name"
								id="nickName"
								maxLength="20"
								placeholder="E.g. My Points Card"
								onChange={this.onChangeHandler}
								required="required"
							/>
						</VaultDesignInputField>

						<VaultDesignInputField>
							<InputField
								name="addCard"
								type="submit"
							/>
						</VaultDesignInputField>

						<AtomDesignInputField>
							<InputField
								name="addCard"
								type="submit"
							/>
						</AtomDesignInputField>
					</div>
				</form>
			);
		}
}

export default AddCard;
