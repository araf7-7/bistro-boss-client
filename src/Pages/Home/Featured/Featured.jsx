
import featuredImg from '../../../../assets/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white  my-20 container mx-auto">

            <div className=" bg-[#151515] bg-opacity-60 pb-20 pt-12 px-36">
                <div className="mx-auto  md:w-4/12">
                    <h1 className="italic mt-[60px] text-center text-xl text-[#D99904] font-medium">---Check it out---</h1>
                    <h1 className="text-4xl text-center font-medium mt-10 border-y-4 py-4 border-gray-300 mb-16">FROM OUR MENU</h1>
                </div>
                <div className='md:flex justify-center items-center'>
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can i get some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                        <button className="btn btn-outline text-white border-0 border-b-4 mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;