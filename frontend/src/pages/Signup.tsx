
import { AuthSignup } from '../components/AuthSignup'
import { Quota } from '../components/Quote'


export const Signup = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
         <div>
            <AuthSignup />
        </div>

        <div className='hidden lg:block'>
            <Quota />
        </div>
        
      </div>
       
    </div>
  )
}

