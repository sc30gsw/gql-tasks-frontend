import { ReactNode } from 'react'
import { useAuth } from './hooks/useAuth'
import { Navigate } from 'react-router-dom'

type Props = {
  children: ReactNode
}

export const PrivateRoot = ({ children }: Props) => {
  const authInfo = useAuth()

  // 認証するかどうかがチェック中の場合
  if (!authInfo.checked) {
    return <div>Loading...</div>
  }

  // 認証済みの場合
  if (authInfo.isAuthenticated) {
    return <>{children}</>
  }

  // 未認証の場合
  return <Navigate to="/signin" />
}

export const GuestRoot = ({ children }: Props) => {
  const authInfo = useAuth()

  // 認証するかどうかがチェック中の場合
  if (!authInfo.checked) {
    return <div>Loading...</div>
  }

  // 認証済みの場合
  if (authInfo.isAuthenticated) {
    return <Navigate to="/" />
  }

  // 未認証の場合
  return <>{children}</>
}
