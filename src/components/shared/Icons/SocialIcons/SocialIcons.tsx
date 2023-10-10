import Image from "next/image";

const SocialIcons = () => {
  return (
    <ul className="flex justify-center gap-4 border-t-2 p-4 dark:border-t-gray-500">
      <li>
        <a
          href="https://t.me/yulia_koralkova"
          className="transition hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="rounded-md"
            src="/telegram.svg"
            alt="Telegram Logo"
            width={50}
            height={24}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/yulia_koralkova/"
          className="transition hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="rounded-md"
            src="/instagram.svg"
            alt="Instagram Logo"
            width={50}
            height={24}
          />
        </a>
      </li>
      <li>
        <a
          href="viber://chat?number=380676952127"
          className="transition hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="rounded-md transition hover:opacity-80"
            src="/viber.svg"
            alt="Viber Logo"
            width={50}
            height={24}
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.tiktok.com/@jkoralkova/"
          className="transition hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="rounded-md"
            src="/tiktok.svg"
            alt="Tiktok Logo"
            width={50}
            height={24}
          />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
