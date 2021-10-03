import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Button, Title } from '../../atoms';

const RegForm: FC = () => {
	const [isSignIn, setIsSignIn] = useState(false);
	// {
	// 	storeName:false,
	// 	accountType:false,
	// 	productCategory:false,
	// 	phoneNumber:false,
	// 	verification:false,
	// 	password:false,
	// 	confirmPassword:false,
	// 	info:false,
		

	// }
	//storename account type product category phoneNumber verification password confirm password info button
	const [isForgetPass, setIsForgetPass] = useState(false);
	const [isCreateAccount, setCreateAccount] = useState(true);
	const signInHandler = () => {
		// setIsForgetPass(!isForgetPass);
		setCreateAccount(!isCreateAccount)
		setIsSignIn(!isSignIn);
		console.log('clicked sign in');
	};

	const handleForgetPass = () => {

		setIsForgetPass(true);
		// setIsSignIn(false)
	};

	return (
		<FormSection className=" px-5 py-4">
			<Title style={{ fontSize: '24px' }} className="text-left" variant="black" size="md">
				Seller Registration
			</Title>
			<p	
			style={{cursor: 'pointer'}}
			onClick={signInHandler}>
				{!isSignIn ? `Already Have an account?` : `New User?`}
				<span  style={{ cursor: 'pointer' }} className="text-primary">
					{' '}
					{(((!isSignIn && !isForgetPass) && `Sign In`)) || (((isSignIn &&  !isForgetPass) && `Create An Account`)) || ((isSignIn && isForgetPass) && `Sign In`)}
				</span>
			</p>
			<div>
				<form>
					{!isSignIn && (
						<div className="my-3">
							<FormLabel>Store Name</FormLabel>
							<FormInput />
						</div>
					)}
					{(isSignIn && !isCreateAccount)&& (
						<div className="my-3">
							<FormLabel>Phone Number</FormLabel>
							<FormInput />
						</div>
					)}
					{!isSignIn && (
						<div className="my-3">
							<FormLabel>Account Type</FormLabel>
							<FormSelect className="px-4">
								<option selected disabled hidden>
									select one
								</option>
								<option className="my-5">Business</option>
								<option>Individual</option>
							</FormSelect>
						</div>
					)}
					{!isSignIn && (
						<div className="my-3">
							<FormLabel>Product category</FormLabel>
							<FormSelect className="px-4">
								<option selected disabled hidden>
									select one
								</option>
								<option className="my-5">Business</option>
								<option>Individual</option>
							</FormSelect>
						</div>
					)}
					{!isSignIn && (
						<div className="my-3">
							<FormLabel>Phone Number</FormLabel>
							<div
								style={{
									borderRadius: '10px',
									border: '1px solid #cbcbcb',
								}}
								className="d-flex justify-content-between align-items-center px-4"
							>
								<p className="">+880</p>
								<FormInput style={{ border: 'none' }} />
								<p>Send Code</p>
							</div>
						</div>
					)}
					{!isSignIn && (
						<div className="my-3">
							<FormInput placeholder="SMS Verification Code" />
						</div>
					)}
					{!isForgetPass && (
						<div className="my-3">
							<FormLabel>Password</FormLabel>
							<FormInput type="password" />
						</div>
					)}
					{!isSignIn && (
						<div className="my-3">
							<FormLabel>Confirm Password</FormLabel>
							<FormInput type="password" />
						</div>
					)}
					{isSignIn && !isForgetPass && (
						<p
							onClick={handleForgetPass}
							style={{
								textAlign: 'right',
								color: '#999999',
								cursor: 'pointer',
							}}
						>
							Forgot Password
						</p>
					)}
					{!isSignIn && (
						<div className="my-3 d-flex justify-content-between align-items-start">
							<img className="mr-1" src="/images/info.svg" alt="info-icon" />
							<p> By continuing, you agree to zDrop's Conditions of Use and Privacy Policy. </p>
						</div>
					)}
					<div className="my-3">
						<Button type="submit" style={{ borderRadius: '10px' }} variant="black" className="w-100">
							{(isSignIn && !isForgetPass && `Sign In`) || (!isSignIn && `Register`) || (isForgetPass && `Send Code`)}
						</Button>
					</div>
				</form>
			</div>
		</FormSection>
	);
};

const FormSection = styled.div`
	width: 390px;
	border-radius: 25px;
	box-shadow: 0px 0px 6px #8a8a8a3d;
	border: 1px solid #ececec;
	background-color: var(--white);
`;

const FormInput = styled.input`
	border-radius: 10px;
	border: 1px solid #cbcbcb;
	width: 100%;
	color: #2b2b2b;
	padding: 0px 21px;
	height: 43px;

	::placeholder {
		color: #cbcbcb;
	}
`;
const FormLabel = styled.label`
	display: block;
	font-weight: bold;
`;

const FormSelect = styled.select`
	border-radius: 10px;
	border: 1px solid #cbcbcb;
	color: #2b2b2b;
	width: 100%;
	height: 43px;
	-moz-appearance: none; /* Firefox */
	-webkit-appearance: none; /* Safari and Chrome */
	background-image: url('/images/arrow-down.svg');
	background-repeat: no-repeat;
	background-position-x: 97%;
	background-position-y: 10px;

	:focus {
		outline: none;
	}
	option {
		:active {
			background-color: transparent !important;
		}
		/* background-color: green; */
	}
`;

export default RegForm;
