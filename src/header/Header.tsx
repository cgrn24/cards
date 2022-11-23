import { NavLink } from 'react-router-dom'
import { PATH } from '../pages/Pages'

export const Header = () => {
  return (
    <div>
      <NavLink to={PATH.AUTH}>Auth </NavLink>
      <NavLink to={PATH.PROFILE}>Profile </NavLink>
      <NavLink to={PATH.REG}>Registration </NavLink>
      <NavLink to={PATH.RESTORE}>Restore password </NavLink>
      <NavLink to={PATH.TEST}>Test</NavLink>
    </div>
  )
}
