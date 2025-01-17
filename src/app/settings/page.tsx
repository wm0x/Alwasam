import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
const setting = async () => {
  const session = await auth();
  return (
    <>
      <div className="text-white">
        {JSON.stringify(session)}
        <div>
          <form
            action={async () => {
              "use server";

              await signOut();
            }}
          >
              <Button type="submit">sign out</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default setting;
