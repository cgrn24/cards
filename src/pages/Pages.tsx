import { Navigate, Route, Routes } from 'react-router-dom'
import { Notfound } from '../Main/404/Notfound'
import { Auth } from '../Main/auth/Auth'
import { Newpass } from '../Main/newpass/Newpass'
import { Profile } from '../Main/profile/Profile'
import { Reg } from '../Main/reg/Reg'
import { Restore } from '../Main/restore/Restore'
import { Testpage } from '../test_page/Testpage'
export const PATH = {
  AUTH: '/auth',
  NEW_PASS: '/restore/new_pass',
  PROFILE: '/profile',
  REG: '/reg',
  RESTORE: '/restore',
  TEST: '/test',
}
export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.TEST} />} />
        <Route path={'/test'} element={<Testpage />} />
        <Route path={'/auth'} element={<Auth />} />
        <Route path={'/restore/new_pass'} element={<Newpass />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/reg'} element={<Reg />} />
        <Route path={'/restore'} element={<Restore />} />
        <Route path={'/*'} element={<Notfound />} />
      </Routes>
    </div>
  )
}
