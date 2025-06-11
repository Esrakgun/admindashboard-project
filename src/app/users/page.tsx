import UserModal from "@/components/users-page/user-model";
import UsersTable from "@/components/users-page/usersTable";
import { FC,Suspense } from "react";
import Loading from "../loading";

interface Props {
  searchParams: Promise<{ show: string }>;
}

const Users: FC<Props> = async ({ searchParams }) => {
  const { show } = await searchParams;
  return (
    <div className="page">
      <h1 className="title">Kullanıcılar</h1>
 {/*NOT: Suspense ile loadingin ekranda gösterilmesi gereken konumu belirtiyoruz. */}
      <Suspense fallback={<Loading designs="my-60"/>}>
      <UsersTable />
      </Suspense>
      {show && <UserModal id={show} />}
    </div>
  );
};

export default Users;
