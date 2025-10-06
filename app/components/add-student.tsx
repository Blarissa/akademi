import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  InputField, 
  TextAreaField, 
  RadioGroup, 
  BirthInfoField, 
  FormSection 
} from './form/form-fields';
import alunosData from '../../data/alunos.json';

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone: string) => /^\+?[1-9]\d{1,14}$/.test(phone);
const isRequired = (value: string) => value.trim() !== '';

const validateField = (value: string, validators: {type: string, message: string}[]): string[] => {
    const errors: string[] = [];
    validators.forEach(validator => {
        switch(validator.type) {
            case 'required':
                if (!isRequired(value)) errors.push(validator.message);
                break;
            case 'email':
                if (!isValidEmail(value)) errors.push(validator.message);
                break;
            case 'phone':
                if (!isValidPhone(value)) errors.push(validator.message);
                break;
        }
    });
    return errors;
};

export default function AddStudent() {
    const [textAreaLengths, setTextAreaLengths] = useState({
        address: 0,
        parentAddress: 0
    });

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        placeOfBirth: '',
        email: '',
        phone: '',
        address: '',
        parentName: '',
        parentFirstName: '',
        parentLastName: '',
        parentEmail: '',
        parentPhone: '',
        parentAddress: '',
        payment: ''
    });

    const [errors, setErrors] = useState<Record<string, string[]>>({
        firstName: [],
        lastName: [],
        dateOfBirth: [],
        placeOfBirth: [],
        email: [],
        phone: [],
        address: [],
        parentFirstName: [],
        parentLastName: [],
        parentEmail: [],
        parentPhone: [],
        parentAddress: [],
        payment: []
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors: Record<string, string[]> = {
            firstName: [],
            lastName: [],
            dateOfBirth: [],
            placeOfBirth: [],
            email: [],
            phone: [],
            address: [],
            parentFirstName: [],
            parentLastName: [],
            parentEmail: [],
            parentPhone: [],
            parentAddress: [],
            payment: []
        };

        const fieldValidations = {
            firstName: [{ type: 'required', message: 'First name is required' }],
            lastName: [{ type: 'required', message: 'Last name is required' }],
            email: [
                { type: 'required', message: 'Email is required' },
                { type: 'email', message: 'Invalid email format' }
            ],
            phone: [
                { type: 'required', message: 'Phone number is required' },
                { type: 'phone', message: 'Invalid phone format' }
            ],
            dateOfBirth: [{ type: 'required', message: 'Date of birth is required' }],
            placeOfBirth: [{ type: 'required', message: 'Place of birth is required' }],
            address: [{ type: 'required', message: 'Address is required' }],
            parentFirstName: [{ type: 'required', message: 'Parent first name is required' }],
            parentLastName: [{ type: 'required', message: 'Parent last name is required' }],
            parentEmail: [
                { type: 'required', message: 'Parent email is required' },
                { type: 'email', message: 'Invalid email format' }
            ],
            parentPhone: [
                { type: 'required', message: 'Parent phone number is required' },
                { type: 'phone', message: 'Invalid phone format' }
            ],
            parentAddress: [{ type: 'required', message: 'Parent address is required' }],
            payment: [{ type: 'required', message: 'Payment method is required' }]
        };
        
        Object.entries(fieldValidations).forEach(([field, validators]) => {
            newErrors[field] = validateField(formValues[field as keyof typeof formValues], validators);
        });

        setErrors(newErrors);
        
        return !Object.values(newErrors).some(fieldErrors => fieldErrors.length > 0);
    };
    
    const navigate = useNavigate();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {
            const newAluno = {
                name: `${formValues.firstName} ${formValues.lastName}`,
                id: `#${Math.floor(100000000 + Math.random() * 900000000)}`, 
                date: formValues.dateOfBirth,
                parent: `${formValues.parentFirstName} ${formValues.parentLastName}`,
                city: formValues.placeOfBirth,
                contact: [
                    { icon: "phone", value: formValues.phone },
                    { icon: "envelope", value: formValues.email }
                ],
                grade: "VII C"
            };
            
            const storedAlunos = localStorage.getItem('alunos');
            const currentAlunos = storedAlunos ? JSON.parse(storedAlunos) : [...alunosData];
            
            currentAlunos.unshift(newAluno);
            
            localStorage.setItem('alunos', JSON.stringify(currentAlunos));
            
            navigate('/students');
        } else 
            console.log('Form contains errors, please correct them...');
    };

    const paymentOptions = [
        { value: 'Cash', label: 'Cash' },
        { value: 'Debit', label: 'Debit' }
    ];

    const studentFields1 = [
        {
            name: 'firstName',
            label: 'First Name*',
            type: 'text',
            placeholder: 'Samantha',
            value: formValues.firstName,
            errors: errors.firstName
        },
        {
            name: 'lastName',
            label: 'Last Name*',
            type: 'text',
            placeholder: 'William',
            value: formValues.lastName,
            errors: errors.lastName
        }
    ];

    const studentFields2 = [
        {
            name: 'parentName',
            label: 'Parent Name*',
            type: 'text',
            placeholder: 'Mana',
            value: formValues.parentName,
            errors: errors.parentName
        },
        {
            name: 'email',
            label: 'Email*',
            type: 'email',
            placeholder: 'william@mail.com',
            value: formValues.email,
            errors: errors.email
        },
        {
            name: 'phone',
            label: 'Phone*',
            type: 'tel',
            placeholder: '+1234567890',
            value: formValues.phone,
            errors: errors.phone
        }
    ];

    const parentFields = [
        {
            name: 'parentFirstName',
            label: 'First Name*',
            type: 'text',
            placeholder: 'Mana',
            value: formValues.parentFirstName,
            errors: errors.parentFirstName
        },
        {
            name: 'parentLastName',
            label: 'Last Name*',
            type: 'text',
            placeholder: 'William',
            value: formValues.parentLastName,
            errors: errors.parentLastName
        },
        {
            name: 'parentEmail',
            label: 'Email*',
            type: 'email',
            placeholder: 'Mana@mail.com',
            value: formValues.parentEmail,
            errors: errors.parentEmail
        },
        {
            name: 'parentPhone',
            label: 'Phone*',
            type: 'tel',
            placeholder: '+1234567890',
            value: formValues.parentPhone,
            errors: errors.parentPhone
        }
    ];

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-[#eeedf8]">
            <h2 className="font-bold text-xl sm:text-2xl p-2 pl-0 text-[#303972] lg:relative lg:left-1 lg:top-1 pt-0
                md:fixed md:left-18 md:top-6 sm:fixed sm:left-18">Add New Student</h2>

            <form className="mt-4 lg:mt-0 lg:top-4 sm:mt-6 sm:relative sm:top-8" onSubmit={handleSubmit}>
                <FormSection title="Student Details">
                    {studentFields1.map((field) => (
                        <InputField
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={handleChange}
                            errors={field.errors}
                        />
                    ))}
                    
                    <BirthInfoField
                        dateValue={formValues.dateOfBirth}
                        placeValue={formValues.placeOfBirth}
                        onChange={handleChange}
                        dateErrors={errors.dateOfBirth}
                        placeErrors={errors.placeOfBirth}
                    />

                    {studentFields2.map((field) => (
                        <InputField
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={handleChange}
                            errors={field.errors}
                        />
                    ))}

                    <TextAreaField
                        label="Address*"
                        name="address"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        value={formValues.address}
                        onChange={handleChange}
                        onLengthChange={(length) => setTextAreaLengths(prev => ({ ...prev, address: length }))}
                        currentLength={textAreaLengths.address}
                        errors={errors.address}
                    />
                </FormSection>
                
                <FormSection title="Parent Details">
                    {parentFields.map((field) => (
                        <InputField
                            key={field.name}
                            label={field.label}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={handleChange}
                            errors={field.errors}
                        />
                    ))}
                    
                    <TextAreaField
                        label="Address*"
                        name="parentAddress"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        value={formValues.parentAddress}
                        onChange={handleChange}
                        onLengthChange={(length) => setTextAreaLengths(prev => ({ ...prev, parentAddress: length }))}
                        currentLength={textAreaLengths.parentAddress}
                        errors={errors.parentAddress}
                    />
                    
                    <RadioGroup
                        label="Payments*"
                        name="payment"
                        options={paymentOptions}
                        value={formValues.payment}
                        onChange={handleChange}
                        errors={errors.payment}
                    />
                </FormSection>
                
                <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-3 sm:gap-4 my-6">
                    <button 
                        type="button" 
                        className="border-2 border-[#303972] text-[#303972] px-4 py-2 rounded-3xl w-full sm:w-auto cursor-pointer"
                    >
                        Save as Draft
                    </button>
                    <button 
                        type="submit" 
                        className="bg-[#303972] text-white px-4 py-2 rounded-3xl w-full sm:w-auto cursor-pointer"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}