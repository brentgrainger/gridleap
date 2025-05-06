import { json, LoaderFunction } from "@remix-run/node";
    import { useLoaderData } from "@remix-run/react";

    export const loader: LoaderFunction = async () => {
      // Logic to fetch the preview data
      return json({ message: "Preview your generated app here." });
    };

    export default function Preview() {
      const data = useLoaderData();
      return (
        <div>
          <h1>{data.message}</h1>
          {/* Render the preview of the generated app here */}
        </div>
      );
    }
