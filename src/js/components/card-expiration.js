import { h, Component } from 'preact';
import InputField from '@jsfoobar/input-field';

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
		const { label, Masking, DesignPattern, ...propsForInput } = props; // eslint-disable-line no-unused-vars

		propsForInput.maxLength = props.placeholder.length;

		const propsForMasking = {};

		propsForMasking.mask = this.state.mask;
		propsForMasking.value = this.state.value;

		return (
			<DesignPattern label={label}>
				<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} value={this.state.value} />
				<Masking {...propsForMasking} />
			</DesignPattern>
		);
	}
}

export default CardExpiry;
