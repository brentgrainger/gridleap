import { json, LoaderFunction } from "@remix-run/node";
    import { useLoaderData } from "@remix-run/react";

    export const loader: LoaderFunction = async () => {
      // Logic to fetch user apps
      return json({ apps: [] }); // Replace with actual app data
    };

    export default function Dashboard() {
      const { apps } = useLoaderData();
      return (
        <div>
          <h1>Your Apps</h1>
          <ul>
            {apps.map((app) => (
              <li key={app.id}>{app.name}</li>
            ))}
          </ul>
        </div>
      );
    }
