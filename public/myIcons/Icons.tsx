import React from "react";

export const IconAddCar = (props: any) => {
  return (
    <img
      src="../car/add-car.png"
      alt="Car Icon"
      {...props}
      style={{ width: "100", height: "100", ...props.style }}
    />
  );
};


export const IconCarWeHave = (props: any) => {
  return (
    <img
      src="../car/car-rental.png"
      alt="Car Icon"
      {...props}
      style={{ width: "50", height: "50", ...props.style }}
    />
  );
};


export const IconCarReserved = (props: any) => {
  return (
    <img
      src="../car/car-reserved.png"
      alt="Car Icon"
      {...props}
      style={{ width: "50", height: "50", ...props.style }}
    />
  );
};


export const IconWeCar = (props:any) => {
  return(
    <img
    src="../car/car-weHave.png"
    alt="car icon"
    {...props}
    style={{width: "1rm" , height: "1rm" , ...props.style}}
    ></img>
  )
}


export const IconRouteCar =  (props:any) => {
  return(
    <img
    src="../car/route-car.png"
    alt="car icon"
    {...props}
    style={{width: "1rm" , height: "1rm" , ...props.style  }}
    >
    </img>
  )
}



export const IconFixCar =  (props:any) => {
  return(
    <img
    src="../car/car-fix.png"
    alt="car icon"
    {...props}
    style={{width: "1rm" , height: "1rm" , ...props.style  }}
    >
    </img>
  )
}
