import Link from 'next/link';

const NavLink = ({ href, title, onClick }) => {
    return (
        <button 
            onClick={onClick}  // เรียกใช้งาน onClick ที่ได้รับจาก props
            className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'
        >
            {title}
        </button>
    );
};

export default NavLink;
