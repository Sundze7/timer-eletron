export default function InputField({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label>{label} : </label>
      <input type="number" value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}
