import React, { forwardRef, useMemo } from 'react';
import styled from 'styled-components';
import mergeClassNames from '../utils/merge-class-names';
import { FlexRow } from '../styles';

/**
 * Renders an Input Component
 * @param {Object}      					props
 * @param {string} 							[props.className] - Classname for the component, only applies to root
 * @param {Object} 							[props.style] - Inline style for the component, only applies to root
 * @param {string} 							[props.value] - Specifies value
 * @param {function} 						[props.onChange=()=>{}] - onChange event for the input component
 * @param {function} 						[props.onBlur=()=>{}] - onBlur event for the input component
 * @param {string} 							[props.name] - Name for the input component
 * @param {string}							[props.placeholder] - Placeholder for the component
 * @param {boolean}							[props.disabled=false] - Disabled flag for the input component
 * @param {'sm'|'md'|'lg'}					[props.size='md'] - Size for the input box
 * @param {Node|string}						[props.prefix=null] - React component for prefix
 * @param {Node|string}						[props.suffix=null] - React component for suffix
 * @param {string}						    [props.type='text'] - Input Type
 * @param {boolean}						    [props.showStepper=false] - Show number steps
 */
const Input = forwardRef(
	(
		{
			className,
			style,
			value,
			onChange = () => {},
			onBlur = () => {},
			name,
			placeholder,
			disabled = false,
			size = 'md',
			prefix = null,
			suffix = null,
			type = 'text',
			showStepper = false,
			...rest
		},
		ref,
	) => {
		const derivedClassNames = useMemo(() => {
			const classes = [];
			classes.push(`size-${size}`);
			if (disabled) {
				classes.push('disabled');
			}
			if (prefix) {
				classes.push('with-prefix');
			}
			if (suffix) {
				classes.push('with-suffix');
			}
			if (!showStepper) {
				classes.push('no-stepper');
			}
			return classes;
		}, [size, disabled, prefix, suffix]);

		const handleChange = (event) => {
			onChange(event);
		};

		return (
			<Container
				size={size}
				style={style}
				className={mergeClassNames('core-ui-input-root', className, ...derivedClassNames)}
			>
				{prefix && (
					<FlexRow
						style={{ marginRight: '4px', display: 'block' }}
						className={mergeClassNames(
							'core-ui-input-prefix',
							className,
							...derivedClassNames,
						)}
					>
						{prefix}
					</FlexRow>
				)}
				<StyledInput
					ref={ref}
					placeholder={placeholder}
					className={mergeClassNames(
						'core-ui-input-control',
						className,
						...derivedClassNames,
					)}
					value={value}
					onChange={handleChange}
					onBlur={onBlur}
					name={name}
					disabled={disabled}
					type={type}
					onWheel={(e) => e.target.blur()}
					{...rest}
				/>
				{suffix && (
					<FlexRow
						marginLeft={4}
						display="block"
						className={mergeClassNames(
							'core-ui-input-suffix',
							className,
							...derivedClassNames,
						)}
					>
						{suffix}
					</FlexRow>
				)}
			</Container>
		);
	},
);

const Container = styled.div`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	cursor: text;
	color: #333;

	width: 100%;

	border-radius: 4px;
	padding: 0 8px;

	background-color: #ffffff;
	border: 1px solid #e0e0e0;
	will-change: border-color, box-shadow;
	transition: border-color 0.1s linear, box-shadow 0.1s linear;

	&.size-sm {
		height: 24px;
		font-size: 12px;
	}

	&.size-md {
		height: 32px;
		font-size: 12px;
	}

	&.size-lg {
		height: 40px;
		font-size: 14px;
	}

	&:hover {
		border-color: #333;
	}

	&:focus-within {
		border-color: #333;
		box-shadow: 0 0 0 1px #333;
	}

	&.disabled {
		background-color: #f9f9f9;
		cursor: not-allowed;
		color: #828282;

		&:hover {
			border-color: #e0e0e0;
		}

		&:focus-within {
			border-color: #e0e0e0;
			box-shadow: none;
		}
	}

	&.no-stepper {
		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		/* Firefox */
		input[type='number'] {
			-moz-appearance: textfield;
		}
	}
`;

const StyledInput = styled.input`
	display: block;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	background: transparent;
	border: none;
	outline: 0;
	font-size: 1em;
	cursor: inherit;
	color: inherit;

	&::placeholder {
		color: #bdbdbd;
	}
`;

export default Input;
