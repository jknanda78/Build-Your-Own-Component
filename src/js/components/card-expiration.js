import { h, Component } from 'preact';
import InputField from '@jsfoobar/input-field';
import { VaultDesignInputField } from '@jsfoobar/design-patterns';
import { CardExpiryMasking } from '@jsfoobar/masking-input-field';

const renderCardExpiry = (MaskingComponent) => {
	class CardExpiry extends Component {
		onKeyUpHandler = e => {
			const inputState = CardExpiry.maskingOnKeyUp(e, this.props);

			if (inputState && (inputState.value || inputState.mask)) {
				this.setState({
					value: inputState.value,
					mask: inputState.mask
				});
			}
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
	CardExpiry.maskingOnKeyUp = MaskingComponent.maskingOnKeyUp;

	return CardExpiry;
};

const CardExpiry = renderCardExpiry(CardExpiryMasking);

export default CardExpiry;
