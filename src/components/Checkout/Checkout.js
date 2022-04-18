import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useServices from '../../CustomHook/useServices';

const Checkout = () => {
    const [services] = useServices('https://tasnim-pricila.github.io/json-api/services.json');
    const { serviceId } = useParams();
    const found = services.find(service => service.id == serviceId)

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Thank You For The Booking', {
            theme: 'dark'
        });
    }

    return (
        <>

            <div className='md:w-1/3 w-full mx-auto my-20'>
                <div className='flex justify-around items-center'>
                    <img src={found?.img} alt="" className='w-[100px] h-[100px] border rounded-[50%] object-cover' />
                    <p className='text-xl'>{found?.title}</p>
                    <p className='text-xl font-semibold'>$ {found?.price}</p>
                </div>
                <div className='mt-7 mb-4'>
                    <div className='flex justify-around md:w-1/4 w-1/2 mx-auto'>
                        <p>SubTotal:</p>
                        <p>$ {found?.price}</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col leading-10 max-w-full px-2'>
                    <input type="text" name="name" id="name" placeholder='Name' required
                        className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 mb-3' />

                    <input type="email" name="name" id="email" placeholder='Email' className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 mb-3' required />

                    <input type="number" name="number" id="number" placeholder='Phome Number' required
                        className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 mb-3' />

                    <textarea rows='3' cols='2' placeholder='Address Here...' className='px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 ' />

                    <button type="submit" className='border font-medium uppercase bg-fuchsia-300 hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 mt-6 text-base py-2 te'> Place Order </button>


                </form>
            </div>



            <ToastContainer />
        </>
    );
};

export default Checkout;