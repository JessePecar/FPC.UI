export default function SuccessAlert({successMessage}){
    return(
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative lg:col-span-2" role="alert">
            <strong class="font-bold mr-2">Success:</strong>
            <span class="block sm:inline">{successMessage}</span>
        </div>
    )
}