import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  return <div>hello {user?.firstName}</div>;
}
