import { EnvelopeIcon, PhoneIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useMenu } from './side-bar';
import { useState, useMemo } from 'react';
import alunos from '../../data/alunos.json';
import { Link } from 'react-router-dom';

export default function Students() {
    const { selectedItem, setSelectedItem } = useMenu();
    const headerTable = ['Name', 'ID', 'Date', 'Parent Name', 'City', 'Contact', 'Grade'];
    
    const [sortOrder, setSortOrder] = useState('newest');
    
    const processedAlunos = useMemo(() => {
        return alunos.map((aluno) => ({
            ...aluno,
            contact: aluno.contact ? [
                { icon: <PhoneIcon className="size-5" />, value: aluno.contact[0]?.value || '' },
                { icon: <EnvelopeIcon className="size-5" />, value: aluno.contact[1]?.value || '' }
            ] : []
        }));
    }, [alunos]);
    
    const dataTable = useMemo(() => {
        return [...processedAlunos].sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return sortOrder === 'newest' 
                ? dateB.getTime() - dateA.getTime() 
                : dateA.getTime() - dateB.getTime();
        });
    }, [processedAlunos, sortOrder]);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest');
        setCurrentPage(1); 
    };

    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const currentRecords = dataTable.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(dataTable.length / recordsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages)
            setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1)
            setCurrentPage(currentPage - 1);
    };

    const goToPage = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages)
            setCurrentPage(pageNumber);
    };

    const colorGrade = (grade: string) => {
        if (grade === 'VII A') return 'bg-[#fb7d5b]';
        if (grade === 'VII C') return 'bg-[#fcc43e]';
        return 'bg-[#4d44b5]';
    }

return (
        <div className="py-8 px-8 bg-[#f3f4ff] w-full">
            <div className='grid grid-cols-2 justify-items-center md:justify-items-stretch md:flex md:justify-between items-center'>
                <h2 className="font-bold text-2xl p-2 pl-0 text-[#303972]">{selectedItem.name}</h2>
                <div className='grid grid-cols-2 gap-4 justify-items-end w-fit'>
                    <div onClick={toggleSortOrder} className='border-2 border-[#4d44b5] text-[#4d44b5] rounded-3xl 
                        w-fit flex items-center gap-2 px-4 py-2 hover:bg-[#c1bbeb] hover:border-transparent transition-colors duration-200 cursor-pointer'>
                        <ChevronDownIcon className="size-5" />
                        <span>{sortOrder === 'newest' ? 'Newest' : 'Oldest'}</span>
                    </div>
                    <Link to="/add-student" className='bg-[#4d44b5] text-white px-4 py-2 rounded-3xl w-fit flex items-center gap-2 
                        hover:bg-[#3b358f] transition-colors duration-200 cursor-pointer'>
                        <PlusIcon className="size-5" />
                        <span>New Student</span>
                    </Link>
                </div>
            </div>
            <table className='w-full mt-4 bg-white rounded-2xl text-sm shadow-md overflow-hidden'>
                <thead>
                    <tr className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] p-4 text-xs font-bold text-[#303972] border-b-2 border-gray-300">
                        {headerTable.map((header) => (
                            <th key={header} className="p-2 first:text-start text-center">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentRecords.map((data, index) => (
                        <tr key={index} className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] p-3 text-gray-600 border-b border-gray-200 hover:bg-gray-100 items-center">
                            <td className="p-2 font-bold text-[#303972] flex items-center gap-3">
                                <div className='bg-[#c1bbeb] rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0'>                
                                    <span className="text-xs text-white">
                                        {data.name.split(' ').map(name => name[0]).join('')}
                                    </span>
                                </div>
                                <span className='truncate'>
                                    {data.name}
                                </span>
                            </td>
                            <td className="p-2 font-bold text-[#4d44b5] text-center">{data.id}</td>
                            <td className="p-2 text-center">{data.date}</td>
                            <td className="p-2 text-center">{data.parent}</td>
                            <td className="p-2 text-center">{data.city}</td>
                            <td className="p-2 justify-center flex gap-2">
                                {data.contact.map((contact) => (
                                    <div className="text-[#4d44b5]" key={contact.value}>
                                        <a href={`tel:${contact.value}`} className="flex bg-[#eeedf8] rounded-3xl p-2 items-center gap-1">
                                            {contact.icon}
                                        </a>
                                    </div>
                                ))}
                            </td>
                            <td className={`p-2 px-6 rounded-3xl ${colorGrade(data.grade)} justify-self-center text-white w-fit`}>{data.grade}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={7} className="p-8">
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={prevPage}
                                    disabled={currentPage === 1}
                                    className={`p-2 ${currentPage === 1 ? 'text-[#a098ae]' : 'text-[#4d44b5]'}`}
                                >
                                    <ChevronLeftIcon className="size-4" />
                                </button>

                                <div className="flex gap-1">
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        let pageToShow;
                                        if (totalPages <= 5) 
                                            pageToShow = i + 1;
                                        else if (currentPage <= 3) 
                                            pageToShow = i + 1;
                                        else if (currentPage >= totalPages - 2) 
                                            pageToShow = totalPages - 4 + i;
                                        else 
                                            pageToShow = currentPage - 2 + i;
                                        

                                        return (
                                            <button
                                                key={i}
                                                onClick={() => goToPage(pageToShow)}
                                                className={`w-8 h-8 flex items-center justify-center rounded-3xl ${currentPage === pageToShow
                                                        ? 'bg-[#4d44b5] text-white'
                                                    : 'border border-[#a098ae] text-[#a098ae] hover:bg-[#c1bbeb] hover:text-[#4d44b5] hover:border-[#4d44b5]'
                                                    }`}
                                            >
                                                {pageToShow}
                                            </button>
                                        );
                                    })}
                                </div>

                                <button
                                    onClick={nextPage}
                                    disabled={currentPage === totalPages}
                                    className={`p-2 ${currentPage === totalPages ? 'text-[#a098ae]' : 'text-[#4d44b5]'}`}
                                >
                                    <ChevronRightIcon className="size-4" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}