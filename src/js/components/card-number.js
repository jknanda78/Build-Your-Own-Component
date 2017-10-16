import { h, Component } from 'preact';
import { VaultDesignInputField } from '@jsfoobar/design-patterns';
import InputField from '@jsfoobar/input-field';
import { Masking } from '@jsfoobar/masking-input-field';

class CardNumber extends Component {
	onKeyUpHandler = e => {
		const props = this.props;

		this.setState({
			value: e.target.value
		});

		if (props.maskingOnKeyUp) {
			props.maskingOnKeyUp(e);
		}

		if (props.validationOnKeyUp) {
			props.validationOnKeyUp(e,  props.cardLength);
		}

		if (props.onKeyUp) {
			props.onKeyUp(e, props.cardType);
		}
	}

	onBlurHandler = e => {
		const props = this.props;

		if (props.maskingOnKeyUp) {
			props.maskingOnKeyUp(e);
		}

		if (props.validationOnBlur) {
			props.validationOnBlur(e, props.cardLength);
		}

		if (props.onBlur) {
			props.onBlur(e, props.cardType);
		}
	}

	constructor(props) {
		super(props);

		this.state = {
			value: ''
		};

		this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
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
				<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} onBlur={this.onBlurHandler} value={val} />
				<Masking {...propsForMasking} />
			</VaultDesignInputField>
		);
	}
}

export default CardNumber;
