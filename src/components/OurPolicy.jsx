import { assets } from '../assets/assets'

const OurPolicy = () => {

  const ourData = [
    {_id: 1, image: assets.exchange_icon, total: 'Easy Exchange Policy', subtotal: 'We offer hassle free exchange policy'},
    {_id: 2, image: assets.quality_icon, total: '7 Days Return Policy', subtotal: 'We Provide 7 Days free Return Policy'},
    {_id: 3, image: assets.support_img, total: 'Best Customer Support', subtotal: 'We Provide 24/7 Customer Support'},
  ]

  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        {ourData.map((item) => (
          <div key={item._id}>
          <img src={item.image} alt='exchange' className='w-12 m-auto mb-5' />
          <p className='font-semibold'>{item.total}</p>
          <p className='text-gray-400'>{item.subtotal}</p>
          </div>
        ))}
    </div>
  ) 
}
export default OurPolicy;
