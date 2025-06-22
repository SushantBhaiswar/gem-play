export const SignUpFeat = () => {
  return (
    <form className="flex flex-col gap-4 w-full">
      <input className="border-2 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]" type="text" name="name" placeholder="Name" />
      <input className="border-2 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]" type="email" name="email" placeholder="Email" />
      <input className="border-2 rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[var(--highlight)]" type="password" name="password" placeholder="Password" />
      <button type="submit" className="mt-2 px-4 py-2 rounded-lg bg-[var(--highlight)] text-white font-bold hover:bg-[var(--accent)] transition">Sign Up</button>
    </form>
  );
}; 