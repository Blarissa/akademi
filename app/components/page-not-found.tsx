import errorImage from "../images/404.png";

export default function PageNotFound() {
    const message = "Oops!";
    const details = "Página não encontrada.";

    return (
        <div className="flex-1 w-full overflow-x-hidden">
            <div className="flex flex-col items-center justify-center p-4 text-center bg-[#eeedf8] h-full min-h-screen">
                <div className="w-full max-w-md sm:max-w-md md:max-w-xl lg:max-w-2xl px-4">
                    <img
                        src={errorImage}
                        alt="Akademi 404 error"
                        className="w-full h-auto object-contain"
                    />
                    <div className="text-[#303972]">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{message}</h1>
                        <p className="mt-1 font-medium text-sm sm:text-base">{details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}