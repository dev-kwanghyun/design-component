function ModalBackground({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`fixed w-screen h-screen flex items-center justify-center bg-gray-600/80 top-0 z-[99999] ${
        className ?? ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}

export default ModalBackground;
