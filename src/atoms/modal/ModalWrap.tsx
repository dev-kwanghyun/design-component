function ModalWrap({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`w-[380px] px-10 py-[30px] flex gap-5 flex-col rounded-xl bg-white ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}

export default ModalWrap;
