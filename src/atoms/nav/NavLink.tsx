// interface NavLinkProps {
//   href: string;
//   icon: React.ReactNode;
//   label: string;
// }
// const NavLink = ({ href, icon, label }: NavLinkProps) => {
//   const pathName = usePathname();
//   const isActive = pathName === href;

//   return (
//     <Link
//       href={href}
//       className={`p-1 items-center flex gap-2 rounded-full text-[#949CA8] hover:text-[#B2B8C3] hover:bg-[#ffffff10] ${
//         isActive &&
//         "bg-gradient-to-r from-white/[0.2] to-white/[0.08] text-white"
//       }`}
//     >
//       <span className="p-3 w-[44px] h-[44px] rounded-full bg-[#ffffff10]">
//         {icon}
//       </span>
//       {label}
//     </Link>
//   );
// };

// export default NavLink;
