import { h, Component } from 'preact';
import InputField from '@jsfoobar/input-field';
import { VaultDesignInputField } from '@jsfoobar/design-patterns';
import { Masking } from '@jsfoobar/masking-input-field';

class CardExpiry extends Component {
	state = {
		value: '',
		mask: this.props.placeholder
	};

	onKeyUpHandler = e => {
		const inputState = this.props.maskingOnKeyUp(e, this.props);

		if (inputState && (inputState.value || inputState.mask)) {
			this.setState({
				value: inputState.value,
				mask: inputState.mask
			});
		}
	}

	render() {
		const props = this.props;
		const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

		propsForInput.maxLength = props.placeholder.length;

		const propsForMasking = {};

		propsForMasking.mask = this.state.mask;
		propsForMasking.value = this.state.value;

		return (
			<VaultDesignInputField label={label}>
				<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
				<Masking {...propsForMasking} />
			</VaultDesignInputField>
		);
	}
}

export default CardExpiry;
