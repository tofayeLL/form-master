

import './App.css'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {


  return (
    <>

      <h1 className="text-3xl font-bold bg-red-200">
        Input Form
      </h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}

      {/* <RefForm></RefForm> */}
      <HookForm></HookForm>




    </>
  )
}

export default App
