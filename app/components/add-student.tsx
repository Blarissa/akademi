import { useState } from 'react';
import ErrorMessage from './error-menssage';

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
        parentAddress: ''
    });

    const [errors, setErrors] = useState({
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
        parentAddress: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {
            firstName: [],
            lastName: [],
            dateOfBirth: [],
            placeOfBirth: [],
            parentName: [],
            email: [],
            phone: [],
            address: [],
            payment: [],
        };

        if (!formValues.firstName) 
            newErrors.firstName.push("Nome é obrigatório");

        if (!formValues.lastName) 
            newErrors.lastName.push("Sobrenome é obrigatório");
        
        if (!formValues.email) 
            newErrors.email.push("Email é obrigatório");
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) 
            newErrors.email.push("Email inválido");
        
        if (!formValues.phone) 
            newErrors.phone.push("Telefone é obrigatório");
        else if (!/^\+?[1-9]\d{1,14}$/.test(formValues.phone)) 
            newErrors.phone.push("Telefone inválido");
        
        if (!formValues.dateOfBirth) 
            newErrors.dateOfBirth.push("Data de nascimento é obrigatória");
        
        if (!formValues.placeOfBirth) 
            newErrors.placeOfBirth.push("Local de nascimento é obrigatório");
        
        if (!formValues.parentName) 
            newErrors.parentName.push("Nome do responsável é obrigatório");

        if (!formValues.address) 
            newErrors.address.push("Endereço é obrigatório");

        if (!formValues.payment) 
            newErrors.payment.push("Método de pagamento é obrigatório");

        setErrors(newErrors);

        // Retorna true se não houver erros
        return !Object.values(newErrors).some(fieldErrors => fieldErrors.length > 0);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {
            // Processar o envio do formulário
            console.log('Formulário válido, enviando...', formValues);
            // Aqui você pode adicionar a lógica para salvar os dados
        } else {
            console.log('Formulário com erros, corrigir...');
        }
    };

    return (
        <div className="p-8 bg-[#eeedf8]" >
            <h2 className="font-bold text-2xl p-2 pl-0 text-[#303972]">Add New Student</h2>

            <form className="mt-6" onChange={handleChange} onSubmit={handleSubmit}>
                <header className="bg-[#4d44b5] px-4 py-2 rounded-t-2xl col-span-2 ">
                    <h2 className="text-xl font-bold text-white">Student Details</h2>
                </header>
                <fieldset className="grid grid-cols-2 gap-5 rounded-b-2xl mb-8 bg-white px-6 py-4">
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">First Name*</label>
                        <input name='firstName' type="text" placeholder="Samantha" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                        <ErrorMessage errors={errors.firstName} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Last Name*</label>
                        <input name='lastName' type="text" placeholder="William" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                        <ErrorMessage errors={errors.lastName} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Date & Place of Birth *</label>
                        <div className="grid grid-cols-2 gap-4">
                            <input name='dateOfBirth' type="text" placeholder="24 February 1997" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                            <input name='placeOfBirth' type="text" placeholder="Jakarta" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                        </div>
                        <ErrorMessage errors={errors.dateOfBirth} />
                        <ErrorMessage errors={errors.placeOfBirth} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Parent Name*</label>
                        <input name='parentName' type="text" placeholder="Mana William" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                        <ErrorMessage errors={errors.parentName} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Email*</label>
                        <input name='email' type="email" placeholder="william@mail.com" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                        <ErrorMessage errors={errors.email} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Phone*</label>
                        <input name='phone' type="tel" placeholder="+1234567890" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
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
                    <h2 className="text-xl font-bold text-white">Parent Details</h2>
                </header>
                <fieldset className="grid grid-cols-2 gap-5 rounded-b-2xl bg-white px-6 py-4">
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">First Name*</label>
                        <input name='firstNameParent' type="text" placeholder="Mana" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                        <ErrorMessage errors={errors.firstName} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Last Name*</label>
                        <input name='lastNameParent' type="text" placeholder="William" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                        <ErrorMessage errors={errors.lastName} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Email*</label>
                        <input name='emailParent' type="email" placeholder="Mana@mail.com" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                        <ErrorMessage errors={errors.email} />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Phone*</label>
                        <input name='phoneParent' type="tel" placeholder="+1234567890" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
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
                                <input type="radio" name="payment" value="Cash" className="form-radio border-2 border-[#303972]" />
                                Cash
                            </label>
                            <label className="flex items-center text-[#a098ae] text-sm gap-2">
                                <input type="radio" name="payment" value="Debit" className="form-radio border-2 border-[#303972]" />
                                Debit
                            </label>
                        </div>
                        <ErrorMessage errors={errors.payment} />
                    </div>
                </fieldset>
                <div className="flex justify-end gap-4 mt-6">
                    <button type="button" className="border-2 border-[#303972] text-[#303972] px-4 py-2 rounded-3xl">Save as Draft</button>
                    <button type="submit" className="bg-[#303972] text-white px-4 py-2 rounded-3xl">Submit</button>
                </div>
            </form>
        </div>
    );
}