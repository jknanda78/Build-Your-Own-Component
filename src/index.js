import { h } from 'preact';
import AddCard from './js/components/add-card';
import { VaultDesignInputField, AtomDesignInputField } from '@jsfoobar/design-patterns';

const App = () => (
	<AddCard DesignPattern={VaultDesignInputField}  />
);

export default App;
