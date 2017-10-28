import { h, Component } from 'preact';
import InputField from '@jsfoobar/input-field';

class CardCVV extends Component {
	onFocusHandler = e => {
		const props = this.props;
		const { cardType } = props;
		const card = (cardType) ? props.getMasking(cardType) : '';
		const maxlength = (card) ? card.mask.length : '';

		if (maxlength) {
			this.setState({
				maxLength: maxlength
			});
		}
	}

	onKeyUpHandler = e => {
		const props = this.props;
		const inputVal = e.target.value;
		const { cardType } = props;
		const card = (cardType) ? props.getMasking(cardType) : '';

		const propsForCardCVVMasking = {
			value: inputVal,
			mask: (card) ? card.mask : ''
		};

		const inputState = props.maskingOnKeyUp(e, propsForCardCVVMasking);

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

	render() {
		const props = this.props;
		const { label, maxLength, Masking, DesignPattern, ...propsForInput } = props; // eslint-disable-line no-unused-vars

		propsForInput.maxLength = this.state.maxLength || maxLength;

		const propsForMasking = {};

		propsForMasking.mask = this.state.mask;
		propsForMasking.value = this.state.value;

		return (
			<DesignPattern label={label}>
				<InputField {...propsForInput} onKeyUp={this.onKeyUpHandler} onFocus={this.onFocusHandler} value={this.state.value} />
				<Masking {...propsForMasking} />
			</DesignPattern>
		);
	}
}

CardCVV.defaultProps = {
	maxLength: 3
};

export default CardCVV;
