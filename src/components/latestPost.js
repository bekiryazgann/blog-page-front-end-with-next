import Image from 'next/image'

export default function latestPost(){
    return(
        <div className="my-20 flex items-start">
            <div className="w-6/12 overflow-hidden rounded-xl">
                <Image
                    src="https://placehold.co/1000x600/png"
                    alt="Blog post image"
                    width={1000}
                    height={600}
                />
            </div>
            <div className="w-6/12 ml-10">
                <span className="text-gray-400"> Mart 05, 2021 </span>
                <h3 className="text-[72px] font-semibold flex-1 mt-6 leading-[75px]">
                    Tentang <br/>
                    Creativity <br />
                    Block pada <br/>
                    UI Designer
                </h3>
                <p className="text-gray-400 mt-7">
                    Beberapa cara yang saya lakuhan ketika tidak <br />
                    memilik ide atau bingung untuk memulai <br /> 
                    design
                </p>
            </div>
        </div>
    )
}