const is = {
  undefined: (val) => typeof val === 'undefined',
  null: (val) => val === null,
  set: (val) => !is.undefined(val) && !is.null(val),
  function: (val) => typeof val === 'function',
  boolean: (val) => typeof val === 'boolean',
  number: (val) => typeof val === 'number',
  string: (val) => typeof val === 'string',
  array: (val) => Array.isArray(val),
  object: (val) => typeof val === 'object',
  empty: (val) => (
    val === '' ||
    val === 0 ||
    (is.array(val) && val.length === 0) ||
    (is.boolean(val) && !val) ||
    is.undefined(val) ||
    is.null(val)
  )
}

export default is
