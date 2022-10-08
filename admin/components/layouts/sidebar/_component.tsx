import { useRouter } from "next/router";
import Link from "next/link";

export const Menu = ({ menuName, children }: { menuName: string; children: any }) => (
  <div className="pt-[15px]">
    <h1 className="text-lg font-semibold mb-3 uppercase">{menuName}</h1>
    {children}
  </div>
);
export const MenuList: any = ({ menuList, key }: any) => {
  const router = useRouter();
  return (
    <ul className="text-sm list-disc list-inside" key={key}>
      {menuList.map((item: { link: any; name: string; id: number }, index: number) => {
        const isActive = router.pathname.includes(item.link);
        return (
          <li
            key={"item-" + index}
            className={`mb-[13px] hover:text-yellow100 transition-all duration-500 ${
              isActive && "text-yellow100"
            }`}
          >
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
