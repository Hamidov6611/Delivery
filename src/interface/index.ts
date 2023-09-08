interface ChildProps {
    children: React.ReactNode;
  }

export interface way {
  id: number,
  name: string,
  load: string,
  typeLoad: string,
  get: string,
  send: string
}

export interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}
// {
//   "location": {
//       "name": [
//           39.766937849917255,
//           64.47543882369985
//       ],
//       "name2": [
//           41.3566355772971,
//           60.85663918788917
//       ]
//   },
//   "city": {
//       "name": "Buxoro",
//       "name2": "Xorazm"
//   },
//   "is_data": false,
//   "acceptance_date": "2023-09-06",
//   "delivery_date": "2023-09-06",
//   "product": {
//       "name": "Ss"
//   },
//   "id_service": "97f99346-2131-41df-9604-c89539ec5526",
//   "id_cargo": "356432f8-7434-4c0a-bdf9-7d945d084fca"
// }

export interface Step2SendProps {
  location: {
    name: number[],
    name2: number[]
  },
  city: {
    name: string,
    name2: string
  },
  is_data: boolean,
  acceptance_date: string,
  delivery_date: string,
  product: {
    name:string
  },
  id_service: string,
  id_cargo: string
}


export interface cardProps {
  id: number,
  name: string,
  content: string,
  img: string,
  translations: {
    ru: {
      content: string,
      name: string
    },
    en: {
      content: string,
      name: string
    },
  }
}
// {name: "", count: Number, length: "", width: "", height: "", weight: ""}
export interface ProductType {
  name: string,
  count: number,
  length: string,
  width: string,
  height: string,
  weight: string
}










// const calculateDistance = () => {
//   if(view) {
//     // 2 ta shahar uchun kordinatalar
//   let lat1 = st && parseFloat(String(st[0]).split('.')[0]);
//   let lon1 = st && parseFloat(String(st[1]).split('.')[1]);
//   let lat2 = st2 &&  parseFloat(String(st2[0]).split('.')[0]);
//   let lon2 = st2 && parseFloat(String(st2[1]).split('.')[1]);
// console.log(lat1)
//   // Haversine formulasi orqali masofani hisoblash
//   let R = 6371; // Yer radiusi (km)
//   let dLat = (lat2 - lat1) * (Math.PI / 180);
//   let dLon = (lon2 - lon1) * (Math.PI / 180);
//   let a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1 * (Math.PI / 180)) *
//       Math.cos(lat2 * (Math.PI / 180)) *
//       Math.sin(dLon / 2) *
//       Math.sin(dLon / 2);
//       let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//       let result: string | number = R * c;

//   setDistance(result.toFixed(2)); // Masofani km da hisoblash va 2 desimal songacha qat'iy qilib olish
//   }
// };

// function calculateDistance2(lat1: number, lon1: number, lat2: number, lon2: number) {
//   var R = 6371; // Radius of the earth in km
//   var dLat = deg2rad(lat2-lat1);  // deg2rad below
//   var dLon = deg2rad(lon2-lon1); 
//   var a = 
//     Math.sin(dLat/2) * Math.sin(dLat/2) +
//     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
//     Math.sin(dLon/2) * Math.sin(dLon/2)
//     ; 
//   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
//   var d = R * c; // Distance in km
//   console.log(d)

//   return d;
// }
// lat1 = st[0], lon1 = st[1], lat2 = st2[0], lon2 = st2[1]

// function deg2rad(deg: number) {
//   console.log(typeof deg)
//   return deg * (Math.PI/180)
// }





// const postData = async () => {
//   try {

//     const postData = {
//       location: {
//         name: st, name2: st2
//       },
//       city: {
//         name: startCity,
//         name2: endCity
//       },
//       is_data: checked,
//       acceptance_date: sendDate,
//       delivery_date: getData,
//       product: {
//         name: ""
//       }
//     }

//     const data = await axios.post(`${BASE_URL}/b_api/sayts/delivery_list_views/`)
//   } catch (error) {
//     console.log(error)
//   }
// }