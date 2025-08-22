function ModalTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={`text-[20px] text-black font-bold ${className ?? ""}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export default ModalTitle;
