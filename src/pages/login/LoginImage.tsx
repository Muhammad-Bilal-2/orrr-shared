import * as React from "react";

interface ILoginImageProps {
  header: string;
  text: string;
  imgUrl: string;
}

export const LoginImage: React.FC<ILoginImageProps> = (props) => {
  return (
    <>
      <div className="login-info-section h-100 mb-0">
        <img alt="login-image" className="login-image" src={props.imgUrl} />
        <div className="d-flex flex-column justify-content-center px-4 px-md-7 image-overlay">
          <h2 className="login-heading">{props.header}</h2>
          {props.text && <p>{props.text}</p>}
          {props.children}
        </div>
      </div>
    </>
  );
};
