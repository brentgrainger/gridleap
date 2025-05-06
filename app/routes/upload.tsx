import { json, LoaderFunction } from "@remix-run/node";
    import { useLoaderData } from "@remix-run/react";

    export const loader: LoaderFunction = async () => {
      return json({ message: "Upload your spreadsheet here." });
    };

    export default function Upload() {
      const data = useLoaderData();
      return (
        <div>
          <h1>{data.message}</h1>
          <form method="post" encType="multipart/form-data">
            <input type="file" name="spreadsheet" accept=".xlsx" required />
            <button type="submit">Upload</button>
          </form>
        </div>
      );
    }
