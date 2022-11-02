import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { withPageAuth } from "@supabase/supabase-auth-helpers/nextjs";

export default function Account({ user }) {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [avatar_url, setAvatarUrl] = useState("");

  const router = useRouter();

  useEffect(() => {
    getProfile();
  }, [user]);

  async function getProfile() {
    setLoading(true);

    if (user) {
      setName(user?.user_metadata?.first_name);
    } else {
      router.push("/");
    }
  }

  return (
    <div className="form-widget bg-green-600">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session?.user.username} disabled />
      </div>
      <div>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          value={name || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="website"
          value={website || ""}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <button
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuth();
