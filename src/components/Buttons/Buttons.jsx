function Buttons({ btnTitle, btnStyle, icon }) {
  return (
    <button
      className={`${btnStyle} rounded-lg bg-linear-to-r from-[#1F3864] to-[#3D5A80] cursor-pointer font-lato`}
    >
      {btnTitle}
      {icon && <img src={icon} alt="" className="w-4 h-4" />}
    </button>
  );
}

export default Buttons;