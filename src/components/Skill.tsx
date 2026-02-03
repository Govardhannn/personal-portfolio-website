export default function Skill({ skill }: any ) {
  return (
    <button
      className="text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-700 hover:via-indigo-700 hover:to-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300"
    >
      {skill}
    </button>
  );
}
