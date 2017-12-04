import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Highlighter from 'react-highlight-words';
import './style.css';

var dropdownSelect = createClass({
	displayName: 'DisabledUpsellOptions',
	propTypes: {
		label: PropTypes.string,
	},

	getInitialState () {
		return {};
	},

	setValue (value) {
		this.setState({ value });
		if (value) {
			console.log('Support level selected:', value.label);
		}
	},

	renderLink: function() {
		return <a style={{ marginLeft: 5 }} href="/upgrade" target="_blank">Upgrade here!</a>;
	},

	renderOption: function(option) {
		return (
			<Highlighter
			  searchWords={[this._inputValue]}
			  textToHighlight={option.label}
			/>
		);
	},

	renderValue: function(option) {
		return <strong style={{ color: option.color }}>{option.label}</strong>;
	},
	renderSubs: (subs) => {
		console.log('this.subs', subs)
		return (
			subs.map((sub, i) => {
				return <div>{sub.email}</div>
			})
		)
	},

	render: function() {
		var options = [
			{ label: 'User 2', value: 'basic' },
			{ label: 'User 3', value: 'premium', },
			{ label: 'User 4', value: 'pro', },
		];
		console.log('master', this.props.master);
		return (
			<div className="dropdownSection section">
				<h3 className="section-heading">Master</h3>
				<div>
					{this.renderSubs(this.props.master)}
				</div>
				<div className="dropdownSelectContainer">
					<Select
						className="dropdownSelect"
						onInputChange={(inputValue) => this._inputValue = inputValue}
						options={options}
						optionRenderer={this.renderOption}
						onChange={this.setValue}
						value={this.state.value}
						valueRenderer={this.renderValue}
						/>
					<span className="dropdownSelectPlus">+</span>
				</div>
			</div>
		);
	}
});

export default dropdownSelect;
