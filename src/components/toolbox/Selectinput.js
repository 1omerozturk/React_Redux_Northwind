import React from 'react'
import { Label } from 'reactstrap'

const Selectinput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
}) => {
  return (
    <div className="form-group bg-dark">
      <Label className='text-muted my-2' htmlFor={name}>{label}</Label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control bg-dark text-light my-2"
      >
        <option value="">{defaultOption}</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          )
        })}
      </select>
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  )
}
export default Selectinput;
