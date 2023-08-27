import Link from "next/link";

export const ActionBtn = ({ link, text, rounded }) => {
  return (
    <button
      className={`btn inline-block bg-primary hover:bg-secondary text-white hover:text-black border-primary-focus font-semibold py-2 px-6 rounded-${rounded} transition duration-300 ease-in-out`}
    >
      <Link href={link}>{text}</Link>
    </button>
  );
};
