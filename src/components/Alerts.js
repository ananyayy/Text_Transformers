import React from "react";
import { useState } from "react";

export default function Alert(props){
    return(
        <>
         <div className= {`alert alert-${props.alert.type} alert-dismissible fade show `}role="alert">
  <strong>{props.alert.msg}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
        </>
    )
}