function Table({
  children,
  className,
  divClassName,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { divClassName?: string }) {
  return (
    <div
      className={`bg-white rounded-lg border border-[#DBE1E8] overflow-hidden ${
        divClassName ?? ""
      }`}
    >
      <table className={`w-full text-center ${className ?? ""}`} {...props}>
        {children}
      </table>
    </div>
  );
}

function Thead({
  children,
  className,
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={`bg-[#F6F8FA] ${className ?? ""}`}>{children}</thead>
  );
}

function Tbody({ children }: { children: React.ReactNode }) {
  return <tbody className="">{children}</tbody>;
}

function Tr({
  children,
  className,
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr
      className={`border-[#DBE1E8] border-b last:border-b-0  ${
        className ?? ""
      }`}
    >
      {children}
    </tr>
  );
}

function Th({
  children,
  className,
}: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={`px-3 py-2.5 text-[#5E646E] border-b border-r border-[#DBE1E8] text-[13px] font-bold last:border-r-0  ${
        className ?? ""
      }`}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  className,
}: React.HTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={`px-2 text-[#151515] text-[14px] border-r border-[#DBE1E8] last:border-r-0 ${
        className ?? ""
      }`}
    >
      {children}
    </td>
  );
}

Table.Thead = Thead;
Table.Tbody = Tbody;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;

export default Table;
