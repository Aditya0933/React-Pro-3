import './Spiner.css'
const Spiner =() => {
    return(
        <div className='flex items-center space-y-2 flex-col'>
            <div class="spinner"></div>
            <p className='text-black text-lg font-semibold'>Loading...</p>
        </div>
    )
}
export default Spiner;