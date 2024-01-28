import { properties } from '@/constants'
import PropertyCard from './PropertyCard'

const Properties = () => {
  return (
    <section className='section__padding' >
        <div className="container">
            <h2 className="flex-start text-start text-dark bold-38">
            Recently Added
            </h2>

         <div className=' mt-6 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  gap-4  md:gap-8 lg:gap-10' >
               {
                   properties.map((property , i ) => (
                       <PropertyCard  key = {i} property = {property} />
                   ) )
               }
            
         </div>

        </div>

    </section>
  )
}

export default Properties