import Link from "next/link";

const NavComponent = ({ data }) => {
  return (
    <>
      {/* Veldig simpel li med en Link (NEXT.js) som gjør at den går til linken som den får inn av array i Nav.js */}
      <li>
        <Link href={data.link}>{data.lable}</Link>
      </li>
    </>
  );
};

export default NavComponent;
