import React from "react";

const Ticket = ({ data }) => {
    return (
        <>
            {data ? (
                <div className="flex flex-col items-center justify-center min-h-screen bg-center bg-cover"
                    style={{
                        backgroundImage: `url(https://i.imgur.com/37Zi2kp.png)`
                    }}>
                    <div className="absolute bg-blue-900 opacity-80 inset-0 z-0"></div>
                    <div className="max-w-md w-full h-full mx-auto z-10 bg-blue-900 rounded-3xl">
                        <div className="flex flex-col">
                            <div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
                                <div className="flex-none sm:flex">
                                    <div className="relative h-32 w-32   sm:mb-0 mb-3 hidden">
                                        <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className="w-32 h-32 object-cover rounded-2xl" />
                                        <div className="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                className="h-4 w-4">
                                                <path
                                                    d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-auto justify-evenly">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center  my-1">
                                                <span className="mr-3 rounded-full bg-white w-8 h-8">
                                                    <img src="https://i.imgur.com/utVCQHK.png" alt="" className="h-8 p-1" />
                                                </span>
                                                <h2 className="font-medium">Cinema Center</h2>
                                            </div>
                                            <div className="ml-auto text-blue-800">{data.id}</div>
                                        </div>
                                        <div className="border-dashed border-b-2 my-5"></div>
                                        <div className="flex items-center">
                                            <div className="flex flex-col mx-auto">
                                                <img src="http://localhost:8080/uploads/20240806162011_image.jpg" alt="" className="h-28" />
                                            </div>
                                            <div className="flex flex-col mx-auto">
                                                <p>{data.name}</p>
                                            </div>

                                        </div>
                                        <div className="border-dashed border-b-2 my-5 pt-5">
                                            <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
                                            <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
                                        </div>
                                        <div className="flex items-center mb-5 p-5 text-sm">
                                            <div className="flex flex-col">
                                                <span className="text-sm">Rạp</span>
                                                <div className="font-semibold">Cinema Center</div>

                                            </div>
                                            <div className="flex flex-col ml-auto">
                                                <span className="text-sm">Phòng</span>
                                                <div className="font-semibold">{data.room}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center mb-4 px-5">
                                            <div className="flex flex-col text-sm">
                                                <span className="">Xuất</span>
                                                <div className="font-semibold">{data.time}</div>

                                            </div>
                                            <div className="flex flex-col mx-auto text-sm">
                                                <span className="">Ngày</span>
                                                <div className="font-semibold">{data.date}</div>

                                            </div>
                                            <div className="flex flex-col text-sm">
                                                <span className="">Ghế</span>
                                                <div className="font-semibold">{data.seat.map((item, index) => (
                                                    <>
                                                        {item}
                                                        {index < (data.seat).length - 1 ? ", " : ""}
                                                    </>
                                                ))}</div>

                                            </div>
                                        </div>
                                        <div className=" border-dashed border-b-2 my-5 pt-5">
                                            <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -left-2"></div>
                                            <div className="absolute rounded-full w-5 h-5 bg-blue-900 -mt-2 -right-2"></div>
                                        </div>
                                        <div className="flex items-center px-5 pt-3 text-sm">
                                            <div className="flex flex-col w-3/4">
                                                <span className="">Đồ ăn</span>
                                            </div>
                                            <div className="flex flex-col w-1/4">
                                                <span className="">Số lượng</span>
                                            </div>
                                        </div>
                                        {data.food.map((item) => (
                                            <div key={item.id} className="flex items-center px-5 pt-3 text-sm">
                                                <div className="flex flex-col w-3/4">
                                                    <div className="font-semibold">{item.name}</div>
                                                </div>
                                                <div className="flex flex-col w-1/4">
                                                    <div className="font-semibold">{item.amount}</div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="flex flex-col py-5  justify-center text-sm ">
                                            <h6 className="font-bold text-center">Tổng cộng</h6>
                                            <p className="text-center">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data.total)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                <div><p>data not found</p></div>
            )}
        </>


    )
}
export default Ticket;