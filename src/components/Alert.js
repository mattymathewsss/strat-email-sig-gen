import React from "react";
import { BsFillExclamationTriangleFill, BsCheckCircle } from "react-icons/bs";

function Alert({ status, visible }) {
  return (
    <>
      {visible === true ? (
        <div
          className={["alert", status === "clear" ? "clear" : status === "success" ? "success" : "empty"].join(
            " "
          )}
        >
          {status === "clear" ? (
            <>
              Fields has been reset 
            </>
          ) : status === "success" ? (
            <>
              Copied to Clipboard! <BsCheckCircle />
            </>
          ) : status === "empty" ? (
            <>
              Please fill all fields! <BsFillExclamationTriangleFill />
            </>
          )
          : null}
        </div>
      ) : null}
    </>
  );
}

export default Alert;
