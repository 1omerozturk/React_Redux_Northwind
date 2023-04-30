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
      <Label className='text-light' htmlFor={name}>{label}</Label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control bg-dark text-muted"
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
