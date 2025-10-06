import React from 'react';
import ErrorMessage from '../error-menssage';

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors?: string[];
}

export const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  name, 
  type, 
  placeholder, 
  value, 
  onChange, 
  errors = [] 
}) => {
  return (
    <div>
      <label className="floating-label font-bold text-[#303972] text-sm">{label}</label>
      <input 
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2 text-black"
      />
      <ErrorMessage errors={errors} />
    </div>
  );
};

interface TextAreaFieldProps {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onLengthChange: (length: number) => void;
  currentLength: number;
  maxLength?: number;
  rows?: number;
  errors?: string[];
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  onLengthChange,
  currentLength,
  maxLength = 2000,
  rows = 6,
  errors = []
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    onLengthChange(e.target.value.length);
  };

  return (
    <div>
      <label className="floating-label font-bold text-[#303972] text-sm">{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2 text-black"
        rows={rows}
        maxLength={maxLength}
      />
      <div className="flex justify-end">
        <span className="text-xs text-[#a098ae]">{currentLength}/{maxLength}</span>
      </div>
      <ErrorMessage errors={errors} />
    </div>
  );
};

interface RadioGroupProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors?: string[];
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  errors = []
}) => {
  return (
    <div>
      <label className="floating-label font-bold text-[#303972] text-sm">{label}</label>
      <div className="radio-group flex flex-row gap-2 mt-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center text-[#a098ae] text-sm gap-2">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="form-radio border-2 border-[#303972]"
            />
            {option.label}
          </label>
        ))}
      </div>
      <ErrorMessage errors={errors} />
    </div>
  );
};

interface BirthInfoFieldProps {
  dateValue: string;
  placeValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  dateErrors?: string[];
  placeErrors?: string[];
}

export const BirthInfoField: React.FC<BirthInfoFieldProps> = ({
  dateValue,
  placeValue,
  onChange,
  dateErrors = [],
  placeErrors = []
}) => {
  return (
    <div>
      <label className="floating-label font-bold text-[#303972] text-sm">Date & Place of Birth *</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
        <input 
          name="dateOfBirth" 
          type="text" 
          placeholder="24 February 1997" 
          value={dateValue}
          onChange={onChange}
          className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" 
        />
        <input 
          name="placeOfBirth" 
          type="text" 
          placeholder="Jakarta" 
          value={placeValue}
          onChange={onChange}
          className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2"
        />
      </div>
      <ErrorMessage errors={dateErrors} />
      <ErrorMessage errors={placeErrors} />
    </div>
  );
};

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
  return (
    <>
      <header className="bg-[#4d44b5] px-4 py-2 rounded-t-2xl col-span-2">
        <h2 className="text-lg sm:text-xl font-bold text-white">{title}</h2>
      </header>
      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 rounded-b-2xl mb-6 sm:mb-8 bg-white px-4 sm:px-6 py-4">
        {children}
      </fieldset>
    </>
  );
};