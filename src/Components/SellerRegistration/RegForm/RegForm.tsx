import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { passValidation } from '../../../helpers/passValidation';
import { Button, Title } from '../../atoms';
import ForgotPassword from '../../ForgotPassword/ForgotPassword';
import SellerSignIn from '../../SellerSignIn/SellerSignIn';

interface User {
	store: string;
	accountType: string;
	productCategory: string;
	phone: string;
	smsVerification: string;
	password: string;
	confirmPassword: string;
}

const RegForm: FC = () => {
	const [isOldUser, setIsOldUser] = useState(false);
	const [isForgetPass, setIsForgetPass] = useState(false);
	const [isNewUser, setNewUser] = useState(true);
	const [isProceed, SetIsProceed] = useState(false);
	const [isSendCode, SetIsSendCode] = useState(false);
	const [isChangePass, SetIsChangePass] = useState(false);
	const [isInputEnable, setIsInputEnable] = useState(false);
	const [timer, setTimer] = useState<number>(20);
	const [isSendCodeDisabled, setIsSendCodeDisabled] = useState(false);

	const [errors, setErrors] = useState({
		storeName: true,
		phone: true,
		password: true,
		confirmPassword: true,
		checkStartNumber: true,
		isPassHasNum: true,
		isPassEmpty: true,
		isPassConfirmed: true,
		isInputDisable: true,
		isSetTimer: false,
		isSendCodeDisabled: false,
	});

	const [userData, setUserData] = useState<User>({
		store: '',
		accountType: '',
		productCategory: '',
		phone: '',
		smsVerification: '',
		password: '',
		confirmPassword: '',
	});

	let isButtonDisabled =
		userData.store !== '' &&
		userData.accountType !== '' &&
		userData.password !== '' &&
		userData.confirmPassword !== '' &&
		userData.phone !== '' &&
		userData.smsVerification !== '' &&
		userData.productCategory !== '' &&
		errors.isPassConfirmed &&
		!(userData.password !== userData.confirmPassword) &&
		errors.phone &&
		errors.storeName;

	const signInHandler = () => {
		console.log('signInHandler')
		setIsOldUser(true);
		setNewUser(false);
		setIsForgetPass(false);
		SetIsProceed(false);
		SetIsSendCode(false);
		SetIsChangePass(false);
	};

	const registrationHandler = () => {
		setIsOldUser(false);
		setNewUser(true);
		setIsForgetPass(false);
		SetIsProceed(false);
		SetIsSendCode(false);
		SetIsChangePass(false);
	};

	//forget password handler
	const handleForgetPass = () => {
		console.log('clicked handle forget pass')
		setIsOldUser(false);
		setNewUser(false);
		setIsForgetPass(true);
		SetIsProceed(false);
		SetIsSendCode(false);
		SetIsChangePass(false);
	};
	const sendCodeHandler = () => {
		SetIsSendCode(true);
		setIsOldUser(false);
		setNewUser(false);
		setIsForgetPass(false);
		SetIsProceed(false);
		SetIsChangePass(false);
	};
	const phoneVerification = () => {
		let count = 19;
		const newErrors = { ...errors };
		newErrors.isSetTimer = true;
		setIsSendCodeDisabled(true);
		setErrors(newErrors);
		const setTime = setInterval(function () {
			console.log(count);
			if (count <= -1) {
				setIsSendCodeDisabled(false);
				newErrors.isSetTimer = false;
				setErrors(newErrors);
				clearInterval(setTime);
			} else {
				setTimer(count--);
			}
		}, 1000);
	};
	const proceedHandler = () => {
		SetIsProceed(true);
		setIsOldUser(false);
		setNewUser(false);
		setIsForgetPass(false);
		SetIsSendCode(false);
		SetIsChangePass(false);
	};

	const changePassHandler = (e: any) => {
		handleFormSubmit();
		signInHandler();
	};

	const handleSendCode = (e: any) => {
		handleFormSubmit();
		sendCodeHandler();
	};
	const handleProceed = (e: any) => {
		handleFormSubmit();
		proceedHandler();
	};
	const handleFormSubmit = () => {
		console.log('submitted form successfully');
	};

	const handleFormValid = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const inputName = e.target.name;
		let isFieldValid = true;
		let checkStartNumber;
		const value = e.target.value;

		//store Name validation
		if (inputName === 'storeName') {
			const currentData = { ...userData };
			if (value.length <= 0) {
				const checkStoreName = { ...errors };
				checkStoreName.storeName = false;
				setErrors(checkStoreName);
			} else {
				currentData.store = value;
				setUserData(currentData);
				const checkStoreName = { ...errors };
				checkStoreName.storeName = true;
				setErrors(checkStoreName);
			}
		}
		//phone number validation
		if (inputName === 'phoneNumber') {
			if (value === '') {
				const isPhoneValid = { ...errors };
				isPhoneValid.checkStartNumber = true;
				setErrors(isPhoneValid);
			} else {
				checkStartNumber = /^[1-1][0-9]*$/.test(e.target.value);
				isFieldValid = /^[0-9]{10}$/.test(e.target.value);
				if (checkStartNumber === false) {
					const isPhoneValid = { ...errors };
					isPhoneValid.checkStartNumber = false;
					setErrors(isPhoneValid);
				} else if (checkStartNumber === true) {
					const isPhoneValid = { ...errors };
					isPhoneValid.checkStartNumber = true;
					setErrors(isPhoneValid);
					if (isFieldValid === true) {
						const phoneValid = { ...errors };
						phoneValid.phone = true;
						setErrors(phoneValid);
						const currentData = { ...userData };
						currentData.phone = value;
						setUserData(currentData);
					} else if (isFieldValid === false) {
						const phoneValid = { ...errors };
						phoneValid.phone = false;
						setErrors(phoneValid);
					}
				}
			}
		}
		//password validation
		if (inputName === 'password') {
			if (value.length === 0) {
				setIsInputEnable(false);
			}
			if (value.length > 0) {
				setIsInputEnable(true);
				const isInputDisable = { ...errors };
				isInputDisable.isInputDisable = false;
				setErrors(isInputDisable);
				const checkPassLength = passValidation(value.length);
				const isPassHasNum = /\d{1}/.test(value);
				if (!checkPassLength) {
					const passValid = { ...errors };
					passValid.password = false;
					setErrors(passValid);
				} else if (checkPassLength) {
					if (isPassHasNum) {
						console.log(value);
						const passValid = { ...errors };
						passValid.isPassHasNum = true;
						passValid.password = true;
						setErrors(passValid);
						const userPass = { ...userData };
						userPass.password = value;
						setUserData(userPass);
					}
					if (!isPassHasNum) {
						const passValid = { ...errors };
						passValid.password = true;
						passValid.isPassHasNum = false;
						setErrors(passValid);
					}
				}
			}
		}
		//confirm password validation
		if (inputName === 'confirmPassword') {
			const currentPassword = { ...userData };
			if (currentPassword?.password === value && currentPassword.password.length !== 0) {
				// isButtonDisabled = true;
				const confirmPassword = { ...errors };
				confirmPassword.isPassConfirmed = true;
				setErrors(confirmPassword);
				currentPassword.confirmPassword = value;
				setUserData(currentPassword);
			} else {
				const confirmPassword = { ...errors };
				confirmPassword.isPassConfirmed = false;
				setErrors(confirmPassword);
			}
		}
		//sms verificationCode validation
		if (inputName === 'smsVerification') {
			const newUserData = { ...userData };
			newUserData.smsVerification = value;
			setUserData(newUserData);
		}
		if (inputName === 'accountType') {
			console.log(value);
			const newUserData = { ...userData };
			newUserData.accountType = value;
			setUserData(newUserData);
		}
		if (inputName === 'productCategory') {
			console.log(value);
			const newUserData = { ...userData };
			newUserData.productCategory = value;
			setUserData(newUserData);
		}
	};
	return (
		<FormSection>
			<Title style={{ fontSize: '1.3rem' }} className="text-left" variant="black" size="md">
				Seller Registration
			</Title>
			{((isNewUser && !isOldUser) || isForgetPass || isSendCode || isProceed) && (
				<p onClick={signInHandler} className="my-3" style={{ cursor: 'pointer', fontSize: '.8rem' }}>
					Already Have an account?
					<span style={{ fontSize: '.8rem' }} className="text-primary">
						{' '}
						Sign In
					</span>
				</p>
			)}
			{isOldUser && !isNewUser && (
				<p onClick={registrationHandler} className="my-3" style={{ cursor: 'pointer', fontSize: '.8rem' }}>
					New User?
					<span style={{ fontSize: '.8rem' }} className="text-primary">
						{' '}
						Create An Account
					</span>
				</p>
			)}
			<div>
				{/* reg form */}
				{isNewUser && (
					<form onSubmit={handleFormSubmit}>
						<div className="my-3">
							<FormLabel>Store Name</FormLabel>
							<FormInput name="storeName" onChange={handleFormValid} type="text" required />
							{!errors.storeName && <p className="text-danger">Please Write Your Store Name!</p>}
						</div>
						<div className="my-3">
							<FormLabel>Account Type</FormLabel>
							<FormSelect onChange={handleFormValid} name="accountType" className="px-3">
								<option selected disabled hidden>
									select one
								</option>
								<option>Business</option>
								<option>Individual</option>
							</FormSelect>
						</div>
						<div className="my-3">
							<FormLabel>Product category</FormLabel>
							<FormSelect name="productCategory" onChange={handleFormValid} className="px-3">
								<option selected disabled hidden>
									select one
								</option>
								<option className="my-5">Business</option>
								<option>Individual</option>
							</FormSelect>
						</div>
						<div className="my-3">
							<FormLabel>Phone Number</FormLabel>
							<div
								style={{
									borderRadius: '10px',
									border: '1px solid #cbcbcb',
								}}
								className="d-flex justify-content-between align-items-center px-3"
							>
								<p style={{ width: '15%', borderRight: '1px solid gray' }}>+880</p>
								<>
									<FormInput
										style={{ border: 'none', width: '55%' }}
										type="number"
										required
										name="phoneNumber"
										defaultValue={userData?.phone}
										onChange={handleFormValid}
									/>
									<button
										onClick={phoneVerification}
										className="my-auto"
										style={{
											width: '30%',
											cursor: 'pointer',
											background: 'none',
											border: 'none',
											outline: 'none',
											whiteSpace: 'nowrap',
											fontWeight: 500,
											fontSize: '.8rem',
										}}
										disabled={
											isSendCodeDisabled ||
											!errors.phone ||
											userData.phone === '' ||
											userData.phone.length === 0
										}
									>
										Send Code
									</button>
									{errors.isSetTimer && timer > 0 && <p>{`00:${timer < 10 ? `0` : ''}${timer}`}</p>}
								</>
							</div>
							{(errors.phone === false || errors.checkStartNumber === false) && (
								<p className="text-danger">
									{errors.checkStartNumber === false
										? `Second digit must be 1`
										: `Phone Number must be 11 digit!`}
								</p>
							)}
						</div>
						<div style={{ borderRadius: '10px' }} className="mt-3 mb-4 d-flex align-items-center border">
							<FormInput
								style={{ border: 'none', width: '80%' }}
								placeholder="SMS Verification Code"
								type="text"
								required
								name="smsVerification"
								onChange={handleFormValid}
							/>
							{isSendCode && <h6 style={{ cursor: 'pointer' }}>Send Again</h6>}
						</div>
						<div className="my-3">
							<FormLabel>Password</FormLabel>
							<FormInput type="password" required name="password" onChange={handleFormValid} />
							{(!errors.password || !errors.isPassHasNum) && (
								<p className="text-danger">
									{(!errors.password && `Password Needs minimum 8 characters!`) ||
										(!errors.isPassHasNum && `Your password must contain 1 number!`)}
								</p>
							)}
						</div>
						<div className="mt-4 mb-3">
							<FormLabel>Confirm Password</FormLabel>
							<FormInput
								type="password"
								onChange={handleFormValid}
								name="confirmPassword"
								disabled={!isInputEnable}
								required
							/>
							{errors?.isPassConfirmed &&
							userData.password === userData.confirmPassword &&
							userData.confirmPassword.length !== 0 ? (
								<p className="text-success">Password matched</p>
							) : (
								<p className="text-danger">
									{((!errors.isPassConfirmed && userData.password.length !== 0) ||
										(userData.password !== userData.confirmPassword &&
											userData.confirmPassword.length !== 0)) &&
										`Password Didn't Matched`}
								</p>
							)}
						</div>
						<div className="my-3 d-flex justify-content-between align-items-start">
							<img className="mr-1" src="/images/info.svg" alt="info-icon" />
							<p style={{ fontSize: '.75rem' }}>
								{' '}
								By continuing, you agree to zDrop's Conditions of Use and Privacy Policy.{' '}
							</p>
						</div>
						<div className="mt-3">
							<Button
								style={{ borderRadius: '10px' }}
								type="submit"
								variant="black"
								className="w-100"
								disabled={!isButtonDisabled}
							>
								{(isOldUser && !isForgetPass && !isNewUser && `Sign In`) ||
									(!isOldUser && !isForgetPass && isNewUser && `Register`)}
							</Button>
						</div>
					</form>
				)}
				{/* Old user form */}
				{isOldUser && (
					<SellerSignIn handleSignIn={handleForgetPass} />
				)}
				{
				 isForgetPass && (
						<ForgotPassword />
					)
				}

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
	::-webkit-outer-spin-button,
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}

	::placeholder {
		color: #cbcbcb;
	}
	:focus {
		outline: none;
	}
`;
const FormLabel = styled.label`
	display: block;
	font-weight: 500;
	font-size: 0.8rem;
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