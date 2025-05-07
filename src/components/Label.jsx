export function Label({ htmlFor, children }) {
    return (
      <label htmlFor={htmlFor} className="text-m my-1 text-black">
        {children}
      </label>
    );
  }