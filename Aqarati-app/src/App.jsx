import './App.css'
import Landing from '../src/Pages/Landing'
import { Routes, Route } from 'react-router-dom'
import Qu from '../src/Pages/Qu'
import Signup from '../src/Pages/Signup'
import Card from  '../src/Compnent/sataDisplay/Card'
import Owner from '../src/Pages/Owner'
import OwnerApartment from '../src/Pages/OwnerApartment'
import BottomNavigation from './Compnent/navigation/BottomNavigation'
import Login from './Pages/Login'
import ApartmentHistory from './Pages/ApartmentHistory'
import MaintenanceRequest from './Pages/MaintenanceRequest'
import RentPayments from './Pages/RentPayments'
import RequestAddBuilding from './Pages/RequestAddBuilding'
import AddTenant from './Pages/AddTenant'
import AddApartment from './Pages/AddApartment'
import Profile from './Pages/Profile'
function App() {
  return (
    <div>
    

      <Routes>
      
        { /* For component testing */}
    
        <Route path="/" element={<Landing/>}/>  { /* الصفحة الرئيسية */}


        <Route path="/Q" element={<Qu/>}/>         { /* الاسئلة الشائعة */}

        <Route path="/Owner" element={<Owner/>}/>  { /* صفحة عقارات المالك */}

        <Route path="/Apartment" element={<OwnerApartment/>}/> { /* شقق العقار*/}

        <Route path="/signup" element={<Signup/>}/> { /*صفحة التسجيل  */}

        <Route path="/login" element={<Login/>}/>  { /* صفحة الدخول  */}

        <Route path="/ApartmentHistory" element={<ApartmentHistory/>}/>  { /* سجل صيانة الشقة */}

        <Route path="/MaintenanceRequest" element={<MaintenanceRequest/>}/> { /* صفحة رفع طلب صيانة */}
        <Route path="/RentPayments" element={<RentPayments/>}/> { /* صفحة جدول الدفعات */}

        <Route path="/RequestAddBuilding" element={<RequestAddBuilding/>}/> { /* صفحة طلب اضافة عقار */}
        <Route path="/AddTenant" element={<AddTenant/>}/> { /* صفحة اضافة مستاجر */}

        <Route path="/AddApartment" element={<AddApartment/>}/> { /* صفحة اضافة شقة */}

        <Route path="/Profile" element={<Profile/>}/> { /* ملف التعريف */}







      </Routes>

      
    </div>
  )
}

export default App
