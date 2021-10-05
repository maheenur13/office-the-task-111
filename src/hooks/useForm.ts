import { ChangeEvent, FormEvent, useState } from 'react';

interface Validation {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
}

type ErrorRecord<T> = Partial<Record<keyof T, string>>;

type Validations<T extends {}> = Partial<Record<keyof T, Validation>>;

export const useForm = <T extends Record<keyof T, any> = {}>(options?: {
  validations?: Validations<T>;
  initialValues?: Partial<T>;
  onSubmit?: () => void;
}) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T);
  const [errors, setErrors] = useState<ErrorRecord<T>>({});

  // Needs to extend unknown so we can add a generic to an arrow function
  const handleChange = <S extends unknown>(
    key: keyof T,
    sanitizeFn?: (value: string) => S
  ) => (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({
      ...data,
      [key]: value,
    });
    console.log(data)
  };

  //manage click wise functionality
  const clickHandler = (e: any) =>{
        console.log(e.target.innerText)
        if(e.target.innerText==='Register'){
            console.log(true)
        }
  }



//   const handleSendCode = <S extends unknown>(
//     key: keyof T,
//     sanitizeFn?: (value: string | number) => S
//   ) => (e: ChangeEvent<HTMLInputElement>) => {
//     const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
//     setData({
//       ...data,
//       [key]: value,
//     });
//     console.log(data)
//   };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('mahee')
    console.log('mahee',e.target.innerText);
    
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors: ErrorRecord<T> = {};
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        // console.log(data[key])
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    //   console.log(data)
    //   console.log(errors)
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit();
    }
    
  };

  return {
    data,
    clickHandler,
    handleChange,
    handleSubmit,
    errors,
  };
};