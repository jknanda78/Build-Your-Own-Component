import { h, Component } from 'preact';
import InputField from '@jsfoobar/input-field';
import { VaultDesignInputField } from '@jsfoobar/design-patterns';
import { CardCVVMasking } from '@jsfoobar/masking-input-field';

const renderCardCVV = (MaskingComponent) => {
	class CardCVV extends Component {
		onFocusHandler = e => {
			const { cardType, placeholder } = this.props;
			const card = (cardType) ? CardCVV.getMasking(cardType) : '';
			const maxlength = (card) ? card.mask.length : '';

			if (maxlength) {
				this.setState({
					maxLength: maxlength
				});
			}
		}

		onKeyUpHandler = e => {
			const inputVal = e.target.value;
			const { cardType } = this.props;
			const card = (cardType) ? CardCVV.getMasking(cardType) : '';

			const propsForCardCVVMasking = {
				value: inputVal,
				mask: (card) ? card.mask : ''
			};

			const inputState = CardCVV.maskingOnKeyUp(e, propsForCardCVVMasking);

			this.setState({
				value: inputState && inputState.value || inputVal,
				mask: inputState && inputState.mask
			});
		}

		constructor(props) {
			super(props);

			this.state = {
				value: '',
				mask: '',
				placeholder: props.placeholder,
				maxLength: ''
			};

			this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
			this.onFocusHandler = this.onFocusHandler.bind(this);
		}

		render(props) {
			const { label, maxLength, ...propsForInput } = props; // eslint-disable-line no-unused-vars

			propsForInput.maxLength = this.state.maxLength || maxLength;

			const propsForMasking = {};

			propsForMasking.mask = this.state.mask;
			propsForMasking.value = this.state.value;

			return (
				<VaultDesignInputField label={label}>
					<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} onFocus={this.onFocusHandler} value={this.state.value} />
					<MaskingComponent {...propsForMasking} />
				</VaultDesignInputField>
			);
		}
	}

	CardCVV.defaultProps = {
		maxLength: 3
	};

	//Copy the static methods
	CardCVV.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;
	CardCVV.getMasking = MaskingComponent.getMasking;

	return CardCVV;
};

const CardCVV = renderCardCVV(CardCVVMasking);

export default CardCVV;
