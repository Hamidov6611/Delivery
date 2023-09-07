export const UseFetch = async (
  url: string,
  Method: "POST" | "GET" | "PUT" | "DELETE",
  data?: any
  ) => {  
  const BASE_URL = "http://45.12.72.210:8000"
  const postRequest = async () => {
    try {
      const res = await fetch(BASE_URL + url, {
        method: Method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      console.log("POST METHOD")
      return res.json();
     } catch (error) {  
        console.log(error)
     }
  }
  switch (Method) {
    case "POST":
      postRequest()
      break;
    case "GET":
      try {
        const res2 = await fetch(BASE_URL + url, {
          method: Method,
          headers: { "Content-Type": "application/json" },
        });
        return res2.json();
      } catch (error) { 
          console.log(error)
      }
      break;
  }
};
