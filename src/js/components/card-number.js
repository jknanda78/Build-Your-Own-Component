import { h, Component } from 'preact';
import { VaultDesignInputField } from '@jsfoobar/design-patterns';
import InputField from '@jsfoobar/input-field';
import { CardNumberMasking } from '@jsfoobar/masking-input-field';

const renderCardNumber = (MaskingComponent) => {
	class CardNumber extends Component {
		onKeyUpHandler = e => {
			const props = this.props;
			const inputVal = e.target.value;
			const card = CardNumber.getCardDetails(inputVal.charAt(0));
			const { placeholder, value } = this.props;
			const maxlength = (card.mask.length)? card.mask.length : placeholder.length;
			const propsForCardNumberMasking = {
				value,
				mask: card.mask
			};
			const inputState = CardNumber.maskingOnKeyUp(e, propsForCardNumberMasking);

			this.setState({
				type: card.type,
				maxLength: maxlength,
				value: inputState && inputState.value || inputVal,
				mask: inputState && inputState.mask
			});

			if (props.onKeyUp) {
				props.onKeyUp(e, {cardType: card.type});
			}
		}

		constructor(props) {
			super(props);

			this.state = {
				value: '',
				mask: '',
				placeholder: props.placeholder,
				maxLength: props.placeholder.length
			};

			this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		}

		render(props) {
			const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

			propsForInput.maxLength = this.state.maxLength;
			propsForInput.placeholder = this.state.placeholder;

			const propsForMasking = {};

			propsForMasking.mask = this.state.mask;
			propsForMasking.value = this.state.value;

			return (
				<VaultDesignInputField label={label}>
					<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
					<MaskingComponent {...propsForMasking} />
				</VaultDesignInputField>
			);
		}
	}

	//Copy the static methods
	CardNumber.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;
	CardNumber.getCardDetails = MaskingComponent.getCardDetails;

	return CardNumber;
};

const CardNumber = renderCardNumber(CardNumberMasking);

export default CardNumber;
