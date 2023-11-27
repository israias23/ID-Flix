import { useEffect } from 'react'

export function BasePage(props) {
  useEffect(() => {
    document.title = props.title || 'IDFlix'
  }, [props.title])

  return props.children
}
