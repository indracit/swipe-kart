import '../styles/skeletons.css'

const Proskeleton = () => {
    return (
    <div  className="skeleton-p-card animate-pulse">
    <p className='skeleton-p-image'></p>
    <p className='skeleton-p-text'></p>
    <div>
        <p className='skeleton-p-item'></p>
        <p className='skeleton-p-item'></p>
    </div>
    </div>
    )
}

export default Proskeleton
