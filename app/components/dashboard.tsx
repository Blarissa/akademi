import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { itemSelected } from '~/components/side-bar';

export function Dashboard() {
    return (
        <div className="py-16 px-8 bg-[#f3f4ff] w-full">
            <h2 className="font-bold text-2xl p-2 pl-0 text-[#303972]">{itemSelected.name}</h2>
            <table>
                <thead>
                    <tr className="text-left text-gray-600 border-b-2 border-gray-300">
                        {headerTable.map((header) => (
                            <th key={header} className="p-2">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataTable.map((data, index) => (
                        <tr key={index} className="text-gray-600 border-b border-gray-200 hover:bg-gray-100">
                            <td className="p-2 font-bold text-[#303972]">{data.name}</td>
                            <td className="p-2 font-bold text-[#4d44b5]">{data.id}</td>
                            <td className="p-2">{data.date}</td>
                            <td className="p-2">{data.parent}</td>
                            <td className="p-2">{data.city}</td>
                            <td className="p-2 flex gap-2">
                                {data.contact.map((contact) => (
                                    <div className="text-[#4d44b5]" key={contact.value}>
                                        <a href={`tel:${contact.value}`} className="flex bg-[#eeedf8] rounded-3xl p-2 items-center gap-1">
                                            {contact.icon}
                                        </a>
                                    </div>
                                ))}
                            </td>
                            <td className="p-2">{data.grade}</td>
                        </tr>
                    ))}                   
                </tbody>
            </table>
        </div>
    );
}

const headerTable = ['Name', 'ID', 'Date', 'Parent Name', 'City', 'Contact', 'Grade'];

const dataTable = [
    {
        name: 'Samanta William', id: '#123456789', date: 'March 25, 2021', parent: 'Mana William',
        city: 'Jakarta', contact: [{ icon: <PhoneIcon className="size-4" />, value: '08123456789' }, 
            { icon: <EnvelopeIcon className="size-4" />, value: 'samanta@example.com' }],
        grade: 'VII A'
    },
    {
        name: 'Tony Soap', id: '#123456789', date: 'March 25, 2021', parent: 'James Soap',
        city: 'Jakarta', contact: [{ icon: <PhoneIcon className="size-4" />, value: '08123456789' }, 
            { icon: <EnvelopeIcon className="size-4" />, value: 'tony@example.com' }],
        grade: 'VII B'
    },
    {
        name: 'Karen Hope', id: '#123456789', date: 'March 25, 2021', parent: 'Justin Hope',
        city: 'Jakarta', contact: [{ icon: <PhoneIcon className="size-4" />, value: '08123456789' }, 
            { icon: <EnvelopeIcon className="size-4" />, value: 'karen@example.com' }],
        grade: 'VII C'
    },
    {
        name: 'Jordan Nico', id: '#123456789', date: 'March 25, 2021', parent: 'Amanda Nico',
        city: 'Jakarta', contact: [{ icon: <PhoneIcon className="size-4" />, value: '08123456789' }, 
            { icon: <EnvelopeIcon className="size-4" />, value: 'jordan@example.com' }],
        grade: 'VII A'
    },
    {
        name: 'Nadila Adja', id: '#123456789', date: 'March 25, 2021', parent: 'Jack Adja',
        city: 'Jakarta', contact: [{ icon: <PhoneIcon className="size-4" />, value: '08123456789' }, 
            { icon: <EnvelopeIcon className="size-4" />, value: 'nadila@example.com' }],
        grade: 'VII A'
    },
    {
        name: 'Johnny Ahmad', id: '#123456789', date: 'March 25, 2021', parent: 'Danny Ahmad',
        city: 'Jakarta', contact: [{ icon: <PhoneIcon className="size-4" />, value: '08123456789' }, 
            { icon: <EnvelopeIcon className="size-4" />, value: 'johnny@example.com' }],
        grade: 'VII A'
    },
];
