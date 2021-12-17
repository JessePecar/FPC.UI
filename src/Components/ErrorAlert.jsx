export default function ErrorAlert({errorMessage}){

    return(
        <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative lg:col-span-2 " role="alert">
            <strong class="font-bold mr-2">Error:</strong>
            <span class="block sm:inline">{errorMessage}</span>
        </div>
    )
}