function DetailsBtn({ onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-full py-2 font-lato text-[#1F3864] border border-[#1F3864] rounded-lg hover:text-[#1F3864] hover:border-[#1F3864] cursor-pointer"
      >
        View Details
      </button>
    </div>
  );
}

export default DetailsBtn;
