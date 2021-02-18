import { useState, useEffect } from 'react'

const UseLocalStorageState = (key: string, defaultValue: string) => {
  const [state, setState] = useState(() => {
    let val
    try {
      val = JSON.parse(window.localStorage.getItem(key) || defaultValue)
    } catch (error) {
      val = defaultValue
    }

    return val
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState] as const
}

export default UseLocalStorageState
