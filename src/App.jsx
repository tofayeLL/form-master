

import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleSignUpSubmit = (data) => {
    console.log(data)
  }

  const handleProfileUpdate = (data) => {
    console.log(data);
  }


  return (
    <>

      <h1 className="text-3xl font-bold bg-red-200">
        Input Form
      </h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}

      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}


      <ReusableForm
        handleSubmit={handleSignUpSubmit}
        formTitle={'Sign Up'}>
          <div>
            <h1>Sign up</h1>
            <p>please fill up the form right now</p>

          </div>
        </ReusableForm>
      <ReusableForm
        handleSubmit={handleProfileUpdate}
        formTitle={'Profile Update'}
        submitBtnText='update'>
          <div>
            <h1>Update profile</h1>
           <p> please update your profile here</p>
          </div>
        </ReusableForm>

         <div >
          <Grandpa ></Grandpa>

         </div>



    </>
  )
}

export default App
