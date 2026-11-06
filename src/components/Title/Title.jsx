function Title({ title, hs, ds }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-1`}>
      <h2 className={`text-center font-heading text-[32px] ${hs}`}>{title}</h2>
      <div className={`w-41 h-1.5 rounded-xs bg-[#3D5A80] ${ds}`}></div>
    </div>
  );
}

export default Title;
