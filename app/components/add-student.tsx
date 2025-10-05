import { useState } from 'react';

export default function AddStudent() {
    const [addressLength, setAddressLength] = useState(0);
    const [parentAddressLength, setParentAddressLength] = useState(0);

    return (
        <div className="p-8 bg-[#eeedf8]" >
            <h2 className="font-bold text-2xl p-2 pl-0 text-[#303972]">Add New Student</h2>
            <form className="mt-6">
                <header className="bg-[#4d44b5] px-4 py-2 rounded-t-2xl col-span-2 ">
                    <h2 className="text-xl font-bold text-white">Student Details</h2>
                </header>
                <fieldset className="grid grid-cols-2 gap-5 rounded-b-2xl mb-8 bg-white px-6 py-4">
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">First Name*</label>
                        <input type="text" placeholder="Samantha" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Last Name*</label>
                        <input type="text" placeholder="William" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Date & Place of Birth *</label>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="24 February 1997" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                            <input type="text" placeholder="Jakarta" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                        </div>
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Parent Name*</label>
                        <input type="text" placeholder="Mana William" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Email*</label>
                        <input type="email" placeholder="william@mail.com" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Phone*</label>
                        <input type="tel" placeholder="+1234567890" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Address*</label>
                        <textarea 
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                            className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" 
                            rows={6}
                            maxLength={2000}
                            onChange={(e) => setAddressLength(e.target.value.length)}
                        />
                        <div className="flex justify-end" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <span className="text-xs text-[#a098ae]">{addressLength}/2000</span>
                        </div>
                    </div>
                </fieldset>
           
                <header className="bg-[#4d44b5] px-4 py-2 rounded-t-2xl col-span-2">
                    <h2 className="text-xl font-bold text-white">Parent Details</h2>
                </header>
                <fieldset className="grid grid-cols-2 gap-5 rounded-b-2xl bg-white px-6 py-4">
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">First Name*</label>
                        <input type="text" placeholder="Mana" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Last Name*</label>
                        <input type="text" placeholder="William" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Email*</label>
                        <input type="email" placeholder="Mana@mail.com" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Phone*</label>
                        <input type="tel" placeholder="+1234567890" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">City*</label>
                        <input type="text" placeholder="City" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Contact*</label>
                        <input type="text" placeholder="Contact" className="border-2 border-[#c1bbeb] rounded-sm p-1 w-full mt-2" />
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Address*</label>
                        <textarea 
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                            className="border-2 border-[#c1bbeb] rounded-sm p-2 w-full mt-2" 
                            rows={6}
                            maxLength={2000}
                            onChange={(e) => setParentAddressLength(e.target.value.length)}
                        />
                        <div className="flex justify-end" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <span className="text-xs text-[#a098ae]">{parentAddressLength}/2000</span>
                        </div>
                    </div>
                    <div>
                        <label className="floating-label font-bold text-[#303972] text-sm">Payments*</label>
                        <div className="radio-group flex flex-row gap-2 mt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            <label className="flex items-center text-[#a098ae] bg-white text-sm gap-2">
                                <input type="radio" name="payment" value="Cash" className="form-radio border-2 border-[#303972]" />
                                Cash
                            </label>
                            <label className="flex items-center text-[#a098ae] text-sm gap-2">
                                <input type="radio" name="payment" value="Debit" className="form-radio border-2 border-[#303972]" />
                                Debit
                            </label>
                        </div>
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