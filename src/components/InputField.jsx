const InputField = ({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  autoComplete,
  required = false,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-[#0F172A]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
        className="h-12 w-full rounded-lg border border-[#E2E8F0] bg-white px-4 text-sm text-[#0F172A] outline-none transition placeholder:text-slate-400 focus:border-[#2563EB] focus:ring-3 focus:ring-blue-100"
      />
    </div>
  )
}

export default InputField
