import React, { useState } from 'react'

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue)
  const toggle = () => {
    setValue(!value)
  }

  return [value, toggle] as const
}

export default useToggle
