// const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || 'http://localhost:3000';

// async function handleResponse<T>(response: Response): Promise<T> {
//   const contentType = response.headers.get("Content-Type") || "";
//   const isJson = contentType.includes("application/json");
//   const data = isJson ? await response.json() : await response.text();
//   if (!response.ok) {
//     if (isJson && data.errors !== null) {
//       throw new Error(JSON.stringify(data.errors));
//     }

//     throw new Error(data.message || response.statusText);
//   }

//   return data as T;
// }

// export async function requestRoot() {
//   const response = await fetch(`${SERVER_ENDPOINT}/api/lan`, {
//     method: "GET",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return handleResponse(response).then((data) => data);
// }
