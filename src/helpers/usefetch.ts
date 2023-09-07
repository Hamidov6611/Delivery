const BASE_URL = "http://192.168.183.1:8000/"
export const UseFetch = async (
  url: string,
  Method: "POST" | "GET" | "PUT" | "DELETE",
  data?: any
) => {  
  console.log(url, Method, data)
  switch (Method) {
    case "POST":
      const res = await fetch(BASE_URL + url, {
        method: Method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log("POST METHOD")
      return res.json();
      break;
    case "GET":
      const res2 = await fetch(BASE_URL + url, {
        method: Method,
        headers: { "Content-Type": "application/json" },
      });
      console.log("GET METHOD")
      return res2.json();
      break;
  }
};
