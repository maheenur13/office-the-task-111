import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import { passValidation } from '../../../helpers/passValidation';
import { Button, Title } from '../../atoms';

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
	const [oldUser, setOldUser] = useState(false);
	const [isForgetPass, setIsForgetPass] = useState(false);
	const [isCreateAccount, setCreateAccount] = useState(true);
	const [isProceed, SetIsProceed] = useState(false);
	const [isSendCode, SetIsSendCode] = useState(false);
	const [isChangePass, SetIsChangePass] = useState(false);
	const [errors, setErrors] = useState({
		storeName: true,
		phone: true,
		password: true,
		confirmPassword: true,
		checkStartNumber: true,
		isPassHasNum: true,
		isPassEmpty: true,
		isPassConfirmed: false,
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
	const phoneVerification = () => {
		let count =60;
		let timer = 2;
		const setTime =() => {setInterval(function(){
			count --;
			console.log(count)
			if(count === 0){
				
				// clearInterval(setTime);
				// return 0;
			}
			 console.log('hello') 
			}, 1000);
		}
		// setTime();
	}

	const proceedHandler = () => {
		SetIsProceed(true);
		setOldUser(false);
		setCreateAccount(false);
		setIsForgetPass(false);
		SetIsSendCode(false);
		SetIsChangePass(false);
	};

	const changePassHandler = (e: any) => {
		handleFormSubmit();
		signInHandler();
		console.log('password change successful!');
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
		console.log('form submitted');
	};

	const handleFormValid = (e: ChangeEvent<HTMLInputElement>) => {
		const inputName = e.target.name;
		let isFieldValid = true;
		let checkStartNumber;
		const value = e.target.value;
		if (inputName === 'storeName') {
			if (value.length <= 0) {
				const checkStoreName = { ...errors };
				checkStoreName.storeName = false;
				setErrors(checkStoreName);
			} else {
				const checkStoreName = { ...errors };
				checkStoreName.storeName = true;
				setErrors(checkStoreName);
				const currentData = { ...userData };
				currentData.store = value;
				setUserData(currentData);
			}
		}

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
		if (inputName === 'password') {
			const checkPassLength = passValidation(value.length);
			const isPassHasNum = /\d{1}/.test(value);
			console.log(checkPassLength);
			if (!checkPassLength) {
				const passValid = { ...errors };
				passValid.password = false;
				setErrors(passValid);
			} else if (checkPassLength) {
				if (!isPassHasNum) {
					const passValid = { ...errors };
					passValid.password = true;
					passValid.isPassHasNum = false;
					setErrors(passValid);
				}
				if (isPassHasNum) {
					const passValid = { ...errors };
					passValid.isPassHasNum = true;
					passValid.password = true;
					setErrors(passValid);
					const userPass = { ...userData };
					userPass.password = value;
					console.log('typed', value);
					setUserData(userPass);
				}
			}
		}
		if (inputName === 'confirmPassword') {
			const currentPassword = { ...userData };

			if (currentPassword?.password === value) {
				const confirmPassword = { ...errors };
				confirmPassword.isPassConfirmed = true;
				setErrors(confirmPassword);
				currentPassword.confirmPassword = value;
				setUserData(currentPassword);
			} else {
				if (currentPassword.password.length === 0) {
					const isEmptyPass = { ...errors };
					isEmptyPass.isPassEmpty = true;
					setErrors(isEmptyPass);
				}
				else {
					const isEmptyPass = { ...errors };
					isEmptyPass.isPassEmpty = false;
					setErrors(isEmptyPass);
				const confirmPassword = { ...errors };
				confirmPassword.isPassConfirmed = false;
				setErrors(confirmPassword);
				}
			}
		}
		// }
	};
	console.log(userData);
	return (
		<FormSection>
			<Title style={{ fontSize: '1.3rem' }} className="text-left" variant="black" size="md">
				Seller Registration
			</Title>
			{((isCreateAccount && !oldUser) || isForgetPass || isSendCode || isProceed) && (
				<p onClick={signInHandler} className="my-3" style={{ cursor: 'pointer', fontSize: '.8rem' }}>
					Already Have an account?
					<span style={{ fontSize: '.8rem' }} className="text-primary">
						{' '}
						Sign In
					</span>
				</p>
			)}

			{oldUser && !isCreateAccount && (
				<p onClick={createHandler} className="my-3" style={{ cursor: 'pointer', fontSize: '.8rem' }}>
					New User?
					<span style={{ fontSize: '.8rem' }} className="text-primary">
						{' '}
						Create An Account
					</span>
				</p>
			)}
			<div>
				<form onSubmit={handleFormSubmit}>
					{isCreateAccount && (
						<div className="my-3">
							<FormLabel>Store Name</FormLabel>
							<FormInput name="storeName" onChange={handleFormValid} type="text" required />
							{!errors.storeName && <p className="text-danger">Please Write Your Store Name!</p>}
						</div>
					)}
					{((oldUser && !isCreateAccount) || isForgetPass) && (
						<div className="my-3">
							<FormLabel>Phone Number</FormLabel>
							<FormInput
								placeholder="Phone Number"
								type="number"
								required
								name="phoneNumber"
								onChange={handleFormValid}
							/>
							{errors.phone === false && <p className="text-danger">Phone Number must be 11 digit.</p>}
						</div>
					)}
					{isCreateAccount && (
						<div className="my-3">
							<FormLabel>Account Type</FormLabel>
							<FormSelect className="px-3">
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
							<FormSelect className="px-3">
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
											type="number"
											required
											name="phoneNumber"
											onChange={handleFormValid}
										/>

										<h6 onClick={phoneVerification} className="my-auto" style={{ width: '30%', cursor: 'pointer' }}>
											Send Code
										</h6>
									</>
								)}
							</div>

							{(errors.phone === false || errors.checkStartNumber === false) && (
								<p className="text-danger">
									{errors.checkStartNumber === false
										? `Second digit must be 1`
										: `Phone Number must be 11 digit!`}
								</p>
							)}
						</div>
					)}
					{(isCreateAccount || isSendCode) && (
						<div style={{ borderRadius: '10px' }} className="mt-3 mb-4 d-flex align-items-center border">
							<FormInput
								style={{ border: 'none', width: '70%' }}
								placeholder="SMS Verification Code"
								type="text"
								required
								name="verificationCode"
								onChange={handleFormValid}
							/>
							{isSendCode && <h6 style={{ cursor: 'pointer' }}>Send Again</h6>}
						</div>
					)}
					{((!isForgetPass && isCreateAccount) || isProceed || oldUser) && (
						<div className="my-3">
							<FormLabel>{isProceed && `New`} Password</FormLabel>
							<FormInput type="password" required name="password" onChange={handleFormValid} />
							{(!errors.password || !errors.isPassHasNum) && (
								<p className="text-danger">
									{(!errors.password && `Password Needs minimum 8 characters!`) ||
										(!errors.isPassHasNum && `Your password must contain 1 number!`)}
								</p>
							)}
							{console.log('check pass pass this', errors.password)}
						</div>
					)}
					{((!oldUser && !isForgetPass && isCreateAccount) || isProceed) && (
						<div className="mt-4 mb-3">
							<FormLabel>Confirm Password</FormLabel>
							<FormInput type="password" onChange={handleFormValid} name="confirmPassword" required />
							{errors?.isPassConfirmed ? (
								<p className="text-success">Password matched</p>
							) : (
								<p className="text-danger">{!errors.isPassEmpty && `Password Didn't Matched`}</p>
							)}
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
								style={{ borderRadius: '10px' }}
								type="submit"
								variant="black"
								className="w-100"
								disabled={true}
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
	/* font-weigh5: bold; */
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
