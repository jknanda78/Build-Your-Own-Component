import { h, Component } from 'preact';
import { VaultDesignInputField } from '@jsfoobar/design-patterns';
import InputField from '@jsfoobar/input-field';
import { Masking } from '@jsfoobar/masking-input-field';

class CardNumber extends Component {
	state = {
		value: ''
	};

	onKeyUpHandler = e => {
		const props = this.props;

		this.setState({
			value: e.target.value
		});

		if (props.onKeyUp) {
			console.log('CardNumber::onKeyUp');
			props.onKeyUp(e, props.cardType);
		}
	}

	onBlurHandler = e => {
		const props = this.props;

		if (props.onBlur) {
			console.log('CardNumber::onBlur');
			props.onBlur(e, props.cardType);
		}
	}

	render() {
		const props = this.props;
		const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

		propsForInput.maxLength = props.maxLength;
		propsForInput.placeholder = props.placeholder;

		const propsForMasking = {};

		propsForMasking.mask = props.mask;
		propsForMasking.value = props.value;

		const val = props.value || this.state.value;

		return (
			<VaultDesignInputField label={label} error={props.error} name={propsForInput.name}>
				<InputField
					{...propsForInput}
					onKeyUp={this.onKeyUpHandler}
					onBlur={this.onBlurHandler}
					value={val}
				/>
				<Masking {...propsForMasking} />
			</VaultDesignInputField>
		);
	}
}

CardNumber.displayName = 'Card Number';

export default CardNumber;
