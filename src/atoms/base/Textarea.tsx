function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`rounded-md h-[100px] border border-gray300 resize-none ${
        className ?? ""
      }`}
      {...props}
    />
  );
}

export default Textarea;
