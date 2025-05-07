export default function Button({text, onClick, children }) {
  return (
    <button
        onClick={onClick}
        className="bg-[#34392d] text-white px-4 py-2 rounded-md my-2 w-full hover:bg-[#94a983] transition-colors"
    >
        {text}
        {children}
    </button>
  )
}
