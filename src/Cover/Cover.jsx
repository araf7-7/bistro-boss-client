

const Cover = ({img,title,des}) => {
    return (
        <div>
            <div className="hero h-[650px] opacity-90 bg-fixed" style={{ backgroundImage: `url('${img}')` }}>
                <div className=""></div>
                <div className=" bg-black/60 text-center text-white h-[250px] w-[700px]">
                    <div className="mx-auto container w-96 mt-16">
                        <h1 className="mb-5 font-cinzel  text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{des}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;