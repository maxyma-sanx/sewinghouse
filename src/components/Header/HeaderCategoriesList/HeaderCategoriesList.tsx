import Link from "next/link";

const HeaderCategoriesList = () => {
  return (
    <nav className="mt-4 border-t-[1px] px-4 pb-2 pt-4">
      <ul className="flex justify-center gap-20 font-semibold">
        <li>
          <Link
            className="link-hover"
            href="/"
          >
            Шоурум
          </Link>
        </li>
        <li>
          <Link
            className="link-hover"
            href="/"
          >
            New
          </Link>
        </li>
        <li>
          <Link
            className="link-hover"
            href="/"
          >
            Індивідуальне пошиття
          </Link>
        </li>
        <li>
          <Link
            className="link-hover"
            href="/"
          >
            Прокат
          </Link>
        </li>
        <li>
          <Link
            className="link-hover"
            href="/"
          >
            Аксесуари
          </Link>
        </li>
        <li>
          <Link
            className="link-hover"
            href="/"
          >
            Sale
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderCategoriesList;
