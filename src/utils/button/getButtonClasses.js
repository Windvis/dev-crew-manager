import classNames from 'classnames'

export function getButtonClasses (buttonType, extraClasses) {
  return classNames(
    'button',
    {
      'button--success': buttonType === 'success',
      'button--danger': buttonType === 'danger'
    },
    extraClasses
  )
}
