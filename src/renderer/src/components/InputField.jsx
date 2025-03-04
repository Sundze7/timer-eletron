// eslint-disable-next-line react/prop-types
export default function InputField({ label, value, onChange, placeholder }) {
  const handlesInputChange = (e) => {
    const inputValue = e.target.value
    //if content of our string are all digits, trigger onChange. handles the negative hrs, mins, and secs
    if (/^\d+$/.test(inputValue)) {
      onChange(e)
    }
  }
  return (
    <div className="text-lg">
      <label>{label} : </label>
      <input type="number" value={value} onChange={handlesInputChange} placeholder={placeholder} />
    </div>
  )
}
