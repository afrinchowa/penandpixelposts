import profile from '../../assets/p1.jpg';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-4 mx-4 border-b-2" >
            <h1 className="text-4xl font-bold">PenAndPixelPosts</h1>
            <img className='w-10 h-14 rounded-full'  src={profile} alt="" />
        </header>
    );
};

export default Header;