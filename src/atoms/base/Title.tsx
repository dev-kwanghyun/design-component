function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-[#151515] font-bold text-[24px] leading-[33.6px] py-10">
      {children}
    </h1>
  );
}

export default Title;
