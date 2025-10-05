import { useState } from 'react';
import ErrorMessage from './error-menssage';
import { useNavigate } from 'react-router-dom';

export default function AddStudent() {
    const [addressLength, setAddressLength] = useState(0);
    const [parentAddressLength, setParentAddressLength] = useState(0);

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        placeOfBirth: '',
        parentName: '',
        email: '',
        phone: '',
        address: '',
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
        parentName: [],
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
            parentName: [],
            email: [],
            phone: [],
            address: [],
            payment: [],
            parentFirstName: [],
            parentLastName: [],
            parentEmail: [],
            parentPhone: [],
            parentAddress: []
        };

        if (!formValues.firstName) 
            newErrors.firstName.push("First name is required");

        if (!formValues.lastName) 
            newErrors.lastName.push("Last name is required");
        
        if (!formValues.email) 
            newErrors.email.push("Email is required");
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) 
            newErrors.email.push("Invalid email format");
        
        if (!formValues.phone) 
            newErrors.phone.push("Phone number is required");
        else if (!/^\+?[1-9]\d{1,14}$/.test(formValues.phone)) 
            newErrors.phone.push("Invalid phone format");
        
        if (!formValues.dateOfBirth) 
            newErrors.dateOfBirth.push("Date of birth is required");
        
        if (!formValues.placeOfBirth) 
            newErrors.placeOfBirth.push("Place of birth is required");
        
        if (!formValues.parentName) 
            newErrors.parentName.push("Parent name is required");

        if (!formValues.address) 
            newErrors.address.push("Address is required");

        if (!formValues.payment) 
            newErrors.payment.push("Payment method is required");

        setErrors(newErrors);

        return !Object.values(newErrors).some(fieldErrors => fieldErrors.length > 0);
    };
    
    const navigate = useNavigate();
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {
            const newId = '#' + Math.floor(Math.random() * 900000000 + 100000000).toString();
            
            const today = new Date();
            const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = today.toLocaleDateString('en-US', options);
            
            const newStudent = {
                name: `${formValues.firstName} ${formValues.lastName}`,
                id: newId,
                date: formattedDate,
                parent: formValues.parentName,
                city: formValues.placeOfBirth,
                contact: [
                    { icon: "phone", value: formValues.phone },
                    { icon: "envelope", value: formValues.email }
                ],
                grade: "VII A" ,
                address: formValues.address,
                parentFirstName: formValues.parentFirstName,
                parentLastName: formValues.parentLastName,
                parentEmail: formValues.parentEmail,
                parentPhone: formValues.parentPhone,
                parentAddress: formValues.parentAddress,
                paymentMethod: formValues.payment
            };
            
            navigate('/students');
        } else {
            console.log('Formulário com erros, corrigir...');
        }
    };

    return (
        <div className="p-4 sm:p-6 md:p-8 bg-[#eeedf8]" >
            <h2 className="font-bold text-xl sm:text-2xl p-2 pl-0 text-[#303972] lg:relative lg:left-1 lg:top-1 pt-0
                md:fixed md:left-18 md:top-6 sm:fixed sm:left-18">Add New Student</h2>

            <form className="mt-4 lg:mt-0 lg:top-4 sm:mt-6 sm:relative sm:top-8" onSubmit={handleSubmit}>
                <header className="bg-[#4d44b5] px-4 py-2 rounded-t-2xl col-span-2 ">
                    <h2 className="text-lg sm:text-xl font-bold text-white">Student Details</h2>
                </header>
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 rounded-b-2xl mb-6 sm:mb-8 bg-white px-4 sm:px-6 py-4">
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">First Name*</label>
                        <input name='firstName' type="text" placeholder="Samantha" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" onChange={handleChange} />
                        <ErrorMessage errors={errors.firstName} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Last Name*</label>
                        <input name='lastName' type="text" placeholder="William" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" onChange={handleChange} />
                        <ErrorMessage errors={errors.lastName} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Date & Place of Birth *</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                            <input name='dateOfBirth' type="text" placeholder="24 February 1997" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" onChange={handleChange} />
                            <input name='placeOfBirth' type="text" placeholder="Jakarta" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" onChange={handleChange} />
                        </div>
                        <ErrorMessage errors={errors.dateOfBirth} />
                        <ErrorMessage errors={errors.placeOfBirth} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Parent Name*</label>
                        <input name='parentName' type="text" placeholder="Mana William" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" onChange={handleChange} />
                        <ErrorMessage errors={errors.parentName} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Email*</label>
                        <input name='email' type="email" placeholder="william@mail.com" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" onChange={handleChange} />
                        <ErrorMessage errors={errors.email} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Phone*</label>
                        <input name='phone' type="tel" placeholder="+1234567890" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" onChange={handleChange} />
                        <ErrorMessage errors={errors.phone} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Address*</label>
                        <textarea name='address'
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                            className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" 
                            rows={6}
                            maxLength={2000}
                            onChange={(e) => setAddressLength(e.target.value.length)}
                        />
                        <div className="flex justify-end" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <span className="text-xs text-[#a098ae]">{addressLength}/2000</span>
                        </div>
                        <ErrorMessage errors={errors.address} />
                    </div>
                </fieldset>
           
                <header className="bg-[#4d44b5] px-4 py-2 rounded-t-2xl col-span-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white">Parent Details</h2>
                </header>
                <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 rounded-b-2xl bg-white px-4 sm:px-6 py-4">
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">First Name*</label>
                        <input name='parentFirstName' type="text" placeholder="Mana" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" onChange={handleChange} />
                        <ErrorMessage errors={errors.firstName} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Last Name*</label>
                        <input name='parentLastName' type="text" placeholder="William" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" onChange={handleChange} />
                        <ErrorMessage errors={errors.lastName} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Email*</label>
                        <input name='parentEmail' type="email" placeholder="Mana@mail.com" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" onChange={handleChange} />
                        <ErrorMessage errors={errors.email} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Phone*</label>
                        <input name='parentPhone' type="tel" placeholder="+1234567890" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" onChange={handleChange} />
                        <ErrorMessage errors={errors.phone} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Address*</label>
                        <textarea 
                            name='addressParent'
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                            className="border-2 border-[#c1bbeb] rounded-sm p-2 w-full mt-2" 
                            rows={6}
                            maxLength={2000}
                            onChange={(e) => setParentAddressLength(e.target.value.length)}
                        />
                        <div className="flex justify-end">
                            <span className="text-xs text-[#a098ae]">{parentAddressLength}/2000</span>
                        </div>
                        <ErrorMessage errors={errors.address} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Payments*</label>
                        <div className="radio-group flex flex-row gap-2 mt-2">
                            <label className="flex items-center text-[#a098ae] bg-white text-sm gap-2">
                                <input type="radio" name="payment" value="Cash" className="form-radio border-2 border-[#303972]" onChange={handleChange} />
                                Cash
                            </label>
                            <label className="flex items-center text-[#a098ae] text-sm gap-2">
                                <input type="radio" name="payment" value="Debit" className="form-radio border-2 border-[#303972]" onChange={handleChange} />
                                Debit
                            </label>
                        </div>
                        <ErrorMessage errors={errors.payment} />
                    </div>
                </fieldset>
                <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-3 sm:gap-4 my-6">
                    <button type="button" className="border-2 border-[#303972] text-[#303972] px-4 py-2 rounded-3xl w-full sm:w-auto cursor-pointer">Save as Draft</button>
                    <button type="submit" className="bg-[#303972] text-white px-4 py-2 rounded-3xl w-full sm:w-auto cursor-pointer">Submit</button>
                </div>
            </form>
        </div>
    );
}