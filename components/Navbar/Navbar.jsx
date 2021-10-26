import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";

const navigation = [
  { id: 1, title: "Парогенераторы", path: "/parogeneratory" },
  { id: 2, title: "Контакты", path: "/contacts" },
  { id: 3, title: 'Услуги', path: '/services'},
  { id: 4, title: 'О нас', path: '/about'},
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        {pathname !== "/" ? (
          <Link href={"/"}>
            <a className={styles.logo}>
              <Image src="/logo.png" width={60} height={60} alt="site logo" />
            </a>
          </Link>
        ) : (
          <Image src="/logo.png" width={60} height={60} alt="site logo" />
        )}
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
