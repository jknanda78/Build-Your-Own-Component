import { h, Component } from 'preact';
import InputField from '@jsfoobar/input-field';
import { VaultDesignInputField } from '@jsfoobar/design-patterns';
import { CardNumberMasking } from '@jsfoobar/masking-input-field';

const renderCardCVV = (MaskingComponent) => {
	class CardCVV extends Component {
		onKeyUpHandler = e => {
			const inputVal = e.target.value;
			const { placeholder, value } = this.props;
			const maxlength = placeholder.length
			const propsForCardCVVMasking = {
				value: value,
				mask: placeholder
			};
			const inputState = CardCVV.maskingOnKeyUp(e, propsForCardCVVMasking);

			this.setState({
				maxLength: maxlength,
				value: inputState && inputState.value || inputVal,
				mask: inputState && inputState.mask
			});
		}

		constructor(props) {
			super(props);

			this.state = {
				value: '',
				mask: props.placeholder
			};

			this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		}

		render(props) {
			const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

			propsForInput.maxLength = props.placeholder.length;

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
	CardCVV.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;

	return CardCVV;
};

const CardCVV = renderCardCVV(CardNumberMasking);

export default CardCVV;
