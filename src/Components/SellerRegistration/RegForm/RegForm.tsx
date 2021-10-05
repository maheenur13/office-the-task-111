import React, { ChangeEvent, FC, FormEvent, MouseEvent, MouseEventHandler, useState } from 'react';
import styled from 'styled-components';
import { Button, Title } from '../../atoms';
import { useForm } from '../../../hooks/useForm';

// type Gender = 'male' | 'female' | 'non-binary';

interface User {
	store: string;
	accountType: string;
	productCategory: string;
	phone: number;
	smsVerification: string;
	password: string;
}

const RegForm: FC = () => {
	const [oldUser, setOldUser] = useState(false);
	const [isForgetPass, setIsForgetPass] = useState(false);
	const [isCreateAccount, setCreateAccount] = useState(true);
	const [isProceed, SetIsProceed] = useState(false);
	const [isSendCode, SetIsSendCode] = useState(false);
	const [isChangePass, SetIsChangePass] = useState(false);

	const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		console.log(e.target.value);
	};
	const {
		handleSubmit,
		clickHandler,
		handleChange,
		data: user,
		errors,
	} = useForm<User>({
		validations: {
			store: {
				pattern: {
					value: '^[A-Za-z]*$',
					message: "You're not allowed to use special characters or numbers in store.",
				},
			},
			accountType: {
				custom: {
					isValid: (value) => value === '',
					message: 'Please Select An option',
				},
			},
			productCategory: {
				custom: {
					isValid: (value) => value === '',
					message: 'Please Select An option',
				},
			},
			phone: {
				custom: {
					isValid: (value) => parseInt(value, 10) > 11 || parseInt(value, 10) === null,
					message: 'Please enter a valid number!',
				},
			},
			smsVerification: {
				custom: {
					isValid: (value) => value === '',
					message: 'Please Enter Verification number',
				},
			},
			password: {
				custom: {
					isValid: (value) => value.length > 6,
					message: 'The password needs to be at least 6 characters long.',
				},
			},
			//   confirmPassword:{
			// 	  custom: {
			// 		  isValid: (value) => value.length >6,
			// 		  message: 'Password did not matched',
			// 	  }
			//   }
		},

		onSubmit: () => handleSubmit,
	});

	const signInHandler = () => {
		setOldUser(true);
		setCreateAccount(false);
		setIsForgetPass(false);
		SetIsProceed(false);
		SetIsSendCode(false);
		SetIsChangePass(false);
	};

	const createHandler = () => {
		setOldUser(false);
		setCreateAccount(true);
		setIsForgetPass(false);
		SetIsProceed(false);
		SetIsSendCode(false);
		SetIsChangePass(false);
	};

	const handleForgetPass = () => {
		setOldUser(false);
		setCreateAccount(false);
		setIsForgetPass(true);
		SetIsProceed(false);
		SetIsSendCode(false);
		SetIsChangePass(false);
	};
	const sendCodeHandler = () => {
		SetIsSendCode(true);
		setOldUser(false);
		setCreateAccount(false);
		setIsForgetPass(false);
		SetIsProceed(false);

		SetIsChangePass(false);
	};

	const proceedHandler = () => {
		SetIsProceed(true);
		setOldUser(false);
		setCreateAccount(false);
		setIsForgetPass(false);
		SetIsSendCode(false);
		SetIsChangePass(false);
	};

	const changePassHandler = (e: any) => {
		signInHandler();
		clickHandler(e)
		console.log('password change successful!');
	};

	const handleSendCode = (e: any) => {
		clickHandler(e)
		// handleSubmit('');
		sendCodeHandler();
		
		// handleSubmit;
	};
	const handleProceed = (e: any) => {
		proceedHandler();
		clickHandler(e)
	};
	return (
		<FormSection>
			<Title style={{ fontSize: '1.3rem' }} className="text-left" variant="black" size="md">
				Seller Registration
			</Title>
			{((isCreateAccount && !oldUser) || isForgetPass || isSendCode || isProceed) && (
				<p onClick={signInHandler} className="my-3" style={{ cursor: 'pointer' }}>
					Already Have an account?
					<span className="text-primary"> Sign In</span>
				</p>
			)}

			{oldUser && !isCreateAccount && (
				<p onClick={createHandler} className="my-3" style={{ cursor: 'pointer' }}>
					New User?
					<span className="text-primary"> Create An Account</span>
				</p>
			)}
			<div>
				<form onSubmit={handleSubmit}>
					{isCreateAccount && (
						<div className="my-3">
							<FormLabel>Store Name</FormLabel>
							<FormInput value={user.store} onChange={handleChange('store')} required/>
							{errors.store && <p className="text-danger">{errors.store}</p>}
						</div>
					)}
					{((oldUser && !isCreateAccount) || isForgetPass) && (
						<div className="my-3">
							<FormLabel>Phone Number</FormLabel>
							<FormInput
								placeholder="Phone Number"
								value={user.phone}
								onChange={handleChange('phone')}
								required
							/>
							{errors.phone && <p className="text-danger">{errors.phone}</p>}
						</div>
					)}
					{isCreateAccount && (
						<div className="my-3">
							<FormLabel>Account Type</FormLabel>
							<FormSelect
								value={user.accountType}
								onChange={handleChange('accountType')}
								className="px-3"
								
							>
								<option selected disabled hidden>
									select one
								</option>
								<option className="my-5">Business</option>
								<option>Individual</option>
							</FormSelect>
						</div>
					)}
					{isCreateAccount && (
						<div className="my-3">
							<FormLabel>Product category</FormLabel>
							<FormSelect
								value={user.productCategory}
								onChange={handleChange('productCategory')}
								className="px-3"
								
							>
								<option selected disabled hidden>
									select one
								</option>
								<option className="my-5">Business</option>
								<option>Individual</option>
							</FormSelect>
						</div>
					)}
					{(isCreateAccount || isSendCode) && (
						<div className="my-3">
							<FormLabel>Phone Number</FormLabel>
							<div
								style={{
									borderRadius: '10px',
									border: '1px solid #cbcbcb',
								}}
								className="d-flex justify-content-between align-items-center px-4"
							>
								<p style={{ width: '20%', borderRight: '1px solid gray' }}>+880</p>
								{(isCreateAccount || isSendCode) && (
									<>
										<FormInput
											style={{ border: 'none', width: '50%' }}
											value={user.phone}
											onChange={handleChange('phone')}
											required
										/>
										<h6 className="my-auto" style={{ width: '30%', cursor: 'pointer' }}>
											Send Code
										</h6>
									</>
								)}
							</div>
						</div>
					)}
					{(isCreateAccount || isSendCode) && (
						<div style={{ borderRadius: '10px' }} className="mt-3 mb-4 d-flex align-items-center border">
							<FormInput
								style={{ border: 'none', width: '70%' }}
								placeholder="SMS Verification Code"
								value={user.smsVerification }
								onChange={handleChange('smsVerification')}
								required
							/>
							{isSendCode && <h6 style={{ cursor: 'pointer' }}>Send Again</h6>}
						</div>
					)}
					{((!isForgetPass && isCreateAccount) || isProceed || oldUser) && (
						<div className="my-3">
							<FormLabel>{isProceed && `New`} Password</FormLabel>
							<FormInput
								value={user.password }
								onChange={handleChange('password')}
								type="password"
								required
							/>
						</div>
					)}
					{((!oldUser && !isForgetPass && isCreateAccount) || isProceed) && (
						<div className="mt-4 mb-3">
							<FormLabel>Confirm Password</FormLabel>
							<FormInput type="password" required />
						</div>
					)}
					{oldUser && !isForgetPass && (
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
					{isCreateAccount && (
						<div className="my-3 d-flex justify-content-between align-items-start">
							<img className="mr-1" src="/images/info.svg" alt="info-icon" />
							<p style={{ fontSize: '.75rem' }}>
								{' '}
								By continuing, you agree to zDrop's Conditions of Use and Privacy Policy.{' '}
							</p>
						</div>
					)}
					<div className="mt-3">
						{!isForgetPass && !isSendCode && !isProceed && (
							<Button
								onClick={clickHandler}
								style={{ borderRadius: '10px' }}
								type="submit"
								variant="black"
								className="w-100"
							>
								{(oldUser && !isForgetPass && !isCreateAccount && `Sign In`) ||
									(!oldUser && !isForgetPass && isCreateAccount && `Register`)}
							</Button>
						)}
						{isForgetPass && (
							<Button
								onClick={handleSendCode}
								style={{ borderRadius: '10px' }}
								variant="black"
								className="w-100"
								type="submit"
							>
								Send Code
							</Button>
						)}
						{isSendCode && (
							<Button
								onClick={handleProceed}
								style={{ borderRadius: '10px' }}
								variant="black"
								className="w-100"
								type="submit"
							>
								Proceed
							</Button>
						)}
						{!isSendCode && isProceed && (
							<Button
								onClick={changePassHandler}
								style={{ borderRadius: '10px' }}
								variant="black"
								className="w-100"
								type="submit"
							>
								Change Password
							</Button>
						)}
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
	margin-left: 125px;

	padding: 24px 30px;
	@media only screen and (max-width: 425px) {
		width: 95%;
		padding: 24px 30px;
	}
	@media only screen and (max-width: 768px) {
		padding: 18px 25px;
	}
	@media only screen and (max-width: 1440px) {
		margin-left: 0px;
	}
`;

const FormInput = styled.input`
	border-radius: 10px;
	border: 1px solid #cbcbcb;
	width: 100%;
	color: #2b2b2b;
	padding: 0px 17px;
	height: 43px;

	::placeholder {
		color: #cbcbcb;
	}
	:focus {
		outline: none;
	}
`;
const FormLabel = styled.label`
	display: block;
	font-weight: bold;
	font-size: 0.7rem;
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
	}
`;

export default RegForm;
