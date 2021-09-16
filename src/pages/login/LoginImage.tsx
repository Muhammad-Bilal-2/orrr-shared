import * as React from "react";
import styles from "./Login.module.scss";

interface ILoginImageProps {
  header: string;
  text?: string;
  imgUrl: string;
}

export const LoginImage: React.FC<ILoginImageProps> = (props) => {
  return (
    <>
      <div className={styles.loginInfoSection}>
        <img
          alt="login-image"
          className={styles.loginImage}
          src={props.imgUrl}
        />
        <div className={styles.imageOverlay}>
          <h2 className={styles.loginInfoTitle}>{props.header}</h2>
          {props.text && <p>{props.text}</p>}
          {props.children}
        </div>
      </div>
    </>
  );
};
